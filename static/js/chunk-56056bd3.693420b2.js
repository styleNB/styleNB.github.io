(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56056bd3"],{"1dfe":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"h",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n("b775");function o(e){return Object(r["a"])({url:"/system/dept/list",method:"get",params:e})}function a(e){return Object(r["a"])({url:"/system/dept/list/exclude/"+e,method:"get"})}function l(e){return Object(r["a"])({url:"/system/dept/"+e,method:"get"})}function i(){return Object(r["a"])({url:"/system/dept/treeselect",method:"get"})}function s(e){return Object(r["a"])({url:"/system/dept/roleDeptTreeselect/"+e,method:"get"})}function d(e){return Object(r["a"])({url:"/system/dept/add",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/system/dept",method:"put",data:e})}function p(e){return Object(r["a"])({url:"/system/dept/"+e,method:"delete"})}},f097:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.deptList,"row-key":"deptId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"deptName",label:"部门名称",width:"260"}}),n("el-table-column",{attrs:{prop:"orderNum",label:"排序",width:"200"}}),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"}},[e._v("修改")]),n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新增")]),0!=t.row.parentId?n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"}},[e._v("删除")]):e._e()]}}])})],1),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[n("el-row",[0!==e.form.parentId?n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"上级部门",prop:"parentId"}},[n("treeselect",{attrs:{options:e.deptOptions,normalizer:e.normalizer,placeholder:"选择上级部门"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1):e._e(),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"部门名称",prop:"deptName"}},[n("el-input",{attrs:{placeholder:"请输入部门名称"},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"显示排序",prop:"orderNum"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"负责人",prop:"leader"}},[n("el-input",{attrs:{placeholder:"请输入负责人",maxlength:"20"},model:{value:e.form.leader,callback:function(t){e.$set(e.form,"leader",t)},expression:"form.leader"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[n("el-input",{attrs:{placeholder:"请输入联系电话",maxlength:"11"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],a=n("1dfe"),l=n("7d66"),i=n.n(l),s=(n("5166"),{name:"Dept",components:{Treeselect:i.a},data:function(){return{loading:!0,showSearch:!0,deptList:[],deptOptions:[],title:"",open:!1,statusOptions:[],form:{},rules:{parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"显示排序不能为空",trigger:"blur"}],email:[{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(a["d"])().then((function(t){e.deptList=e.handleTree(t.data,"deptId"),e.loading=!1}))},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.deptId,label:e.deptName,children:e.children}},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={deptId:void 0,parentId:void 0,deptName:void 0,orderNum:void 0,leader:void 0,phone:void 0,email:void 0,status:"0"},this.resetForm("form")},handleAdd:function(e){var t=this;this.reset(),void 0!==e&&(this.form.parentId=e.deptId),this.open=!0,this.title="添加部门",Object(a["d"])().then((function(e){t.deptOptions=t.handleTree(e.data,"deptId")}))},handleUpdate:function(e){var t=this;this.reset(),Object(a["c"])(e.deptId).then((function(e){t.form=e.data,t.open=!0,t.title="修改部门"})),Object(a["e"])(e.deptId).then((function(e){t.deptOptions=t.handleTree(e.data,"deptId")}))},submitForm:function(){var e=this;this.$refs.form.validate((function(t){t&&(void 0!==e.form.deptId?Object(a["h"])(e.form).then((function(t){e.$message.success("修改成功"),e.open=!1,e.getList()})):Object(a["a"])(e.form).then((function(t){e.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.deptName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(a["b"])(e.deptId)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}}),d=s,c=n("4ac2"),p=Object(c["a"])(d,r,o,!1,null,null,null);t["default"]=p.exports}}]);