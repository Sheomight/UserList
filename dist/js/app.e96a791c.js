(function(){"use strict";var e={7314:function(e,t,s){var l=s(9242),n=s(3396);const a={class:"control container"},r={class:"container"};function d(e,t,s,l,d,i){const o=(0,n.up)("custom-button"),u=(0,n.up)("UserForm"),m=(0,n.up)("modal-win"),c=(0,n.up)("UserList");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",a,[(0,n.Wm)(o,{class:"control__btn",onClick:i.showModal},{default:(0,n.w5)((()=>[(0,n.Uk)("Add new user")])),_:1},8,["onClick"])]),(0,n._)("div",r,[(0,n.Wm)(m,{show:d.modalVisible,"onUpdate:show":t[0]||(t[0]=e=>d.modalVisible=e)},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{onCreate:i.createUser,id:d.users.length+1},null,8,["onCreate","id"])])),_:1},8,["show"]),(0,n.Wm)(c,{userList:d.users,onEdit:i.editUser,onDelete:i.deleteUser},null,8,["userList","onEdit","onDelete"])])],64)}s(560),s(3429),s(5564);const i=(0,n._)("h2",{class:"modal__title"},"Add user info",-1),o={class:"modal__fields"},u={class:"modal__group"},m=(0,n._)("legend",null,"Work experience",-1),c={class:"modal__group"},p=(0,n._)("legend",null,"Address",-1);function h(e,t,s,a,r,d){const h=(0,n.up)("custom-input"),_=(0,n.up)("custom-button");return(0,n.wg)(),(0,n.iD)("form",{class:"modal__content",onClick:t[8]||(t[8]=(0,l.iM)((()=>{}),["stop"])),onSubmit:t[9]||(t[9]=(0,l.iM)((()=>{}),["prevent"]))},[i,(0,n._)("div",o,[(0,n.Wm)(h,{class:"modal__input",placeholder:"Name",modelValue:r.name,"onUpdate:modelValue":t[0]||(t[0]=e=>r.name=e)},null,8,["modelValue"]),(0,n.Wm)(h,{class:"modal__input",placeholder:"Last name",modelValue:r.lastName,"onUpdate:modelValue":t[1]||(t[1]=e=>r.lastName=e)},null,8,["modelValue"]),(0,n._)("fieldset",u,[m,(0,n.Wm)(h,{class:"modal__input",placeholder:"Years",modelValue:r.experience.years,"onUpdate:modelValue":t[2]||(t[2]=e=>r.experience.years=e),type:"number"},null,8,["modelValue"]),(0,n.Wm)(h,{class:"modal__input",placeholder:"Month",modelValue:r.experience.month,"onUpdate:modelValue":t[3]||(t[3]=e=>r.experience.month=e),type:"number"},null,8,["modelValue"])]),(0,n.Wm)(h,{class:"modal__input",placeholder:"Age",modelValue:r.age,"onUpdate:modelValue":t[4]||(t[4]=e=>r.age=e),type:"number"},null,8,["modelValue"]),(0,n._)("fieldset",c,[p,(0,n.Wm)(h,{class:"modal__input",placeholder:"City",modelValue:r.address.city,"onUpdate:modelValue":t[5]||(t[5]=e=>r.address.city=e)},null,8,["modelValue"]),(0,n.Wm)(h,{class:"modal__input",placeholder:"Street",modelValue:r.address.street,"onUpdate:modelValue":t[6]||(t[6]=e=>r.address.street=e)},null,8,["modelValue"]),(0,n.Wm)(h,{class:"modal__input",placeholder:"Apartment",modelValue:r.address.apartment,"onUpdate:modelValue":t[7]||(t[7]=e=>r.address.apartment=e)},null,8,["modelValue"])])]),(0,n.Wm)(_,{class:"modal__btn",onClick:d.createUser},{default:(0,n.w5)((()=>[(0,n.Uk)("Add user")])),_:1},8,["onClick"])],32)}var _={data(){return{name:"",lastName:"",experience:{years:"",month:""},age:"",address:{city:"",street:"",apartment:""}}},props:{id:{type:Number,required:!0}},emits:["create"],methods:{createUser(){let e={id:this.id,name:this.name,lastName:this.lastName,experience:{years:+this.experience.years,month:+this.experience.month},age:this.age,address:{city:this.address.city,street:this.address.street,apartment:this.address.apartment}};this.$emit("create",e),this.name="",this.lastName="",this.experience.years="",this.experience.month="",this.age="",this.address.city="",this.address.street="",this.address.apartment=""}}},f=s(89);const U=(0,f.Z)(_,[["render",h]]);var g=U;const y={class:"userlist"},V=(0,n._)("thead",{class:"userlist__header"},[(0,n._)("tr",null,[(0,n._)("td",null,"Name"),(0,n._)("td",null,"Last name"),(0,n._)("td",null,"Work experience"),(0,n._)("td",null,"Age"),(0,n._)("td",null,"Address"),(0,n._)("td",null,"Action")])],-1);function b(e,t,s,l,a,r){const d=(0,n.up)("UserItem");return(0,n.wg)(),(0,n.iD)("table",y,[V,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.userList,(e=>((0,n.wg)(),(0,n.j4)(d,{key:e.id,user:e,onEdit:r.editUser,onDelete:r.deleteUser},null,8,["user","onEdit","onDelete"])))),128))])])}var v=s(7139);const w={key:0},k={key:0},x={key:1},W={class:"userlist__action"},C={key:1},E={class:"userlist__action"};function N(e,t,s,l,a,r){const d=(0,n.up)("custom-button"),i=(0,n.up)("custom-input");return a.isEditing?((0,n.wg)(),(0,n.iD)("tr",C,[(0,n._)("td",null,[(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.editedUser.name=e)},null,8,["modelValue"])]),(0,n._)("td",null,[(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.lastName,"onUpdate:modelValue":t[1]||(t[1]=e=>a.editedUser.lastName=e)},null,8,["modelValue"])]),(0,n._)("td",null,[(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.experience.years,"onUpdate:modelValue":t[2]||(t[2]=e=>a.editedUser.experience.years=e),type:"number"},null,8,["modelValue"]),(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.experience.month,"onUpdate:modelValue":t[3]||(t[3]=e=>a.editedUser.experience.month=e),type:"number"},null,8,["modelValue"])]),(0,n._)("td",null,[(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.age,"onUpdate:modelValue":t[4]||(t[4]=e=>a.editedUser.age=e),type:"number"},null,8,["modelValue"])]),(0,n._)("td",null,[(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.address.city,"onUpdate:modelValue":t[5]||(t[5]=e=>a.editedUser.address.city=e)},null,8,["modelValue"]),(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.address.street,"onUpdate:modelValue":t[6]||(t[6]=e=>a.editedUser.address.street=e)},null,8,["modelValue"]),(0,n.Wm)(i,{class:"userlist__input",modelValue:a.editedUser.address.apartment,"onUpdate:modelValue":t[7]||(t[7]=e=>a.editedUser.address.apartment=e)},null,8,["modelValue"])]),(0,n._)("td",E,[(0,n.Wm)(d,{class:"userlist__btn",onClick:t[8]||(t[8]=e=>r.editUser(s.user))},{default:(0,n.w5)((()=>[(0,n.Uk)("OK")])),_:1}),(0,n.Wm)(d,{class:"userlist__btn btn_danger",onClick:r.chageIsEditing},{default:(0,n.w5)((()=>[(0,n.Uk)("X")])),_:1},8,["onClick"])])])):((0,n.wg)(),(0,n.iD)("tr",w,[(0,n._)("td",null,(0,v.zw)(s.user.name),1),(0,n._)("td",null,(0,v.zw)(s.user.lastName),1),(0,n._)("td",null,[Number(s.user.experience.years)?((0,n.wg)(),(0,n.iD)("span",k,(0,v.zw)(s.user.experience.years)+" years",1)):(0,n.kq)("",!0),(0,n.Uk)(),Number(s.user.experience.month)?((0,n.wg)(),(0,n.iD)("span",x,(0,v.zw)(s.user.experience.month)+" month",1)):(0,n.kq)("",!0)]),(0,n._)("td",null,(0,v.zw)(s.user.age),1),(0,n._)("td",null,(0,v.zw)(s.user.address.city)+", "+(0,v.zw)(s.user.address.street)+", "+(0,v.zw)(s.user.address.apartment),1),(0,n._)("td",W,[(0,n.Wm)(d,{class:"userlist__btn",onClick:r.startEditing},{default:(0,n.w5)((()=>[(0,n.Uk)("Edit")])),_:1},8,["onClick"]),(0,n.Wm)(d,{class:"userlist__btn btn_danger",onClick:r.deleteUser},{default:(0,n.w5)((()=>[(0,n.Uk)("Delete")])),_:1},8,["onClick"])])]))}var D={props:{user:{type:Object,required:!0}},emits:["edit","delete"],data(){return{editedUser:{name:"",lastName:"",experience:{years:"",month:""},age:"",address:{city:"",street:"",apartment:""}},isEditing:!1}},methods:{startEditing(){this.editedUser=structuredClone(this.user),this.chageIsEditing()},editUser(){this.$emit("edit",this.editedUser),this.chageIsEditing()},chageIsEditing(){this.isEditing=!this.isEditing},deleteUser(){this.$emit("delete",this.user.id)}}};const I=(0,f.Z)(D,[["render",N]]);var O=I,A={props:{userList:{type:Array,required:!0}},emits:["edit","delete"],components:{UserItem:O},methods:{editUser(e){this.$emit("edit",e)},deleteUser(e){this.$emit("delete",e)}}};const L=(0,f.Z)(A,[["render",b]]);var M=L,z={components:{UserForm:g,UserList:M},data(){return{modalVisible:!1,users:[{id:1,name:"Leanne",lastName:"Graham",experience:{years:1,month:3},age:26,address:{city:"Gwenborough",street:"Kulas Light",apartment:"Apt. 556"}},{id:2,name:"Ervin",lastName:"Howell",experience:{years:4,month:0},age:24,address:{city:"Wisokyburgh",street:"Victor Plains",apartment:"Suite 879"}},{id:3,name:"Clementine",lastName:"Bauch",experience:{years:6,month:2},age:32,address:{city:"McKenziehaven",street:"Douglas Extension",apartment:"Suite 847"}},{id:4,name:"Patricia",lastName:"Lebsack",experience:{years:5,month:7},age:28,address:{city:"South Elvis",street:"Hoeger Mall",apartment:"Apt. 692"}}]}},methods:{showModal(){this.modalVisible=!0},createUser(e){this.users.push(e),this.modalVisible=!1},editUser(e){let t=this.users.findIndex((t=>t.id===e.id));-1!==t&&(this.users[t]=structuredClone(e))},deleteUser(e){let t=this.users.findIndex((t=>t.id===e));this.users.splice(t,1)}}};const $=(0,f.Z)(z,[["render",d]]);var j=$;function Z(e,t,s,l,a,r){return s.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal",onClick:t[0]||(t[0]=e=>r.hideModal())},[(0,n.WI)(e.$slots,"default",{},void 0,!0)])):(0,n.kq)("",!0)}var q={name:"modal-win",props:{show:{type:Boolean,defaul:!1}},emits:["update:show"],methods:{hideModal(){this.$emit("update:show",!1)}}};const S=(0,f.Z)(q,[["render",Z],["__scopeId","data-v-cd174094"]]);var H=S;const K=["value"];function P(e,t,s,l,a,r){return(0,n.wg)(),(0,n.iD)("input",{class:"input",value:s.modelValue,onInput:t[0]||(t[0]=(...e)=>r.updateInput&&r.updateInput(...e))},null,40,K)}var F={name:"custom-input",props:{modelValue:[String,Number]},emits:["update:model-value"],methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const Y=(0,f.Z)(F,[["render",P]]);var B=Y;const G={class:"btn"};function T(e,t,s,l,a,r){return(0,n.wg)(),(0,n.iD)("button",G,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var X={name:"custom-button",emits:["click"]};const J=(0,f.Z)(X,[["render",T],["__scopeId","data-v-5b1d50d7"]]);var Q=J,R=[H,B,Q];const ee=(0,l.ri)(j);R.forEach((e=>{ee.component(e.name,e)})),ee.mount("#app")}},t={};function s(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,l,n,a){if(!l){var r=1/0;for(u=0;u<e.length;u++){l=e[u][0],n=e[u][1],a=e[u][2];for(var d=!0,i=0;i<l.length;i++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](l[i])}))?l.splice(i--,1):(d=!1,a<r&&(r=a));if(d){e.splice(u--,1);var o=n();void 0!==o&&(t=o)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[l,n,a]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var l in t)s.o(t,l)&&!s.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,a,r=l[0],d=l[1],i=l[2],o=0;if(r.some((function(t){return 0!==e[t]}))){for(n in d)s.o(d,n)&&(s.m[n]=d[n]);if(i)var u=i(s)}for(t&&t(l);o<r.length;o++)a=r[o],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(u)},l=self["webpackChunkusers_list"]=self["webpackChunkusers_list"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=s.O(void 0,[998],(function(){return s(7314)}));l=s.O(l)})();
//# sourceMappingURL=app.e96a791c.js.map