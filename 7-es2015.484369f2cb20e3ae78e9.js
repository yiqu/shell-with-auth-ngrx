(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{txKf:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",(function(){return B}));var r=n("3Pt+"),i=n("UmVK"),a=n("37S3"),o=n("ofXK"),s=n("tyNb"),c=n("fXoL");let b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Kb({type:t,selectors:[["app-auth-home"]],decls:2,vars:0,consts:[[1,"container","mb-3"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Rb(1,"router-outlet"),c.Vb())},directives:[s.f],styles:[""]}),t})();var l=n("Pk+l"),d=n("KJJU"),m=n("AytR"),g=n("XNiG"),p=n("1G5W"),u=n("lGQG"),h=n("kt0X"),f=n("Wp6s"),w=n("kmnG"),v=n("qFsG"),V=n("NFeN"),W=n("bTqV"),E=n("bSwM"),C=n("Xa2L");let y=(()=>{class t{constructor(){this.colorPalette="primary",this.diameter=55}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Kb({type:t,selectors:[["app-loading-spinner"]],inputs:{colorPalette:"colorPalette",diameter:"diameter"},decls:2,vars:2,consts:[[3,"color","diameter"]],template:function(t,e){1&t&&(c.Wb(0,"div"),c.Rb(1,"mat-spinner",0),c.Vb()),2&t&&(c.Db(1),c.oc("color",e.colorPalette)("diameter",e.diameter))},directives:[C.b],encapsulation:2}),t})();function D(t,e){if(1&t&&(c.Wb(0,"div"),c.Wb(1,"div",21),c.Ec(2),c.Vb(),c.Vb()),2&t){const t=c.ic();c.Db(2),c.Gc(" ",t.errorMsg," ")}}function F(t,e){1&t&&c.Rb(0,"app-loading-spinner",22),2&t&&c.oc("diameter",25)}function I(t,e){if(1&t){const t=c.Xb();c.Wb(0,"button",23),c.ec("click",(function(){return c.vc(t),c.ic().onSignInClick()})),c.Ec(1,"Sign in"),c.Vb()}if(2&t){const t=c.ic();c.oc("disabled",t.idFc.invalid)}}const O=function(){return["../","signup"]};let P=(()=>{class t{constructor(t,e,n,i){this.fb=t,this.as=e,this.router=n,this.store=i,this.signInTitle="Sign in with your PLACEHOLDER Account",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new g.a;let a=null,o=null;this.store.select("appAuth").pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.errorMsg=t.errorMsg,this.errorOccured=t.error,this.loading=t.loading,this.disableFieldsOnLoading(t.loading)}),m.a.production||(a="t1@test.com",o="123456"),this.signFg=this.fb.group({id:l.a(a,!1,[r.o.required,r.o.email]),password:l.a(o,!1),saveSession:l.a(!0,!1)})}get idFc(){return this.signFg.get("id")}get passwordFc(){return this.signFg.get("password")}ngOnInit(){this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.as.clearErrors()})}onSignInClick(){if(this.passwordFc.value&&""!==this.passwordFc.value.trim()){const t=new d.a(this.signFg.value.id,this.signFg.value.password,this.signFg.value.saveSession);this.signIn(t)}else this.as.throwErrorMessage("Enter a password.")}signIn(t){this.as.userLogin(t)}disableFieldsOnLoading(t){this.signFg&&(t?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}onForgotPassword(){this.router.navigate(["/","auth","reset"])}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.c),c.Qb(u.a),c.Qb(s.b),c.Qb(h.h))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-auth-signin"]],decls:40,vars:11,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","avartar",1,"img-h-100","border-circ",3,"src"],["appearance","outline",1,"mb-1","full-w"],["matInput","","placeholder","Email",3,"formControlName","keyup.enter"],["matSuffix",""],[1,"f-right","mb-1"],["mat-button","",1,"forgot-btn",3,"click"],["matInput","","placeholder","Password","type","password",3,"formControlName","keyup.enter"],[1,"left-align"],["color","primary",1,"example-margin",3,"formControlName"],[4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"disabled","click",4,"ngIf"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"disabled","click"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Ec(3),c.Vb(),c.Wb(4,"div",3),c.Ec(5," Don't have an account? "),c.Wb(6,"a",4),c.Ec(7,"Register here."),c.Vb(),c.Vb(),c.Wb(8,"div",5),c.Wb(9,"mat-card",6),c.Wb(10,"mat-card-content"),c.Wb(11,"div",7),c.Rb(12,"img",8),c.Vb(),c.Wb(13,"mat-form-field",9),c.Wb(14,"mat-label"),c.Ec(15,"Email"),c.Vb(),c.Wb(16,"input",10),c.ec("keyup.enter",(function(){return e.onSignInClick()})),c.Vb(),c.Wb(17,"mat-icon",11),c.Ec(18,"email"),c.Vb(),c.Wb(19,"mat-hint"),c.Ec(20,"Email associated with your account."),c.Vb(),c.Wb(21,"mat-error"),c.Ec(22,"Invalid email format."),c.Vb(),c.Vb(),c.Wb(23,"div",12),c.Wb(24,"button",13),c.ec("click",(function(){return e.onForgotPassword()})),c.Ec(25,"Forgot password?"),c.Vb(),c.Vb(),c.Wb(26,"mat-form-field",9),c.Wb(27,"mat-label"),c.Ec(28,"Password"),c.Vb(),c.Wb(29,"input",14),c.ec("keyup.enter",(function(){return e.onSignInClick()})),c.Vb(),c.Wb(30,"mat-icon",11),c.Ec(31,"https"),c.Vb(),c.Vb(),c.Wb(32,"div",15),c.Wb(33,"mat-checkbox",16),c.Ec(34," Keep me logged in. "),c.Vb(),c.Vb(),c.Cc(35,D,3,1,"div",17),c.Vb(),c.Wb(36,"mat-card-actions"),c.Wb(37,"div",18),c.Cc(38,F,1,1,"app-loading-spinner",19),c.Cc(39,I,2,1,"button",20),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(3),c.Gc(" ",e.signInTitle," "),c.Db(3),c.oc("routerLink",c.pc(10,O)),c.Db(3),c.oc("formGroup",e.signFg),c.Db(3),c.oc("src",e.avartarImgSrc,c.xc),c.Db(4),c.oc("formControlName","id"),c.Db(13),c.oc("formControlName","password"),c.Db(4),c.oc("formControlName","saveSession"),c.Db(2),c.oc("ngIf",e.errorOccured),c.Db(3),c.oc("ngIf",e.loading),c.Db(1),c.oc("ngIf",!e.loading))},directives:[s.d,f.a,r.l,r.f,f.d,w.c,w.g,v.b,r.b,r.k,r.e,V.a,w.h,w.f,w.b,W.a,E.a,o.k,f.b,y],styles:["@media only screen and (min-width:630px){.signin-card[_ngcontent-%COMP%]{width:30rem}}@media only screen and (max-width:630px){.signin-card[_ngcontent-%COMP%]{min-width:100%}}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.forgot-btn[_ngcontent-%COMP%]{color:#1a8cff}"]}),t})();var M=n("aiZK");function k(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1,"Invalid email format."),c.Vb())}function S(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1,"Email is required."),c.Vb())}function x(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1," This email is already taken. If you have already signed up, try logging in instead. "),c.Vb())}function _(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1,"Please enter a password."),c.Vb())}function N(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1,"Needs to be at least 6 characters."),c.Vb())}function G(t,e){1&t&&(c.Wb(0,"mat-error"),c.Ec(1," Password does not match. "),c.Vb())}function A(t,e){if(1&t&&(c.Wb(0,"div",23),c.Wb(1,"div",24),c.Ec(2),c.Vb(),c.Vb()),2&t){const t=c.ic();c.Db(2),c.Gc(" ",t.errorMsg," ")}}function L(t,e){1&t&&c.Rb(0,"app-loading-spinner",25),2&t&&c.oc("diameter",25)}function R(t,e){if(1&t){const t=c.Xb();c.Wb(0,"button",26),c.ec("click",(function(){return c.vc(t),c.ic().onSignupClick()})),c.Ec(1," Create account "),c.Vb()}}const $=function(){return["../","signin"]};let j=(()=>{class t{constructor(t,e,n,i){this.fb=t,this.as=e,this.router=n,this.store=i,this.accountType=m.a.entityName,this.matcher=new M.a,this.signInTitle="Create your PLACEHOLDER Account.",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new g.a;let a=null,o=null;m.a.production||(a="t@test.com",o="123456"),this.store.select("appAuth").pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.errorMsg=t.errorMsg,this.errorOccured=t.error,this.loading=t.loading,this.disableFieldsOnLoading(t.loading)}),this.signFg=this.fb.group({email:l.a(a,!1,[r.o.required,r.o.email]),password:l.a(o,!1,[r.o.required]),repassword:l.a(o,!1,[r.o.required])})}get emailFc(){return this.signFg.get("email")}get passwordFc(){return this.signFg.get("password")}get repasswordFc(){return this.signFg.get("repassword")}ngOnInit(){this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.as.clearErrors(),this.repasswordFc.setErrors(this.passwordFc.value!==this.repasswordFc.value?{passwordDoesNotMatch:!0}:null)})}onSignupClick(){const t=this.signFg.value;if(t.password!==t.repassword)this.as.throwErrorMessage("Password does not match.");else{const e=new d.a(t.email,t.password,!0);this.signup(e)}}signup(t){this.as.registerUser(t)}disableFieldsOnLoading(t){this.signFg&&(t?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.c),c.Qb(u.a),c.Qb(s.b),c.Qb(h.h))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-auth-signup"]],decls:47,vars:21,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","logo",1,"img-h-100","border-circ",3,"src"],[1,"secfont"],[1,"left-align","mb-3"],["appearance","outline",1,"mb-2","full-w"],["matInput","","placeholder","Email",3,"formControlName","errorStateMatcher"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"password-input"],["matInput","","placeholder","Password","type","password",3,"formControlName","errorStateMatcher"],["appearance","outline",1,"repassword-input"],["matInput","","placeholder","Confirm password","type","password",3,"formControlName","errorStateMatcher","keyup.enter"],["class","err-msg-parent",4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"click",4,"ngIf"],[1,"err-msg-parent"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"click"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Ec(3),c.Vb(),c.Wb(4,"div",3),c.Wb(5,"a",4),c.Ec(6,"Go sign in instead"),c.Vb(),c.Vb(),c.Wb(7,"div",5),c.Wb(8,"mat-card",6),c.Wb(9,"mat-card-content"),c.Wb(10,"div",7),c.Rb(11,"img",8),c.Wb(12,"span",9),c.Ec(13),c.Vb(),c.Vb(),c.Wb(14,"div",10),c.Wb(15,"mat-form-field",11),c.Wb(16,"mat-label"),c.Ec(17,"Email"),c.Vb(),c.Rb(18,"input",12),c.Wb(19,"mat-icon",13),c.Ec(20,"email"),c.Vb(),c.Wb(21,"mat-hint"),c.Ec(22,"This will be your login email."),c.Vb(),c.Cc(23,k,2,0,"mat-error",14),c.Cc(24,S,2,0,"mat-error",14),c.Cc(25,x,2,0,"mat-error",14),c.Vb(),c.Vb(),c.Wb(26,"div"),c.Wb(27,"mat-form-field",15),c.Wb(28,"mat-label"),c.Ec(29,"Password"),c.Vb(),c.Rb(30,"input",16),c.Wb(31,"mat-icon",13),c.Ec(32,"https"),c.Vb(),c.Cc(33,_,2,0,"mat-error",14),c.Cc(34,N,2,0,"mat-error",14),c.Vb(),c.Wb(35,"mat-form-field",17),c.Wb(36,"mat-label"),c.Ec(37,"Confirm"),c.Vb(),c.Wb(38,"input",18),c.ec("keyup.enter",(function(){return e.onSignupClick()})),c.Vb(),c.Wb(39,"mat-icon",13),c.Ec(40,"https"),c.Vb(),c.Cc(41,G,2,0,"mat-error",14),c.Vb(),c.Vb(),c.Cc(42,A,3,1,"div",19),c.Vb(),c.Wb(43,"mat-card-actions"),c.Wb(44,"div",20),c.Cc(45,L,1,1,"app-loading-spinner",21),c.Cc(46,R,2,0,"button",22),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(3),c.Gc(" ",e.signInTitle," "),c.Db(2),c.oc("routerLink",c.pc(20,$)),c.Db(3),c.oc("formGroup",e.signFg),c.Db(3),c.oc("src",e.avartarImgSrc,c.xc),c.Db(2),c.Gc("New ",e.accountType," account"),c.Db(5),c.oc("formControlName","email")("errorStateMatcher",e.matcher),c.Db(5),c.oc("ngIf",e.emailFc.hasError("email")),c.Db(1),c.oc("ngIf",e.emailFc.hasError("required")),c.Db(1),c.oc("ngIf",e.emailFc.hasError("emailExists")),c.Db(5),c.oc("formControlName","password")("errorStateMatcher",e.matcher),c.Db(3),c.oc("ngIf",e.passwordFc.hasError("required")),c.Db(1),c.oc("ngIf",e.passwordFc.hasError("weak")),c.Db(4),c.oc("formControlName","repassword")("errorStateMatcher",e.matcher),c.Db(3),c.oc("ngIf",e.repasswordFc&&e.repasswordFc.hasError("passwordDoesNotMatch")),c.Db(1),c.oc("ngIf",e.errorOccured),c.Db(3),c.oc("ngIf",e.loading),c.Db(1),c.oc("ngIf",!e.loading))},directives:[s.d,f.a,r.l,r.f,f.d,w.c,w.g,v.b,r.b,r.k,r.e,V.a,w.h,w.f,o.k,f.b,w.b,y,W.a],styles:[".signin-card[_ngcontent-%COMP%]{min-width:20rem}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.err-msg-parent[_ngcontent-%COMP%]{max-width:25rem;margin:auto}@media only screen and (min-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:.5rem}}@media only screen and (max-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:0;width:100%}.repassword-input[_ngcontent-%COMP%]{width:100%}}"]}),t})();var T=n("IzEk"),K=n("lJxs");function Q(t,e){if(1&t&&(c.Wb(0,"div"),c.Wb(1,"div",15),c.Ec(2),c.Vb(),c.Vb()),2&t){const t=c.ic();c.Db(2),c.Gc(" ",t.errorMsg," ")}}function q(t,e){1&t&&c.Rb(0,"app-loading-spinner",16),2&t&&c.oc("diameter",25)}function X(t,e){if(1&t){const t=c.Xb();c.Wb(0,"button",17),c.ec("click",(function(){return c.vc(t),c.ic().onSubmit()})),c.Ec(1),c.Vb()}if(2&t){const t=c.ic();c.oc("disabled",t.emailFc.invalid),c.Db(1),c.Fc(t.submitBtnText)}}const J=[{path:"",component:b,canActivate:[(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.store=n}canActivate(t,e){return this.store.select("appAuth").pipe(Object(T.a)(1),Object(K.a)(t=>!t.verifiedUser||this.router.createUrlTree(["/","my-account"])))}}return t.\u0275fac=function(e){return new(e||t)(c.ac(s.b),c.ac(s.a),c.ac(h.h))},t.\u0275prov=c.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:P},{path:"signup",component:j},{path:"reset",component:(()=>{class t{constructor(t,e,n){this.fb=t,this.store=e,this.as=n,this.title="Reset your password",this.subtitle="Enter your user account's verified email address and we will send you a password reset link.",this.submitBtnText="Send password reset email",this.compDest$=new g.a,this.avartarImgSrc="assets/banner/placeholder-logo.png",this.store.select("appAuth").pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.errorMsg=t.errorMsg,this.errorOccured=t.error,this.loading=t.loading,this.disableFieldsOnLoading(t.loading)}),this.createFg()}get emailFc(){return this.resetFg.get("email")}ngOnInit(){this.as.clearErrors(),this.resetFg.valueChanges.pipe(Object(p.a)(this.compDest$)).subscribe(t=>{this.as.clearErrors()})}createFg(){this.resetFg=this.fb.group({email:l.a(null,!1,[r.o.required,r.o.email])})}disableFieldsOnLoading(t){this.resetFg&&(t?this.resetFg.disable({onlySelf:!0,emitEvent:!1}):this.resetFg.enable({onlySelf:!0,emitEvent:!1}))}onSubmit(){this.as.resetPasswordByEmail(this.resetFg.value)}ngOnDestroy(){this.compDest$.next(),this.compDest$.complete()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.c),c.Qb(h.h),c.Qb(u.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-auth-reset"]],decls:26,vars:8,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","avartar",1,"img-h-100","border-circ",3,"src"],["appearance","outline",1,"mb-1","full-w"],["matInput","","placeholder","Email",3,"formControlName","keyup.enter"],["matSuffix",""],[4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"disabled","click",4,"ngIf"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"disabled","click"]],template:function(t,e){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Ec(3),c.Vb(),c.Wb(4,"div",3),c.Ec(5),c.Vb(),c.Wb(6,"div",4),c.Wb(7,"mat-card",5),c.Wb(8,"mat-card-content"),c.Wb(9,"div",6),c.Rb(10,"img",7),c.Vb(),c.Wb(11,"mat-form-field",8),c.Wb(12,"mat-label"),c.Ec(13,"Email"),c.Vb(),c.Wb(14,"input",9),c.ec("keyup.enter",(function(){return e.onSubmit()})),c.Vb(),c.Wb(15,"mat-icon",10),c.Ec(16,"email"),c.Vb(),c.Wb(17,"mat-hint"),c.Ec(18,"Email associated with your account."),c.Vb(),c.Wb(19,"mat-error"),c.Ec(20,"Invalid email format."),c.Vb(),c.Vb(),c.Cc(21,Q,3,1,"div",11),c.Vb(),c.Wb(22,"mat-card-actions"),c.Wb(23,"div",12),c.Cc(24,q,1,1,"app-loading-spinner",13),c.Cc(25,X,2,2,"button",14),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()),2&t&&(c.Db(3),c.Gc(" ",e.title," "),c.Db(2),c.Gc(" ",e.subtitle," "),c.Db(2),c.oc("formGroup",e.resetFg),c.Db(3),c.oc("src",e.avartarImgSrc,c.xc),c.Db(4),c.oc("formControlName","email"),c.Db(7),c.oc("ngIf",e.errorOccured),c.Db(3),c.oc("ngIf",e.loading),c.Db(1),c.oc("ngIf",!e.loading))},directives:[f.a,r.l,r.f,f.d,w.c,w.g,v.b,r.b,r.k,r.e,V.a,w.h,w.f,w.b,o.k,f.b,y,W.a],styles:["@media only screen and (min-width:630px){.signin-card[_ngcontent-%COMP%]{width:30rem}}@media only screen and (max-width:630px){.signin-card[_ngcontent-%COMP%]{min-width:100%}}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.forgot-btn[_ngcontent-%COMP%]{color:#1a8cff}"]}),t})()}]}];let U=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},imports:[[s.e.forChild(J)],s.e]}),t})();var z=n("pqmK");let B=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(e){return new(e||t)},providers:[],imports:[[o.c,r.g,r.n,a.a,i.a,z.a,U]]}),t})()}}]);