(this["webpackJsonpreact-tokenfield-example"]=this["webpackJsonpreact-tokenfield-example"]||[]).push([[0],[,,,function(e,t,n){e.exports=n(12)},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(4);var o=n(0),r=n.n(o),a=n(1),c=n.n(a),u=n(2);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,f="_2FBTU",p="_OVdeL",v="_kR9pS",y="_2IYfc",x="_3r9SC",m="_1Clb3",k="_2tiFr",h="_3WF2Q",g=r.a.forwardRef((function(e,t){var n=e.index,a=e.deleteToken,c=e.text,u=e.editToken,l=e.focus,i=e.getTokenStyle,s=e.isValid,d=e.deleteSelected,f=e.selected,p=e.hideRemoveButton,y=Object(o.useRef)(null);return Object(o.useImperativeHandle)(t,(function(){return{focus:function(){y.current!==window.document.activeElement&&y.current.focus()}}})),r.a.createElement("span",{tabIndex:-1,onKeyDown:function(e){return t=e,void(n>0&&("ArrowLeft"===t.key||t.shiftKey&&"Tab"===t.key)?(l(n,"back"),t.preventDefault()):"ArrowRight"===t.key||!t.shiftKey&&"Tab"===t.key?(l(n,"next"),t.preventDefault()):t.metaKey||1!==t.key.length&&"Enter"!==t.key?" "===t.key?t.preventDefault():"Backspace"!==t.key&&"Delete"!==t.key||(d(),t.preventDefault()):(u(n),t.preventDefault()));var t},ref:y,onDoubleClick:function(e){return function(e){e.ctrlKey||e.shiftKey||u(n)}(e)},onMouseDown:function(e){return function(e){l(n,"self"),e.preventDefault()}(e)},className:v+" "+(s(c)?"":h)+" "+(f?k:""),style:i({text:c,selected:f,invalid:!s(c),index:n})},r.a.createElement("span",{className:x},c),p?r.a.createElement("span",{onClick:function(e){return function(e){e.ctrlKey||e.shiftKey||a([n])}(e)},className:m}):null)})),I=function(){function e(){}return e.inputCaretEnd=function(e){return!!e&&(e.selectionStart===e.value.length&&e.selectionEnd===e.value.length)},e.inputTextFullSelection=function(e){return!!e&&(0===e.selectionStart&&e.selectionEnd===e.value.length)},e.inputCaretStart=function(e){return!!e&&(0===e.selectionStart&&0===e.selectionEnd)},e}(),b=r.a.forwardRef((function(e,t){var n=e.index,a=e.text,c=e.updateToken,u=e.deleteToken,l=e.parseToken,i=e.containDelimiter,s=e.hideRemoveButton,d=Object(o.useRef)(null),f=Object(o.useRef)(null);function k(e){h(d.current.value,e)}function h(e,t){e?c(n,l(e),t):u([n])}return Object(o.useImperativeHandle)(t,(function(){return{focus:function(){d.current.focus()}}})),r.a.createElement("span",{className:p},r.a.createElement("input",{className:y,ref:d,onPaste:function(){setTimeout((function(){k("self")}),0)},onInput:function(e){f.current.innerText=d.current.value||"_"},onKeyDown:function(e){var t;"Enter"===(t=e).key||"Tab"===t.key||i(t.key)?(k("self"),t.preventDefault(),t.stopPropagation()):"Backspace"!==t.key||d.current.value?"ArrowLeft"===t.key&&I.inputCaretStart(d.current)?(k("back"),t.preventDefault()):"ArrowRight"===t.key&&I.inputCaretEnd(d.current)&&(k("next"),t.preventDefault()):(u([n]),t.preventDefault())},defaultValue:a,onBlur:function(e){return function(e){var t=e.nativeEvent.target.value;setTimeout((function(){h(t,"self")}),0)}(e)},type:"text"}),r.a.createElement("span",{style:{visibility:"hidden"},className:v},r.a.createElement("span",{className:x,ref:f},a),s?r.a.createElement("span",{onClick:function(){return u([n])},className:m}):null))})),S={tokens:[],selectedIndexes:[],editIndex:-1,focusIndex:-1,lastActionTime:""};function T(e,t,n){void 0===n&&(n=-1),"none"===t?e.focusIndex=-2:"back"===t?function(e,t){-1!==e?t.focusIndex=Math.max(0,e-1):t.tokens.length>0&&(t.focusIndex=t.tokens.length-1)}(e.focusIndex,e):"next"===t?function(e,t){-1!==e&&t.tokens.length!==e+1?t.focusIndex=Math.min(t.tokens.length-1,e+1):t.focusIndex=-1}(e.focusIndex,e):e.focusIndex=n}!function(e){e[e.Add=0]="Add",e[e.Update=1]="Update",e[e.Delete=2]="Delete",e[e.DeleteLast=3]="DeleteLast",e[e.Select=4]="Select",e[e.Edit=5]="Edit",e[e.Focus=6]="Focus",e[e.FocusNew=7]="FocusNew"}(d||(d={}));var E=function(e,t){var n,o=l({},e),r=[].concat(o.tokens);switch(t.type){case d.Update:return o.selectedIndexes=[],r.splice.apply(r,[t.payload.index,1].concat(t.payload.tokens)),o.lastActionTime=(new Date).toISOString(),o.tokens=r,o.editIndex=-1,T(o,t.payload.focus),o.selectedIndexes=[o.focusIndex],o;case d.Delete:return n=t.payload.indexes.length-1,o.lastActionTime=(new Date).toISOString(),o.tokens=o.tokens.filter((function(e,n){return!t.payload.indexes.includes(n)})),t.payload.indexes.length>1?o.focusIndex=-1:-1!==o.focusIndex&&(o.focusIndex=Math.min(t.payload.indexes[n],o.tokens.length-1)),o.selectedIndexes=-1!==o.focusIndex?[o.focusIndex]:[],o.editIndex=-1,o;case d.Select:return o.lastActionTime=(new Date).toISOString(),t.payload.add?o.selectedIndexes=Array.from(new Set([].concat(o.selectedIndexes,t.payload.indexes))):o.selectedIndexes=t.payload.indexes,t.payload.indexes.length&&o.tokens.length!==o.selectedIndexes.length&&-1!==o.focusIndex&&(o.focusIndex=t.payload.indexes[t.payload.indexes.length-1]),o.editIndex=-1,o;case d.Add:return o.lastActionTime=(new Date).toISOString(),o.selectedIndexes=[],t.payload.tokens&&(o.tokens=[].concat(o.tokens,t.payload.tokens)),T(o,t.payload.focus),o.editIndex=-1,o;case d.Edit:return o.lastActionTime=(new Date).toISOString(),o.selectedIndexes=[],o.editIndex=t.payload.index,o.focusIndex=t.payload.index,o;case d.FocusNew:return o.lastActionTime=(new Date).toISOString(),o.selectedIndexes=[],o.focusIndex=-1,o;case d.Focus:return o.lastActionTime=(new Date).toISOString(),o.editIndex=-1,T(o,t.payload.focus,t.payload.index),o.selectedIndexes=-1!==o.focusIndex?[o.focusIndex]:[],o;default:return e}},w=r.a.forwardRef((function(e,t){var n=e.state,a=e.placeholder,c=e.addToken,u=e.hideRemoveButton,l=e.deleteLast,i=e.selectToken,s=e.allTokenAreSelected,d=e.containDelimiter,f=e.parseToken,k=e.focusLast,h=e.deleteSelected,g=Object(o.useRef)(null),b=Object(o.useRef)(null);function S(){b.current.innerText=g.current.value||(n.tokens.length?"_":a)}function T(e){"Backspace"===e.key||"Delete"===e.key?s()&&I.inputTextFullSelection(g.current)?(h(),g.current.value=""):I.inputCaretStart(g.current)&&l():"Enter"===e.key||d(e.key)?function(e,t){void 0===t&&(t="self");var n=g.current.value.trim();if(g.current.value="","self"===t&&!n)return;c(f(n),t),e.preventDefault()}(e):"ArrowLeft"===e.key&&I.inputCaretStart(g.current)||e.shiftKey&&"Tab"===e.key?(k(),e.preventDefault()):e.metaKey||e.ctrlKey||!I.inputTextFullSelection(g.current)||i([],!1)}return Object(o.useEffect)((function(){S()})),Object(o.useImperativeHandle)(t,(function(){return{focus:function(){var e;return null===(e=g.current)||void 0===e?void 0:e.focus()},value:function(){var e;return null===(e=g.current)||void 0===e?void 0:e.value},clear:function(){return g.current.value=""},selectText:function(){return g.current.select()}}})),r.a.createElement("span",{className:p},r.a.createElement("input",{placeholder:0===n.tokens.length?a:"",className:y,ref:g,onInput:function(e){return S()},onKeyDown:function(e){return T(e)},onPaste:function(){setTimeout((function(){c(f(g.current.value),"self"),g.current.value=""}),0)},type:"text"}),r.a.createElement("span",{style:{visibility:"hidden"},className:v},r.a.createElement("span",{className:x,ref:b}),u?r.a.createElement("span",{className:m}):null))})),D=function(e){var t,n=e.tokens,a=void 0===n?[]:n,c=e.delimiters,u=void 0===c?" ":c,i=e.placeholder,p=void 0===i?"":i,v=e.pattern,y=void 0===v?"":v,x=e.readonly,m=void 0!==x&&x,k=e.showRemoveButton,h=void 0===k||k,I=e.tokenFieldCSS,T=e.getTokenCSS,D=e.onChange,A=e.autoFocus,O=void 0===A||A,j=function(e,t,n,r){var a=Object(o.useReducer)(E,l({},S,{tokens:e})),c=a[0],u=a[1];function i(e,t){u({type:d.Select,payload:{indexes:e,add:t}})}function s(e){n||u({type:d.Delete,payload:{indexes:[].concat(e)}})}function f(e,t){u({type:d.Focus,payload:{focus:t,index:e}})}return{state:c,selectToken:i,focus:f,focusLast:function(){f(-1,"back")},focusNew:function(){u({type:d.FocusNew})},updateToken:function(e,t,o){n||u({type:d.Update,payload:{tokens:t,index:e,focus:o}})},deleteToken:s,deleteLast:function(){n||u({type:d.Delete,payload:{indexes:[c.tokens.length-1]}})},deleteSelected:function(){n||s([].concat(c.selectedIndexes,[c.focusIndex]))},allTokenAreSelected:function(){return c.tokens.length===c.selectedIndexes.length},selectAll:function(){i(Array.from(c.tokens.keys()),!1)},editToken:function(e){n||u({type:d.Edit,payload:{index:e}})},addToken:function(e,t){n||u({type:d.Add,payload:{tokens:e,focus:t}})},isValid:function(e){return new RegExp(t).test(e)},getSelectedTokenText:function(){return c.selectedIndexes.map((function(e){return c.tokens[e]}))},getTokenStyle:function(e){return r?r(e):{}}}}(a,y,m,T),R=j.state,C=j.isValid,N=j.focusNew,F=j.selectAll,K=j.addToken,B=j.deleteSelected,_=j.getSelectedTokenText,L=Object(o.useRef)([]),z=Object(o.useRef)(null),M=Object(o.useRef)(null);function U(e){return u.includes(e)}function H(e){for(var t,n=[],o=e.trim(),r="[\u05bf\u05bf\u05bf\u05bf\u05bf\\n\\"+u+"]+",a=s(o.split(new RegExp(r)));!(t=a()).done;){var c=t.value;c.trim()&&n.push(c)}return n}function V(e,t){e&&(L.current[t]=e)}function P(e){var t=document.createElement("textarea");t.style.left="0",t.style.top="0",t.style.opacity="0",t.style.position="fixed",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}return Object(o.useEffect)((function(){if(-2!==R.focusIndex)if(-1!==R.focusIndex)try{L.current[R.focusIndex].focus()}catch(e){console.error(e)}else m||!O&&!R.lastActionTime||z.current.focus()}),[R.lastActionTime,R.focusIndex]),Object(o.useEffect)((function(){if(D){var e={tokens:R.tokens,valid:[],invalid:[]};R.tokens.forEach((function(t){C(t)?e.valid.push(t):e.invalid.push(t)})),D(e)}}),[R.tokens]),r.a.createElement("div",{className:f,style:(t=I,{resize:(null===t||void 0===t?void 0:t.resize)||"both",height:(null===t||void 0===t?void 0:t.height)||"auto",border:(null===t||void 0===t?void 0:t.border)||"1px solid #ccc",gap:(null===t||void 0===t?void 0:t.gap)||"5px",padding:(null===t||void 0===t?void 0:t.padding)||"10px",background:(null===t||void 0===t?void 0:t.background)||"",color:(null===t||void 0===t?void 0:t.color)||"#333",boxShadow:(null===t||void 0===t?void 0:t.boxShadow)||"none",borderRadius:(null===t||void 0===t?void 0:t.borderRadius)||"unset",maxHeight:(null===t||void 0===t?void 0:t.maxHeight)||"200px"}),onKeyDown:function(e){return function(e){var t=navigator.userAgent.indexOf("Mac")?e.metaKey:e.ctrlKey;if(t&&"KeyA"===e.nativeEvent.code)F(),z.current.selectText(),e.preventDefault();else if(t&&"KeyC"===e.nativeEvent.code){var n;P([].concat(_(),[null===(n=z.current)||void 0===n?void 0:n.value()]).join(u[0])),N(),e.preventDefault()}else if(t&&"KeyX"===e.key){var o,r=(null===(o=z.current)||void 0===o?void 0:o.value())||"";z.current.clear(),P([].concat(_(),[r]).join(u[0])),B(),e.preventDefault()}}(e)},tabIndex:-1,ref:M,onFocus:function(e){return function(e){e.target===M.current&&N()}(e)},onBlur:function(e){return function(e){var t,n,o=null===(t=z.current)||void 0===t?void 0:t.value(),r=null===(n=e.relatedTarget)||void 0===n?void 0:n.closest("."+M.current.className);o&&r!==M.current&&(z.current.clear(),K(H(o),"none"))}(e)}},R.tokens.map((function(e,t){return t!==R.editIndex||m?function(e,t){return r.a.createElement(g,Object.assign({},j,{text:e,hideRemoveButton:h,ref:function(e){return V(e,t)},selected:R.selectedIndexes.includes(t),index:t,key:"token_"+t}))}(e,t):function(e,t){return r.a.createElement(b,Object.assign({},j,{text:e,ref:function(e){return V(e,t)},index:t,hideRemoveButton:h,containDelimiter:function(e){return U(e)},parseToken:function(e){return H(e)},selected:R.selectedIndexes.includes(t),key:"token_input_"+t}))}(e,t)})),m?r.a.createElement("span",null):r.a.createElement(w,Object.assign({placeholder:p,hideRemoveButton:h,ref:z},j,{containDelimiter:function(e){return U(e)},parseToken:function(e){return H(e)}})))},A=(n(11),function(){var e=Object(o.useState)(["shahar.levi@me.com","john.smith@google.com","invalid-email"]),t=Object(u.a)(e,2),n=t[0],a=t[1];return r.a.createElement("div",{style:{width:"400px",padding:"10px",margin:"0 auto"}},r.a.createElement(D,{placeholder:"Type an email",onChange:function(e){var t=e.tokens;return a(t)},pattern:"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",autoFocus:!1,showRemoveButton:!1,tokenFieldCSS:{gap:"10px",background:"#fff",color:"#333",borderRadius:"2px",resize:"none"},tokens:n}),r.a.createElement("h3",null,"All Tokens"),r.a.createElement("ul",null,n.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))});c.a.render(r.a.createElement(A,null),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.2f9f0810.chunk.js.map