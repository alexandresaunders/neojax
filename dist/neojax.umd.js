/* neojax version 2.1.6 Copyright (c) Keimeno
   licensed under Apache-2.0 http://www.apache.org/licenses/LICENSE-2.0 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).neojax=t()}(this,(function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function t(e,t,n,r){return new(n||(n=Promise))((function(s,o){function u(e){try{i(r.next(e))}catch(e){o(e)}}function a(e){try{i(r.throw(e))}catch(e){o(e)}}function i(e){e.done?s(e.value):new n((function(t){t(e.value)})).then(u,a)}i((r=r.apply(e,t||[])).next())}))}function n(e,t){var n,r,s,o,u={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(s=2&o[0]?r.return:o[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,o[1])).done)return s;switch(r=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(s=(s=u.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){u.label=o[1];break}if(6===o[0]&&u.label<s[1]){u.label=s[1],s=o;break}if(s&&u.label<s[2]){u.label=s[2],u.ops.push(o);break}s[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(e){o=[6,e],r=0}finally{n=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}return self.fetch||(self.fetch=function(e,t){return t=t||{},new Promise((function(n,r){var s=new XMLHttpRequest,o=[],u=[],a={},i=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:i,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return a[e.toLowerCase()]},has:function(e){return e.toLowerCase()in a}}}};for(var c in s.open(t.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){o.push(t=t.toLowerCase()),u.push([t,n]),a[t]=a[t]?a[t]+","+n:n})),n(i())},s.onerror=r,s.withCredentials="include"==t.credentials,t.headers)s.setRequestHeader(c,t.headers[c]);s.send(t.body||null)}))}),new(function(){function r(t){this._options={},this._defaultHeaders={"Content-Type":"application/json; charset=utf-8"};var n={};t&&(this._options=t,n=t.headers||{}),this._options.headers=e(e({},this._defaultHeaders),n)}return r.prototype.create=function(e){return new r(e)},r.prototype.sendRequest=function(r,s,o,u){return t(this,void 0,Promise,(function(){var t,a,i,c,l;return n(this,(function(n){switch(n.label){case 0:return t=r,a=this._options.headers||{},this._options.baseUrl&&(t=this._options.baseUrl+r),u&&(u.baseUrl&&(t=u.baseUrl+r),u.headers&&(a=e(e({},a),u.headers))),i={method:s,headers:e({},a)},o&&(i.body=JSON.stringify(o)),[4,fetch(t,i)];case 1:c=n.sent(),a=this.parseHeadersToNeojaxHeaders(c.headers),n.label=2;case 2:return n.trys.push([2,4,,9]),[4,c.json()];case 3:return l=n.sent(),[3,9];case 4:n.sent(),n.label=5;case 5:return n.trys.push([5,7,,8]),[4,c.text()];case 6:return l=n.sent(),[3,8];case 7:return n.sent(),l={},[3,8];case 8:return[3,9];case 9:return[2,{status:c.status,headers:a,url:c.url,success:c.ok,message:c.statusText,data:l}]}}))}))},r.prototype.manageRequest=function(e,r,s,o){return void 0===s&&(s=null),t(this,void 0,Promise,(function(){var u=this;return n(this,(function(a){return[2,new Promise((function(a,i){return t(u,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,this.sendRequest(r,e,s,o)];case 1:return(t=n.sent()).success?a(t):i({response:t,message:t.message}),[2]}}))}))}))]}))}))},r.prototype.parseHeadersToNeojaxHeaders=function(e){var t={};return e.forEach((function(e,n){t[n]=e})),t},r.prototype.get=function(e,t){return this.manageRequest("GET",e,null,t)},r.prototype.post=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("POST",e,t,n)},r.prototype.put=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("PUT",e,t,n)},r.prototype.delete=function(e,t,n){return void 0===t&&(t=null),this.manageRequest("DELETE",e,t,n)},Object.defineProperty(r.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultHeaders",{get:function(){return this._defaultHeaders},enumerable:!0,configurable:!0}),r}())}));
