(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f7d2177"],{"43bc":function(e,t,a){"use strict";a("f965")},4514:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1),a("el-pagination",{attrs:{background:"","current-page":e.queryInit.pageNo,"page-sizes":[10,20,30,40],"page-size":e.queryInit.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.queryInit.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},l=[],i=a("55ae"),r=Object(i["a"])({methods:{handleClick:function(e){console.log(e)}},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}],queryInit:{pageNo:1,pageSize:10,total:0}}}},"methods",{handleSizeChange:function(e){this.queryInit.pageSize=e},handleCurrentChange:function(e){this.queryInit.pageNo=e}}),o=r,c=(a("43bc"),a("4ac2")),s=Object(c["a"])(o,n,l,!1,null,"5972dbf6",null);t["default"]=s.exports},f965:function(e,t,a){}}]);