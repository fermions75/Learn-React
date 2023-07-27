/// named import
// import {pi, a} from './ext.js'  

// returns as an object
// import * as exps from './ext.js'
// console.log(exps);


// default export and import
import external,  {pi, myFunc} from './ext.js'
console.log(external, pi);
myFunc();
