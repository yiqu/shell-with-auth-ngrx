function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{txKf:function(t,e,n){"use strict";n.r(e),n.d(e,"AuthModule",(function(){return it}));var r,i,a=n("3Pt+"),o=n("UmVK"),s=n("37S3"),c=n("ofXK"),l=n("tyNb"),b=n("fXoL"),u=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=b.Kb({type:r,selectors:[["app-auth-home"]],decls:2,vars:0,consts:[[1,"container","mb-3"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Rb(1,"router-outlet"),b.Vb())},directives:[l.f],styles:[""]}),r),d=n("Pk+l"),m=n("KJJU"),g=n("AytR"),p=n("XNiG"),f=n("1G5W"),h=n("lGQG"),v=n("kt0X"),w=n("Wp6s"),C=n("kmnG"),y=n("qFsG"),V=n("NFeN"),W=n("bTqV"),k=n("bSwM"),E=n("Xa2L"),D=((i=function(){function t(){_classCallCheck(this,t),this.colorPalette="primary",this.diameter=55}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=b.Kb({type:i,selectors:[["app-loading-spinner"]],inputs:{colorPalette:"colorPalette",diameter:"diameter"},decls:2,vars:2,consts:[[3,"color","diameter"]],template:function(t,e){1&t&&(b.Wb(0,"div"),b.Rb(1,"mat-spinner",0),b.Vb()),2&t&&(b.Db(1),b.oc("color",e.colorPalette)("diameter",e.diameter))},directives:[E.b],encapsulation:2}),i);function F(t,e){if(1&t&&(b.Wb(0,"div"),b.Wb(1,"div",21),b.Ec(2),b.Vb(),b.Vb()),2&t){var n=b.ic();b.Db(2),b.Gc(" ",n.errorMsg," ")}}function O(t,e){1&t&&b.Rb(0,"app-loading-spinner",22),2&t&&b.oc("diameter",25)}function I(t,e){if(1&t){var n=b.Xb();b.Wb(0,"button",23),b.ec("click",(function(){return b.vc(n),b.ic().onSignInClick()})),b.Ec(1,"Sign in"),b.Vb()}if(2&t){var r=b.ic();b.oc("disabled",r.idFc.invalid)}}var P,M=function(){return["../","signup"]},_=((P=function(){function t(e,n,r,i){var o=this;_classCallCheck(this,t),this.fb=e,this.as=n,this.router=r,this.store=i,this.signInTitle="Sign in with your PLACEHOLDER Account",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new p.a;var s=null,c=null;this.store.select("appAuth").pipe(Object(f.a)(this.compDest$)).subscribe((function(t){o.errorMsg=t.errorMsg,o.errorOccured=t.error,o.loading=t.loading,o.disableFieldsOnLoading(t.loading)})),g.a.production||(s="t1@test.com",c="123456"),this.signFg=this.fb.group({id:d.a(s,!1,[a.o.required,a.o.email]),password:d.a(c,!1),saveSession:d.a(!0,!1)})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(f.a)(this.compDest$)).subscribe((function(e){t.as.clearErrors()}))}},{key:"onSignInClick",value:function(){if(this.passwordFc.value&&""!==this.passwordFc.value.trim()){var t=new m.a(this.signFg.value.id,this.signFg.value.password,this.signFg.value.saveSession);this.signIn(t)}else this.as.throwErrorMessage("Enter a password.")}},{key:"signIn",value:function(t){this.as.userLogin(t)}},{key:"disableFieldsOnLoading",value:function(t){this.signFg&&(t?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}},{key:"onForgotPassword",value:function(){this.router.navigate(["/","auth","reset"])}},{key:"ngOnDestroy",value:function(){this.compDest$.next(),this.compDest$.complete()}},{key:"idFc",get:function(){return this.signFg.get("id")}},{key:"passwordFc",get:function(){return this.signFg.get("password")}}]),t}()).\u0275fac=function(t){return new(t||P)(b.Qb(a.c),b.Qb(h.a),b.Qb(l.b),b.Qb(v.h))},P.\u0275cmp=b.Kb({type:P,selectors:[["app-auth-signin"]],decls:40,vars:11,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","avartar",1,"img-h-100","border-circ",3,"src"],["appearance","outline",1,"mb-1","full-w"],["matInput","","placeholder","Email",3,"formControlName","keyup.enter"],["matSuffix",""],[1,"f-right","mb-1"],["mat-button","",1,"forgot-btn",3,"click"],["matInput","","placeholder","Password","type","password",3,"formControlName","keyup.enter"],[1,"left-align"],["color","primary",1,"example-margin",3,"formControlName"],[4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"disabled","click",4,"ngIf"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"disabled","click"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Ec(3),b.Vb(),b.Wb(4,"div",3),b.Ec(5," Don't have an account? "),b.Wb(6,"a",4),b.Ec(7,"Register here."),b.Vb(),b.Vb(),b.Wb(8,"div",5),b.Wb(9,"mat-card",6),b.Wb(10,"mat-card-content"),b.Wb(11,"div",7),b.Rb(12,"img",8),b.Vb(),b.Wb(13,"mat-form-field",9),b.Wb(14,"mat-label"),b.Ec(15,"Email"),b.Vb(),b.Wb(16,"input",10),b.ec("keyup.enter",(function(){return e.onSignInClick()})),b.Vb(),b.Wb(17,"mat-icon",11),b.Ec(18,"email"),b.Vb(),b.Wb(19,"mat-hint"),b.Ec(20,"Email associated with your account."),b.Vb(),b.Wb(21,"mat-error"),b.Ec(22,"Invalid email format."),b.Vb(),b.Vb(),b.Wb(23,"div",12),b.Wb(24,"button",13),b.ec("click",(function(){return e.onForgotPassword()})),b.Ec(25,"Forgot password?"),b.Vb(),b.Vb(),b.Wb(26,"mat-form-field",9),b.Wb(27,"mat-label"),b.Ec(28,"Password"),b.Vb(),b.Wb(29,"input",14),b.ec("keyup.enter",(function(){return e.onSignInClick()})),b.Vb(),b.Wb(30,"mat-icon",11),b.Ec(31,"https"),b.Vb(),b.Vb(),b.Wb(32,"div",15),b.Wb(33,"mat-checkbox",16),b.Ec(34," Keep me logged in. "),b.Vb(),b.Vb(),b.Cc(35,F,3,1,"div",17),b.Vb(),b.Wb(36,"mat-card-actions"),b.Wb(37,"div",18),b.Cc(38,O,1,1,"app-loading-spinner",19),b.Cc(39,I,2,1,"button",20),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Db(3),b.Gc(" ",e.signInTitle," "),b.Db(3),b.oc("routerLink",b.pc(10,M)),b.Db(3),b.oc("formGroup",e.signFg),b.Db(3),b.oc("src",e.avartarImgSrc,b.xc),b.Db(4),b.oc("formControlName","id"),b.Db(13),b.oc("formControlName","password"),b.Db(4),b.oc("formControlName","saveSession"),b.Db(2),b.oc("ngIf",e.errorOccured),b.Db(3),b.oc("ngIf",e.loading),b.Db(1),b.oc("ngIf",!e.loading))},directives:[l.d,w.a,a.l,a.f,w.d,C.c,C.g,y.b,a.b,a.k,a.e,V.a,C.h,C.f,C.b,W.a,k.a,c.k,w.b,D],styles:["@media only screen and (min-width:630px){.signin-card[_ngcontent-%COMP%]{width:30rem}}@media only screen and (max-width:630px){.signin-card[_ngcontent-%COMP%]{min-width:100%}}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.forgot-btn[_ngcontent-%COMP%]{color:#1a8cff}"]}),P),S=n("aiZK");function x(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1,"Invalid email format."),b.Vb())}function N(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1,"Email is required."),b.Vb())}function G(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1," This email is already taken. If you have already signed up, try logging in instead. "),b.Vb())}function A(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1,"Please enter a password."),b.Vb())}function L(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1,"Needs to be at least 6 characters."),b.Vb())}function R(t,e){1&t&&(b.Wb(0,"mat-error"),b.Ec(1," Password does not match. "),b.Vb())}function $(t,e){if(1&t&&(b.Wb(0,"div",23),b.Wb(1,"div",24),b.Ec(2),b.Vb(),b.Vb()),2&t){var n=b.ic();b.Db(2),b.Gc(" ",n.errorMsg," ")}}function j(t,e){1&t&&b.Rb(0,"app-loading-spinner",25),2&t&&b.oc("diameter",25)}function T(t,e){if(1&t){var n=b.Xb();b.Wb(0,"button",26),b.ec("click",(function(){return b.vc(n),b.ic().onSignupClick()})),b.Ec(1," Create account "),b.Vb()}}var K,Q=function(){return["../","signin"]},q=((K=function(){function t(e,n,r,i){var o=this;_classCallCheck(this,t),this.fb=e,this.as=n,this.router=r,this.store=i,this.accountType=g.a.entityName,this.matcher=new S.a,this.signInTitle="Create your PLACEHOLDER Account.",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new p.a;var s=null,c=null;g.a.production||(s="t@test.com",c="123456"),this.store.select("appAuth").pipe(Object(f.a)(this.compDest$)).subscribe((function(t){o.errorMsg=t.errorMsg,o.errorOccured=t.error,o.loading=t.loading,o.disableFieldsOnLoading(t.loading)})),this.signFg=this.fb.group({email:d.a(s,!1,[a.o.required,a.o.email]),password:d.a(c,!1,[a.o.required]),repassword:d.a(c,!1,[a.o.required])})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(f.a)(this.compDest$)).subscribe((function(e){t.as.clearErrors(),t.repasswordFc.setErrors(t.passwordFc.value!==t.repasswordFc.value?{passwordDoesNotMatch:!0}:null)}))}},{key:"onSignupClick",value:function(){var t=this.signFg.value;if(t.password!==t.repassword)this.as.throwErrorMessage("Password does not match.");else{var e=new m.a(t.email,t.password,!0);this.signup(e)}}},{key:"signup",value:function(t){this.as.registerUser(t)}},{key:"disableFieldsOnLoading",value:function(t){this.signFg&&(t?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}},{key:"ngOnDestroy",value:function(){this.compDest$.next(),this.compDest$.complete()}},{key:"emailFc",get:function(){return this.signFg.get("email")}},{key:"passwordFc",get:function(){return this.signFg.get("password")}},{key:"repasswordFc",get:function(){return this.signFg.get("repassword")}}]),t}()).\u0275fac=function(t){return new(t||K)(b.Qb(a.c),b.Qb(h.a),b.Qb(l.b),b.Qb(v.h))},K.\u0275cmp=b.Kb({type:K,selectors:[["app-auth-signup"]],decls:47,vars:21,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","logo",1,"img-h-100","border-circ",3,"src"],[1,"secfont"],[1,"left-align","mb-3"],["appearance","outline",1,"mb-2","full-w"],["matInput","","placeholder","Email",3,"formControlName","errorStateMatcher"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"password-input"],["matInput","","placeholder","Password","type","password",3,"formControlName","errorStateMatcher"],["appearance","outline",1,"repassword-input"],["matInput","","placeholder","Confirm password","type","password",3,"formControlName","errorStateMatcher","keyup.enter"],["class","err-msg-parent",4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"click",4,"ngIf"],[1,"err-msg-parent"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"click"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Ec(3),b.Vb(),b.Wb(4,"div",3),b.Wb(5,"a",4),b.Ec(6,"Go sign in instead"),b.Vb(),b.Vb(),b.Wb(7,"div",5),b.Wb(8,"mat-card",6),b.Wb(9,"mat-card-content"),b.Wb(10,"div",7),b.Rb(11,"img",8),b.Wb(12,"span",9),b.Ec(13),b.Vb(),b.Vb(),b.Wb(14,"div",10),b.Wb(15,"mat-form-field",11),b.Wb(16,"mat-label"),b.Ec(17,"Email"),b.Vb(),b.Rb(18,"input",12),b.Wb(19,"mat-icon",13),b.Ec(20,"email"),b.Vb(),b.Wb(21,"mat-hint"),b.Ec(22,"This will be your login email."),b.Vb(),b.Cc(23,x,2,0,"mat-error",14),b.Cc(24,N,2,0,"mat-error",14),b.Cc(25,G,2,0,"mat-error",14),b.Vb(),b.Vb(),b.Wb(26,"div"),b.Wb(27,"mat-form-field",15),b.Wb(28,"mat-label"),b.Ec(29,"Password"),b.Vb(),b.Rb(30,"input",16),b.Wb(31,"mat-icon",13),b.Ec(32,"https"),b.Vb(),b.Cc(33,A,2,0,"mat-error",14),b.Cc(34,L,2,0,"mat-error",14),b.Vb(),b.Wb(35,"mat-form-field",17),b.Wb(36,"mat-label"),b.Ec(37,"Confirm"),b.Vb(),b.Wb(38,"input",18),b.ec("keyup.enter",(function(){return e.onSignupClick()})),b.Vb(),b.Wb(39,"mat-icon",13),b.Ec(40,"https"),b.Vb(),b.Cc(41,R,2,0,"mat-error",14),b.Vb(),b.Vb(),b.Cc(42,$,3,1,"div",19),b.Vb(),b.Wb(43,"mat-card-actions"),b.Wb(44,"div",20),b.Cc(45,j,1,1,"app-loading-spinner",21),b.Cc(46,T,2,0,"button",22),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Db(3),b.Gc(" ",e.signInTitle," "),b.Db(2),b.oc("routerLink",b.pc(20,Q)),b.Db(3),b.oc("formGroup",e.signFg),b.Db(3),b.oc("src",e.avartarImgSrc,b.xc),b.Db(2),b.Gc("New ",e.accountType," account"),b.Db(5),b.oc("formControlName","email")("errorStateMatcher",e.matcher),b.Db(5),b.oc("ngIf",e.emailFc.hasError("email")),b.Db(1),b.oc("ngIf",e.emailFc.hasError("required")),b.Db(1),b.oc("ngIf",e.emailFc.hasError("emailExists")),b.Db(5),b.oc("formControlName","password")("errorStateMatcher",e.matcher),b.Db(3),b.oc("ngIf",e.passwordFc.hasError("required")),b.Db(1),b.oc("ngIf",e.passwordFc.hasError("weak")),b.Db(4),b.oc("formControlName","repassword")("errorStateMatcher",e.matcher),b.Db(3),b.oc("ngIf",e.repasswordFc&&e.repasswordFc.hasError("passwordDoesNotMatch")),b.Db(1),b.oc("ngIf",e.errorOccured),b.Db(3),b.oc("ngIf",e.loading),b.Db(1),b.oc("ngIf",!e.loading))},directives:[l.d,w.a,a.l,a.f,w.d,C.c,C.g,y.b,a.b,a.k,a.e,V.a,C.h,C.f,c.k,w.b,C.b,D,W.a],styles:[".signin-card[_ngcontent-%COMP%]{min-width:20rem}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.err-msg-parent[_ngcontent-%COMP%]{max-width:25rem;margin:auto}@media only screen and (min-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:.5rem}}@media only screen and (max-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:0;width:100%}.repassword-input[_ngcontent-%COMP%]{width:100%}}"]}),K),X=n("IzEk"),J=n("lJxs");function U(t,e){if(1&t&&(b.Wb(0,"div"),b.Wb(1,"div",15),b.Ec(2),b.Vb(),b.Vb()),2&t){var n=b.ic();b.Db(2),b.Gc(" ",n.errorMsg," ")}}function z(t,e){1&t&&b.Rb(0,"app-loading-spinner",16),2&t&&b.oc("diameter",25)}function B(t,e){if(1&t){var n=b.Xb();b.Wb(0,"button",17),b.ec("click",(function(){return b.vc(n),b.ic().onSubmit()})),b.Ec(1),b.Vb()}if(2&t){var r=b.ic();b.oc("disabled",r.emailFc.invalid),b.Db(1),b.Fc(r.submitBtnText)}}var H,Z,Y,tt,et=[{path:"",component:u,canActivate:[(Z=function(){function t(e,n,r){_classCallCheck(this,t),this.router=e,this.route=n,this.store=r}return _createClass(t,[{key:"canActivate",value:function(t,e){var n=this;return this.store.select("appAuth").pipe(Object(X.a)(1),Object(J.a)((function(t){return!t.verifiedUser||n.router.createUrlTree(["/","my-account"])})))}}]),t}(),Z.\u0275fac=function(t){return new(t||Z)(b.ac(l.b),b.ac(l.a),b.ac(v.h))},Z.\u0275prov=b.Mb({token:Z,factory:Z.\u0275fac,providedIn:"root"}),Z)],children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:_},{path:"signup",component:q},{path:"reset",component:(H=function(){function t(e,n,r){var i=this;_classCallCheck(this,t),this.fb=e,this.store=n,this.as=r,this.title="Reset your password",this.subtitle="Enter your user account's verified email address and we will send you a password reset link.",this.submitBtnText="Send password reset email",this.compDest$=new p.a,this.avartarImgSrc="assets/banner/placeholder-logo.png",this.store.select("appAuth").pipe(Object(f.a)(this.compDest$)).subscribe((function(t){i.errorMsg=t.errorMsg,i.errorOccured=t.error,i.loading=t.loading,i.disableFieldsOnLoading(t.loading)})),this.createFg()}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.as.clearErrors(),this.resetFg.valueChanges.pipe(Object(f.a)(this.compDest$)).subscribe((function(e){t.as.clearErrors()}))}},{key:"createFg",value:function(){this.resetFg=this.fb.group({email:d.a(null,!1,[a.o.required,a.o.email])})}},{key:"disableFieldsOnLoading",value:function(t){this.resetFg&&(t?this.resetFg.disable({onlySelf:!0,emitEvent:!1}):this.resetFg.enable({onlySelf:!0,emitEvent:!1}))}},{key:"onSubmit",value:function(){this.as.resetPasswordByEmail(this.resetFg.value)}},{key:"ngOnDestroy",value:function(){this.compDest$.next(),this.compDest$.complete()}},{key:"emailFc",get:function(){return this.resetFg.get("email")}}]),t}(),H.\u0275fac=function(t){return new(t||H)(b.Qb(a.c),b.Qb(v.h),b.Qb(h.a))},H.\u0275cmp=b.Kb({type:H,selectors:[["app-auth-reset"]],decls:26,vars:8,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","avartar",1,"img-h-100","border-circ",3,"src"],["appearance","outline",1,"mb-1","full-w"],["matInput","","placeholder","Email",3,"formControlName","keyup.enter"],["matSuffix",""],[4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"disabled","click",4,"ngIf"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"disabled","click"]],template:function(t,e){1&t&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"div",2),b.Ec(3),b.Vb(),b.Wb(4,"div",3),b.Ec(5),b.Vb(),b.Wb(6,"div",4),b.Wb(7,"mat-card",5),b.Wb(8,"mat-card-content"),b.Wb(9,"div",6),b.Rb(10,"img",7),b.Vb(),b.Wb(11,"mat-form-field",8),b.Wb(12,"mat-label"),b.Ec(13,"Email"),b.Vb(),b.Wb(14,"input",9),b.ec("keyup.enter",(function(){return e.onSubmit()})),b.Vb(),b.Wb(15,"mat-icon",10),b.Ec(16,"email"),b.Vb(),b.Wb(17,"mat-hint"),b.Ec(18,"Email associated with your account."),b.Vb(),b.Wb(19,"mat-error"),b.Ec(20,"Invalid email format."),b.Vb(),b.Vb(),b.Cc(21,U,3,1,"div",11),b.Vb(),b.Wb(22,"mat-card-actions"),b.Wb(23,"div",12),b.Cc(24,z,1,1,"app-loading-spinner",13),b.Cc(25,B,2,2,"button",14),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&t&&(b.Db(3),b.Gc(" ",e.title," "),b.Db(2),b.Gc(" ",e.subtitle," "),b.Db(2),b.oc("formGroup",e.resetFg),b.Db(3),b.oc("src",e.avartarImgSrc,b.xc),b.Db(4),b.oc("formControlName","email"),b.Db(7),b.oc("ngIf",e.errorOccured),b.Db(3),b.oc("ngIf",e.loading),b.Db(1),b.oc("ngIf",!e.loading))},directives:[w.a,a.l,a.f,w.d,C.c,C.g,y.b,a.b,a.k,a.e,V.a,C.h,C.f,C.b,c.k,w.b,D,W.a],styles:["@media only screen and (min-width:630px){.signin-card[_ngcontent-%COMP%]{width:30rem}}@media only screen and (max-width:630px){.signin-card[_ngcontent-%COMP%]{min-width:100%}}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.forgot-btn[_ngcontent-%COMP%]{color:#1a8cff}"]}),H)}]}],nt=((Y=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:Y}),Y.\u0275inj=b.Nb({factory:function(t){return new(t||Y)},imports:[[l.e.forChild(et)],l.e]}),Y),rt=n("pqmK"),it=((tt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Ob({type:tt}),tt.\u0275inj=b.Nb({factory:function(t){return new(t||tt)},providers:[],imports:[[c.c,a.g,a.n,s.a,o.a,rt.a,nt]]}),tt)}}]);