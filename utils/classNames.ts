import _clsx, { ClassValue } from 'clsx'


export function classNames(cssModule: {[key: string]: string}, ...values: Array<string | Object>): string {
    let classes = [];
    for (let value of values) {
      if (typeof value === 'object' && value) {
        let mapped = {};
        for (let key in value) {
          if (cssModule[key]) {
            mapped[cssModule[key]] = value[key];
          } else {
            mapped[key] = value[key];
          }
        }
        classes.push(mapped);
      } else if (typeof value === 'string') {
            if (cssModule[value]) {
                classes.push(cssModule[value]);
            } else {
                classes.push(value);
            }
      } else {
            classes.push(value);
      }
    }
  
    return _clsx(...classes);
  }

// export function classNames(cssModule: {[key: string]: string}, ...values: (string | { [key: string]: ClassValue })[]): string {
//     let classes: ClassValue[] = [];
//     for (let value of values) {
//         if (typeof value === 'object' && value) {
//             let mapped: { [key: string] : ClassValue } = {};

//             for (let key in value) {
//                 let cv: ClassValue = value[key]

//                 if (cssModule[key]) {
//                     mapped[cssModule[key]] = cv
//                 } else {
//                     mapped[key] = cv
//                 }
//             }    
//             classes.push(mapped);
//         } else if (typeof value === 'string') {        
//             classes.push(cssModule[value] ? cssModule[value] : value);
//         } else {
//             classes.push(value);
//         }
//     }
//     return _clsx(...classes);
// }