import {p,O as Ee,bb as ko,bc as x,bd as pe,be as No,B as Bl,bf as O}from'./main.js';function q(t){t||(t=p(Ee));let r=new x(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(ko(r))}function E(t,r){let e=p(pe),n=new No(1),v=Bl(()=>{let u;try{u=t();}catch(f){O(()=>n.error(f));return}O(()=>n.next(u));},{injector:e,manualCleanup:true});return e.get(Ee).onDestroy(()=>{v.destroy(),n.complete();}),n.asObservable()}/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v22.0.5
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/export{E,q};//# sourceMappingURL=chunk-EmcFVUOR.js.map
