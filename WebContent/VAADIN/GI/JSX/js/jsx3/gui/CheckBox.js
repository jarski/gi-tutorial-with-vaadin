/*
 * Copyright (c) 2001-2014, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.require("jsx3.gui.Form","jsx3.gui.Block");jsx3.Class.defineClass("jsx3.gui.CheckBox",jsx3.gui.Block,[jsx3.gui.Form],function(n,f){var
ub={A:";",B:' for="',C:'_input"',D:"_ebLabelClick",E:"&#160;",F:' checked="checked" ',G:" ",H:"_input",I:"3.0.00",J:"tM",K:"disabled",L:/<(input .*?)\/>/g,M:"<$1><xsl:if test=\"{0}='1'\"><xsl:attribute name=\"checked\">checked</xsl:attribute></xsl:if></input>",a:"jsx30checkbox",b:/^false|0|null$/i,c:"jsxtoggle",d:"",e:"visible",f:"hidden",g:"click",h:"keydown",i:"span",j:"relativebox",k:"box",l:"div",m:"inline",n:"input[checkbox]",o:"label",p:"0 18 0 0",q:"0/0/0",r:"background-color:#999999;",s:' id="',t:'"',u:' class="',v:"overflow-x:hidden;",w:' class="jsx30checkbox_tristate" ',x:'_input" type="checkbox"',y:' class="jsx30checkbox_partial" ',z:"visibility:"};n.UNCHECKED=0;n.CHECKED=1;n.PARTIAL=2;n.DEFAULTCLASSNAME=ub.a;f.jsxdefaultchecked=0;var
mb=ub.b;f.init=function(c,h,q,a,l,g,s){this.jsxsuper(c,h,q,a,l,g);this.setDefaultChecked(s==null?1:s);this.jsxchecked=s;};f.getDefaultChecked=function(){return this.jsxdefaultchecked;};f.setDefaultChecked=function(p){this.jsxdefaultchecked=p;return this;};f.getChecked=function(){return this.jsxchecked!=null?this.jsxchecked:this.getDefaultChecked();};f.setChecked=function(o){if(this.jsxchecked!=o){this.jsxchecked=o;this.Wx();if(this.isOldEventProtocol())this.doEvent(ub.c,{intCHECKED:o});}return this;};f.getValue=function(){return this.getChecked();};f.setValue=function(r){this.setChecked(!jsx3.util.strEmpty(r)&&(r+ub.d).search(mb)!=0?1:0);return this;};f.nj=function(k,b){this.focus(b);if(!k.leftButton()&&k.isMouseEvent())return;if(this.getEnabled()==1){var
ib=this.getChecked()==1?0:1;this.jsxchecked=ib;this.Wx(b);this.doEvent(ub.c,{objEVENT:k,intCHECKED:ib,_gipp:1});}};f.Wx=function(o){if(o==null)o=this.getRendered();if(o!=null){(jsx3.html.selectSingleElm(o,0,0,0)).checked=this.jsxchecked==1;(jsx3.html.selectSingleElm(o,0,0,1)).style.visibility=this.jsxchecked==2?ub.e:ub.f;}};f._ebKeyDown=function(r,p){if(r.enterKey()){this.nj(r,p);r.cancelAll();}};f._ebLabelClick=function(q,o){q.preventDefault();};n.yg={};n.yg[ub.g]=true;n.yg[ub.h]=true;f.Hj=function(q,p,a){this.sk(q,p,a,3);};f.zd=function(p){if(this.getParent()&&(p==null||isNaN(p.parentwidth)||isNaN(p.parentheight))){p=(this.getParent()).Id(this);}else if(p==null)p={};var
ca=this.getRelativePosition()!=0&&(!this.getRelativePosition()||this.getRelativePosition()==1);var
xa,sb,tb,Fa;if(p.tagname==null)p.tagname=ub.i;if((xa=this.getBorder())!=null&&xa!=ub.d)p.border=xa;if(ca&&(sb=this.getMargin())!=null&&sb!=ub.d)p.margin=sb;if(!p.boxtype)p.boxtype=ca?ub.j:ub.k;if(p.left==null)p.left=!ca&&!jsx3.util.strEmpty(this.getLeft())?this.getLeft():0;if(p.top==null)p.top=!ca&&!jsx3.util.strEmpty(this.getTop())?this.getTop():0;if(p.height==null)p.height=(tb=this.getHeight())!=null?tb:18;if(p.width==null)if((Fa=this.getWidth())!=null)p.width=Fa;var
Ma=new
jsx3.gui.Painted.Box(p);var
Ha={};Ha.tagname=ub.l;Ha.boxtype=ub.m;var
S=new
jsx3.gui.Painted.Box(Ha);Ma.cl(S);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.width=16;Ha.parentheight=Ma.ld();Ha.height=18;Ha.left=0;Ha.top=0;var
fa=new
jsx3.gui.Painted.Box(Ha);S.cl(fa);var
Ha={};Ha.tagname=ub.n;Ha.empty=true;Ha.omitpos=true;var
Y=new
jsx3.gui.Painted.Box(Ha);fa.cl(Y);var
Ha={};Ha.tagname=ub.i;Ha.boxtype=ub.k;Ha.left=3;Ha.top=7;Ha.width=7;Ha.height=2;var
ma=new
jsx3.gui.Painted.Box(Ha);fa.cl(ma);var
Ha={};Ha.tagname=ub.o;Ha.boxtype=ub.m;Ha.top=2;Ha.left=18;Ha.parentheight=Ma.ld();Ha.height=16;Ha.margin=ub.p;var
oa=new
jsx3.gui.Painted.Box(Ha);Ma.cl(oa);return Ma;};f.focus=function(j){if(!j)j=this.getRendered();if(j)jsx3.html.focus(jsx3.html.selectSingleElm(j,ub.q));};f.paint=function(){this.applyDynamicProperties();var
ab=this.getEnabled()==1;var
la=ab?this.qj(n.yg,0):ub.d;var
hb=this.renderAttributes(null,true);var
Bb=this.getChecked()==2?ub.e:ub.f;var
ja=ab?ub.d:ub.r;var
nb=this.Wl(true);nb.setAttributes(ub.s+this.getId()+ub.t+this.Ak()+ub.u+this.dd()+ub.t+this.nk()+la+hb);nb.setStyles((nb.getPaintedWidth()?ub.v:ub.d)+this.mi(true)+this._k()+this.cd()+this.wk()+this.jc()+this.ch()+this.ad()+this.lc()+this.Wi()+this.Bg());var
ca=nb.lg(0);var
ua=ca.lg(0);ua.setAttributes(ub.w);var
ba=ua.lg(0);ba.setAttributes(ub.s+this.getId()+ub.x+this.bc()+this.Zj()+this.wA()+this.Rl());var
da=ua.lg(1);da.setAttributes(ub.y);da.setStyles(ub.z+Bb+ub.A+ja);var
T=this.il();var
v=nb.lg(1);v.setAttributes((T?ub.B+this.getId()+ub.C:ub.d)+jsx3.html.Mf+this.ri(ub.g,ub.D));return (nb.paint()).join((ca.paint()).join((ua.paint()).join((ba.paint()).join(ub.d)+(da.paint()).join(ub.E))+(v.paint()).join(T)));};f.wA=function(){return this.getChecked()==1?ub.F:ub.d;};f.dd=function(){var
bb=this.getClassName();return n.DEFAULTCLASSNAME+(bb?ub.G+bb:ub.d);};f.doValidate=function(){this.setValidationState(this.getRequired()==0||this.getChecked()==1?1:0);return this.getValidationState();};f.getInputId=function(){return this.getId()+ub.H;};n.getVersion=function(){return ub.I;};f.emGetType=function(){return jsx3.gui.Matrix.EditMask.FORMAT;};f.emInit=function(p){this.jsxsupermix(p);this.subscribe(ub.c,this,ub.J);};f.emSetValue=function(p){this.jsxchecked=Number(p)==1?1:0;};f.emGetValue=function(){var
sa=this.emGetSession();if(sa)return sa.column.getValueForRecord(sa.recordId);return null;};f.emBeginEdit=function(i,p,r,d,g,q,e){var
Q=jsx3.html.selectSingleElm(e,0,0,0,0,0);if(Q&&!Q.getAttribute(ub.K)){this.jsxsupermix(i,p,r,d,g,q,e);jsx3.html.focus(Q);}else return false;};f.emPaintTemplate=function(){this.jsxchecked=0;this.setText(ub.d);this.setEnabled(0);var
O=this.paint();this.setEnabled(1);var
va=this.paint();var
H=this.emGetTemplate(va,O);H=H.replace(ub.L,ub.M);return H;};f.tM=function(r){var
Fa=this.emGetSession();if(Fa){var
R=r.context.intCHECKED;this.jsxchecked=R;Fa.column.setValueForRecord(Fa.recordId,R.toString());}};f.onSetChild=function(d){return false;};});jsx3.CheckBox=jsx3.gui.CheckBox;
