import{S as ve,o as Ee,a as qe,s as ee,b as Ne,c as i,U as F,g as oe,d as e,e as de,f as Ae,h as Le,i as Te,j as je,p as De,L as Me,P as Ce,k as Fe,u as _e,B as Ye,R as Ue,l as ge,m as Be,n as He,q as Qe,r as Ge,t as Ke,v as he,w as ue,x as Ze,y as ze,z as Ve,A as xe,C as Je,D as we,E as We,F as pe,G as H,H as z,I as re,J as w,K as Se,M as p,N as x,O as c,Q as se,T as L,V as Re,W as me,X as Xe,Y as Z,Z as $e,_ as et}from"./index-C1TeO9iK.js";import{e as ne,s as tt,i as le,g as at,a as rt,b as st}from"./databaseService-ldi9NRwe.js";function ae(o,m=null,b){if(typeof o!="object"||o===null||ve in o)return o;const T=Le(o);if(T!==Ee&&T!==qe)return o;var d=new Map,S=Te(o),I=ee(0);S&&d.set("length",ee(o.length));var k;return new Proxy(o,{defineProperty(v,t,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&Ne();var r=d.get(t);return r===void 0?(r=ee(a.value),d.set(t,r)):i(r,ae(a.value,k)),!0},deleteProperty(v,t){var a=d.get(t);if(a===void 0)t in v&&d.set(t,ee(F));else{if(S&&typeof t=="string"){var r=d.get("length"),s=Number(t);Number.isInteger(s)&&s<r.v&&i(r,s)}i(a,F),be(I)}return!0},get(v,t,a){var E;if(t===ve)return o;var r=d.get(t),s=t in v;if(r===void 0&&(!s||(E=oe(v,t))!=null&&E.writable)&&(r=ee(ae(s?v[t]:F,k)),d.set(t,r)),r!==void 0){var h=e(r);return h===F?void 0:h}return Reflect.get(v,t,a)},getOwnPropertyDescriptor(v,t){var a=Reflect.getOwnPropertyDescriptor(v,t);if(a&&"value"in a){var r=d.get(t);r&&(a.value=e(r))}else if(a===void 0){var s=d.get(t),h=s==null?void 0:s.v;if(s!==void 0&&h!==F)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return a},has(v,t){var h;if(t===ve)return!0;var a=d.get(t),r=a!==void 0&&a.v!==F||Reflect.has(v,t);if(a!==void 0||de!==null&&(!r||(h=oe(v,t))!=null&&h.writable)){a===void 0&&(a=ee(r?ae(v[t],k):F),d.set(t,a));var s=e(a);if(s===F)return!1}return r},set(v,t,a,r){var g;var s=d.get(t),h=t in v;if(S&&t==="length")for(var E=a;E<s.v;E+=1){var Y=d.get(E+"");Y!==void 0?i(Y,F):E in v&&(Y=ee(F),d.set(E+"",Y))}s===void 0?(!h||(g=oe(v,t))!=null&&g.writable)&&(s=ee(void 0),i(s,ae(a,k)),d.set(t,s)):(h=s.v!==F,i(s,ae(a,k)));var N=Reflect.getOwnPropertyDescriptor(v,t);if(N!=null&&N.set&&N.set.call(r,a),!h){if(S&&typeof t=="string"){var R=d.get("length"),_=Number(t);Number.isInteger(_)&&_>=R.v&&i(R,_+1)}be(I)}return!0},ownKeys(v){e(I);var t=Reflect.ownKeys(v).filter(s=>{var h=d.get(s);return h===void 0||h.v!==F});for(var[a,r]of d)r.v!==F&&!(a in v)&&t.push(a);return t},setPrototypeOf(){Ae()}})}function be(o,m=1){i(o,o.v+m)}function ye(o){for(var m=de,b=de;m!==null&&!(m.f&(Ye|Ue));)m=m.parent;try{return ge(m),o()}finally{ge(b)}}function ie(o,m,b,T){var W;var d=(b&Be)!==0,S=!He||(b&Qe)!==0,I=(b&Ge)!==0,k=(b&ze)!==0,v=!1,t;I?[t,v]=je(()=>o[m]):t=o[m];var a=ve in o||Ke in o,r=((W=oe(o,m))==null?void 0:W.set)??(a&&I&&m in o?l=>o[m]=l:void 0),s=T,h=!0,E=!1,Y=()=>(E=!0,h&&(h=!1,k?s=_e(T):s=T),s);t===void 0&&T!==void 0&&(r&&S&&De(),t=Y(),r&&r(t));var N;if(S)N=()=>{var l=o[m];return l===void 0?Y():(h=!0,E=!1,l)};else{var R=ye(()=>(d?he:ue)(()=>o[m]));R.f|=Me,N=()=>{var l=e(R);return l!==void 0&&(s=void 0),l===void 0?s:l}}if(!(b&Ce))return N;if(r){var _=o.$$legacy;return function(l,P){return arguments.length>0?((!S||!P||_||v)&&r(P?N():l),l):N()}}var g=!1,u=!1,A=Ze(t),C=ye(()=>he(()=>{var l=N(),P=e(A);return g?(g=!1,u=!0,P):(u=!1,A.v=l)}));return d||(C.equals=Fe),function(l,P){if(Ve!==null&&(g=u,N(),e(A)),arguments.length>0){const U=P?e(C):S&&I?ae(l):l;return C.equals(U)||(g=!0,i(A,U),E&&s!==void 0&&(s=U),_e(()=>e(C))),l}return e(C)}}var nt=p('<p class="svelte-mkwcf8">You are most suited for <strong class="svelte-mkwcf8"> </strong></p>'),lt=p('<strong class="svelte-mkwcf8"> </strong> and <strong class="svelte-mkwcf8"> </strong>',1),it=p('<strong class="svelte-mkwcf8"> </strong><!><!>',1),vt=p('<p class="svelte-mkwcf8">You are equally suited for <!></p>'),ot=p('<h2 class="svelte-mkwcf8">Conclusion</h2> <!>',1),ut=p('<li class="svelte-mkwcf8"><p class="question-text svelte-mkwcf8"> </p> <p class="answer-text svelte-mkwcf8"> </p></li>'),ct=p('<ul class="svelte-mkwcf8"></ul>'),ft=p('<p class="no-answers svelte-mkwcf8">No answers for this topic</p>'),dt=p('<div class="result-card svelte-mkwcf8"><h2 class="svelte-mkwcf8"> </h2> <div class="percentage-bar svelte-mkwcf8"><div class="percentage-fill svelte-mkwcf8"></div></div> <p class="percentage-text svelte-mkwcf8"> </p> <p class="points-text svelte-mkwcf8"> </p> <div class="answers-section svelte-mkwcf8"><h3 class="svelte-mkwcf8">Supporting Answers:</h3> <!></div></div>'),_t=p('<div class="results-container svelte-mkwcf8"><h1 class="svelte-mkwcf8"> </h1> <div class="conclusion svelte-mkwcf8"><!></div> <div class="results-grid svelte-mkwcf8"></div> <div class="action-buttons svelte-mkwcf8"><button class="restart-button svelte-mkwcf8">Start Over</button> <button class="share-button svelte-mkwcf8">Share Results</button></div></div>');function gt(o,m){xe(m,!1);let b=ie(m,"topicResults",28,()=>({})),T=ie(m,"onRestart",8),d=ie(m,"answerHistory",24,()=>[]),S=ie(m,"surveyName",8,"Survey");const I=()=>{const R=Math.max(...Object.values(b()).map(u=>u.count)),_=Object.entries(b()).filter(([u,A])=>A.count===R).map(([u])=>u);let g=`I just completed the "${S()}" survey!

`;_.length===1?g+=`My result: I am most suited for ${_[0]}

`:g+=`My result: I am equally suited for ${_.join(" and ")}

`,g+=`Take the survey yourself: ${window.location.href}`,navigator.share?navigator.share({title:`My ${S()} Results`,text:g,url:window.location.href}).catch(u=>{navigator.clipboard.writeText(g)}):navigator.clipboard.writeText(g)};Je(()=>(we(b()),we(d())),()=>{const R=Object.values(b()).reduce((_,g)=>_+g,0);b(Object.entries(b()).reduce((_,[g,u])=>(_[g]={count:u,percentage:R>0?Math.round(u/R*100):0,answers:d().filter(A=>A.topics.includes(g))},_),{}))}),We(),pe();var k=_t(),v=c(k),t=c(v),a=x(v,2),r=c(a);{var s=R=>{var _=ot();const g=ue(()=>Math.max(...Object.values(b()).map(l=>l.count))),u=ue(()=>Object.entries(b()).filter(([l,P])=>P.count===e(g)).map(([l])=>l));var A=x(se(_),2);{var C=l=>{var P=nt(),U=x(c(P)),n=c(U);z(()=>L(n,e(u)[0])),w(l,P)},W=l=>{var P=vt(),U=x(c(P));{var n=y=>{var D=lt(),B=se(D),q=c(B),M=x(B,2),G=c(M);z(()=>{L(q,e(u)[0]),L(G,e(u)[1])}),w(y,D)},f=y=>{var D=Re(),B=se(D);ne(B,1,()=>e(u),le,(q,M,G)=>{var V=it(),J=se(V),O=c(J),j=x(J);{var K=Q=>{var te=me(",");w(Q,te)};H(j,Q=>{G<e(u).length-2&&Q(K)})}var X=x(j);{var $=Q=>{var te=me("and");w(Q,te)};H(X,Q=>{G===e(u).length-2&&Q($)})}z(()=>L(O,e(M))),w(q,V)}),w(y,D)};H(U,y=>{e(u).length===2?y(n):y(f,!1)})}w(l,P)};H(A,l=>{e(u).length===1?l(C):l(W,!1)})}w(R,_)};H(r,R=>{Object.entries(b()).length>0&&R(s)})}var h=x(a,2);ne(h,5,()=>Object.entries(b()),le,(R,_)=>{let g=()=>e(_)[0],u=()=>e(_)[1];var A=dt(),C=c(A),W=c(C),l=x(C,4),P=c(l),U=x(l,2),n=c(U),f=x(U,2),y=x(c(f),2);{var D=q=>{var M=ct();ne(M,5,()=>u().answers,le,(G,V)=>{var J=ut(),O=c(J),j=c(O),K=x(O,2),X=c(K);z(()=>{L(j,e(V).question),L(X,`You chose: ${e(V).answer??""}`)}),w(G,J)}),w(q,M)},B=q=>{var M=ft();w(q,M)};H(y,q=>{u().answers.length>0?q(D):q(B,!1)})}z(()=>{tt(A,"style",`--percentage: ${u().percentage??""}%`),L(W,g()),L(P,`${u().percentage??""}%`),L(n,`(${u().count??""} points)`)}),w(R,A)});var E=x(h,2),Y=c(E),N=x(Y,2);z(()=>L(t,`Your Results for "${S()??""}"`)),re("click",Y,function(...R){var _;(_=T())==null||_.apply(this,R)}),re("click",N,I),w(o,k),Se()}var ht=p('<div class="loading svelte-1bar8og">Loading...</div>'),wt=p('<div class="error svelte-1bar8og"><p> </p> <button class="svelte-1bar8og">Dismiss</button></div>'),mt=p('<button class="survey-button svelte-1bar8og"> </button>'),bt=p('<div class="survey-list svelte-1bar8og"></div>'),yt=p("<p>No surveys available. Please add some surveys first.</p>"),xt=p('<div class="survey-selection svelte-1bar8og"><h2 class="svelte-1bar8og">Select a Decision Aid</h2> <!></div>'),pt=p('<button class="svelte-1bar8og"> </button>'),St=p('<div class="question-container svelte-1bar8og"><h3 class="svelte-1bar8og"> </h3> <h2 class="svelte-1bar8og"> </h2> <div class="button-container svelte-1bar8og"></div> <div class="progress svelte-1bar8og"> </div></div>'),Rt=p('<div class="no-questions svelte-1bar8og"><p>No questions available for this survey.</p> <button class="svelte-1bar8og">Select Another Survey</button></div>'),kt=p('<div class="main-content svelte-1bar8og"><!></div>'),Pt=p('<main class="svelte-1bar8og"><!> <!> <!></main>');function Et(o,m){xe(m,!1);let b=Z([]),T=Z(null),d=null,S=Z([]),I=Z(0),k=Z(),v=Z({}),t=Z(!1),a=Z([]),r=Z(!1),s=Z(null);Xe(async()=>{const f=new URLSearchParams(window.location.search).get("survey");if(f)try{await E(f)}catch{i(s,"Failed to load the requested survey."),await h()}else await h()});const h=async()=>{try{i(r,!0),i(b,await at()),i(r,!1)}catch(n){console.error("Error loading surveys:",n),i(s,"Failed to load surveys. Please try again later."),i(r,!1)}},E=async n=>{try{i(r,!0);const f=await rt(n),y=await st(n);if(!f||!y||y.length===0)throw new Error("Survey not found or has no questions");d=n,i(T,f),i(S,y),i(I,0),i(k,e(S)[e(I)]),i(v,(f.topics||[]).reduce((D,B)=>(D[B]=0,D),{})),i(r,!1)}catch(f){throw console.error("Error loading survey:",f),i(r,!1),f}},Y=async n=>{try{await E(n.id);const f=new URL(window.location);f.searchParams.set("survey",n.id),window.history.pushState({},"",f)}catch{i(s,"Failed to load the selected survey.")}},N=(n,f)=>{e(a).push({question:e(k).question,answer:f,topics:n}),n.forEach(y=>{$e(v,e(v)[y]++)}),R()},R=()=>{e(I)<e(S).length-1?(et(I),i(k,e(S)[e(I)])):i(t,!0)},_=()=>{i(T,null),d=null,i(t,!1),i(S,[]),i(I,0),i(k,null),i(a,[]),i(v,{});const n=new URL(window.location);n.searchParams.delete("survey"),window.history.pushState({},"",n)};pe();var g=Pt(),u=c(g);{var A=n=>{var f=ht();w(n,f)};H(u,n=>{e(r)&&n(A)})}var C=x(u,2);{var W=n=>{var f=wt(),y=c(f),D=c(y),B=x(y,2);z(()=>L(D,e(s))),re("click",B,()=>i(s,null)),w(n,f)};H(C,n=>{e(s)&&n(W)})}var l=x(C,2);{var P=n=>{var f=ue(()=>{var y;return(y=e(T))==null?void 0:y.name});gt(n,{get topicResults(){return e(v)},onRestart:_,get answerHistory(){return e(a)},get surveyName(){return e(f)}})},U=n=>{var f=Re(),y=se(f);{var D=q=>{var M=xt(),G=x(c(M),2);{var V=O=>{var j=bt();ne(j,5,()=>e(b),le,(K,X)=>{var $=mt(),Q=c($);z(()=>L(Q,e(X).name)),re("click",$,()=>Y(e(X))),w(K,$)}),w(O,j)},J=O=>{var j=yt();w(O,j)};H(G,O=>{e(b).length>0?O(V):O(J,!1)})}w(q,M)},B=q=>{var M=kt(),G=c(M);{var V=O=>{var j=St(),K=c(j),X=c(K),$=x(K,2),Q=c($),te=x($,2);ne(te,5,()=>e(k).buttons,le,(Oe,ce)=>{var fe=pt(),Ie=c(fe);z(()=>L(Ie,e(ce).text)),re("click",fe,()=>N(e(ce).selectedTopics,e(ce).text)),w(Oe,fe)});var ke=x(te,2),Pe=c(ke);z(()=>{L(X,`Survey: ${e(T).name??""}`),L(Q,e(k).question),L(Pe,`Question ${e(I)+1} of ${e(S).length??""}`)}),w(O,j)},J=O=>{var j=Rt(),K=x(c(j),2);re("click",K,_),w(O,j)};H(G,O=>{e(k)?O(V):O(J,!1)})}w(q,M)};H(y,q=>{e(T)?q(B,!1):q(D)},!0)}w(n,f)};H(l,n=>{e(t)?n(P):n(U,!1)})}w(o,g),Se()}export{Et as default};
