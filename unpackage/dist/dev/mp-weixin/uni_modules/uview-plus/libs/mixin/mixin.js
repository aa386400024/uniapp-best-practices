"use strict";const s=require("../../../../common/vendor.js"),p={props:{customStyle:{type:[Object,String],default:()=>({})},customClass:{type:String,default:""},url:{type:String,default:""},linkType:{type:String,default:"navigateTo"}},data(){return{}},onLoad(){this.$u.getRect=this.$uGetRect},created(){this.$u.getRect=this.$uGetRect},computed:{$u(){return s.index.$u.deepMerge(s.index.$u,{props:void 0,http:void 0,mixin:void 0})},bem(){return function(t,e,n){const i=`u-${t}--`,a={};return e&&e.map(r=>{a[i+this[r]]=!0}),n&&n.map(r=>{this[r]?a[i+r]=this[r]:delete a[i+r]}),Object.keys(a)}}},methods:{openPage(t="url"){const e=this[t];e&&this.$u.route({type:this.linkType,url:e})},$uGetRect(t,e){return new Promise(n=>{s.index.createSelectorQuery().in(this)[e?"selectAll":"select"](t).boundingClientRect(i=>{e&&Array.isArray(i)&&i.length&&n(i),!e&&i&&n(i)}).exec()})},getParentData(t=""){this.parent||(this.parent={}),this.parent=s.index.$u.$parent.call(this,t),this.parent.children&&this.parent.children.indexOf(this)===-1&&this.parent.children.push(this),this.parent&&this.parentData&&Object.keys(this.parentData).map(e=>{this.parentData[e]=this.parent[e]})},preventEvent(t){t&&typeof t.stopPropagation=="function"&&t.stopPropagation()},noop(t){this.preventEvent(t)}},onReachBottom(){s.index.$emit("uOnReachBottom")},beforeDestroy(){if(this.parent&&s.index.$u.test.array(this.parent.children)){const t=this.parent.children;t.map((e,n)=>{e===this&&t.splice(n,1)})}}};exports.mixin=p;
