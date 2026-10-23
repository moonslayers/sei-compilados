import {p,P as Ee,b0 as Fo,b1 as x,G,b2 as m,a2 as ot,b3 as ge,b4 as xo,V as Vl,b5 as O}from'./main.js';function U(n){n||(n=p(Ee));let e=new x(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(Fo(e))}function T(n,e){let t=p(ge),o=new xo(1),c=Vl(()=>{let r;try{r=n();}catch(i){O(()=>o.error(i));return}O(()=>o.next(r));},{injector:t,manualCleanup:true});return t.get(Ee).onDestroy(()=>{c.destroy(),o.complete();}),o.asObservable()}function F(n,e){let o=!e?.manualCleanup?e?.injector?.get(Ee)??p(Ee):null,c=h(e?.equal),r;e?.requireSync?r=G({kind:0},{equal:c}):r=G({kind:1,value:e?.initialValue},{equal:c});let i,v=n.subscribe({next:s=>r.set({kind:1,value:s}),error:s=>{r.set({kind:2,error:s}),i?.();},complete:()=>{i?.();}});if(e?.requireSync&&r().kind===0)throw new m(601,false);return i=o?.onDestroy(v.unsubscribe.bind(v)),ot(()=>{let s=r();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new m(601,false)}},{equal:e?.equal})}function h(n=Object.is){return (e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.5
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{F,T,U};//# sourceMappingURL=chunk-BjhI-brW.js.map
