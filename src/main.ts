// import Vuex from 'vuex'
import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
 

// // 类型注解和类型检查
// let name = "test"; // 类型推论
// let title: string = "jjp"; // 类型注解 name = 2;// 错误
// title = '4';
// console.log(name);
// console.log(title);
// // title = 4;// 错误
// //数组使⽤用类型
// let names: string[];
// let ids: number[];
// names = ['Tom'];//或Array<string> let foo:any = 'xx'
// ids = [12, 23, 45];
// console.log(names);
// console.log(ids);
// let foo: any = 'xx';
// foo = 3;
// console.log(foo);
// // any类型也可⽤用于数组
// let list: any[] = [1, true, "free"];
// list[1] = 100;
// console.log(list);
// // 函数中使⽤用类型注解
// function greeting(person: string): string {
//   return 'Hello, ' + person;
// }
// console.log(greeting('jjp'));
// //void类型，常⽤用于没有返回值的函数
// function warnUser(): void {
//   alert("This is my warning message");
// }
// // warnUser();

// // 函数
// // 此处name和age是必填参数
// // 如果要变为可选参数，加上?
// // 可选参数在必选参数后⾯面
// function sayHello(name: string, age: number = 20, addr?: string): string {
//   return '你好:' + name + ' ' + age;
// }
// console.log(sayHello('jjp'));
// // 重载
// // 参数数量量或者类型或者返回类型不不同 函数名却相同
// // 先声明，在实现
// function info(a: { name: string }): string;
// function info(a: string): object;
// function info(a: { name: string } | string): any {
//   if (typeof a === "object") {
//     return a.name;
//   } else {
//     return { name: a };
// } }
// console.log(info({ name: "tom" }));
// console.log(info("tom"));

// // 类
// class MyComp {
//   private _foo: string; // 私有属性，不不能在类的外部访问
//   protected bar: string;// 保护属性，还可以在派⽣生类中访问
//   readonly mua = 'mua'; // 只读属性必须在声明时或构造函数⾥里里初始化
//   // 构造函数:初始化成员变量量
//   // 参数加上修饰符，能够定义并初始化⼀一个成员属性
//   constructor (private tua = 'tua') {
//     this._foo = 'foo';
//     this.bar = 'bar';
//   }
//   // ⽅方法也有修饰符
//   private someMethod() {}
//   // 存取器器:存取数据时可添加额外逻辑;在vue⾥里里⾯面可以⽤用作计算属性
//   get foo() {
//     return this._foo
//   }
//   set foo(val) {
//     this._foo = val
//   }
// }

// // class是语法糖，它指向的就是构造函数。
// class Person{ // 类指向构造函数
//   name: any;
//   age: any;
//   constructor(name: any, age: any){ // constructor是默认⽅方法，new实例例时⾃自动调⽤用
//     this.name = name; // 属性会声明在实例例上，因为this指向实例例
//     this.age = age;
//   }
//   say(){ // ⽅方法会声明在原型上
//     return "我的名字叫" + this.name + "今年年" + this.age + "岁了了";
//   }
// }
// console.log(typeof Person); // function
// console.log(Person === Person.prototype.constructor); // true
// console.log(new Person(1, 2)); // true
// // 等效于
// function Person(name,age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.say = function(){
//   return "我的名字叫" + this.name+"今年年"+this.age+"岁了了";
// }

// // interface，仅定义结构，不不需要实现
// interface Person {
//   firstName: string;
//   lastName: string;
//   sayHello(): string; // 要求实现⽅方法
// }
// // 实现接⼝口
// class Greeter implements Person {
//   constructor(public firstName='', public lastName=''){}
//   sayHello(){
//     return 'Hello, ' + this.firstName + ' ' + this.lastName;
//   }
// }
// // ⾯面向接⼝口编程
// function greeting(person: Person) {
//   return person.sayHello();
// }
// // const user = {firstName: 'Jane', lastName: 'User'};
// const user = new Greeter('Jane', 'User'); // 创建对象实例例
// console.log(user);
// console.log(greeting(user));

// 泛型 Generics
// Generics是指在定义函数、接⼝口或类的时候，不不预先指定具体的类型，⽽而在使⽤用的时候再指定类型的⼀一 种特性。
// // 定义泛型接⼝口
// interface Result<T> {
//   ok: 0 | 1;
//   data: T[];
// }
// // 定义泛型函数
// function getData<T>(): Result<T> {
//   const data: any[] = [
//     { id: 1, name: "类型注解", version: "2.0" },
//     { id: 2, name: "编译型语⾔言", version: "1.0" }
//   ];
//   return { ok: 1, data };
// }
// console.log(getData());
// 使⽤用泛型
// this.features = getData<Feature>().data;
   
// 装饰器器
// 装饰器器实际上是⼯工⼚厂函数，传⼊入⼀一个对象，输出处理理后的新对象。

// 装饰器器原理理
// 装饰器器实际上是⼀一个函数，通过定义劫持，能够对类及其⽅方法、属性提供额外的扩展功能。
function log(target: Function) {
  // target是构造函数
  console.log(target === Foo); // true
  target.prototype.log = function() {
    console.log(this.bar);
  }
  // 如果类装饰器器返回⼀一个值，它会使⽤用提供的构造函数来替换类的声明。
}
// ⽅方法装饰器器
function dong(target: any, name: string, descriptor: any) {
  // target是原型或构造函数，name是⽅方法名，descriptor是属性描述符，
  // ⽅方法的定义⽅方式:Object.defineProperty(target, name, descriptor)
  console.log(target[name] === descriptor.value);
  // 这⾥里里通过修改descriptor.value扩展了了bar⽅方法
  const baz = descriptor.value; // 之前的⽅方法
  descriptor.value = function(val: string) {
    console.log('dong~~');
    baz.call(this, val);
  }
  return descriptor;
}
// 属性装饰器器
function mua(target: any, name: any) {
  // target是原型或构造函数，name是属性名
  console.log(target === Foo.prototype);
  target[name] = 'mua~~~'
}

@log
class Foo {
  bar = 'bar'
  @mua ns!:string;
  @dong
  baz(val: string) {
    this.bar = val
  }
}
const foo2 = new Foo();
// @ts-ignore
foo2.log();
console.log(foo2.ns);
foo2.baz('lalala')
 


