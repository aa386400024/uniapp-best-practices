"use strict";const t=require("../../common/vendor.js").defineStore("counter",{state:()=>({count:0}),getters:{doubleCount(){return 2*this.count}},actions:{increment(){this.count++}}});exports.useCounterStore=t;
