"use strict";const t=require("../../utils/request.js");exports.fetchTodos=async function(){return(await t.request({url:"/facts/random",method:"GET"})).data};
