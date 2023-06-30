"use strict";async function t(r){if(r.statusCode>=400)throw new Error("请求失败");return r}exports.responseInterceptor=t;
