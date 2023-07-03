"use strict";const t=require("../../utils/api/request.js");exports.fetchTodos=async function(){return(await t.request({url:"/facts/random",method:"GET"})).data};
