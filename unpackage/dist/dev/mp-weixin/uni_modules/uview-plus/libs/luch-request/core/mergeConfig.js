"use strict";const e=require("../utils.js"),t=(t,a,s)=>{const r={};return t.forEach((t=>{e.isUndefined(s[t])?e.isUndefined(a[t])||(r[t]=a[t]):r[t]=s[t]})),r};exports.mergeConfig=(a,s={})=>{const r=s.method||a.method||"GET";let d={baseURL:a.baseURL||"",method:r,url:s.url||"",params:s.params||{},custom:{...a.custom||{},...s.custom||{}},header:e.deepMerge(a.header||{},s.header||{})};if(d={...d,...t(["getTask","validateStatus"],a,s)},"DOWNLOAD"===r);else if("UPLOAD"===r){delete d.header["content-type"],delete d.header["Content-Type"];["filePath","name","formData"].forEach((t=>{e.isUndefined(s[t])||(d[t]=s[t])}))}else{const e=["data","timeout","dataType","responseType"];d={...d,...t(e,a,s)}}return d};