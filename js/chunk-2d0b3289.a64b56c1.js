(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e._self._c;return s("div",[s("div",{staticClass:"settings__container row"},[s("SettingForm")],1)])},a=[],i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"settings__container__form"},[s("h4",{staticClass:"settings__container__form__title"},[e._v("帳戶設定")]),s("form",{on:{submit:function(s){return s.stopPropagation(),s.preventDefault(),e.updateSettings.apply(null,arguments)}}},[s("div",{staticClass:"settings__container__form__form-row d-flex flex-column hover focus"},[s("label",{attrs:{for:"account"}},[e._v("帳號")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.account,expression:"user.account"}],class:{error:!e.user.account},attrs:{id:"account",placeholder:"請輸入帳號",type:"text",required:""},domProps:{value:e.user.account},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||e.$set(e.user,"account",s.target.value)}}})]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.user.account,expression:"!user.account"}],staticClass:"settings__container__form__error"},[e._v(e._s(e.user.account?"":"帳號不可為空白"))]),s("div",{staticClass:"settings__container__form__form-row d-flex flex-column hover focus"},[s("label",{attrs:{for:"name"}},[e._v("名稱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],class:{error:!e.user.name||e.user.name.length>50},attrs:{id:"name",placeholder:"請輸入名稱",type:"text",required:""},domProps:{value:e.user.name},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||e.$set(e.user,"name",s.target.value)}}})]),s("div",{staticClass:"d-flex"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.user.name,expression:"!user.name"}],staticClass:"settings__container__form__error"},[e._v("名稱不可為空白")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.user.name.length>50,expression:"user.name.length > 50"}],staticClass:"settings__container__form__error"},[e._v("名稱不可超過 50 字")]),s("span",{staticClass:"settings__container__form__letter-count"},[e._v(e._s(e.user.name.length)+"/50")])]),s("div",{staticClass:"settings__container__form__form-row d-flex flex-column"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],class:{error:!e.user.email.length||!e.user.email.includes(".")},attrs:{id:"email",placeholder:"請輸入 Email",type:"email",required:""},domProps:{value:e.user.email},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}})]),e.user.email?e._e():s("span",{staticClass:"settings__container__form__error"},[e._v("Email 不可為空白")]),e.user.email.length>0&&!e.user.email.includes(".")?s("span",{staticClass:"settings__container__form__error"},[e._v("Email 格式錯誤")]):e._e(),s("div",{staticClass:"settings__container__form__form-row d-flex flex-column"},[s("label",{attrs:{for:"password"}},[e._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{id:"password",placeholder:"請輸入密碼",type:"password"},domProps:{value:e.user.password},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}})]),s("div",{staticClass:"settings__container__form__form-row d-flex flex-column"},[s("label",{attrs:{for:"checkPassword"}},[e._v("密碼確認")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.checkPassword,expression:"user.checkPassword"}],attrs:{id:"checkPassword",placeholder:"請再次輸入密碼",type:"password"},domProps:{value:e.user.checkPassword},on:{keydown:function(s){if(!s.type.indexOf("key")&&e._k(s.keyCode,"space",32,s.key,[" ","Spacebar"]))return null;s.preventDefault()},input:function(s){s.target.composing||e.$set(e.user,"checkPassword",s.target.value)}}})]),s("button",{staticClass:"settings__container__form__btn",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" "+e._s(e.isProcessing?"處理中...":"儲存")+" ")])])])},n=[],o=(t("d9e2"),t("4cce")),c=t("2f62"),u=t("2fa3"),l={name:"SettingForm",data(){return{user:{id:0,account:"",name:"",email:"",password:"",checkPassword:""},isProcessing:!1}},created(){if(0===this.currentUser.id)return;const{id:e}=this.$route.params;this.setUser(e)},methods:{setUser(){this.user=this.currentUser,this.user.password="",this.user.checkPassword=""},async updateSettings(){try{if(this.isProcessing=!0,!this.user.account.trim()||!this.user.name.trim()||!this.user.email.trim())return u["a"].fire({icon:"warning",title:"帳號、名稱、Email 不可為空白"}),void(this.isProcessing=!1);if(this.user.name.length>50)return u["a"].fire({icon:"warning",title:"名稱不可超過 50 字"}),void(this.isProcessing=!1);if(!this.user.email.includes("@")||!this.user.email.includes("."))return u["a"].fire({icon:"warning",title:"Email 格式錯誤"}),void(this.isProcessing=!1);if(this.user.password!==this.user.checkPassword)return u["a"].fire({icon:"warning",title:"兩次輸入密碼不同"}),void(this.isProcessing=!1);const{data:e}=await o["a"].setProfile({userId:this.user.id,account:this.user.account,name:this.user.name,email:this.user.email,password:this.user.password,checkPassword:this.user.checkPassword});if(this.user.password="",this.user.checkPassword="","error"===e.status)throw new Error(e.message);u["a"].fire({icon:"success",title:"儲存成功"}),this.isProcessing=!1}catch(e){this.isProcessing=!1,console.log(e);const s=e.response.data.message;"Account already exists."===s?u["a"].fire({icon:"error",title:"Account 已重複註冊！"}):"Email already exists."===s?u["a"].fire({icon:"error",title:"Email 已重複註冊！"}):u["a"].fire({icon:"error",title:"無法更改帳號設定，請稍後再試"})}}},computed:{...Object(c["b"])(["currentUser"])}},d=l,m=t("2877"),_=Object(m["a"])(d,i,n,!1,null,null,null),p=_.exports,f={name:"Settings",components:{SettingForm:p},beforeRouteUpdate(e,s,t){this.currentUser.id!==e.id&&t("/home")},computed:{...Object(c["b"])(["currentUser"])}},h=f,v=Object(m["a"])(h,r,a,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0b3289.a64b56c1.js.map