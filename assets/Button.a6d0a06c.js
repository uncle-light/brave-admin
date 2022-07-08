import{i as Re,p as lo,m as N,o as ao,f as Qe,V as yr,h as ee,k as l,W as wr,b as H,X as io,v as Ye,r as k,Y as je,e as w,t as i,Z as so,$ as co,a0 as ye,a1 as Be,a2 as uo,s as Sr,c as ho,a3 as se,w as Ne,a4 as Pr,d as A,a5 as ie,u as fo,j as Ee,a6 as $r,a7 as Ke,y as zr,a as Tr,a8 as Je,a9 as vo,A as po,B as pe,aa as Fr,ab as Br,ac as Rr,ad as eo,z as v,ae as Er,af as Q,ag as oo,ah as bo,ai as _r,aj as ro,ak as Ir,al as Dr}from"./index.066d8ba3.js";import{e as Hr,d as kr}from"./enUS.ac3a6d76.js";const to=Qe("n-form-item");function go(o,{defaultSize:d="medium",mergedSize:n,mergedDisabled:g}={}){const u=Re(to,null);lo(to,null);const p=N(n?()=>n(u):()=>{const{size:c}=o;if(c)return c;if(u){const{mergedSize:P}=u;if(P.value!==void 0)return P.value}return d}),s=N(g?()=>g(u):()=>{const{disabled:c}=o;return c!==void 0?c:u?u.disabled.value:!1}),a=N(()=>{const{status:c}=o;return c||(u==null?void 0:u.mergedValidationStatus.value)});return ao(()=>{u&&u.restoreValidation()}),{mergedSizeRef:p,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){u&&u.handleContentBlur()},nTriggerFormChange(){u&&u.handleContentChange()},nTriggerFormFocus(){u&&u.handleContentFocus()},nTriggerFormInput(){u&&u.handleContentInput()}}}function Wr(o){const{mergedLocaleRef:d,mergedDateLocaleRef:n}=Re(yr,null)||{},g=N(()=>{var p,s;return(s=(p=d==null?void 0:d.value)===null||p===void 0?void 0:p[o])!==null&&s!==void 0?s:Hr[o]});return{dateLocaleRef:N(()=>{var p;return(p=n==null?void 0:n.value)!==null&&p!==void 0?p:kr}),localeRef:g}}var Ar=ee({name:"Eye",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),l("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Mr=ee({name:"EyeOff",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),l("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),l("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),l("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),l("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Lr=ee({name:"ChevronDown",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Vr=wr("clear",l("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Or=H("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Gr=ee({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(o){io("-base-wave",Or,Ye(o,"clsPrefix"));const d=k(null),n=k(!1);let g=null;return ao(()=>{g!==null&&window.clearTimeout(g)}),{active:n,selfRef:d,play(){g!==null&&(window.clearTimeout(g),n.value=!1,g=null),je(()=>{var u;(u=d.value)===null||u===void 0||u.offsetHeight,n.value=!0,g=window.setTimeout(()=>{n.value=!1,g=null},1e3)})}}},render(){const{clsPrefix:o}=this;return l("div",{ref:"selfRef","aria-hidden":!0,class:[`${o}-base-wave`,this.active&&`${o}-base-wave--active`]})}}),jr=H("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[w(">",[i("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[w("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),w("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),i("placeholder",`
 display: flex;
 `),i("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[so({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ue=ee({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(o){return io("-base-clear",jr,Ye(o,"clsPrefix")),{handleMouseDown(d){d.preventDefault()}}},render(){const{clsPrefix:o}=this;return l("div",{class:`${o}-base-clear`},l(co,null,{default:()=>{var d,n;return this.show?l("div",{key:"dismiss",class:`${o}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},ye(this.$slots.icon,()=>[l(Be,{clsPrefix:o},{default:()=>l(Vr,null)})])):l("div",{key:"icon",class:`${o}-base-clear__placeholder`},(n=(d=this.$slots).placeholder)===null||n===void 0?void 0:n.call(d))}}))}}),Nr=ee({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(o,{slots:d}){return()=>{const{clsPrefix:n}=o;return l(uo,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:o.loading},{default:()=>o.showArrow?l(Ue,{clsPrefix:n,show:o.showClear,onClear:o.onClear},{placeholder:()=>l(Be,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>ye(d.default,()=>[l(Lr,null)])})}):null})}}});const{cubicBezierEaseInOut:re}=Sr;function Kr({duration:o=".2s",delay:d=".1s"}={}){return[w("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),w("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),w("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${re},
 max-width ${o} ${re} ${d},
 margin-left ${o} ${re} ${d},
 margin-right ${o} ${re} ${d};
 `),w("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${o} ${re} ${d},
 max-width ${o} ${re},
 margin-left ${o} ${re},
 margin-right ${o} ${re};
 `)]}var Ur={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const Qr=o=>{const{textColor2:d,textColor3:n,textColorDisabled:g,primaryColor:u,primaryColorHover:p,inputColor:s,inputColorDisabled:a,borderColor:c,warningColor:P,warningColorHover:S,errorColor:C,errorColorHover:L,borderRadius:$,lineHeight:z,fontSizeTiny:oe,fontSizeSmall:V,fontSizeMedium:x,fontSizeLarge:F,heightTiny:B,heightSmall:f,heightMedium:b,heightLarge:I,actionColor:t,clearColor:W,clearColorHover:R,clearColorPressed:K,placeholderColor:O,placeholderColorDisabled:T,iconColor:q,iconColorDisabled:Y,iconColorHover:X,iconColorPressed:U}=o;return Object.assign(Object.assign({},Ur),{countTextColor:n,heightTiny:B,heightSmall:f,heightMedium:b,heightLarge:I,fontSizeTiny:oe,fontSizeSmall:V,fontSizeMedium:x,fontSizeLarge:F,lineHeight:z,lineHeightTextarea:z,borderRadius:$,iconSize:"16px",groupLabelColor:t,groupLabelTextColor:d,textColor:d,textColorDisabled:g,textDecorationColor:d,caretColor:u,placeholderColor:O,placeholderColorDisabled:T,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${c}`,border:`1px solid ${c}`,borderHover:`1px solid ${p}`,borderDisabled:`1px solid ${c}`,borderFocus:`1px solid ${p}`,boxShadowFocus:`0 0 0 2px ${se(u,{alpha:.2})}`,loadingColor:u,loadingColorWarning:P,borderWarning:`1px solid ${P}`,borderHoverWarning:`1px solid ${S}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${S}`,boxShadowFocusWarning:`0 0 0 2px ${se(P,{alpha:.2})}`,caretColorWarning:P,loadingColorError:C,borderError:`1px solid ${C}`,borderHoverError:`1px solid ${L}`,colorFocusError:s,borderFocusError:`1px solid ${L}`,boxShadowFocusError:`0 0 0 2px ${se(C,{alpha:.2})}`,caretColorError:C,clearColor:W,clearColorHover:R,clearColorPressed:K,iconColor:q,iconColorDisabled:Y,iconColorHover:X,iconColorPressed:U,suffixTextColor:d})},Yr={name:"Input",common:ho,self:Qr};var qr=Yr;const xo=Qe("n-input");function Xr(o){let d=0;for(const n of o)d++;return d}function Te(o){return o===""||o==null}function Zr(o){const d=k(null);function n(){const{value:p}=o;if(!p||!p.focus){u();return}const{selectionStart:s,selectionEnd:a,value:c}=p;if(s==null||a==null){u();return}d.value={start:s,end:a,beforeText:c.slice(0,s),afterText:c.slice(a)}}function g(){var p;const{value:s}=d,{value:a}=o;if(!s||!a)return;const{value:c}=a,{start:P,beforeText:S,afterText:C}=s;let L=c.length;if(c.endsWith(C))L=c.length-C.length;else if(c.startsWith(S))L=S.length;else{const $=S[P-1],z=c.indexOf($,P-1);z!==-1&&(L=z+1)}(p=a.setSelectionRange)===null||p===void 0||p.call(a,L,L)}function u(){d.value=null}return Ne(o,u),{recordCursor:n,restoreCursor:g}}var no=ee({name:"InputWordCount",setup(o,{slots:d}){const{mergedValueRef:n,maxlengthRef:g,mergedClsPrefixRef:u}=Re(xo),p=N(()=>{const{value:s}=n;return s===null||Array.isArray(s)?0:Xr(s)});return()=>{const{value:s}=g,{value:a}=n;return l("span",{class:`${u.value}-input-word-count`},Pr(d.default,{value:a===null||Array.isArray(a)?"":a},()=>[s===void 0?p.value:`${p.value} / ${s}`]))}}}),Jr=H("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[i("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),i("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),i("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[w("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),w("&::placeholder","color: #0000;"),w("&:-webkit-autofill ~",[i("placeholder","display: none;")])]),A("round",[ie("textarea","border-radius: calc(var(--n-height) / 2);")]),i("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[w("span",`
 width: 100%;
 display: inline-block;
 `)]),A("textarea",[i("placeholder","overflow: visible;")]),ie("autosize","width: 100%;"),A("autosize",[i("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),H("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),i("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),i("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[w("+",[i("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),ie("textarea",[i("placeholder","white-space: nowrap;")]),i("eye",`
 transition: color .3s var(--n-bezier);
 `),A("textarea","width: 100%;",[H("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),A("resizable",[H("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),i("textarea",`
 position: static;
 `),i("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),i("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),A("pair",[i("input-el, placeholder","text-align: center;"),i("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[H("icon",`
 color: var(--n-icon-color);
 `),H("base-icon",`
 color: var(--n-icon-color);
 `)])]),A("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[i("border","border: var(--n-border-disabled);"),i("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),i("placeholder","color: var(--n-placeholder-color-disabled);"),i("separator","color: var(--n-text-color-disabled);",[H("icon",`
 color: var(--n-icon-color-disabled);
 `),H("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),i("suffix, prefix","color: var(--n-text-color-disabled);",[H("icon",`
 color: var(--n-icon-color-disabled);
 `),H("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),ie("disabled",[i("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[w("&:hover",`
 color: var(--n-icon-color-hover);
 `),w("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),w("&:hover",[i("state-border","border: var(--n-border-hover);")]),A("focus","background-color: var(--n-color-focus);",[i("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),i("state-border",`
 border-color: #0000;
 z-index: 1;
 `),i("prefix","margin-right: 4px;"),i("suffix",`
 margin-left: 4px;
 `),i("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[H("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),H("base-clear",`
 font-size: var(--n-icon-size);
 `,[i("placeholder",[H("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),w(">",[H("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),H("base-icon",`
 font-size: var(--n-icon-size);
 `)]),H("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(o=>A(`${o}-status`,[ie("disabled",[H("base-loading",`
 color: var(--n-loading-color-${o})
 `),i("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${o});
 `),i("state-border",`
 border: var(--n-border-${o});
 `),w("&:hover",[i("state-border",`
 border: var(--n-border-hover-${o});
 `)]),w("&:focus",`
 background-color: var(--n-color-focus-${o});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)]),A("focus",`
 background-color: var(--n-color-focus-${o});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${o});
 border: var(--n-border-focus-${o});
 `)])])]))]);const et=Object.assign(Object.assign({},Ee.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var ut=ee({name:"Input",props:et,setup(o){const{mergedClsPrefixRef:d,mergedBorderedRef:n,inlineThemeDisabled:g,mergedRtlRef:u}=fo(o),p=Ee("Input","-input",Jr,qr,o,d),s=k(null),a=k(null),c=k(null),P=k(null),S=k(null),C=k(null),L=k(null),$=Zr(L),z=k(null),{localeRef:oe}=Wr("Input"),V=k(o.defaultValue),x=Ye(o,"value"),F=$r(x,V),B=go(o),{mergedSizeRef:f,mergedDisabledRef:b,mergedStatusRef:I}=B,t=k(!1),W=k(!1),R=k(!1),K=k(!1);let O=null;const T=N(()=>{const{placeholder:e,pair:r}=o;return r?Array.isArray(e)?e:e===void 0?["",""]:[e,e]:e===void 0?[oe.value.placeholder]:[e]}),q=N(()=>{const{value:e}=R,{value:r}=F,{value:h}=T;return!e&&(Te(r)||Array.isArray(r)&&Te(r[0]))&&h[0]}),Y=N(()=>{const{value:e}=R,{value:r}=F,{value:h}=T;return!e&&h[1]&&(Te(r)||Array.isArray(r)&&Te(r[1]))}),X=Ke(()=>o.internalForceFocus||t.value),U=Ke(()=>{if(b.value||o.readonly||!o.clearable||!X.value&&!W.value)return!1;const{value:e}=F,{value:r}=X;return o.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(W.value||r):!!e&&(W.value||r)}),y=N(()=>{const{showPasswordOn:e}=o;if(e)return e;if(o.showPasswordToggle)return"click"}),Z=k(!1),be=N(()=>{const{textDecoration:e}=o;return e?Array.isArray(e)?e.map(r=>({textDecoration:r})):[{textDecoration:e}]:["",""]}),J=k(void 0),_e=()=>{var e,r;if(o.type==="textarea"){const{autosize:h}=o;if(h&&(J.value=(r=(e=z.value)===null||e===void 0?void 0:e.$el)===null||r===void 0?void 0:r.offsetWidth),!a.value||typeof h=="boolean")return;const{paddingTop:D,paddingBottom:G,lineHeight:j}=window.getComputedStyle(a.value),te=Number(D.slice(0,-2)),ne=Number(G.slice(0,-2)),le=Number(j.slice(0,-2)),{value:me}=c;if(!me)return;if(h.minRows){const Ce=Math.max(h.minRows,1),Ge=`${te+ne+le*Ce}px`;me.style.minHeight=Ge}if(h.maxRows){const Ce=`${te+ne+le*h.maxRows}px`;me.style.maxHeight=Ce}}},we=N(()=>{const{maxlength:e}=o;return e===void 0?void 0:Number(e)});zr(()=>{const{value:e}=F;Array.isArray(e)||Oe(e)});const Ie=Tr().proxy;function de(e){const{onUpdateValue:r,"onUpdate:value":h,onInput:D}=o,{nTriggerFormInput:G}=B;r&&Q(r,e),h&&Q(h,e),D&&Q(D,e),V.value=e,G()}function ce(e){const{onChange:r}=o,{nTriggerFormChange:h}=B;r&&Q(r,e),V.value=e,h()}function E(e){const{onBlur:r}=o,{nTriggerFormBlur:h}=B;r&&Q(r,e),h()}function ue(e){const{onFocus:r}=o,{nTriggerFormFocus:h}=B;r&&Q(r,e),h()}function Se(e){const{onClear:r}=o;r&&Q(r,e)}function m(e){const{onInputBlur:r}=o;r&&Q(r,e)}function ge(e){const{onInputFocus:r}=o;r&&Q(r,e)}function xe(){const{onDeactivate:e}=o;e&&Q(e)}function De(){const{onActivate:e}=o;e&&Q(e)}function He(e){const{onClick:r}=o;r&&Q(r,e)}function ke(e){const{onWrapperFocus:r}=o;r&&Q(r,e)}function We(e){const{onWrapperBlur:r}=o;r&&Q(r,e)}function Ae(){R.value=!0}function Me(e){R.value=!1,e.target===C.value?he(e,1):he(e,0)}function he(e,r=0,h="input"){const D=e.target.value;if(Oe(D),o.type==="textarea"){const{value:j}=z;j&&j.syncUnifiedContainer()}if(O=D,R.value)return;$.recordCursor();const G=Le(D);if(G)if(!o.pair)h==="input"?de(D):ce(D);else{let{value:j}=F;Array.isArray(j)?j=[j[0],j[1]]:j=["",""],j[r]=D,h==="input"?de(j):ce(j)}Ie.$forceUpdate(),G||je($.restoreCursor)}function Le(e){const{allowInput:r}=o;return typeof r=="function"?r(e):!0}function _(e){m(e),e.relatedTarget===s.value&&xe(),e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===C.value||e.relatedTarget===a.value)||(K.value=!1),Pe(e,"blur"),L.value=null}function M(e,r){ge(e),t.value=!0,K.value=!0,De(),Pe(e,"focus"),r===0?L.value=S.value:r===1?L.value=C.value:r===2&&(L.value=a.value)}function fe(e){o.passivelyActivated&&(We(e),Pe(e,"blur"))}function mo(e){o.passivelyActivated&&(t.value=!0,ke(e),Pe(e,"focus"))}function Pe(e,r){e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===C.value||e.relatedTarget===a.value||e.relatedTarget===s.value)||(r==="focus"?(ue(e),t.value=!0):r==="blur"&&(E(e),t.value=!1))}function Co(e,r){he(e,r,"change")}function yo(e){He(e)}function wo(e){Se(e),o.pair?(de(["",""]),ce(["",""])):(de(""),ce(""))}function So(e){const{onMousedown:r}=o;r&&r(e);const{tagName:h}=e.target;if(h!=="INPUT"&&h!=="TEXTAREA"){if(o.resizable){const{value:D}=s;if(D){const{left:G,top:j,width:te,height:ne}=D.getBoundingClientRect(),le=14;if(G+te-le<e.clientX&&e.clientY<G+te&&j+ne-le<e.clientY&&e.clientY<j+ne)return}}e.preventDefault(),t.value||qe()}}function Po(){var e;W.value=!0,o.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseEnterWrapper())}function $o(){var e;W.value=!1,o.type==="textarea"&&((e=z.value)===null||e===void 0||e.handleMouseLeaveWrapper())}function zo(){b.value||y.value==="click"&&(Z.value=!Z.value)}function To(e){if(b.value)return;e.preventDefault();const r=D=>{D.preventDefault(),oo("mouseup",document,r)};if(eo("mouseup",document,r),y.value!=="mousedown")return;Z.value=!0;const h=()=>{Z.value=!1,oo("mouseup",document,h)};eo("mouseup",document,h)}function Fo(e){var r;switch((r=o.onKeydown)===null||r===void 0||r.call(o,e),e.key){case"Escape":Ve();break;case"Enter":Bo(e);break}}function Bo(e){var r,h;if(o.passivelyActivated){const{value:D}=K;if(D){o.internalDeactivateOnEnter&&Ve();return}e.preventDefault(),o.type==="textarea"?(r=a.value)===null||r===void 0||r.focus():(h=S.value)===null||h===void 0||h.focus()}}function Ve(){o.passivelyActivated&&(K.value=!1,je(()=>{var e;(e=s.value)===null||e===void 0||e.focus()}))}function qe(){var e,r,h;b.value||(o.passivelyActivated?(e=s.value)===null||e===void 0||e.focus():((r=a.value)===null||r===void 0||r.focus(),(h=S.value)===null||h===void 0||h.focus()))}function Ro(){var e;!((e=s.value)===null||e===void 0)&&e.contains(document.activeElement)&&document.activeElement.blur()}function Eo(){var e,r;(e=a.value)===null||e===void 0||e.select(),(r=S.value)===null||r===void 0||r.select()}function _o(){b.value||(a.value?a.value.focus():S.value&&S.value.focus())}function Io(){const{value:e}=s;(e==null?void 0:e.contains(document.activeElement))&&e!==document.activeElement&&Ve()}function Oe(e){const{type:r,pair:h,autosize:D}=o;if(!h&&D)if(r==="textarea"){const{value:G}=c;G&&(G.textContent=(e!=null?e:"")+`\r
`)}else{const{value:G}=P;G&&(e?G.textContent=e:G.innerHTML="&nbsp;")}}function Do(){_e()}const Xe=k({top:"0"});function Ho(e){var r;const{scrollTop:h}=e.target;Xe.value.top=`${-h}px`,(r=z.value)===null||r===void 0||r.syncUnifiedContainer()}let $e=null;Je(()=>{const{autosize:e,type:r}=o;e&&r==="textarea"?$e=Ne(F,h=>{!Array.isArray(h)&&h!==O&&Oe(h)}):$e==null||$e()});let ze=null;Je(()=>{o.type==="textarea"?ze=Ne(F,e=>{var r;!Array.isArray(e)&&e!==O&&((r=z.value)===null||r===void 0||r.syncUnifiedContainer())}):ze==null||ze()}),lo(xo,{mergedValueRef:F,maxlengthRef:we,mergedClsPrefixRef:d});const ko={wrapperElRef:s,inputElRef:S,textareaElRef:a,isCompositing:R,focus:qe,blur:Ro,select:Eo,deactivate:Io,activate:_o},Wo=vo("Input",u,d),Ze=N(()=>{const{value:e}=f,{common:{cubicBezierEaseInOut:r},self:{color:h,borderRadius:D,textColor:G,caretColor:j,caretColorError:te,caretColorWarning:ne,textDecorationColor:le,border:me,borderDisabled:Ce,borderHover:Ge,borderFocus:Ao,placeholderColor:Mo,placeholderColorDisabled:Lo,lineHeightTextarea:Vo,colorDisabled:Oo,colorFocus:Go,textColorDisabled:jo,boxShadowFocus:No,iconSize:Ko,colorFocusWarning:Uo,boxShadowFocusWarning:Qo,borderWarning:Yo,borderFocusWarning:qo,borderHoverWarning:Xo,colorFocusError:Zo,boxShadowFocusError:Jo,borderError:er,borderFocusError:or,borderHoverError:rr,clearSize:tr,clearColor:nr,clearColorHover:lr,clearColorPressed:ar,iconColor:ir,iconColorDisabled:sr,suffixTextColor:dr,countTextColor:cr,iconColorHover:ur,iconColorPressed:hr,loadingColor:fr,loadingColorError:vr,loadingColorWarning:pr,[v("padding",e)]:br,[v("fontSize",e)]:gr,[v("height",e)]:xr}}=p.value,{left:mr,right:Cr}=Er(br);return{"--n-bezier":r,"--n-count-text-color":cr,"--n-color":h,"--n-font-size":gr,"--n-border-radius":D,"--n-height":xr,"--n-padding-left":mr,"--n-padding-right":Cr,"--n-text-color":G,"--n-caret-color":j,"--n-text-decoration-color":le,"--n-border":me,"--n-border-disabled":Ce,"--n-border-hover":Ge,"--n-border-focus":Ao,"--n-placeholder-color":Mo,"--n-placeholder-color-disabled":Lo,"--n-icon-size":Ko,"--n-line-height-textarea":Vo,"--n-color-disabled":Oo,"--n-color-focus":Go,"--n-text-color-disabled":jo,"--n-box-shadow-focus":No,"--n-loading-color":fr,"--n-caret-color-warning":ne,"--n-color-focus-warning":Uo,"--n-box-shadow-focus-warning":Qo,"--n-border-warning":Yo,"--n-border-focus-warning":qo,"--n-border-hover-warning":Xo,"--n-loading-color-warning":pr,"--n-caret-color-error":te,"--n-color-focus-error":Zo,"--n-box-shadow-focus-error":Jo,"--n-border-error":er,"--n-border-focus-error":or,"--n-border-hover-error":rr,"--n-loading-color-error":vr,"--n-clear-color":nr,"--n-clear-size":tr,"--n-clear-color-hover":lr,"--n-clear-color-pressed":ar,"--n-icon-color":ir,"--n-icon-color-hover":ur,"--n-icon-color-pressed":hr,"--n-icon-color-disabled":sr,"--n-suffix-text-color":dr}}),ve=g?po("input",N(()=>{const{value:e}=f;return e[0]}),Ze,o):void 0;return Object.assign(Object.assign({},ko),{wrapperElRef:s,inputElRef:S,inputMirrorElRef:P,inputEl2Ref:C,textareaElRef:a,textareaMirrorElRef:c,textareaScrollbarInstRef:z,rtlEnabled:Wo,uncontrolledValue:V,mergedValue:F,passwordVisible:Z,mergedPlaceholder:T,showPlaceholder1:q,showPlaceholder2:Y,mergedFocus:X,isComposing:R,activated:K,showClearButton:U,mergedSize:f,mergedDisabled:b,textDecorationStyle:be,mergedClsPrefix:d,mergedBordered:n,mergedShowPasswordOn:y,placeholderStyle:Xe,mergedStatus:I,textAreaScrollContainerWidth:J,handleTextAreaScroll:Ho,handleCompositionStart:Ae,handleCompositionEnd:Me,handleInput:he,handleInputBlur:_,handleInputFocus:M,handleWrapperBlur:fe,handleWrapperFocus:mo,handleMouseEnter:Po,handleMouseLeave:$o,handleMouseDown:So,handleChange:Co,handleClick:yo,handleClear:wo,handlePasswordToggleClick:zo,handlePasswordToggleMousedown:To,handleWrapperKeydown:Fo,handleTextAreaMirrorResize:Do,getTextareaScrollContainer:()=>a.value,mergedTheme:p,cssVars:g?void 0:Ze,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender})},render(){var o,d;const{mergedClsPrefix:n,mergedStatus:g,themeClass:u,onRender:p}=this,s=this.$slots;return p==null||p(),l("div",{ref:"wrapperElRef",class:[`${n}-input`,u,g&&`${n}-input--${g}-status`,{[`${n}-input--rtl`]:this.rtlEnabled,[`${n}-input--disabled`]:this.mergedDisabled,[`${n}-input--textarea`]:this.type==="textarea",[`${n}-input--resizable`]:this.resizable&&!this.autosize,[`${n}-input--autosize`]:this.autosize,[`${n}-input--round`]:this.round&&this.type!=="textarea",[`${n}-input--pair`]:this.pair,[`${n}-input--focus`]:this.mergedFocus,[`${n}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},l("div",{class:`${n}-input-wrapper`},pe(s.prefix,a=>a&&l("div",{class:`${n}-input__prefix`},a)),this.type==="textarea"?l(Fr,{ref:"textareaScrollbarInstRef",class:`${n}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var a,c;const{textAreaScrollContainerWidth:P}=this,S={width:this.autosize&&P&&`${P}px`};return l(Br,null,l("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${n}-input__textarea-el`,(a=this.inputProps)===null||a===void 0?void 0:a.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(c=this.inputProps)===null||c===void 0?void 0:c.style,S],onBlur:this.handleInputBlur,onFocus:C=>this.handleInputFocus(C,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?l("div",{class:`${n}-input__placeholder`,style:[this.placeholderStyle,S],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?l(Rr,{onResize:this.handleTextAreaMirrorResize},{default:()=>l("div",{ref:"textareaMirrorElRef",class:`${n}-input__textarea-mirror`,key:"mirror"})}):null)}}):l("div",{class:`${n}-input__input`},l("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${n}-input__input-el`,(o=this.inputProps)===null||o===void 0?void 0:o.class],style:[this.textDecorationStyle[0],(d=this.inputProps)===null||d===void 0?void 0:d.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:a=>this.handleInputFocus(a,0),onInput:a=>this.handleInput(a,0),onChange:a=>this.handleChange(a,0)})),this.showPlaceholder1?l("div",{class:`${n}-input__placeholder`},l("span",null,this.mergedPlaceholder[0])):null,this.autosize?l("div",{class:`${n}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&pe(s.suffix,a=>a||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?l("div",{class:`${n}-input__suffix`},[pe(s["clear-icon-placeholder"],c=>(this.clearable||c)&&l(Ue,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>c,icon:()=>{var P,S;return(S=(P=this.$slots)["clear-icon"])===null||S===void 0?void 0:S.call(P)}})),this.internalLoadingBeforeSuffix?null:a,this.loading!==void 0?l(Nr,{clsPrefix:n,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?a:null,this.showCount&&this.type!=="textarea"?l(no,null,{default:c=>{var P;return(P=s.count)===null||P===void 0?void 0:P.call(s,c)}}):null,this.mergedShowPasswordOn&&this.type==="password"?l("div",{class:`${n}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?ye(s["password-visible-icon"],()=>[l(Be,{clsPrefix:n},{default:()=>l(Ar,null)})]):ye(s["password-invisible-icon"],()=>[l(Be,{clsPrefix:n},{default:()=>l(Mr,null)})])):null]):null)),this.pair?l("span",{class:`${n}-input__separator`},ye(s.separator,()=>[this.separator])):null,this.pair?l("div",{class:`${n}-input-wrapper`},l("div",{class:`${n}-input__input`},l("input",{ref:"inputEl2Ref",type:this.type,class:`${n}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:a=>this.handleInputFocus(a,1),onInput:a=>this.handleInput(a,1),onChange:a=>this.handleChange(a,1)}),this.showPlaceholder2?l("div",{class:`${n}-input__placeholder`},l("span",null,this.mergedPlaceholder[1])):null),pe(s.suffix,a=>(this.clearable||a)&&l("div",{class:`${n}-input__suffix`},[this.clearable&&l(Ue,{clsPrefix:n,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var c;return(c=s["clear-icon"])===null||c===void 0?void 0:c.call(s)},placeholder:()=>{var c;return(c=s["clear-icon-placeholder"])===null||c===void 0?void 0:c.call(s)}}),a]))):null,this.mergedBordered?l("div",{class:`${n}-input__border`}):null,this.mergedBordered?l("div",{class:`${n}-input__state-border`}):null,this.showCount&&this.type==="textarea"?l(no,null,{default:a=>{var c;return(c=s.count)===null||c===void 0?void 0:c.call(s,a)}}):null)}});function ae(o){return bo(o,[255,255,255,.16])}function Fe(o){return bo(o,[0,0,0,.12])}var ot={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const rt=o=>{const{heightTiny:d,heightSmall:n,heightMedium:g,heightLarge:u,borderRadius:p,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:P,opacityDisabled:S,textColor2:C,textColor3:L,primaryColorHover:$,primaryColorPressed:z,borderColor:oe,primaryColor:V,baseColor:x,infoColor:F,infoColorHover:B,infoColorPressed:f,successColor:b,successColorHover:I,successColorPressed:t,warningColor:W,warningColorHover:R,warningColorPressed:K,errorColor:O,errorColorHover:T,errorColorPressed:q,fontWeight:Y,buttonColor2:X,buttonColor2Hover:U,buttonColor2Pressed:y,fontWeightStrong:Z}=o;return Object.assign(Object.assign({},ot),{heightTiny:d,heightSmall:n,heightMedium:g,heightLarge:u,borderRadiusTiny:p,borderRadiusSmall:p,borderRadiusMedium:p,borderRadiusLarge:p,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:c,fontSizeLarge:P,opacityDisabled:S,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:X,colorSecondaryHover:U,colorSecondaryPressed:y,colorTertiary:X,colorTertiaryHover:U,colorTertiaryPressed:y,colorQuaternary:"#0000",colorQuaternaryHover:U,colorQuaternaryPressed:y,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:C,textColorTertiary:L,textColorHover:$,textColorPressed:z,textColorFocus:$,textColorDisabled:C,textColorText:C,textColorTextHover:$,textColorTextPressed:z,textColorTextFocus:$,textColorTextDisabled:C,textColorGhost:C,textColorGhostHover:$,textColorGhostPressed:z,textColorGhostFocus:$,textColorGhostDisabled:C,border:`1px solid ${oe}`,borderHover:`1px solid ${$}`,borderPressed:`1px solid ${z}`,borderFocus:`1px solid ${$}`,borderDisabled:`1px solid ${oe}`,rippleColor:V,colorPrimary:V,colorHoverPrimary:$,colorPressedPrimary:z,colorFocusPrimary:$,colorDisabledPrimary:V,textColorPrimary:x,textColorHoverPrimary:x,textColorPressedPrimary:x,textColorFocusPrimary:x,textColorDisabledPrimary:x,textColorTextPrimary:V,textColorTextHoverPrimary:$,textColorTextPressedPrimary:z,textColorTextFocusPrimary:$,textColorTextDisabledPrimary:C,textColorGhostPrimary:V,textColorGhostHoverPrimary:$,textColorGhostPressedPrimary:z,textColorGhostFocusPrimary:$,textColorGhostDisabledPrimary:V,borderPrimary:`1px solid ${V}`,borderHoverPrimary:`1px solid ${$}`,borderPressedPrimary:`1px solid ${z}`,borderFocusPrimary:`1px solid ${$}`,borderDisabledPrimary:`1px solid ${V}`,rippleColorPrimary:V,colorInfo:F,colorHoverInfo:B,colorPressedInfo:f,colorFocusInfo:B,colorDisabledInfo:F,textColorInfo:x,textColorHoverInfo:x,textColorPressedInfo:x,textColorFocusInfo:x,textColorDisabledInfo:x,textColorTextInfo:F,textColorTextHoverInfo:B,textColorTextPressedInfo:f,textColorTextFocusInfo:B,textColorTextDisabledInfo:C,textColorGhostInfo:F,textColorGhostHoverInfo:B,textColorGhostPressedInfo:f,textColorGhostFocusInfo:B,textColorGhostDisabledInfo:F,borderInfo:`1px solid ${F}`,borderHoverInfo:`1px solid ${B}`,borderPressedInfo:`1px solid ${f}`,borderFocusInfo:`1px solid ${B}`,borderDisabledInfo:`1px solid ${F}`,rippleColorInfo:F,colorSuccess:b,colorHoverSuccess:I,colorPressedSuccess:t,colorFocusSuccess:I,colorDisabledSuccess:b,textColorSuccess:x,textColorHoverSuccess:x,textColorPressedSuccess:x,textColorFocusSuccess:x,textColorDisabledSuccess:x,textColorTextSuccess:b,textColorTextHoverSuccess:I,textColorTextPressedSuccess:t,textColorTextFocusSuccess:I,textColorTextDisabledSuccess:C,textColorGhostSuccess:b,textColorGhostHoverSuccess:I,textColorGhostPressedSuccess:t,textColorGhostFocusSuccess:I,textColorGhostDisabledSuccess:b,borderSuccess:`1px solid ${b}`,borderHoverSuccess:`1px solid ${I}`,borderPressedSuccess:`1px solid ${t}`,borderFocusSuccess:`1px solid ${I}`,borderDisabledSuccess:`1px solid ${b}`,rippleColorSuccess:b,colorWarning:W,colorHoverWarning:R,colorPressedWarning:K,colorFocusWarning:R,colorDisabledWarning:W,textColorWarning:x,textColorHoverWarning:x,textColorPressedWarning:x,textColorFocusWarning:x,textColorDisabledWarning:x,textColorTextWarning:W,textColorTextHoverWarning:R,textColorTextPressedWarning:K,textColorTextFocusWarning:R,textColorTextDisabledWarning:C,textColorGhostWarning:W,textColorGhostHoverWarning:R,textColorGhostPressedWarning:K,textColorGhostFocusWarning:R,textColorGhostDisabledWarning:W,borderWarning:`1px solid ${W}`,borderHoverWarning:`1px solid ${R}`,borderPressedWarning:`1px solid ${K}`,borderFocusWarning:`1px solid ${R}`,borderDisabledWarning:`1px solid ${W}`,rippleColorWarning:W,colorError:O,colorHoverError:T,colorPressedError:q,colorFocusError:T,colorDisabledError:O,textColorError:x,textColorHoverError:x,textColorPressedError:x,textColorFocusError:x,textColorDisabledError:x,textColorTextError:O,textColorTextHoverError:T,textColorTextPressedError:q,textColorTextFocusError:T,textColorTextDisabledError:C,textColorGhostError:O,textColorGhostHoverError:T,textColorGhostPressedError:q,textColorGhostFocusError:T,textColorGhostDisabledError:O,borderError:`1px solid ${O}`,borderHoverError:`1px solid ${T}`,borderPressedError:`1px solid ${q}`,borderFocusError:`1px solid ${T}`,borderDisabledError:`1px solid ${O}`,rippleColorError:O,waveOpacity:"0.6",fontWeight:Y,fontWeightStrong:Z})},tt={name:"Button",common:ho,self:rt};var nt=tt;const lt=Qe("n-button-group");var at=w([H("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[A("color",[i("border",{borderColor:"var(--n-border-color)"}),A("disabled",[i("border",{borderColor:"var(--n-border-color-disabled)"})]),ie("disabled",[w("&:focus",[i("state-border",{borderColor:"var(--n-border-color-focus)"})]),w("&:hover",[i("state-border",{borderColor:"var(--n-border-color-hover)"})]),w("&:active",[i("state-border",{borderColor:"var(--n-border-color-pressed)"})]),A("pressed",[i("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),A("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[i("border",{border:"var(--n-border-disabled)"})]),ie("disabled",[w("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[i("state-border",{border:"var(--n-border-focus)"})]),w("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[i("state-border",{border:"var(--n-border-hover)"})]),w("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[i("state-border",{border:"var(--n-border-pressed)"})]),A("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[i("state-border",{border:"var(--n-border-pressed)"})])]),A("loading","cursor: wait;"),H("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[A("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),_r&&"MozBoxSizing"in document.createElement("div").style?w("&::moz-focus-inner",{border:0}):null,i("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),i("border",{border:"var(--n-border)"}),i("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),i("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[H("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[so({top:"50%",originalTransform:"translateY(-50%)"})]),Kr()]),i("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[w("~",[i("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),A("block",`
 display: flex;
 width: 100%;
 `),A("dashed",[i("border, state-border",{borderStyle:"dashed !important"})]),A("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),w("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),w("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const it=Object.assign(Object.assign({},Ee.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),st=ee({name:"Button",props:it,setup(o){const d=k(null),n=k(null),g=k(!1),u=Ke(()=>!o.quaternary&&!o.tertiary&&!o.secondary&&!o.text&&(!o.color||o.ghost||o.dashed)&&o.bordered),p=Re(lt,{}),{mergedSizeRef:s}=go({},{defaultSize:"medium",mergedSize:f=>{const{size:b}=o;if(b)return b;const{size:I}=p;if(I)return I;const{mergedSize:t}=f||{};return t?t.value:"medium"}}),a=N(()=>o.focusable&&!o.disabled),c=f=>{var b;o.nativeFocusBehavior||(f.preventDefault(),!o.disabled&&a.value&&((b=d.value)===null||b===void 0||b.focus({preventScroll:!0})))},P=f=>{var b;if(!o.disabled&&!o.loading){const{onClick:I}=o;I&&Q(I,f),o.text||(b=n.value)===null||b===void 0||b.play()}},S=f=>{switch(f.key){case"Enter":if(!o.keyboard)return;g.value=!1}},C=f=>{switch(f.key){case"Enter":if(!o.keyboard||o.loading){f.preventDefault();return}g.value=!0}},L=()=>{g.value=!1},{inlineThemeDisabled:$,mergedClsPrefixRef:z,mergedRtlRef:oe}=fo(o),V=Ee("Button","-button",at,nt,o,z),x=vo("Button",oe,z),F=N(()=>{const f=V.value,{common:{cubicBezierEaseInOut:b,cubicBezierEaseOut:I},self:t}=f,{rippleDuration:W,opacityDisabled:R,fontWeight:K,fontWeightStrong:O}=t,T=s.value,{dashed:q,type:Y,ghost:X,text:U,color:y,round:Z,circle:be,textColor:J,secondary:_e,tertiary:we,quaternary:Ie,strong:de}=o,ce={"font-weight":de?O:K};let E={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const ue=Y==="tertiary",Se=Y==="default",m=ue?"default":Y;if(U){const _=J||y,M=_||t[v("textColorText",m)];E={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":M,"--n-text-color-hover":_?ae(_):t[v("textColorTextHover",m)],"--n-text-color-pressed":_?Fe(_):t[v("textColorTextPressed",m)],"--n-text-color-focus":_?ae(_):t[v("textColorTextHover",m)],"--n-text-color-disabled":_||t[v("textColorTextDisabled",m)]}}else if(X||q){const _=J||y;E={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":y||t[v("rippleColor",m)],"--n-text-color":_||t[v("textColorGhost",m)],"--n-text-color-hover":_?ae(_):t[v("textColorGhostHover",m)],"--n-text-color-pressed":_?Fe(_):t[v("textColorGhostPressed",m)],"--n-text-color-focus":_?ae(_):t[v("textColorGhostHover",m)],"--n-text-color-disabled":_||t[v("textColorGhostDisabled",m)]}}else if(_e){const _=Se?t.textColor:ue?t.textColorTertiary:t[v("color",m)],M=y||_,fe=Y!=="default"&&Y!=="tertiary";E={"--n-color":fe?se(M,{alpha:Number(t.colorOpacitySecondary)}):t.colorSecondary,"--n-color-hover":fe?se(M,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-pressed":fe?se(M,{alpha:Number(t.colorOpacitySecondaryPressed)}):t.colorSecondaryPressed,"--n-color-focus":fe?se(M,{alpha:Number(t.colorOpacitySecondaryHover)}):t.colorSecondaryHover,"--n-color-disabled":t.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":M,"--n-text-color-hover":M,"--n-text-color-pressed":M,"--n-text-color-focus":M,"--n-text-color-disabled":M}}else if(we||Ie){const _=Se?t.textColor:ue?t.textColorTertiary:t[v("color",m)],M=y||_;we?(E["--n-color"]=t.colorTertiary,E["--n-color-hover"]=t.colorTertiaryHover,E["--n-color-pressed"]=t.colorTertiaryPressed,E["--n-color-focus"]=t.colorSecondaryHover,E["--n-color-disabled"]=t.colorTertiary):(E["--n-color"]=t.colorQuaternary,E["--n-color-hover"]=t.colorQuaternaryHover,E["--n-color-pressed"]=t.colorQuaternaryPressed,E["--n-color-focus"]=t.colorQuaternaryHover,E["--n-color-disabled"]=t.colorQuaternary),E["--n-ripple-color"]="#0000",E["--n-text-color"]=M,E["--n-text-color-hover"]=M,E["--n-text-color-pressed"]=M,E["--n-text-color-focus"]=M,E["--n-text-color-disabled"]=M}else E={"--n-color":y||t[v("color",m)],"--n-color-hover":y?ae(y):t[v("colorHover",m)],"--n-color-pressed":y?Fe(y):t[v("colorPressed",m)],"--n-color-focus":y?ae(y):t[v("colorFocus",m)],"--n-color-disabled":y||t[v("colorDisabled",m)],"--n-ripple-color":y||t[v("rippleColor",m)],"--n-text-color":J||(y?t.textColorPrimary:ue?t.textColorTertiary:t[v("textColor",m)]),"--n-text-color-hover":J||(y?t.textColorHoverPrimary:t[v("textColorHover",m)]),"--n-text-color-pressed":J||(y?t.textColorPressedPrimary:t[v("textColorPressed",m)]),"--n-text-color-focus":J||(y?t.textColorFocusPrimary:t[v("textColorFocus",m)]),"--n-text-color-disabled":J||(y?t.textColorDisabledPrimary:t[v("textColorDisabled",m)])};let ge={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};U?ge={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:ge={"--n-border":t[v("border",m)],"--n-border-hover":t[v("borderHover",m)],"--n-border-pressed":t[v("borderPressed",m)],"--n-border-focus":t[v("borderFocus",m)],"--n-border-disabled":t[v("borderDisabled",m)]};const{[v("height",T)]:xe,[v("fontSize",T)]:De,[v("padding",T)]:He,[v("paddingRound",T)]:ke,[v("iconSize",T)]:We,[v("borderRadius",T)]:Ae,[v("iconMargin",T)]:Me,waveOpacity:he}=t,Le={"--n-width":be&&!U?xe:"initial","--n-height":U?"initial":xe,"--n-font-size":De,"--n-padding":be||U?"initial":Z?ke:He,"--n-icon-size":We,"--n-icon-margin":Me,"--n-border-radius":U?"initial":be||Z?xe:Ae};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":b,"--n-bezier-ease-out":I,"--n-ripple-duration":W,"--n-opacity-disabled":R,"--n-wave-opacity":he},ce),E),ge),Le)}),B=$?po("button",N(()=>{let f="";const{dashed:b,type:I,ghost:t,text:W,color:R,round:K,circle:O,textColor:T,secondary:q,tertiary:Y,quaternary:X,strong:U}=o;b&&(f+="a"),t&&(f+="b"),W&&(f+="c"),K&&(f+="d"),O&&(f+="e"),q&&(f+="f"),Y&&(f+="g"),X&&(f+="h"),U&&(f+="i"),R&&(f+="j"+ro(R)),T&&(f+="k"+ro(T));const{value:y}=s;return f+="l"+y[0],f+="m"+I[0],f}),F,o):void 0;return{selfElRef:d,waveElRef:n,mergedClsPrefix:z,mergedFocusable:a,mergedSize:s,showBorder:u,enterPressed:g,rtlEnabled:x,handleMousedown:c,handleKeydown:C,handleBlur:L,handleKeyup:S,handleClick:P,customColorCssVars:N(()=>{const{color:f}=o;if(!f)return null;const b=ae(f);return{"--n-border-color":f,"--n-border-color-hover":b,"--n-border-color-pressed":Fe(f),"--n-border-color-focus":b,"--n-border-color-disabled":f}}),cssVars:$?void 0:F,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender}},render(){const{mergedClsPrefix:o,tag:d,onRender:n}=this;n==null||n();const g=pe(this.$slots.default,u=>u&&l("span",{class:`${o}-button__content`},u));return l(d,{ref:"selfElRef",class:[this.themeClass,`${o}-button`,`${o}-button--${this.type}-type`,`${o}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${o}-button--rtl`,this.disabled&&`${o}-button--disabled`,this.block&&`${o}-button--block`,this.enterPressed&&`${o}-button--pressed`,!this.text&&this.dashed&&`${o}-button--dashed`,this.color&&`${o}-button--color`,this.secondary&&`${o}-button--secondary`,this.loading&&`${o}-button--loading`,this.ghost&&`${o}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&g,l(Ir,{width:!0},{default:()=>pe(this.$slots.icon,u=>(this.loading||u)&&l("span",{class:`${o}-button__icon`,style:{margin:Dr(this.$slots.default)?"0":""}},l(co,null,{default:()=>this.loading?l(uo,{clsPrefix:o,key:"loading",class:`${o}-icon-slot`,strokeWidth:20}):l("div",{key:"icon",class:`${o}-icon-slot`,role:"none"},u)})))}),this.iconPlacement==="left"&&g,this.text?null:l(Gr,{ref:"waveElRef",clsPrefix:o}),this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__border`,style:this.customColorCssVars}):null,this.showBorder?l("div",{"aria-hidden":!0,class:`${o}-button__state-border`,style:this.customColorCssVars}):null)}});var ht=st;export{Lr as C,Nr as N,ut as _,ht as a,go as b,nt as c,to as f,qr as i,Wr as u};
