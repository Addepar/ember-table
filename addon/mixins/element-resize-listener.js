// Notes
// __resizeListeners__ Holds the resize listeners registered to the element
// __resizeTrigger__ Holds a reference the element which triggered the resize event to persist it between objectLoad and resizeListener
// __resizeRAF__ Holds reference to the animation frame callback used to limit the numebr of times the resize listeners are called

var isIE = navigator.userAgent.match(/Trident/);

// Partial polyfill of requestAnimationFrame
var requestAnimationFrameFallback = function(fn) {
  return window.setTimeout(fn, 20);
};

var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || requestAnimationFrameFallback;
var cancelAnimFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                          window.webkitCancelAnimationFrame || window.clearTimeout;

function resizeListener(e) {
  var win = e.target || e.srcElement;

  // Cancel the animation frame callback if it already exists
  if (win.__resizeRAF__) {
    cancelAnimFrame(win.__resizeRAF__);
  }

  // Setup the animation frame callback
  win.__resizeRAF__ = requestAnimFrame(function() {
    var trigger = win.__resizeTrigger__;
    trigger.__resizeListeners__.forEach(function(fn) {
      fn.call(trigger, e);
    });
  });
}

function objectLoad(/*e*/) {
  var defaultView = this.contentDocument.defaultView;
  defaultView.__resizeTrigger__ = this.__resizeElement__;
  defaultView.addEventListener('resize', resizeListener);
}


function setup(el) {
  // initialize listener array
  el.__resizeListeners__ = [];

  // For IE5-8
  if (document.attachEvent) {
    el.__resizeTrigger__ = el;
    el.attachEvent('onresize', resizeListener);

  // All other browsers
  } else {
    // Force relative positioning of the element
    if (getComputedStyle(el).position === 'static') {
      el.style.position = 'relative';
    }
    // Create the hidden element and insert it into the dom
    var obj = el.__resizeTrigger__ = document.createElement('object');
    obj.setAttribute('style',
                     'display: block; position: absolute; top: 0; left: 0; height: 100%; ' +
                     'width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
    obj.__resizeElement__ = el;
    obj.onload = objectLoad;
    obj.type = 'text/html';
    if (isIE) {
      el.appendChild(obj);
    }
    obj.data = 'about:blank';
    if (!isIE) {
      el.appendChild(obj);
    }
  }
}

function teardown(el) {
  // For IE5-8
  if (document.attachEvent) {
    el.detachEvent('onresize', resizeListener);
  // All other browsers
  } else {
    el.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
    el.__resizeTrigger__ = !el.removeChild(el.__resizeTrigger__);
  }
}

function registerListener(el, fn) {
  el.__resizeListeners__.push(fn);
}

function unregisterListener(el, fn) {
  var fnIdx = el.__resizeListeners__.indexOf(fn);
  el.__resizeListeners__.splice(fnIdx, 1);
}


function addElementResizeListener(el, fn) {
  if (!el.__resizeListeners__) {
    setup(el);
  }
  registerListener(el, fn);
}

function removeElementResizeListener(el, fn) {
  unregisterListener(el, fn);
  if (el.__resizeListeners__.length) {
    teardown(el);
  }
}

export { addElementResizeListener, removeElementResizeListener };
