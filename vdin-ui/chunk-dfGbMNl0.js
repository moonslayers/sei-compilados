import {p,a2 as Ee,b9 as To,ba as x,bb as ye,bc as wo,_ as _l,bd as k}from'./main.js';function q(t){t||(t=p(Ee));let r=new x(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(To(r))}function E(t,r){let e=p(ye),n=new wo(1),v=_l(()=>{let u;try{u=t();}catch(f){k(()=>n.error(f));return}k(()=>n.next(u));},{injector:e,manualCleanup:true});return e.get(Ee).onDestroy(()=>{v.destroy(),n.complete();}),n.asObservable()}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.5
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{E,q};//# sourceMappingURL=chunk-dfGbMNl0.js.map
