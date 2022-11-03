import * as chai from "chai";

const assert = chai.assert;
import Promise from "../src/index";

describe("Promise", () => {
  it("可以测试相等", () => {
    // @ts-ignore
    assert(1 === 1);
  });
  it("它是一个类", () => {
    // @ts-ignore
    assert(typeof Promise === "function");
    // @ts-ignore
    assert(typeof Promise.prototype === "object");
    assert.isFunction(Promise);
    assert.isObject(Promise.prototype);
  });
  it("new Promise会接受一个函数，如果接受的不是一个函数就报错", () => {
    assert.throw(() => {
      // @ts-ignore
      new Promise();
    });
    assert.throw(() => {
      // @ts-ignore
      new Promise(1);
    });
    assert.throw(() => {
      // @ts-ignore
      new Promise(false);
    });
  });
  it("new Promise(fn)会生成一个对象，对象有then方法", () => {
    const promise = new Promise(() => {});
    assert.isFunction(promise.then);
  });
  it("new Promise(fn)中的fn立即执行", () => {
    let called = false;
    const promise = new Promise(() => {
      called = true;
    });
    // @ts-ignore
    assert(called === true)
  });

  it("new Promise(fn)中的fn执行的时候接收resolve和reject2个函数", () => {
    let called = false;
    const promise = new Promise((resolve,reject) => {
      called = true;
      assert.isFunction(resolve)
      assert.isFunction(reject)
    });
    // @ts-ignore
    assert(called === true)
  });

  it("promise.then(success)中的success会在resolve被调用的时候执行", (done) => {
    let called = false;
    const promise = new Promise((resolve,reject) => {
      // @ts-ignore
      assert(called === false)
      resolve()
      setTimeout(() =>{
        // @ts-ignore
        assert(called === true)
        done();
      })
    });
    // @ts-ignore
    promise.then(()=>{
      called = true;
    })
  
  });
});
