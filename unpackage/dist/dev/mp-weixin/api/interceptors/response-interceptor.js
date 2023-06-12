"use strict";exports.responseInterceptor=async function(r){if(r.statusCode>=400)throw new Error("请求失败");return r};
