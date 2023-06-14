const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
function receivesAFunction(callback){
  callback();
}
function returnsANamedFunction() {
  let fn;
  return function namedFunction() {
    fn = 'name'
  }
}
function returnsAnAnonymousFunction(){
  var fn;
  return (function(){fn = 'function'})
}