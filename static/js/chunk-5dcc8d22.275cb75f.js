(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dcc8d22"],{"186a6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),a("el-dialog",{attrs:{visible:e.addDialog,"close-on-click-modal":!1,title:"新增设备模板",width:"500px"},on:{"update:visible":function(t){e.addDialog=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:"模板名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入模板名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._l(e.form.domains,(function(t,n){return a("el-form-item",{key:t.key,attrs:{placeholder:"请输入配置名",label:"配置名"+n,prop:"domains."+n+".value",rules:{required:!0,message:"配置名不能为空",trigger:"blur"}}},[a("el-input",{staticStyle:{width:"220px",margin:"5px"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"domain.value"}}),a("el-button",{on:{click:function(a){return a.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)})),a("el-form-item",[a("el-button",{on:{click:e.addDomain}},[e._v("新增配置名")])],1)],2),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.addDialog=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirmRole}},[e._v("确定")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.deviceConfTemplateList,"max-height":"500"}},[a("el-table-column",{attrs:{prop:"name",label:"模板名称"}}),a("el-table-column",{attrs:{prop:"templateDetail",label:"配置详细信息"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._templateDetailFormat(t.row.templateDetail)))])]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.tableData)}}},[e._v(" 移除 ")])]}}])})],1),a("el-pagination",{attrs:{background:"","current-page":e.queryInit.pageNo,"page-sizes":[10,20,30,40],"page-size":e.queryInit.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.queryInit.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},i=[],r=a("99a5"),o=(a("23db"),a("6afd"),a("2621"),a("6a61"),a("8133")),l={data:function(){return{deviceConfTemplateList:[],addDialog:!1,form:{domains:[{value:""}]},rules:{name:[{required:!0,message:"请输入模板名称",trigger:"blur"}]},queryInit:{pageNo:1,pageSize:10,total:0}}},created:function(){this.listDeviceConfTemplate()},methods:{handleSizeChange:function(e){this.queryInit.pageSize=e},handleCurrentChange:function(e){this.queryInit.pageNo=e},listDeviceConfTemplate:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["b"])();case 2:a=t.sent,e.deviceConfTemplateList=a.rows,e.queryInit=a;case 5:case"end":return t.stop()}}),t)})))()},handleAdd:function(){this.addDialog=!0},deleteRow:function(e,t){console.log(e,t)},confirmRole:function(){var e=this;this.$refs.form.validate(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=9;break}return e._templateDetail(),t.next=4,Object(o["a"])(e.form);case 4:e.$message.success("创建成功"),e.addDialog=!1,e.listDeviceConfTemplate(),t.next=10;break;case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},addDomain:function(){this.form.domains.push({value:"",key:Date.now()})},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.form.domains.splice(t,1)},_templateDetail:function(){var e={};this.form.domains.forEach((function(t,a){e["key".concat(a)]=t.value})),this.form.templateDetail=JSON.stringify(e)},_templateDetailFormat:function(e){var t=[];for(var a in e=JSON.parse(e),e)t.push(e[a]);return t.join(",")}}},s=l,u=(a("2c3f"),a("4ac2")),c=Object(u["a"])(s,n,i,!1,null,"2ebf93d6",null);t["default"]=c.exports},"2c3f":function(e,t,a){"use strict";a("3133")},3133:function(e,t,a){},8133:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var n=a("b775");function i(e){return Object(n["a"])({url:"/system/device-template/list",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/system/device-template/add",method:"post",data:e})}}}]);