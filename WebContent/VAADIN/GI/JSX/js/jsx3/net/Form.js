/*
 * Copyright (c) 2001-2014, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineClass("jsx3.net.Form",null,[jsx3.util.EventDispatcher],function(q,d){var
ub={A:": <textarea name='",B:"'></textarea></div>",C:"",D:" ",E:": <input type='file' name='",F:"'/></div>",G:"htfrm.dup",H:"htfrm.prompt",I:"htfrm.no_file",J:"htfrm.sec",K:"complete",L:"loaded",M:"htfrm.bad_xml",N:"UniversalBrowserRead",O:"htfrm.bad_dt",P:"htfrm.destr",Q:"px",R:"-50px",S:"0px",T:"10px",U:"@Form ",a:"get",b:"post",c:"application/x-www-form-urlencoded",d:"multipart/form-data",e:"file",f:"response",g:"error",h:"timeout",i:"jsx_httpform_",j:'<form method="get" action=""></form>',k:'<html><body class="jsx30form">',l:"</body></html>",m:"beforeEnd",n:"<span id='",o:"_ispan' style='border:2px solid black;position:absolute;left:-50px;top:0px;width:10px;height:10px;overflow:hidden;'><iframe id='",p:"_frame' style='width:100%;height:100%;'></iframe></span>",q:"_ispan",r:"_frame",s:"htfrm.no_ifr",t:"form",u:"htfrm.bad_frag",v:"method",w:"action",x:"encoding",y:"object",z:"<div>"};var
Lb=jsx3.util.Logger.getLogger(q.jsxclass.getName());q.lp=0;q.oS=250;q.C4=30000;q.METHOD_GET=ub.a;q.METHOD_POST=ub.b;q.sK=ub.c;q.kP=ub.d;q.EVENT_FILE_SELECTED=ub.e;q.EVENT_ON_RESPONSE=ub.f;q.EVENT_ON_ERROR=ub.g;q.EVENT_ON_TIMEOUT=ub.h;d.init=function(g,s,m){this.H0=ub.i+q.lp++;if(g==-1){this.XW(s);}else{this.XW();this.setMethod(g!=null?g:ub.a);this.setAction(s);this.setMultipart(m);}};q.newFromFragment=function(k){return new
q(-1,k);};d.XW=function(l){var
qa=l;if(!qa)qa=ub.j;var
ab=ub.k+qa+ub.l;jsx3.html.insertAdjacentHTML(document.body,ub.m,ub.n+this.H0+ub.o+this.H0+ub.p);this.or=document.getElementById(this.H0+ub.q);this.LR=this.eval(this.H0+ub.r);var
t=this.LR.document||this.LR.contentDocument;if(t==null)throw new
jsx3.Exception(jsx3._msg(ub.s,this));t.open();t.write(ab);t.close();this._form=(t.getElementsByTagName(ub.t))[0];if(l){if(this._form==null)throw new
jsx3.Exception(jsx3._msg(ub.u,l));if(!this._form.method)this._form.method=ub.a;this.aQ=this._form.action;this.yT=this._form.method.toLowerCase();this.bE=Boolean(this._form.encoding)&&this._form.encoding.toLowerCase()==q.kP;}};d.getMethod=function(){return this.yT;};d.setMethod=function(k){k=k!=null?k.toLowerCase():ub.a;this.yT=k;(this.eW()).setAttribute(ub.v,k);};d.getAction=function(){return this.aQ;};d.setAction=function(i){if(!jsx3.CLASS_LOADER.IE)i=((jsx3.app.Browser.getLocation()).resolve(i)).toString();this.aQ=i;(this.eW()).setAttribute(ub.w,i);};d.getMultipart=function(){return this.bE;};d.setMultipart=function(p){this.bE=p;(this.eW()).setAttribute(ub.x,p?q.kP:q.sK);};d.EU=function(){return this.or;};d.dx=function(){return this.LR;};d.eW=function(){return this._form;};d.getField=function(g){var
Ua=(this.eW()).elements[g];return Ua!=null&&typeof Ua==ub.y?Ua.value:null;};d.getFields=function(){var
La=[];var
I=(this.eW()).elements;for(var
Eb=0;Eb<I.length;Eb++)La.push(I[Eb].name);return La;};d.setField=function(i,f,m){var
ua=this.eW();var
fa=ua.elements[i];if(fa==null||typeof fa!=ub.y){jsx3.html.insertAdjacentHTML(ua,ub.m,ub.z+i+ub.A+i+ub.B);fa=ua.elements[i];}if(f==null)f=ub.C;if(m&&fa.value){fa.value=fa.value+ub.D+f;}else fa.value=f;};d.removeField=function(s){var
Ya=this.eW();var
Kb=Ya.elements[s];if(Kb!=null&&Kb.parentNode)jsx3.html.removeNode(Kb.parentNode);};d.addFileUploadField=function(a){var
Jb=this.eW();var
jb=Jb.elements[a];if(jb==null||typeof jb!=ub.y){jsx3.html.insertAdjacentHTML(Jb,ub.m,ub.z+a+ub.E+a+ub.F);jb=Jb.elements[a];var
eb=this;jb.onchange=function(){eb.Iu(a,jb.value);};}else throw new
jsx3.Exception(jsx3._msg(ub.G,this,a));};d.promptForFile=function(f){var
Ca=this.eW();var
ia=Ca.elements[f];if(ia!=null&&ia.type==ub.e){if(jsx3.CLASS_LOADER.IE){ia.click();}else{Lb.warn(jsx3._msg(ub.H));ia.click();}}else throw new
jsx3.Exception(jsx3._msg(ub.I,this,f));};d.Iu=function(r,p){this.publish({subject:ub.e,field:r,value:p});};d.nQ=function(){this._form=null;this.publish({subject:ub.f});};if(jsx3.CLASS_LOADER.IE||jsx3.CLASS_LOADER.SAF){d.send=function(s,m){if(s==null)s=q.oS;if(m==null)m=q.C4;var
M=this.LR.document||this.LR.contentWindow.document;this._form.submit();var
Ya=0;var
ma=m<=0?Number.MAX_VALUE:Math.ceil(m/s);var
xb=this;var
bb=this.pq=window.setInterval(function(){try{var
W=xb.LR.document||xb.LR.contentWindow.document;var
Sa=M!==W;xb.R1(++Ya<ma,Sa);}catch(Kb){xb.R1(++Ya<ma,true);}},s);};d.R1=function(s,a){var
Ha=this.LR.document||this.LR.contentWindow.document;try{var
aa=Ha.readyState;aa==ub.C;}catch(Kb){window.clearInterval(this.pq);this.pq=null;this.Ns(jsx3._msg(ub.J,this,jsx3.NativeError.wrap(Kb)));return;}if(a&&(aa==ub.K||aa==ub.L)){window.clearInterval(this.pq);this.pq=null;this.nQ();}else if(!s){window.clearInterval(this.pq);this.pq=null;this.destroy();this.publish({subject:ub.h});}};d.Ns=function(j){this._form=null;this.publish({subject:ub.g,message:j});};d.abort=function(){window.clearInterval(this.pq);};d.getResponseText=function(){var
Fb=this.LR.document||this.LR.contentWindow.document;var
x=Fb?Fb.documentElement:null;if(x&&x.textContent){return x.textContent;}else if(Fb.body&&Fb.body.childNodes[0])return Fb.body.childNodes[0].innerHTML;return null;};d.getResponseXML=function(){var
Q=this.LR.document||this.LR.contentWindow.document;var
jb=new
jsx3.xml.Document();if(Q.XMLDocument&&Q.XMLDocument.documentElement){jb.loadXML(Q.XMLDocument.documentElement.xml);}else{var
Xa=null;if(Q.documentElement){Xa=window.XMLSerializer?(new
XMLSerializer()).serializeToString(Q):Q.xml;}else if(Q.body)Xa=Q.body.innerHTML;jb.loadXML(Xa);if(jb.hasError()){Lb.error(jsx3._msg(ub.M,jb.getError()));jb=null;}}return jb;};}else{d.send=function(s,m){if(s==null)s=q.oS;if(m==null)m=q.C4;var
v=this;this.LR.onload=function(){v.G8();};try{this._form.submit();}catch(Kb){this.Ns((jsx3.NativeError.wrap(Kb)).toString());return;}this.pq=window.setTimeout(function(){v.Fz();},m);};d.abort=function(){this.LR.onload=null;window.clearTimeout(this.pq);};d.Ns=function(i){this.LR.onload=null;window.clearTimeout(this.pq);this.publish({subject:ub.g,message:i});};d.G8=function(){this.LR.onload=null;if(this.pq){window.clearTimeout(this.pq);this.pq=null;}try{try{if(window.netscape&&netscape.security&&netscape.security.hasOwnProperty())netscape.security.PrivilegeManager.enablePrivilege(ub.N);}catch(Kb){}var
rb=this.LR.contentDocument;var
ob=ub.D+rb.childNodes[0];}catch(Kb){this.publish({subject:ub.g,message:(jsx3.NativeError.wrap(Kb)).toString()});return;}this.nQ();};d.Fz=function(){this.LR.onload=null;this.pq=null;this.destroy();this.publish({subject:ub.h});};d.getResponseText=function(){var
Eb=this.LR.contentDocument;if(Eb instanceof XMLDocument){return (new
XMLSerializer()).serializeToString(Eb);}else if(Eb instanceof HTMLDocument){return Eb.body.childNodes[0].innerHTML;}else{Lb.warn(jsx3._msg(ub.O,Eb));return ub.C;}};d.getResponseXML=function(){var
Xa=this.LR.contentDocument;var
Ra=new
jsx3.xml.Document();if(Xa instanceof XMLDocument){Ra.loadXML((new
XMLSerializer()).serializeToString(Xa));}else if(Xa instanceof HTMLDocument){Ra.loadXML(jsx3.html.getOuterHTML(Xa));}else{Lb.warn(jsx3._msg(ub.O,Xa));Ra=null;}if(Ra.hasError()){Lb.error(jsx3._msg(ub.M,Ra.getError()));Ra=null;}return Ra;};}d.destroy=function(){var
Ha=this.EU();if(Ha!=null){jsx3.html.removeNode(Ha);this.or=null;this.LR=null;this._form=null;}else Lb.warn(jsx3._msg(ub.P,this));};d.reveal=function(h,o,l,p){if(h==null)h=10;if(o==null)o=10;if(l==null)l=Math.round(this.or.parentNode.offsetWidth/3);if(p==null)p=Math.round(this.or.parentNode.offsetHeight/3);var
Va=this.or.style;Va.left=h+ub.Q;Va.top=o+ub.Q;Va.width=l+ub.Q;Va.height=p+ub.Q;Va.zIndex=30000;};d.conceal=function(){var
U=this.or.style;U.left=ub.R;U.top=ub.S;U.width=ub.T;U.height=ub.T;U.zIndex=0;};d.toString=function(){return ub.U+this.getAction();};});jsx3.HttpForm=jsx3.net.Form;
