/*
 * Copyright (c) 2001-2014, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.NativeForm",jsx3.gui.Block,null,function(q,f){var
ub={A:"box",B:' id="',C:'"',D:"submit",E:"Q6",F:' action="',G:'" method="',H:'" enctype="',I:'" target="',J:' class="',K:'" ',L:"",M:"complete",N:"loaded",O:"htfrm.bad_xml",P:"UniversalBrowserRead",Q:"htfrm.bad_dt",R:" ",a:"jsx3nativeform",b:"get",c:"post",d:"_blank",e:"_self",f:"_top",g:"application/x-www-form-urlencoded",h:"multipart/form-data",i:"method",j:"action",k:"enctype",l:"target",m:"beforeEnd",n:"jsxdata",o:"error",p:"_iframe",q:'<iframe id="',r:'" name="',s:'" src="about:blank"',t:"load",u:"r0",v:"></iframe>",w:"about:blank",x:"100%",y:"form",z:"inline"};q.DEFAULTCLASSNAME=ub.a;var
O=jsx3.util.Logger.getLogger(q.jsxclass.getName());var
ja=jsx3.gui.Event;q.GET=ub.b;q.POST=ub.c;q.IFRAME=0;q.BLANK=1;q.SELF=2;q.TOP=3;q.eA={1:ub.d,2:ub.e,3:ub.f};q.sK=ub.g;q.kP=ub.h;f.getMethod=function(){return this.jsxmethod;};f.setMethod=function(n){n=n!=null?n.toLowerCase():ub.b;this.jsxmethod=n;var
Ba=this.hJ();if(Ba)Ba.setAttribute(ub.i,n);};f.getAction=function(){return this.jsxaction;};f.setAction=function(g){this.jsxaction=g;var
J=this.hJ();if(J)J.setAttribute(ub.j,(this.getUriResolver()).resolveURI(g));};f.getMultipart=function(){return this.jsxmulti;};f.setMultipart=function(h){this.jsxmulti=h;var
K=this.hJ();if(K)K.setAttribute(ub.k,h?q.kP:q.sK);};f.getTarget=function(){return this.jsxtarget;};f.setTarget=function(d){this.jsxtarget=d;var
Pa=this.hJ();if(Pa)Pa.setAttribute(ub.l,this.Aw(d));var
gb=this.N4();var
F=this.er();if(gb&&!F){gb.parentNode.removeChild(gb);}else if(!gb&&F)jsx3.html.insertAdjacentHTML(Pa,ub.m,this.Qr());};f.getIFrame=function(){return this.jsxiframe;};f.setIFrame=function(a){this.jsxiframe=a;};f.submit=function(){var
Na=this.hJ();if(Na){this.Q6();try{Na.submit();}catch(Kb){if(jsx3.CLASS_LOADER.IE)window.clearInterval(this.pq);this.doEvent(ub.n,{type:ub.o,message:(jsx3.NativeError.wrap(Kb)).toString()});}}};f.reset=function(){var
Ba=this.hJ();if(Ba)Ba.reset();};f.s7=function(){if(jsx3.CLASS_LOADER.IE){try{return this.eval(this.getId()+ub.p);}catch(Kb){}}else return this.N4();};f.N4=function(){return (this.getDocument()).getElementById(this.getId()+ub.p);};f.Aw=function(m){var
v;if(this.jsxiframe){v=this.ck(this.jsxiframe);if(v)v=v.getIFrameId();}return v||q.eA[m]||this.getId()+ub.p;};f.hJ=function(){return this.getRendered();};f.er=function(){return this.jsxtarget==0||this.jsxtarget==null;};f.Qr=function(){var
Xa=this.getId()+ub.p;return ub.q+Xa+ub.r+Xa+ub.s+this.ri(ub.t,ub.u,1)+ub.v;};f.r0=function(n,r){var
y=this.s7();if(y&&y.contentDocument&&y.contentDocument.location.href!=ub.w)this.doEvent(ub.n,{type:ub.t});};f.Q6=function(r,n){if(jsx3.CLASS_LOADER.IE){var
Q=(this.s7()).document;this.pq=window.setInterval((jsx3.$F(function(){try{var
ya=Q!==(this.s7()).document;this.CW(ya);}catch(Kb){this.CW(true);}})).bind(this),250);}};f.Hj=function(n,k,d){this.sk(n,k,d,4);};f.zd=function(d){if(this.getParent()&&(d==null||isNaN(d.parentwidth)||isNaN(d.parentheight))){d=(this.getParent()).Id(this);}else if(d==null)d={};this.applyDynamicProperties();var
Eb=this.getRelativePosition()!=0;var
qa,sa,za;var
La=!Eb&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;var
Z=!Eb&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(d.left==null)d.left=0;if(d.top==null)d.top=0;if(d.width==null)d.width=ub.x;if(d.height==null)d.height=ub.x;d.tagname=ub.y;if(!d.boxtype)d.boxtype=Eb?ub.z:ub.A;return new
jsx3.gui.Painted.Box(d);};f.paint=function(){this.applyDynamicProperties();var
Ra=this.getId();var
Ya=this.renderAttributes(null,true);var
E=this._k()+this.cd()+this.wk()+this.ad()+this.lc()+this.Wi()+this.ch()+this.ke()+this.jc()+this.Pb()+this.Bg()+this.mi();var
ka=this.Wl(true);ka.setAttributes(ub.B+Ra+ub.C+this.ri(ub.D,ub.E)+ub.F+(this.getUriResolver()).resolveURI(this.jsxaction)+ub.G+this.jsxmethod+ub.H+(this.jsxmulti?q.kP:q.sK)+ub.I+this.Aw(this.jsxtarget)+ub.C+this.Rl()+this.nk()+ub.J+this.dd()+ub.K+Ya);ka.setStyles(E);return (ka.paint()).join((this.er()?this.Qr():ub.L)+this.paintChildren());};if(jsx3.CLASS_LOADER.IE){f.CW=function(r){var
X=this.s7();try{X.document.readyState==ub.L;}catch(Kb){window.clearInterval(this.pq);this.pq=null;this.doEvent(ub.n,{type:ub.o});return;}if(r&&(X.document.readyState==ub.M||X.document.readyState==ub.N)){window.clearInterval(this.pq);this.pq=null;this.doEvent(ub.n,{type:ub.t});}};f.getResponseText=function(){var
E=this.s7();if(!E)return null;var
Ra=E.document;var
sa=Ra?Ra.documentElement:null;if(sa&&sa.textContent){return sa.textContent;}else if(Ra.body&&Ra.body.childNodes[0])return Ra.body.childNodes[0].innerHTML;return null;};f.getResponseXML=function(){var
Ca=this.s7();if(!Ca)return null;var
Fa=Ca.document;var
ba=new
jsx3.xml.Document();if(Fa.XMLDocument&&Fa.XMLDocument.documentElement){ba.loadXML(Fa.XMLDocument.documentElement.xml);}else{var
zb=null;if(Fa.documentElement){zb=window.XMLSerializer?(new
XMLSerializer()).serializeToString(Fa):Fa.xml;}else if(Fa.body)zb=Fa.body.innerHTML;ba.loadXML(zb);if(ba.hasError()){O.error(jsx3._msg(ub.O,ba.getError()));ba=null;}}return ba;};}else{f.getResponseText=function(){var
u=this.s7();if(!u)return null;try{if(window.netscape&&netscape.security&&netscape.security.hasOwnProperty())netscape.security.PrivilegeManager.enablePrivilege(ub.P);}catch(Kb){}var
Jb=u.contentDocument;if(Jb instanceof HTMLDocument&&Jb.body&&Jb.body.childNodes[0]){return Jb.body.childNodes[0].innerHTML;}else if(Jb.childNodes){return (new
XMLSerializer()).serializeToString(Jb);}else{O.warn(jsx3._msg(ub.Q,Jb));return ub.L;}};f.getResponseXML=function(){var
lb=this.s7();if(!lb)return null;try{if(window.netscape&&netscape.security&&netscape.security.hasOwnProperty())netscape.security.PrivilegeManager.enablePrivilege(ub.P);}catch(Kb){}var
rb=lb.contentDocument;var
K=new
jsx3.xml.Document();if(rb instanceof HTMLDocument){K.loadXML(jsx3.html.getOuterHTML(rb));}else if(rb.childNodes){K.loadXML((new
XMLSerializer()).serializeToString(rb));}else{O.warn(jsx3._msg(ub.Q,rb));K=null;}if(K.hasError()){O.error(jsx3._msg(ub.O,K.getError()));K=null;}return K;};}f.dd=function(){var
Da=this.getClassName();return q.DEFAULTCLASSNAME+(Da?ub.R+Da:ub.L);};});
