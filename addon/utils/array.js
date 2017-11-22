/**
 * Cycle shift an internal [start..end] to [start + 1...end, start].
 */
export function move(context, arrayName, start, end) {
  let items = context.get(arrayName);
  let destItem, sourceItem;
  let direction = start < end ? 1 : 0;

  if (items.objectAt && items.removeObject && items.insertAt) {
    // Ember Array
    sourceItem = items.objectAt(start);
    destItem = items.objectAt(end);
    items.removeObject(sourceItem);
    end = items.indexOf(destItem) + direction;
    items.insertAt(end, sourceItem);
  } else {
    // native array
    destItem = items[end];
    sourceItem = items[start];
    items.splice(start, 1);
    end = items.indexOf(destItem) + direction;
    items.splice(end, 0, sourceItem);
    // if we are not using Ember Arrays we need to set `items` to a new array
    // instance to trigger new change
    context.set(arrayName, [].concat(items));
  }
}
