function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{txKf:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return Y}));var r,i=n("3Pt+"),a=n("UmVK"),o=n("37S3"),s=n("ofXK"),c=n("tyNb"),l=n("fXoL"),b=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Kb({type:r,selectors:[["app-auth-home"]],decls:2,vars:0,consts:[[1,"container","mb-3"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Rb(1,"router-outlet"),l.Vb())},directives:[c.f],styles:[""]}),r);function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new i.d({value:e||null,disabled:t},n,r)}var d=n("KJJU"),g=n("AytR"),m=n("XNiG"),p=n("1G5W"),f=n("lGQG"),h=n("kt0X"),v=n("Wp6s"),w=n("kmnG"),C=n("qFsG"),y=n("NFeN"),E=n("bSwM"),V=n("ugsT"),W=n("bTqV");function k(e,t){if(1&e&&(l.Wb(0,"div"),l.Wb(1,"div",20),l.Ec(2),l.Vb(),l.Vb()),2&e){var n=l.ic();l.Db(2),l.Gc(" ",n.errorMsg," ")}}function D(e,t){1&e&&l.Rb(0,"app-loading-spinner",21),2&e&&l.oc("diameter",25)}function I(e,t){if(1&e){var n=l.Xb();l.Wb(0,"button",22),l.ec("click",(function(){return l.vc(n),l.ic().onSignInClick()})),l.Ec(1,"Sign in"),l.Vb()}if(2&e){var r=l.ic();l.oc("disabled",r.idFc.invalid)}}var F,O=function(){return["../","signup"]},M=((F=function(){function e(t,n,r,a){var o=this;_classCallCheck(this,e),this.fb=t,this.as=n,this.router=r,this.store=a,this.signInTitle="Sign in with your PLACEHOLDER Account",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new m.a;var s=null,c=null;this.store.select("appAuth").pipe(Object(p.a)(this.compDest$)).subscribe((function(e){o.errorMsg=e.errorMsg,o.errorOccured=e.error,o.loading=e.loading,o.disableFieldsOnLoading(e.loading)})),g.a.production||(s="t1@test.com",c="123456"),this.signFg=this.fb.group({id:u(s,!1,[i.o.required,i.o.email]),password:u(c,!1),saveSession:u(!0,!1)})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(p.a)(this.compDest$)).subscribe((function(t){e.as.clearErrors()}))}},{key:"onSignInClick",value:function(){if(this.passwordFc.value&&""!==this.passwordFc.value.trim()){var e=new d.a(this.signFg.value.id,this.signFg.value.password,this.signFg.value.saveSession);this.signIn(e)}else this.as.throwErrorMessage("Enter a password.")}},{key:"signIn",value:function(e){this.as.userLogin(e)}},{key:"disableFieldsOnLoading",value:function(e){this.signFg&&(e?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}},{key:"ngOnDestroy",value:function(){this.compDest$.next(),this.compDest$.complete()}},{key:"idFc",get:function(){return this.signFg.get("id")}},{key:"passwordFc",get:function(){return this.signFg.get("password")}}]),e}()).\u0275fac=function(e){return new(e||F)(l.Qb(i.c),l.Qb(f.a),l.Qb(c.b),l.Qb(h.h))},F.\u0275cmp=l.Kb({type:F,selectors:[["app-auth-signin"]],decls:38,vars:11,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","avartar",1,"img-h-100","border-circ",3,"src"],["appearance","outline",1,"mb-3","full-w"],["matInput","","placeholder","Email",3,"formControlName","keyup.enter"],["matSuffix",""],["appearance","outline",1,"full-w"],["matInput","","placeholder","Password","type","password",3,"formControlName","keyup.enter"],[1,"left-align"],["color","primary",1,"example-margin",3,"formControlName"],[4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"disabled","click",4,"ngIf"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"disabled","click"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Ec(3),l.Vb(),l.Wb(4,"div",3),l.Ec(5," Don't have an account? "),l.Wb(6,"a",4),l.Ec(7,"Register here."),l.Vb(),l.Vb(),l.Wb(8,"div",5),l.Wb(9,"mat-card",6),l.Wb(10,"mat-card-content"),l.Wb(11,"div",7),l.Rb(12,"img",8),l.Vb(),l.Wb(13,"div"),l.Wb(14,"mat-form-field",9),l.Wb(15,"mat-label"),l.Ec(16,"Email"),l.Vb(),l.Wb(17,"input",10),l.ec("keyup.enter",(function(){return t.onSignInClick()})),l.Vb(),l.Wb(18,"mat-icon",11),l.Ec(19,"email"),l.Vb(),l.Wb(20,"mat-hint"),l.Ec(21,"Email associated with your account."),l.Vb(),l.Wb(22,"mat-error"),l.Ec(23,"Invalid email format."),l.Vb(),l.Vb(),l.Vb(),l.Wb(24,"mat-form-field",12),l.Wb(25,"mat-label"),l.Ec(26,"Password"),l.Vb(),l.Wb(27,"input",13),l.ec("keyup.enter",(function(){return t.onSignInClick()})),l.Vb(),l.Wb(28,"mat-icon",11),l.Ec(29,"https"),l.Vb(),l.Vb(),l.Wb(30,"div",14),l.Wb(31,"mat-checkbox",15),l.Ec(32," Keep me logged in. "),l.Vb(),l.Vb(),l.Cc(33,k,3,1,"div",16),l.Vb(),l.Wb(34,"mat-card-actions"),l.Wb(35,"div",17),l.Cc(36,D,1,1,"app-loading-spinner",18),l.Cc(37,I,2,1,"button",19),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.Db(3),l.Gc(" ",t.signInTitle," "),l.Db(3),l.oc("routerLink",l.pc(10,O)),l.Db(3),l.oc("formGroup",t.signFg),l.Db(3),l.oc("src",t.avartarImgSrc,l.xc),l.Db(5),l.oc("formControlName","id"),l.Db(10),l.oc("formControlName","password"),l.Db(4),l.oc("formControlName","saveSession"),l.Db(2),l.oc("ngIf",t.errorOccured),l.Db(3),l.oc("ngIf",t.loading),l.Db(1),l.oc("ngIf",!t.loading))},directives:[c.d,v.a,i.l,i.f,v.d,w.c,w.g,C.b,i.b,i.k,i.e,y.a,w.h,w.f,w.b,E.a,s.k,v.b,V.a,W.a],styles:["@media only screen and (min-width:630px){.signin-card[_ngcontent-%COMP%]{width:30rem}}@media only screen and (max-width:630px){.signin-card[_ngcontent-%COMP%]{min-width:100%}}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff;font-weight:800}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}"]}),F),P=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"isErrorState",value:function(e,t){return!!(e&&e.invalid&&(e.dirty||e.touched||t&&t.submitted))}}]),e}();function _(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1,"Invalid email format."),l.Vb())}function S(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1,"Email is required."),l.Vb())}function x(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1," This email is already taken. If you have already signed up, try logging in instead. "),l.Vb())}function N(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1,"Please enter a password."),l.Vb())}function A(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1,"Needs to be at least 6 characters."),l.Vb())}function G(e,t){1&e&&(l.Wb(0,"mat-error"),l.Ec(1," Password does not match. "),l.Vb())}function L(e,t){if(1&e&&(l.Wb(0,"div",23),l.Wb(1,"div",24),l.Ec(2),l.Vb(),l.Vb()),2&e){var n=l.ic();l.Db(2),l.Gc(" ",n.errorMsg," ")}}function T(e,t){1&e&&l.Rb(0,"app-loading-spinner",25),2&e&&l.oc("diameter",25)}function R(e,t){if(1&e){var n=l.Xb();l.Wb(0,"button",26),l.ec("click",(function(){return l.vc(n),l.ic().onSignupClick()})),l.Ec(1," Create account "),l.Vb()}}var j,q,$,K,Q=function(){return["../","signin"]},X=((j=function(){function e(t,n,r,a){var o=this;_classCallCheck(this,e),this.fb=t,this.as=n,this.router=r,this.store=a,this.accountType="PLACEHOLDER",this.matcher=new P,this.signInTitle="Create your PLACEHOLDER Account.",this.avartarImgSrc="assets/banner/placeholder-logo.png",this.compDest$=new m.a;var s=null,c=null;g.a.production||(s="t@test.com",c="123456"),this.store.select("appAuth").pipe(Object(p.a)(this.compDest$)).subscribe((function(e){o.errorMsg=e.errorMsg,o.errorOccured=e.error,o.loading=e.loading,o.disableFieldsOnLoading(e.loading)})),this.signFg=this.fb.group({email:u(s,!1,[i.o.required,i.o.email]),password:u(c,!1,[i.o.required]),repassword:u(c,!1,[i.o.required])})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.as.clearErrors(),this.signFg.valueChanges.pipe(Object(p.a)(this.compDest$)).subscribe((function(t){e.as.clearErrors(),e.repasswordFc.setErrors(e.passwordFc.value!==e.repasswordFc.value?{passwordDoesNotMatch:!0}:null)}))}},{key:"onSignupClick",value:function(){var e=this.signFg.value;if(e.password!==e.repassword)this.as.throwErrorMessage("Password does not match.");else{var t=new d.a(e.email,e.password,!0);this.signup(t)}}},{key:"signup",value:function(e){this.as.registerUser(e)}},{key:"disableFieldsOnLoading",value:function(e){this.signFg&&(e?this.signFg.disable({onlySelf:!0,emitEvent:!1}):this.signFg.enable({onlySelf:!0,emitEvent:!1}))}},{key:"ngOnDestroy",value:function(){this.compDest$.next(),this.compDest$.complete()}},{key:"emailFc",get:function(){return this.signFg.get("email")}},{key:"passwordFc",get:function(){return this.signFg.get("password")}},{key:"repasswordFc",get:function(){return this.signFg.get("repassword")}}]),e}()).\u0275fac=function(e){return new(e||j)(l.Qb(i.c),l.Qb(f.a),l.Qb(c.b),l.Qb(h.h))},j.\u0275cmp=l.Kb({type:j,selectors:[["app-auth-signup"]],decls:47,vars:21,consts:[[1,"row","mb-3","roboto","text-center","mt-3"],[1,"col-sm-12"],[1,"mb-2"],[1,"subtitle","mb-2"],[3,"routerLink"],[1,"signin-card-parent"],[1,"signin-card",3,"formGroup"],[1,"signinAvatarParent","mb-3"],["alt","logo",1,"img-h-100","border-circ",3,"src"],[1,"secfont"],[1,"left-align","mb-3"],["appearance","outline",1,"mb-2","full-w"],["matInput","","placeholder","Email",3,"formControlName","errorStateMatcher"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"password-input"],["matInput","","placeholder","Password","type","password",3,"formControlName","errorStateMatcher"],["appearance","outline",1,"repassword-input"],["matInput","","placeholder","Confirm password","type","password",3,"formControlName","errorStateMatcher","keyup.enter"],["class","err-msg-parent",4,"ngIf"],[1,"center-align"],[3,"diameter",4,"ngIf"],["mat-button","","class","signin-btn",3,"click",4,"ngIf"],[1,"err-msg-parent"],[1,"alert","alert-warning"],[3,"diameter"],["mat-button","",1,"signin-btn",3,"click"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Ec(3),l.Vb(),l.Wb(4,"div",3),l.Wb(5,"a",4),l.Ec(6,"Go sign in instead"),l.Vb(),l.Vb(),l.Wb(7,"div",5),l.Wb(8,"mat-card",6),l.Wb(9,"mat-card-content"),l.Wb(10,"div",7),l.Rb(11,"img",8),l.Wb(12,"span",9),l.Ec(13),l.Vb(),l.Vb(),l.Wb(14,"div",10),l.Wb(15,"mat-form-field",11),l.Wb(16,"mat-label"),l.Ec(17,"Email"),l.Vb(),l.Rb(18,"input",12),l.Wb(19,"mat-icon",13),l.Ec(20,"email"),l.Vb(),l.Wb(21,"mat-hint"),l.Ec(22,"This will be your login email."),l.Vb(),l.Cc(23,_,2,0,"mat-error",14),l.Cc(24,S,2,0,"mat-error",14),l.Cc(25,x,2,0,"mat-error",14),l.Vb(),l.Vb(),l.Wb(26,"div"),l.Wb(27,"mat-form-field",15),l.Wb(28,"mat-label"),l.Ec(29,"Password"),l.Vb(),l.Rb(30,"input",16),l.Wb(31,"mat-icon",13),l.Ec(32,"https"),l.Vb(),l.Cc(33,N,2,0,"mat-error",14),l.Cc(34,A,2,0,"mat-error",14),l.Vb(),l.Wb(35,"mat-form-field",17),l.Wb(36,"mat-label"),l.Ec(37,"Confirm"),l.Vb(),l.Wb(38,"input",18),l.ec("keyup.enter",(function(){return t.onSignupClick()})),l.Vb(),l.Wb(39,"mat-icon",13),l.Ec(40,"https"),l.Vb(),l.Cc(41,G,2,0,"mat-error",14),l.Vb(),l.Vb(),l.Cc(42,L,3,1,"div",19),l.Vb(),l.Wb(43,"mat-card-actions"),l.Wb(44,"div",20),l.Cc(45,T,1,1,"app-loading-spinner",21),l.Cc(46,R,2,0,"button",22),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e&&(l.Db(3),l.Gc(" ",t.signInTitle," "),l.Db(2),l.oc("routerLink",l.pc(20,Q)),l.Db(3),l.oc("formGroup",t.signFg),l.Db(3),l.oc("src",t.avartarImgSrc,l.xc),l.Db(2),l.Gc("New ",t.accountType," account"),l.Db(5),l.oc("formControlName","email")("errorStateMatcher",t.matcher),l.Db(5),l.oc("ngIf",t.emailFc.hasError("email")),l.Db(1),l.oc("ngIf",t.emailFc.hasError("required")),l.Db(1),l.oc("ngIf",t.emailFc.hasError("emailExists")),l.Db(5),l.oc("formControlName","password")("errorStateMatcher",t.matcher),l.Db(3),l.oc("ngIf",t.passwordFc.hasError("required")),l.Db(1),l.oc("ngIf",t.passwordFc.hasError("weak")),l.Db(4),l.oc("formControlName","repassword")("errorStateMatcher",t.matcher),l.Db(3),l.oc("ngIf",t.repasswordFc&&t.repasswordFc.hasError("passwordDoesNotMatch")),l.Db(1),l.oc("ngIf",t.errorOccured),l.Db(3),l.oc("ngIf",t.loading),l.Db(1),l.oc("ngIf",!t.loading))},directives:[c.d,v.a,i.l,i.f,v.d,w.c,w.g,C.b,i.b,i.k,i.e,y.a,w.h,w.f,s.k,v.b,w.b,V.a,W.a],styles:[".signin-card[_ngcontent-%COMP%]{min-width:20rem}.signin-card-parent[_ngcontent-%COMP%]{display:flex;justify-content:center}.signinAvatarParent[_ngcontent-%COMP%]{height:50px;font-weight:800}.border-circ[_ngcontent-%COMP%]{border-radius:96px}.signin-btn[_ngcontent-%COMP%]{width:100%;color:#1a8cff;font-weight:800}.subtitle[_ngcontent-%COMP%]{font-size:.8rem}.err-msg-parent[_ngcontent-%COMP%]{max-width:25rem;margin:auto}@media only screen and (min-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:.5rem}}@media only screen and (max-width:530px){.password-input[_ngcontent-%COMP%]{margin-right:0;width:100%}.repassword-input[_ngcontent-%COMP%]{width:100%}}"]}),j),J=n("IzEk"),U=n("lJxs"),z=[{path:"",component:b,canActivate:[(q=function(){function e(t,n,r){_classCallCheck(this,e),this.router=t,this.route=n,this.store=r}return _createClass(e,[{key:"canActivate",value:function(e,t){var n=this;return this.store.select("appAuth").pipe(Object(J.a)(1),Object(U.a)((function(e){return!e.verifiedUser||n.router.createUrlTree(["/","my-account"])})))}}]),e}(),q.\u0275fac=function(e){return new(e||q)(l.ac(c.b),l.ac(c.a),l.ac(h.h))},q.\u0275prov=l.Mb({token:q,factory:q.\u0275fac,providedIn:"root"}),q)],children:[{path:"",redirectTo:"signin",pathMatch:"full"},{path:"signin",component:M},{path:"signup",component:X}]}],H=(($=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:$}),$.\u0275inj=l.Nb({factory:function(e){return new(e||$)},imports:[[c.e.forChild(z)],c.e]}),$),B=n("pqmK"),Y=((K=function e(){_classCallCheck(this,e)}).\u0275mod=l.Ob({type:K}),K.\u0275inj=l.Nb({factory:function(e){return new(e||K)},providers:[],imports:[[s.c,i.g,i.n,o.a,a.a,B.a,H]]}),K)}}]);