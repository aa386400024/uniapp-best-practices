"use strict";const t=require("../../utils/request.js");async function e(){const s={url:"/facts/random",method:"GET"};return(await t.request(s)).data}exports.fetchTodos=e;
