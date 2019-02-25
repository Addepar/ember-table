// import { computed } from '@ember/object';
import { gte, SUPPORTS_NEW_COMPUTED } from 'ember-compatibility-helpers';
import { decoratorWithParams } from '@ember-decorators/utils/decorator';
import { computed as emberComputed } from '@ember/object';

const VALUES = new WeakMap();

let valueMap = new WeakMap();

function valuesFor(obj) {
  if (!valueMap.has(obj)) {
    valueMap.set(obj, Object.create(null));
  }

  return valueMap.get(obj);
}

export const defaultTo = decoratorWithParams((desc, options = [{}]) => {
//   // let [options] = defaultTo;
//   // return desc;
//   console.log(desc);

//   let { key, kind } = desc;
//   let originialInitializer = desc.initializer;

// //   if (originialInitializer === null || originialInitializer === undefined) {
// //     originialInitializer = undefined;
// //     return;
// //   }

//   let get = function() {
// 	  debugger;
//     let values = valuesFor(this);

//     if (!Object.hasOwnProperty.call(values, key)) {
//       values[key] = originialInitializer.call(this);
//     }

//     return values[key];
//   };

//   if (options[0].defaultIfNullish === true || options[0].defaultIfUndefined === true) {
//     let defaultIf;

//     if (options[0].defaultIfNullish === true) {
//       defaultIf = v => v === undefined || v === null;
//     } else {
//       defaultIf = v => v === undefined;
//     }

//     if (gte('3.1.0')) {
// 		console.log('3.1.0');
//       return {
// 		...desc,
//         get,
//         set(value) {
// 			debugger;
//           if (defaultIf(value)) {
//             valuesFor(this)[key] = initializer.call(this);
//           } else {
//             valuesFor(this)[key] = value;
//           }
//         }
//       };
//     }

//     let descriptor = emberComputed({
//       get,
//       set(keyName, value) {
//         if (defaultIf(value)) {
//           return (valuesFor(this)[key] = originialInitializer.call(this));
//         } else {
//           return (valuesFor(this)[key] = value);
//         }
//       },
//     });

//     // Decorators spec doesn't allow us to make a computed directly on
//     // the prototype, so we need to wrap the descriptor in a getter
//     return {
// 	  ...desc,
//       get() {
//         return descriptor;
//       },
//     };
//   } else {
//     return {
// 	  ...desc,
//       get,
//       set(value) {
//         valuesFor(this)[key] = value;
//       },
//     };
//   }
return desc;
}, 'defaultTo');
