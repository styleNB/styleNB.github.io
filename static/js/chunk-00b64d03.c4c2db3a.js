(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b64d03"],{"0461":function(e,t,s){},2017:function(e,t,s){"use strict";s("34fd")},"2fba":function(e,t,s){"use strict";s("0461")},"34fd":function(e,t,s){},"9ed6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("登录")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登录")]),s("div",{staticStyle:{position:"relative"}},[s("div",{staticClass:"tips"},[s("span",[e._v("Username : admin")]),s("span",[e._v("Password : any")])]),s("div",{staticClass:"tips"},[s("span",{staticStyle:{"margin-right":"18px"}},[e._v("Username : editor")]),s("span",[e._v("Password : any")])])])],1)],1)},o=[],r=(s("69ea"),s("61f7")),a={name:"Login",data:function(){var e=function(e,t,s){Object(r["b"])(t)?s():s(new Error("Please enter the correct user name"))},t=function(e,t,s){t.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"admin",password:"111111"},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},passwordType:"password",capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(e){var t=e.key;this.capsTooltip=t&&1===t.length&&t>="A"&&t<="Z"},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}).catch((function(){})),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,s){return"redirect"!==s&&(t[s]=e[s]),t}),{})}}},i=a,c=(s("2017"),s("2fba"),s("4ac2")),l=Object(c["a"])(i,n,o,!1,null,"b5710a34",null);t["default"]=l.exports}}]);