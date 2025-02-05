var V=Object.defineProperty;var B=(e,t,n)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _=(e,t,n)=>(B(e,typeof t!="symbol"?t+"":t,n),n);import{B as w}from"./browser-polyfill.js";import{s as D,U as j,r as S,E as G,a0 as K,i as z,a1 as N}from"./i18n.js";const We="/48x48.png";var q=(e=>(e[e.Today=0]="Today",e[e.All=1]="All",e[e.ByDays=2]="ByDays",e[e.Dashboard=3]="Dashboard",e))(q||{}),x=(e=>(e[e.UsageTime=0]="UsageTime",e[e.Sessions=1]="Sessions",e))(x||{}),u=(e=>(e[e.Dashboard=0]="Dashboard",e[e.WebsiteStats=1]="WebsiteStats",e[e.GeneralSettings=2]="GeneralSettings",e[e.WhiteList=3]="WhiteList",e[e.Limits=4]="Limits",e[e.Notifications=5]="Notifications",e[e.Pomodoro=6]="Pomodoro",e[e.About=7]="About",e))(u||{}),J=(e=>(e[e.Limits=0]="Limits",e[e.Notifications=1]="Notifications",e))(J||{}),Q=(e=>(e[e.WebSite=0]="WebSite",e[e.Document=1]="Document",e))(Q||{});function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function A(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function E(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function T(e){E(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||R(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function X(e,t){E(2,arguments);var n=T(e),s=A(t);if(isNaN(s))return new Date(NaN);if(!s)return n;var a=n.getDate(),o=new Date(n.getTime());o.setMonth(n.getMonth()+s+1,0);var r=o.getDate();return a>=r?o:(n.setFullYear(o.getFullYear(),o.getMonth(),a),n)}var Z={};function k(){return Z}function P(e,t){var n,s,a,o,r,i,c,d;E(1,arguments);var f=k(),O=A((n=(s=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(r=t.locale)===null||r===void 0||(i=r.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&s!==void 0?s:(c=f.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=T(e),h=l.getDay(),m=(h<O?7:0)+h-O;return l.setDate(l.getDate()-m),l.setHours(0,0,0,0),l}var Ye=6e4,Ve=36e5,Be=1e3;function $(e){E(1,arguments);var t=T(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function H(e){E(1,arguments);var t=T(e);return t.setDate(1),t.setHours(0,0,0,0),t}function ee(e,t){var n,s,a,o,r,i,c,d;E(1,arguments);var f=k(),O=A((n=(s=(a=(o=t==null?void 0:t.weekStartsOn)!==null&&o!==void 0?o:t==null||(r=t.locale)===null||r===void 0||(i=r.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&a!==void 0?a:f.weekStartsOn)!==null&&s!==void 0?s:(c=f.locale)===null||c===void 0||(d=c.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&n!==void 0?n:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=T(e),h=l.getDay(),m=(h<O?-7:0)+6-(h-O);return l.setDate(l.getDate()+m),l.setHours(23,59,59,999),l}function L(e,t){E(2,arguments);var n=A(t);return X(e,-n)}function b(){return new Date().toLocaleDateString("en-US")}const te=[new Date,new Date],ne=[P(new Date),ee(new Date)],se=[H(new Date),$(new Date)],oe=[H(L(new Date,1)),$(L(new Date,1))];function je(){return[{label:D.global.t("today.message"),range:te},{label:D.global.t("week.message"),range:ne},{label:D.global.t("month.message"),range:se},{label:D.global.t("lastMonth.message"),range:oe}]}function Ge(e,t){return e.getFullYear()==t.getFullYear()&&e.getMonth()==t.getMonth()&&e.getDate()==t.getDate()&&e.getHours()==t.getHours()&&e.getMinutes()==t.getMinutes()&&e.getSeconds()==t.getSeconds()}function ae(...e){}const I={log:ae};class re{constructor(){_(this,"url","");_(this,"favicon","");_(this,"summaryTime",0);_(this,"counter",0);_(this,"days",[])}init(t){this.url=t}incSummaryTime(){this.summaryTime+=1;const t=this.days.find(n=>n.date==b());t===void 0?this.addNewDay().incSummaryTime():t.incSummaryTime()}incCounter(){this.counter+=1;const t=this.days.find(n=>n.date==b());t===void 0?this.addNewDay().incCounter():t.incCounter()}addNewDay(){const t=new U;return t.init(b()),this.days.push(t),t}deserialize(t){var n;return this.url=t.url,this.counter=t.counter,this.favicon=t.favicon,this.summaryTime=t.summaryTime,((n=t.days)==null?void 0:n.length)>0&&(this.days=t.days.map(s=>new U().deserialize(s))),this}setFavicon(t){this.favicon=t}}class U{constructor(){_(this,"counter",0);_(this,"date","");_(this,"summary",0)}init(t){this.date=t}incSummaryTime(){this.summary+=1}incCounter(){this.counter+=1}deserialize(t){return this.counter=t.counter,this.date=t.date,this.summary=t.summary,this}}class ie{constructor(){_(this,"domain","");_(this,"intervals",[]);_(this,"day","")}init(t,n){this.domain=n,this.intervals=[],this.day=t}addInterval(){const t=this.getCurrentStringDate();this.intervals.push(t+"-"+t),I.log(`Add interval ${this.domain} - ${t} - ${t}`)}closeInterval(){const t=this.getCurrentStringDate(),n=this.intervals[this.intervals.length-1];n!=null&&n.split("-")[0]==n.split("-")[1]&&(this.intervals.pop(),this.intervals.push(n.split("-")[0]+"-"+t),I.log(`Close interval ${this.domain} - ${n.split("-")[0]} - ${t}`))}deserialize(t){return this.domain=t.domain,this.day=t.day,this.intervals=t.intervals,this}getCurrentStringDate(){const t=new Date;return t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}}var p=(e=>(e["Sound 1"]="1.mp3",e["Sound 2"]="2.mp3",e["Sound 3"]="3.mp3",e["Sound 4"]="4.mp3",e["Sound 5"]="5.mp3",e["Sound 6"]="6.mp3",e["Sound 7"]="7.mp3",e["Sound 8"]="8.mp3",e["Sound 9"]="9.mp3",e["Sound 10"]="10.mp3",e["Sound 11"]="11.mp3",e["Sound 12"]="12.mp3",e["Sound 13"]="13.mp3",e))(p||{});const v=60,M=60*v,le=1e3,ue=60*le,ce=60*ue;function F(e){const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t}function Ke(e,t){return(F(t).valueOf()-F(e).valueOf())/864e5+1}var de=(e=>(e.BLACK_LIST="black_list",e.RESTRICTION_LIST="restriction_list",e.NOTIFICATION_LIST="notification_list",e.NOTIFICATION_MESSAGE="notification_message",e.INTERVAL_INACTIVITY="inactivity_interval",e.DARK_MODE="night_mode",e.VIEW_TIME_IN_BADGE="view_time_in_badge",e.SHOW_CHANGELOG="show_changelog",e.BLOCK_DEFERRAL="view_block_deferral",e.BLOCK_DEFERRAL_TIME="view_block_deferral_time",e.DAILY_SUMMARY_NOTIFICATION_TIME="daily-summary-notification-time",e.DAILY_NOTIFICATION="daily_notification",e.REVIEW_DATE="review_date",e.REVIEW_PROMPT_AT="review_prompt_at",e.INSTALL_DATE="install-date",e.PROMO_CLEAR_YOUTUBE_ON_LIMITS="promo-clear-youtube-on-limits",e.PROMO_CLEAR_YOUTUBE_ON_BLOCK="promo-clear-youtube-on-block",e.IS_POMODORO_ENABLED="is-pomodoro-enabled",e.POMODORO_START_TIME="pomodoro-start-time",e.POMODORO_INTERVAL_WORK="pomodoro-interval-work",e.POMODORO_AUDIO_AFTER_WORK="pomodoro-audio-after-work",e.POMODORO_AUDIO_AFTER_REST="pomodoro-audio-after-rest",e.POMODORO_AUDIO_AFTER_FINISHED="pomodoro-audio-after-finished",e.POMODORO_INTERVAL_REST="pomodoro-interval-rest",e.POMODORO_FREQUENCY="pomodoro-frequency",e.PROMO_CLEAR_YOUTUBE_DATE="promo-clear-youtube-date",e.PROMO_CLEAR_YOUTUBE_PROMPT_AT="promo-clear-youtube-prompt-at",e))(de||{}),y=(e=>(e.TABS="tabs",e.TIMEINTERVAL_LIST="time_interval",e))(y||{});function _e(e){switch(e){case"tabs":return new re;case"time_interval":return new ie}}var fe=(e=>(e[e.Seconds_30=30]="Seconds_30",e[e.Seconds_45=45]="Seconds_45",e[e.Min_1=60]="Min_1",e[e.Min_2=120]="Min_2",e[e.Min_5=300]="Min_5",e[e.Min_10=600]="Min_10",e[e.Min_20=1200]="Min_20",e[e.Min_30=1800]="Min_30",e))(fe||{});const Oe="You have spent a lot of time on this site",he=30,me=!1,ge=!0,De=!0,Ee=20*ce/1e3,ve=!0,we=!1,Te=!1,Me=!1,Ae=25*v,pe=5*v,be=3,Re=p["Sound 3"],ye=p["Sound 8"],Se=p["Sound 10"];function Ne(e){switch(e){case"black_list":return[];case"restriction_list":return[];case"notification_list":return[];case"notification_message":return Oe;case"inactivity_interval":return he;case"night_mode":return me;case"view_time_in_badge":return ge;case"view_block_deferral":return De;case"view_block_deferral_time":return[];case"daily-summary-notification-time":return Ee;case"daily_notification":return ve;case"show_changelog":return we;case"promo-clear-youtube-on-block":case"promo-clear-youtube-on-limits":return Te;case"is-pomodoro-enabled":return Me;case"pomodoro-interval-work":return Ae;case"pomodoro-interval-rest":return pe;case"pomodoro-frequency":return be;case"pomodoro-audio-after-work":return Re;case"pomodoro-audio-after-rest":return ye;case"pomodoro-audio-after-finished":return Se}}function Le(e){for(const t in e)if(e.hasOwnProperty(t))return!1;return JSON.stringify(e)===JSON.stringify({})}function ze(e,t){if(e===t)return!0;var n=function(s){return s.indexOf("www.")>-1?s.split("www.")[1]:s};return n(e)===n(t)}function qe(e,t){return(e/t*100).toFixed(2)}class Ie{async getDeserializeList(t){return new Promise(async n=>{const a=(await w.storage.local.get(t))[t];if(a!=null){let o=[];for(let r=0;r<a.length;r++){const i=_e(t);o.push(i.deserialize(a[r]))}return n(o)}else n([])})}async saveTabs(t){return await w.storage.local.set({[y.TABS]:t})}async saveIntervalList(t){return await w.storage.local.set({[y.TIMEINTERVAL_LIST]:t})}async saveValue(t,n){return await w.storage.local.set({[t]:n})}async getValue(t,n){let s=await w.storage.local.get(t);return Le(s)&&n!=null?(await this.saveValue(t,n),n):s[t]}}function Ue(){return new Ie}const g=class g{constructor(){_(this,"_settings",new Map);if(g.instance)throw new Error("Error - use Settings.getInstance()")}static getInstance(){return g.instance=g.instance||new g,g.instance}async getSetting(t){return this._settings.has(t)?this._settings.get(t):await this.getValue(t)}async reloadSetting(t){await this.getValue(t)}async getValue(t){const s=await Ue().getValue(t,Ne(t));return this._settings.set(t,s),s}};_(g,"instance");let C=g;typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Fe=()=>{};function xe(e,t,n){let s;j(n)?s={evaluating:n}:s=n||{};const{lazy:a=!1,evaluating:o=void 0,shallow:r=!0,onError:i=Fe}=s,c=S(!a),d=r?G(t):S(t);let f=0;return K(async O=>{if(!c.value)return;f++;const l=f;let h=!1;o&&Promise.resolve().then(()=>{o.value=!0});try{const m=await e(Y=>{O(()=>{o&&(o.value=!1),h||Y()})});l===f&&(d.value=m)}catch(m){i(m)}finally{o&&l===f&&(o.value=!1),h=!0}}),a?z(()=>(c.value=!0,d.value)):d}function Je(e,t){return e*M+t*v}function Qe(e){const t=Math.floor(e/M),n=e%M,s=Math.floor(n/v);return{hours:t,minutes:s}}function Ce(e){let t=Math.floor(e/3600/24);const n=e%(3600*24);let s=Math.floor(n/3600);const a=e%3600;let o=Math.floor(a/60),r=a%60;function i(l,h,m=!1){return l>0?`${m?W(l):l} ${h}`:""}const c=i(t,D.global.t("d.message")),d=i(s,D.global.t("h.message"),c!=""),f=i(o,D.global.t("m.message"),d!=""),O=i(r,D.global.t("s.message"),f!="");return`${c} ${d} ${f} ${O}`}function Xe(e){const t=e%86400;let n=Math.floor(t/3600);const s=e%3600;let a=Math.floor(s/60);function o(r,i,c=!1){return`${c?W(r):r} ${i}`}return`${o(n,N().h.message)} ${o(a,N().m.message,!0)}`}function W(e){return e<10?`0${e}`:e}function Ze(e){const t=e.split(":");return Number(t[0])*M+Number(t[1])*v+Number(t[2])}function Pe(e){const t=Math.floor(e*v);return Ce(t)}function et(e){switch(e){case u.Dashboard:return"dashboard";case u.WebsiteStats:return"website-stats";case u.GeneralSettings:return"settings";case u.About:return"about";case u.Limits:return"limits";case u.WhiteList:return"whitelist";case u.Notifications:return"notifications";case u.Pomodoro:return"pomodoro"}}function tt(e){switch(e){case"dashboard":return u.Dashboard;case"website-stats":return u.WebsiteStats;case"settings":return u.GeneralSettings;case"about":return u.About;case"limits":return u.Limits;case"whitelist":return u.WhiteList;case"notifications":return u.Notifications;case"pomodoro":return u.Pomodoro}}const nt="/close.svg",st="https://chromewebstore.google.com/detail/web-activity-time-tracker/hhfnghjdeddcfegfekjeihfmbjenlomm/reviews",ot="https://chromewebstore.google.com/detail/web-activity-time-tracker/hhfnghjdeddcfegfekjeihfmbjenlomm/support",at="https://chromewebstore.google.com/detail/clean-youtube-update-yout/kalhfjomailhflienkfajocjodgjipie?utm_source=watt";export{xe as $,Se as A,De as B,st as C,me as D,I as E,ot as F,y as G,Ze as H,Me as I,Pe as J,tt as K,J as L,T as M,Oe as N,R as O,p as P,X as Q,P as R,de as S,ne as T,k as U,ge as V,Ve as W,Ye as X,Be as Y,L as Z,nt as _,je as a,et as a0,qe as a1,x as a2,re as a3,Ke as a4,ee as a5,ue as a6,ae as a7,Xe as a8,C as b,Ce as c,Ge as d,u as e,q as f,We as g,he as h,Ue as i,we as j,fe as k,b as l,at as m,Q as n,ze as o,Je as p,Qe as q,E as r,ve as s,A as t,Ee as u,Ae as v,pe as w,be as x,Re as y,ye as z};
