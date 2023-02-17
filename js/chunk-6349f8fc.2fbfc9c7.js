(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6349f8fc"],{"35cd":function(e,s,a){"use strict";a.r(s);var t=function(){var e=this,s=e._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"sign__container d-flex flex-column"},[e._m(0),s("h3",{staticClass:"sign__container__title"},[e._v("建立你的帳號")]),s("SignUpForm"),s("div",{staticClass:"sign__container__link d-flex justify-content-center"},[s("router-link",{attrs:{to:"/users/signin"}},[e._v("取消")])],1)],1)])},n=[function(){var e=this,s=e._self._c;return s("div",{staticClass:"sign__container__brand-logo"},[s("img",{attrs:{src:a("e255"),alt:""}})])}],i=function(){var e=this,s=e._self._c;return s("form",{on:{submit:function(s){return s.stopPropagation(),s.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"sign__container__form-row d-flex flex-column"},[s("label",{attrs:{for:"account"}},[e._v("帳號")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],class:{error:!e.account},attrs:{id:"account",placeholder:"請輸入帳號",type:"text",required:""},domProps:{value:e.account},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||(e.account=s.target.value)}}})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.account,expression:"!account"}],staticClass:"sign__container__error"},[e._v("帳號不可為空白")]),s("div",{staticClass:"sign__container__form-row d-flex flex-column"},[s("label",{attrs:{for:"name"}},[e._v("名稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{error:e.name.length>50||!e.name.length},attrs:{id:"name",placeholder:"請輸入名稱",type:"text",required:""},domProps:{value:e.name},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||(e.name=s.target.value)}}})]),s("div",{staticClass:"d-flex"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.name.length,expression:"!name.length"}],staticClass:"sign__container__error"},[e._v("名稱不可為空白")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.name.length>50,expression:"name.length > 50"}],staticClass:"sign__container__error"},[e._v("名稱不可超過 50 字")]),s("span",{staticClass:"sign__container__letter-count"},[e._v(e._s(e.name.length)+"/50")])]),s("div",{staticClass:"sign__container__form-row d-flex flex-column"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],class:{error:!e.email.length||!e.email.includes(".")},attrs:{id:"email",placeholder:"請輸入 Email",type:"email",required:""},domProps:{value:e.email},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||(e.email=s.target.value)}}})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.email.length,expression:"!email.length"}],staticClass:"sign__container__error"},[e._v("Email 不可為空白")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.email.length>0&&!e.email.includes("."),expression:"email.length > 0 && !email.includes('@' && '.')"}],staticClass:"sign__container__error"},[e._v("Email 格式錯誤")]),s("div",{staticClass:"sign__container__form-row d-flex flex-column"},[s("label",{attrs:{for:"password"}},[e._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",placeholder:"請輸入密碼",type:"password",required:""},domProps:{value:e.password},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||(e.password=s.target.value)}}})]),s("div",{staticClass:"sign__container__form-row d-flex flex-column"},[s("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.checkPassword,expression:"checkPassword"}],attrs:{id:"checkPassword",placeholder:"請再次輸入密碼",type:"password",required:""},domProps:{value:e.checkPassword},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||(e.checkPassword=s.target.value)}}})]),s("button",{staticClass:"sign__container__btn",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中":"註冊")+" ")])])},r=[],o=(a("d9e2"),a("14d9"),a("7696")),c=a("2fa3"),l={name:"SignUpForm",data(){return{account:"",name:"",email:"",password:"",checkPassword:"",isProcessing:!1}},methods:{async handleSubmit(){try{if(this.isProcessing=!0,!this.account.trim()||!this.name.trim()||!this.email.trim()||!this.password.trim()||!this.checkPassword.trim())return c["a"].fire({icon:"warning",title:"請填寫所有欄位"}),void(this.isProcessing=!1);if(this.name.length>50)return c["a"].fire({icon:"warning",title:"名稱不可超過 50 字"}),void(this.isProcessing=!1);if(!this.email.includes("@")||!this.email.includes("."))return c["a"].fire({icon:"warning",title:"Email 格式錯誤"}),void(this.isProcessing=!1);if(this.password!==this.checkPassword)return c["a"].fire({icon:"warning",title:"兩次輸入的密碼不同"}),this.isProcessing=!1,void(this.checkPassword="");localStorage.setItem("account",this.account);const{data:e}=await o["a"].signUp({account:this.account,name:this.name,email:this.email,password:this.password,checkPassword:this.checkPassword});if("error"===e.status)throw new Error(e.message);c["a"].fire({icon:"success",title:"註冊成功"}),this.$router.push("/users/signin")}catch(e){this.isProcessing=!1,console.log(e);const s=e.response.data.message;"Account already exists."===s&&c["a"].fire({icon:"error",title:"Account 已重複註冊！"}),"Email already exists."===s&&c["a"].fire({icon:"error",title:"Email 已重複註冊！"})}}}},u=l,d=a("2877"),m=Object(d["a"])(u,i,r,!1,null,null,null),p=m.exports,_={name:"SignUp",components:{SignUpForm:p}},v=_,f=Object(d["a"])(v,t,n,!1,null,null,null);s["default"]=f.exports},7696:function(e,s,a){"use strict";var t=a("2fa3");s["a"]={userSignIn({account:e,password:s}){return t["b"].post("/users/signin",{account:e,password:s})},adminSignIn({account:e,password:s}){return t["b"].post("/admin/signin",{account:e,password:s})},signUp({account:e,name:s,email:a,password:n,checkPassword:i}){return t["b"].post("/users",{account:e,name:s,email:a,password:n,checkPassword:i})}}}}]);
//# sourceMappingURL=chunk-6349f8fc.2fbfc9c7.js.map