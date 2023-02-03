/*! For license information please see 610.6ff21173.chunk.js.LICENSE.txt */
(self.webpackChunkwallet_leopards_team_FRONTEND=self.webpackChunkwallet_leopards_team_FRONTEND||[]).push([[610],{9781:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var a,n,s=r(2791),i=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function o(e,t){var r=e.title,o=e.titleId,u=c(e,i);return s.createElement("svg",l({width:24,height:24,viewBox:"0 0 25 24",fill:"current",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},u),r?s.createElement("title",{id:o},r):null,a||(a=s.createElement("g",{clipPath:"url(#clip0_5_3612)"},s.createElement("path",{d:"M3.5 5V19C3.5 20.1 4.39 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3H5.5C4.39 3 3.5 3.9 3.5 5ZM15.5 9C15.5 10.66 14.16 12 12.5 12C10.84 12 9.5 10.66 9.5 9C9.5 7.34 10.84 6 12.5 6C14.16 6 15.5 7.34 15.5 9ZM6.5 17C6.5 15 10.5 13.9 12.5 13.9C14.5 13.9 18.5 15 18.5 17V18H6.5V17Z",fill:"current"}))),n||(n=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_5_3612"},s.createElement("rect",{width:24,height:24,fill:"current",transform:"translate(0.5)"})))))}var u=s.forwardRef(o);r.p},8079:function(e,t,r){"use strict";r(2791);t.Z=r.p+"static/media/symbol-defs.9e2ec92168641a57bd7f2c4d08fb43dd.svg"},610:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return le}});var a=r(2791),n=r(8687),s=r(9983),i=r(3853),l=r(4142),c=r(2605),o="SettingsAvatar_user_avatar__3icG3",u="SettingsAvatar_user_avatar__img__uIP8a",d="SettingsAvatar_user_avatar__settings__BXw8i",m="SettingsAvatar_user_avatar__icon__6e2OH",_="SettingsAvatar_title__arBlp",g="SettingsAvatar_isHidden__TVfGH",p=r(5562),v=r(7689),f=r(3329);function h(){var e,t=(0,a.useRef)(),r=(0,n.I0)(),h=l.Z.updateAvatar,x=null!==(e=(0,n.v9)(c.p.getAvatarURL))&&void 0!==e?e:"https://res.cloudinary.com/dpvkleqce/image/upload/v1674652226/wallet_leopards/zn7ur1gmwynrbmnqgzkj.png",N=(0,n.v9)(c.p.isAvatarLoading);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:_,children:"User"}),(0,f.jsxs)("div",{className:o,children:[N?(0,f.jsx)(v.a,{height:"80",width:"80"}):(0,f.jsx)("img",{className:u,src:x,alt:"User avatar"}),(0,f.jsx)("form",{ref:t,encType:"multipart/form-data",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.avatar.value,a=e.currentTarget.elements.avatar.files[0],n=t.split(".").at(-1);if("png"===n||"jpeg"===n||"jpg"===n){var s=new FormData;s.append("avatar",a),r(h(s))}else p.Notify.failure("Invalid image format. It has to be: PNG, JPEG or JPG",{position:"center-top"})},children:(0,f.jsxs)("label",{className:d,children:[(0,f.jsx)(s.Pd.Provider,{value:{className:"".concat(m)},children:(0,f.jsx)(i.IYd,{})}),(0,f.jsx)("input",{className:g,type:"file",name:"avatar",onChange:function(){t.current.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))}})]})})]})]})}var x=r(4942),N=r(5705),j=r(1724),y=r(1694),b=r.n(y),S=r(9781),w="SettingsUserName_submitBtn__tzx09",C="SettingsUserName_form__jFBSC",F="SettingsUserName_input__eWoxe",I="SettingsUserName_errorInput__9YdQc",A="SettingsUserName_validInput__uYkvd",O="SettingsUserName_inputIcon__5NjPg",P="SettingsUserName_validInputIcon__BTkXf",U="SettingsUserName_errorInputIcon__6MFvP",Z="SettingsUserName_label__taM44",R="SettingsUserName_errorField__6IL4p";function k(){var e=(0,n.I0)(),t=(0,n.v9)(c.p.getFirstName),r={newFirstName:t},a=j.Ry().shape({newFirstName:j.Z_().matches(/(^[\u0430-\u044f\u0410-\u042f\u0451\u0401a-zA-Z0-9]+$)/,"Only letters and numbers").min(1).max(12,"Too long name").required("Required field")});return(0,f.jsx)(N.J9,{initialValues:r,validationSchema:a,onSubmit:function(r){var a=r.newFirstName;a===t?p.Notify.info("The name remained unchanged!"):e(l.Z.updateUserName({firstName:a}))},children:function(e){var t,r=e.values,a=e.errors,n=e.touched,s=e.handleChange,i=e.handleSubmit;return(0,f.jsxs)(N.l0,{className:C,onSubmit:i,children:[(0,f.jsxs)("label",{className:Z,children:[(0,f.jsx)(N.gN,{type:"text",name:"newFirstName",placeholder:"First name",className:b()(F,(t={},(0,x.Z)(t,I,a.newFirstName&&n.newFirstName),(0,x.Z)(t,A,!a.newFirstName&&n.newFirstName),t)),value:r.newFirstName,onChange:s}),(0,f.jsx)(S.r,{className:b()(O,P)}),a.newFirstName&&n.newFirstName&&(0,f.jsx)(S.r,{className:b()(O,U)}),a.newFirstName&&n.newFirstName&&(0,f.jsx)("div",{className:R,children:a.newFirstName})]}),(0,f.jsx)("button",{type:"submit",className:w,children:"Change"})]})}})}var T="SettingsUser_wrapper__Kl8Lx";function E(){return(0,f.jsxs)("div",{className:T,children:[(0,f.jsx)(h,{}),(0,f.jsx)(k,{})]})}var G="SettingsWrapper_wrapper__kMDyP";function B(e){var t=e.children;return(0,f.jsx)("div",{className:G,children:t})}var M=r(885),z="SettingsAddCategory_form__lSAGX",D="SettingsAddCategory_inputText__YBPxG",L="SettingsAddCategory_inputWrapper__mbyxv",V="SettingsAddCategory_inputStyle__5qr8R",H="SettingsAddCategory_submitButton__2faLT",q=function(){var e=(0,a.useState)(""),t=(0,M.Z)(e,2),r=t[0],s=t[1],i=(0,n.I0)();return(0,f.jsx)("form",{className:z,onSubmit:function(e){if(e.preventDefault(),""===r.trim())return p.Notify.failure("The category is not allowed to be empty");i(l.Z.addCategory(r.trim())),s("")},children:(0,f.jsxs)("label",{children:[(0,f.jsx)("p",{className:D,children:"Type new category here:"}),(0,f.jsxs)("div",{className:L,children:[(0,f.jsx)("input",{maxLength:18,type:"text",name:"newCategory",id:"New category",className:V,autoComplete:"off",value:r,onChange:function(e){s(e.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",className:H,children:"Add"})]})]})})},W=r(2982),Y="SettingsRemoveCategory_removeContainer__ZGGMo",J="SettingsRemoveCategory_advise__k1CKk",X="SettingsRemoveCategory_categoriesList__Gm2aW",K="SettingsRemoveCategory_categoriesItem__J+8-i",Q="SettingsRemoveCategory_otherExpenses__cMcaV",$="SettingsRemoveCategory_buttonDelete__gxw2U",ee="SettingsRemoveCategory_svg__loUS7",te=r(8079),re=function(){var e=(0,n.v9)(c.p.getCategories),t=e.findIndex((function(e){return"Other expenses"===e.name})),r=[].concat((0,W.Z)(e),[(0,W.Z)(e).splice(t,1).pop()]);r.splice(t,1);var a=(0,n.I0)(),s=function(e){return{backgroundColor:"".concat(null===e||void 0===e?void 0:e.color),borderRadius:"25px"}};return(0,f.jsxs)("div",{className:Y,children:[(0,f.jsx)("p",{className:J,children:"Advice: click on the cross if you want to delete"}),(0,f.jsx)("ul",{className:X,children:r.map((function(e){return(0,f.jsx)("li",{style:s(e),children:(0,f.jsxs)("div",{className:"10"!==e._id?"".concat(K):"".concat(Q," ").concat(K),id:e._id,children:[(0,f.jsx)("p",{children:e.name}),"10"!==e._id?(0,f.jsx)("button",{onClick:function(){return t=e._id,void a(l.Z.removeCategory(t));var t},type:"button",className:$,children:(0,f.jsx)("svg",{className:ee,children:(0,f.jsx)("use",{href:"".concat(te.Z,"#icon-cancel-circle")})})}):null]})},e._id)}))})]})},ae="CategoriesField_field__xOG35",ne="CategoriesField_header__GzTxW",se=function(){return(0,f.jsxs)("div",{className:ae,children:[(0,f.jsx)("h2",{className:ne,children:"Categories"}),(0,f.jsx)(q,{}),(0,f.jsx)(re,{})]})},ie="SettingsPage_wrapper__zYa3z";function le(){return(0,f.jsxs)("div",{className:ie,children:[(0,f.jsx)(B,{children:(0,f.jsx)(E,{})}),(0,f.jsx)(B,{children:(0,f.jsx)(se,{})})]})}},1694:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)a.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=610.6ff21173.chunk.js.map