"use strict";(self.webpackChunkaka_safe=self.webpackChunkaka_safe||[]).push([[898],{4830:(h,a,t)=>{t.r(a),t.d(a,{TextInputDemoModule:()=>o});var s=t(6895),f=t(7171),i=t(3083),d=t(2368),e=t(8433),n=t(4719),r=t(4650);let o=(()=>{class l{}return l.\u0275fac=function(_){return new(_||l)},l.\u0275mod=r.oAB({type:l}),l.\u0275inj=r.cJS({imports:[s.ez,n.u5,f.aw,e.r,i.I,d._]}),l})()},2368:(h,a,t)=>{t.d(a,{_:()=>f});var s=t(4650);let f=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({}),i})()},1910:(h,a,t)=>{t.d(a,{y:()=>f});var s=t(4650);let f=(()=>{class i{constructor(e,n){this.el=e,this.renderer=n,this.ngModelChange=new s.vpe,this.hideBg=!0,this.isUpdate=!1}ngOnInit(){this.clearButton=this.renderer.createElement("div");const e=this.clearButton;this.oldOffsetLeft=this.el.nativeElement.offsetLeft,this.oldOffsetTop=this.el.nativeElement.offsetTop;const n=this.el.nativeElement.offsetLeft+this.el.nativeElement.offsetWidth-28,r=this.el.nativeElement.offsetTop+this.el.nativeElement.offsetHeight/2-10;e.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" stroke="none" d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M15 9l-6 6m6 0L9 9"/></svg>',e.style.left=n+"px",e.style.top=r+"px",this.renderer.addClass(e,"input-btn-clear-text"),this.renderer.listen(e,"click",l=>{l.stopPropagation(),this.ngModelChange.emit("")}),this.renderer.appendChild(this.el.nativeElement.parentNode,e),new MutationObserver(l=>{this.updateClearTextPos(e)}).observe(this.el.nativeElement,{attributes:!0}),this.displayClearTextButton(e),this.resizeObs=new window.ResizeObserver(l=>{this.updateClearTextPos(e)}),this.resizeObs.observe(this.el.nativeElement.parentNode)}ngOnChanges(e){e.ngModel&&this.clearButton&&this.displayClearTextButton(this.clearButton)}onResize(e){this.isUpdate||(this.isUpdate=!0,setTimeout(()=>{this.updateClearTextPos(this.clearButton),this.isUpdate=!1},50))}displayClearTextButton(e){this.ngModel?(this.renderer.setStyle(e,"display","inline-flex"),this.hideBg&&this.renderer.addClass(this.el.nativeElement,"bg-img-none")):(this.renderer.setStyle(e,"display","none"),this.hideBg&&this.renderer.removeClass(this.el.nativeElement,"bg-img-none"))}updateClearTextPos(e){let n=!1;if(!this.oldOffsetLeft!=this.el.nativeElement.offsetLeft&&(this.oldOffsetLeft=this.el.nativeElement.offsetLeft,n=!0),!this.oldOffsetTop!=this.el.nativeElement.offsetLeft&&(this.oldOffsetTop=this.el.nativeElement.offsetTop,n=!0),n){const o=this.el.nativeElement.offsetTop+this.el.nativeElement.offsetHeight/2-10;e.style.left=this.el.nativeElement.offsetLeft+this.el.nativeElement.offsetWidth-28+"px",e.style.top=o+"px",this.renderer.setStyle(e,"left",e.style.left),this.renderer.setStyle(e,"top",e.style.top)}}ngOnDestroy(){this.textChangeSubs&&this.textChangeSubs.unsubscribe(),this.resizeObs&&this.resizeObs.unobserve(this.el.nativeElement.parentNode),this.resizeObs&&this.resizeObs.unobserve(this.el.nativeElement.parentNode)}}return i.\u0275fac=function(e){return new(e||i)(s.Y36(s.SBq),s.Y36(s.Qsj))},i.\u0275dir=s.lG2({type:i,selectors:[["","clearInput",""]],hostBindings:function(e,n){1&e&&s.NdJ("resize",function(o){return n.onResize(o)},!1,s.Jf7)},inputs:{ngModel:"ngModel",hideBg:"hideBg"},outputs:{ngModelChange:"ngModelChange"},features:[s.TTD]}),i})()}}]);