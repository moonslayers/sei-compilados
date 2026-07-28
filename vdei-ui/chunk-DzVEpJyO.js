import {p,a2 as ve,b5 as wo,b6 as x,b7 as me,b8 as uu,w as wl,b1 as O}from'./main.js';function q(t){t||(t=p(ve));let r=new x(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(wo(r))}function E(t,r){let e=p(me),n=new uu(1),v=wl(()=>{let u;try{u=t();}catch(f){O(()=>n.error(f));return}O(()=>n.next(u));},{injector:e,manualCleanup:true});return e.get(ve).onDestroy(()=>{v.destroy(),n.complete();}),n.asObservable()}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.5
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{E,q};//# sourceMappingURL=chunk-DzVEpJyO.js.map
