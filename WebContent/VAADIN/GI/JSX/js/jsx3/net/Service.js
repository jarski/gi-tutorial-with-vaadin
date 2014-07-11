/*
 * Copyright (c) 2001-2014, TIBCO Software Inc.
 * Use, modification, and distribution subject to terms of license.
 */
jsx3.Class.defineClass("jsx3.net.Service",null,[jsx3.util.EventDispatcher],function(c,g){var
ub={A:"1.00",Aa:"SOAP-ENV",Ab:".",Ac:" ==> ",Ad:"jsx3.CACHE",Ae:'").setValue("',Af:'" >',B:"positiveInteger",Ba:"http://schemas.xmlsoap.org/soap/envelope/",Bb:"I",Bc:"1.0",Bd:'.getDocument("',Be:'.setDocument("',Bf:"\n",C:"100",Ca:"SOAP-ENC",Cb:"stubsrc",Cc:"headers/record",Cd:'").selectSingleNode("',Ce:'",jsx3.xml.CDF.Document.newDocument());',Cf:"The XSLT could not be compiled from the CXF source document:\n\t",D:"negativeInteger",Da:"http://schemas.xmlsoap.org/soap/encoding/",Db:"namespace",Dc:"name",Dd:'").getValue();',De:"_doc",Df:"compile",E:"-30",Ea:"xsi",Eb:"The server namespace referenced by this jsx3.net.Service instance could not be resolved. Please validate that the namespace is correct: ",Ec:"value",Ed:"The map has a rule that references an invalid path to a node in the XML cache document, ",Ee:'this.CDFCONTEXT.context.createNode(jsx3.xml.Entity.TYPEELEMENT,"record");',Ef:'<xsl:template match="/">',F:"nonPositiveInteger",Fa:"http://www.w3.org/2001/XMLSchema-instance",Fb:"jsx3.IDE",Fc:"Invalid method. setTimeouts() no longer valid. Use setTimeout() instead.",Fd:": ",Fe:"jsxid",Ff:"@",G:"-40",Ga:"xsd",Gb:"When using the XML Mapping Utility, you must have at lease one GUI component open for edit within GI Builder. Otherwise, there is no server instance to to use as the server context. For now, the IDE context will be used.",Gc:"timeout",Gd:"The map has a rule that references an invalid XML document in the cache: ",Ge:'this.CDFCONTEXT.context.setAttribute("',Gf:'<xsl:template match="*|@*" mode="x',H:"nonNegativeInteger",Ha:"http://www.w3.org/2001/XMLSchema",Hb:"stubpath",Hc:"//record[@jsxskip]",Hd:"CDF Document",He:'","',Hf:'">',I:"-10",Ia:"xml",Ib:"O",Ic:"jsxskip",Id:"Map to CDF Document",Ie:"*[name()='record' and (record or mappings or (@xpointer and not(@xpointer='')))]",If:"mappings/record[@name='CDF Document' or @name='CDF Record' or @name='CDF Attribute']",J:"duration",Ja:"http://www.w3.org/XML/1998/namespace",Jb:"The URL for the rules file does not reference a valid CXF document. Please make sure that the URL is correct (",Jc:"Creating the request message for the operation, '",Jd:'");',Je:"*[local-name()='",Jf:'<data jsxid="jsxroot">',K:"1696-09-01T00:00:00",Ka:"http://xsd.tns.tibco.com/gi/json/2007/",Kb:") and that it returns a valid document:\n\t",Kc:"', using the rules file located at, '",Kd:"CDF Record",Ke:"record[@jsxtext='",Kf:"</data>",L:"dateTime",La:"onSuccess",Lb:"jsxrulesxml",Lc:"/",Ld:"Map to CDF Record",Le:"The call to the operation, '",Lf:'<record jsxid="{generate-id()}">',M:"10-25-2004T11:34:01",Ma:"onError",Mb:"//record[@opname='",Mc:/^([^:]*)(:)/,Md:'this.CDFCONTEXT.records.next().selectNodes("record");',Me:"', hosted at '",Mf:"</record>",N:"gYear",Na:"onTimeout",Nb:"']",Nc:"The stub path (typically the path to the SOAP Envelope Body) does not return a valid node (",Nd:"CDF Attribute",Ne:"' just returned with the HTTP Status code, ",Nf:'<xsl:attribute name="',O:"2005",Oa:"onInvalid",Ob:"//record[@type='T']",Oc:").",Od:"Map to CDF Attribute",Oe:"' has returned an error (HTTP Status Code: '",Of:'"><xsl:value-of select="."/></xsl:attribute>',P:"10-25-2004",Pa:"onProcessRule",Pb:"record[@type='",Pc:"The outbound stub URL does not reference a valid document.  Please make sure that the URL is correct (",Pd:'this.CDFCONTEXT.context.getAttribute("',Pe:"').\nDescription: ",Pf:'<xsl:apply-templates select="',Q:"gMonthDay",Qa:"response",Qb:"function",Qc:"getServiceMessage",Qd:"Script",Qe:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.",Qf:'" mode="x',R:"12-25",Ra:"onResponse",Rb:"object",Rc:"jsx",Rd:"Map to Script",Re:"The static JSON string did not return a valid JSON object when evaluated. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription:",Rf:'"/>',S:"gDay",Sa:"",Sb:"jsxhttprequest",Sc:"xmlns:",Sd:"this.eval(",Se:"' did not return a valid response document. The inbound filter (e.g., doInboundFilter()) as well as the inbound mappings (e.g., doInboundMap()) will not be executed.\nDescription: ",Sf:"</xsl:template>",T:"25",Ta:"\t:\t",Tb:"//record[@type='W']",Tc:"mappings/record[@name='CDF Record' and @value and not(@value='')]/@value",Td:");",Te:"Executing in Static mode, using service message proxy, '",Tf:"record[not(mappings/record[@name='CDF Record' and @value and not(@value='')])]",U:"gMonth",Ua:"\r\n",Ub:"src",Uc:"//record[@jsxid='",Ud:"???",Ue:"'.",V:"12",Va:"{",Vb:"endpoint",Vc:"The rule node identified by the jsxid, '",Vd:"restrictions/record[@name='nillable' and @value='true']",Ve:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter and inbound mappings will NOT be run.",W:"gYearMonth",Wa:",",Wb:"Executing the Outbound Filter.",Wc:"', cannot be located. Processing will proceed normally with the active rule and will not be handled by the referenced (unresolved) rule.",Wd:"repeat",We:"The Cache document, '",X:"2004-12",Xa:"}",Xb:"onbeforesend",Xc:"type",Xd:"groupref",Xe:"', is being referenced as a bound CDF document for the operation, '",Y:"base64Binary",Ya:"The XML document could not be converted to JSON, because it does not belong to the namespace, ",Yb:"Executing the Inbound Filter.",Yc:"A",Yd:"soaparray",Ye:"'. However, this document cannot be located.",Z:"bGJpcmRlYXVAdGliY28uY29t",Za:"safename",Zb:"onafterreceive",Zc:"jsxtext",Zd:"soaparraytype",Ze:"mode",_:"float",_a:"array",_b:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound filter will not be run.",_c:":",_d:"Array",_e:"Executing the Inbound Mappings.",a:"Lorem ipsum dolor sit amet consectetuer adipiscing elit In pharetra wisi non dolor Pellentesque a ipsum Nulla laoreet erat a nulla In porta luctus justo Pellentesque arcu odio sollicitudin ac hendrerit non ornare et risus Proin aliquam viverra ligula Aliquam eget lectus eu lorem convallis volutpat Aliquam erat volutpat",aa:"134.52",ab:"array/literal",ac:"method",ad:"D",ae:"arrayType",af:"F",b:"string",ba:"0.923874",bb:'"',bc:"POST",bd:"ancestor-or-self::record[(@type='I' or @type='O') and @soapuse='encoded' and @soapencstyle='",be:"record[@jsxtext='arrayType']/@ttns",bf:"This operation uses a compiled XSLT document to transform the server results to CDF.",c:"int",ca:"anyURI",cb:'":[',cc:"jsonp",cd:"datatype",ce:"record[@jsxtext='arrayType']/@datatype",cf:"jsx3.xml.Template",d:"1000",da:"http://www.generalinterface.org/",db:"[",dc:"record",dd:"simple",de:"./*",df:"The compiled transformation was successful. Adding the CDF to the server's cache.",e:"integer",ea:"NMTOKEN",eb:"literal",ec:"tns",ed:/[^:]*[:]?/,ee:"restrictions/record[@name!='minoccur' and @name!='maxoccur']",ef:".//record/mappings/record[@name='CDF Document']",f:"2000",fa:"Y",fb:"]",fc:"Running in static mode. Using sample response document at '",fd:"xsd:",fe:"restrictions/record[@name='enumeration' and @value='",ff:"The CDF document that was just created could not be cached, because it has no name. Update the Rules document to use a name for the CDF document being created.",g:"double",ga:"NMTOKENS",gb:"simpletype",gc:"'",gd:"ttns",ge:"enumeration",gf:"CDF Mappings require that the first mapping be of type 'CDF Document' and that this mapping type exist only once for an output. Update the Rules document to use a a CDF Document mapping.",h:"1.234",ha:"NO",hb:"simpletype/literal",hc:"get",hd:"xsi:type",he:"maxExclusive",hf:"The merge failed and a CDF Document could not be created, using the compiled CXF. Run this operation in an uncompiled state to better discern the cause of this error:\n\t",i:"boolean",ia:"Name",ib:'":',ic:"The static response URL does not reference a valid file. The transaction has been cancelled.  Please make sure that the URL is correct (",id:"Create Node",ie:"maxInclusive",j:"true",ja:"abc",jb:/^true$|^false$|^null$|^[1-9]+(?:(?:[0-9]*\.*)|\.*)[0-9]*$/,jc:") and that it returns a valid JSON object:\n\t",jd:"<",je:"minInclusive",jf:"jsx:",k:"date",ka:"NCName",kb:/^xml|^\d|[\W]/i,kc:"The static response URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",kd:">",ke:"minExclusive",kf:"xmlns:jsx='",l:"2005-10-19Z",la:"abcdefg",lb:"( ",lc:/^script$/i,ld:"mappings/record",le:"length",lf:"//",m:"time",ma:"token",mb:")",mc:"Contacting JSON Service at '",md:"DOM",me:"maxLength",mf:"An alternate message exchange pattern was encountered for the mapping rule: one-way. The inbound mappings will not be run.",n:"22:33:12Z",na:"language",nb:"svc.json",nc:"jsxservicecallback_",nd:"Map to DOM",ne:"minLength",nf:"doInboundMap",o:"short",oa:"en-cockney",ob:"json",oc:"callback",od:'jsx3.GO("',oe:"pattern",of:"//*[@xmlns:",p:"1",pa:"normalizedString",pb:"null",pc:"?",pd:',"',pe:"validate",pf:"]/@xmlns:",q:"unsignedLong",qa:"ID",qb:"number",qc:"-1",qd:").getValue();",qe:"Invalidate",qf:"jsx3.net.Service.getURLForNS",r:"26216842",ra:"IDREFS",rb:"val",rc:"&",rd:"OUTBOUND",re:" != ",rf:"Could not finde the URI for the given namespace prefix.",s:"unsignedInt",sa:"ENTITY",sb:"enum",sc:"=",sd:"Could not map the JSX object named, '",se:"INBOUND",sf:"3.0.00",t:"10",ta:"ENTITIES",tb:/^\W/g,tc:"jsxservicecall_",td:"', because it is null.",te:"jsx3.gui.Form",tf:'<?xml version="1.0" ?>',u:"unsignedShort",ua:"QName",ub:"x",uc:"script",ud:"NODE",ue:"jsx3.gui.RadioButton",uf:'<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" ',v:"unsignedByte",va:"qname",vb:/^xml/i,vc:"Using static request document located at '",vd:"CACHE",ve:"jsx3.gui.CheckBox",vf:'<xsl:output method="xml" omit-xml-declaration="no"/>',w:"byte",wa:"hexBinary",wb:"xxx",wc:"The static request URL does not reference a valid document. The transaction has been cancelled.  Please make sure that the URL is correct (",wd:"::",we:"false",wf:"</xsl:stylesheet>",x:"long",xa:"\\u255\\u254",xb:/^\d/,xc:"The request message could not be generated. The transaction has been cancelled",xd:"Map to Cache Node",xe:"jsx3.gui.Block",xf:'="',y:"48216842",ya:"notation",yb:"d",yc:"Sending request to remote service located at '",yd:'jsx3.getApp("',ye:"Locate Node",yf:" ",z:"decimal",za:"here is a note",zb:/\W/g,zc:"Setting HTTP Request Header, ",zd:'")',ze:').setValue("',zf:' exclude-result-prefixes="'};c.simpletypes={};c.simpletypestext=ub.a;c.simpletypes[ub.b]=function(){var
zb=parseInt(Math.random()*(c.simpletypestext.length-15));return jsx3.util.strTrim(c.simpletypestext.substring(zb,zb+15));};c.simpletypes[ub.c]=ub.d;c.simpletypes[ub.e]=ub.f;c.simpletypes[ub.g]=ub.h;c.simpletypes[ub.i]=ub.j;c.simpletypes[ub.k]=ub.l;c.simpletypes[ub.m]=ub.n;c.simpletypes[ub.o]=ub.p;c.simpletypes[ub.q]=ub.r;c.simpletypes[ub.s]=ub.t;c.simpletypes[ub.u]=ub.p;c.simpletypes[ub.v]=ub.t;c.simpletypes[ub.w]=ub.t;c.simpletypes[ub.x]=ub.y;c.simpletypes[ub.z]=ub.A;c.simpletypes[ub.B]=ub.C;c.simpletypes[ub.D]=ub.E;c.simpletypes[ub.F]=ub.G;c.simpletypes[ub.H]=ub.t;c.simpletypes[ub.F]=ub.I;c.simpletypes[ub.J]=ub.K;c.simpletypes[ub.L]=ub.M;c.simpletypes[ub.N]=ub.O;c.simpletypes[ub.k]=ub.P;c.simpletypes[ub.Q]=ub.R;c.simpletypes[ub.S]=ub.T;c.simpletypes[ub.U]=ub.V;c.simpletypes[ub.W]=ub.X;c.simpletypes[ub.Y]=ub.Z;c.simpletypes[ub._]=ub.aa;c.simpletypes[ub.z]=ub.ba;c.simpletypes[ub.ca]=ub.da;c.simpletypes[ub.ea]=ub.fa;c.simpletypes[ub.ga]=ub.ha;c.simpletypes[ub.ia]=ub.ja;c.simpletypes[ub.ka]=ub.la;c.simpletypes[ub.ma]=ub.fa;c.simpletypes[ub.na]=ub.oa;c.simpletypes[ub.pa]=c.simpletypes[ub.b];c.simpletypes[ub.qa]=ub.qa;c.simpletypes[ub.ra]=ub.ra;c.simpletypes[ub.sa]=ub.sa;c.simpletypes[ub.ta]=ub.ta;c.simpletypes[ub.ua]=ub.va;c.simpletypes[ub.wa]=ub.xa;c.simpletypes[ub.ya]=ub.za;c.inc_inc=0;c.IE={};c.IE[ub.Aa]=ub.Ba;c.IE[ub.Ca]=ub.Da;c.IE[ub.Ea]=ub.Fa;c.IE[ub.Ga]=ub.Ha;c.IE[ub.Ia]=ub.Ja;c.json_namespace=ub.Ka;c.ON_SUCCESS=ub.La;c.ON_ERROR=ub.Ma;c.ON_TIMEOUT=ub.Na;c.ON_INVALID=ub.Oa;c.ON_PROCESS_RULE=ub.Pa;g.init=function(i,d,s,p){this.setRulesURL(i);this.setOperationName(d);if(s!=null)this.setOutboundURL(s);if(p!=null)this.setInboundURL(p);var
za=new
jsx3.net.Request();za.subscribe(ub.Qa,this,ub.Ra);this.setRequest(za);};g.getSupportedNamespaces=function(){var
hb=ub.Sa;for(var cb in c.IE)hb=hb+(cb+ub.Ta+c.IE[cb]+ub.Ua);return hb;};c.XML2JSON=function(b){var
Hb=b.getRootNode();if(Hb&&Hb.getNamespaceURI()==ub.Ka){var
O=[];for(var
sa=Hb.getChildIterator();sa.hasNext();)O.push(c._convertXML(sa.next()));return ub.Va+O.join(ub.Wa)+ub.Xa;}else c.Q2(2,ub.Ya+ub.Ka);return null;};c._convertXML=function(s){var
Oa=s.getNamespaceURI();var
ja=s.getAttribute(ub.Za)||s.getBaseName();var
da,u,La,V,R;if(Oa==ub.Ka+ub._a||Oa==ub.Ka+ub.ab){da=Oa==ub.Ka+ub._a?ub.bb+ja+ub.cb:ub.db;V=[];for(R=s.getChildIterator();R.hasNext();){var
B=R.next();for(var
Da=B.getChildIterator();Da.hasNext();){var
z=Da.next();var
Na=z.getNamespaceURI();V.push(Na.indexOf(ub.eb)>-1?c._convertXML(z):ub.Va+c._convertXML(z)+ub.Xa);}}u=V.join(ub.Wa);La=ub.fb;}else if(Oa.indexOf(ub.Ka+ub.gb)==0){da=Oa.indexOf(ub.hb)==-1?ub.bb+ja+ub.ib:ub.Sa;if(c._jsonstringreg.exec(s.getValue())){u=s.getValue();}else u=jsx3.util.strEscapeJSON(s.getValue());La=ub.Sa;}else{var
vb=(s.getChildNodes()).size()>=1;da=ub.bb+ja+ub.ib+(vb?ub.Va:ub.Sa);V=[];for(R=s.getChildIterator();R.hasNext();)V.push(c._convertXML(R.next()));u=V.join(ub.Wa);La=vb?ub.Xa:ub.Sa;}return da+u+La;};c._jsonstringreg=ub.jb;c._saferegname=ub.kb;c.JSON2XML=function(h){if(typeof h==ub.b)try{h=jsx3.eval(ub.lb+h+ub.mb);}catch(Kb){var
Qa=jsx3.lang.NativeError.wrap(Kb);var
Bb=jsx3._msg(ub.nb,h,Qa.getMessage());throw new
jsx3.Exception(Bb);}var
Ia=new
jsx3.xml.Document();Ia.createDocumentElement(ub.ob,ub.Ka);c._convertObject(h,Ia);return Ia;};c._convertObject=function(n,o){var
fa=typeof n,aa,Q,A;if(n==null){fa=ub.pb;n=ub.pb;}if(fa==ub.b||fa==ub.qb||fa==ub.i||fa==ub.pb){aa=o.createNode(1,ub.rb,ub.Ka+ub.hb);o.appendChild(aa);aa.setValue(n);}else if(jsx3.$A.is(n)){Q=o.createNode(1,ub.rb,ub.Ka+ub.ab);o.appendChild(Q);for(A=0;A<n.length;A++){aa=Q.createNode(1,ub.sb,ub.Ka+ub.sb);Q.appendChild(aa);c._convertObject(n[A],aa);}}else for(var wa in n){var
u=c._saferegname.exec(wa)?((((wa.replace(ub.tb,ub.ub)).replace(ub.vb,ub.wb)).replace(ub.vb,ub.wb)).replace(ub.xb,ub.yb)).replace(ub.zb,ub.Ab):null;var
La=n[wa];fa=typeof La;if(La==null){fa=ub.pb;La=ub.pb;}if(fa==ub.b||fa==ub.qb||fa==ub.i||fa==ub.pb){aa=o.createNode(1,u||wa,ub.Ka+ub.gb);o.appendChild(aa);if(u)aa.setAttribute(ub.Za,wa,c.IE[ub.Ia]);aa.setValue(La);}else if(jsx3.$A.is(La)){Q=o.createNode(1,u||wa,ub.Ka+ub._a);o.appendChild(Q);if(u)Q.setAttribute(ub.Za,wa,c.IE[ub.Ia]);for(A=0;A<La.length;A++){aa=Q.createNode(1,ub.sb,ub.Ka+ub.sb);Q.appendChild(aa);c._convertObject(La[A],aa);}}else{aa=o.createNode(1,u||wa,ub.Ka);o.appendChild(aa);if(u)aa.setAttribute(ub.Za,wa,c.IE[ub.Ia]);c._convertObject(La,aa);}}};g.getRulesURL=function(){return this.jsxrulesurl;};g.setRulesURL=function(o){this.jsxrulesurl=o;this.resetRulesTree();return this;};g._getOutboundStubDocument=function(){if(this.jsxstubdocument instanceof jsx3.xml.Document)return this.jsxstubdocument;return null;};g.setOutboundStubDocument=function(r){this.jsxstubdocument=r;return this;};g.getOutboundStubURL=function(){if(this.jsxstuburl==null){var
cb=this.getMEPNode(ub.Bb);if(cb){var
vb=cb.getAttribute(ub.Cb);return vb!=null&&jsx3.util.strTrim(vb)!=ub.Sa?vb:null;}}else return this.jsxstuburl;return null;};g.setOutboundStubURL=function(i){this.jsxstuburl=i;return this;};g.getNamespace=function(){var
Ba=this.getServer();return Ba!=null?Ba.getEnv(ub.Db):null;};g.getServer=function(){if(this._jsxYn){return this._jsxYn;}else if(this.jsxserverns){var
Ea=jsx3.lang.System.getApp(this.jsxserverns);if(Ea instanceof jsx3.app.Server){return Ea;}else c.Q2(2,ub.Eb+this.jsxserverns);}else{var
Aa=jsx3.System.getAllApps();for(var
ka=0;ka<Aa.length;ka++)if(Aa[ka].getEnv(ub.Db)!=ub.Fb)return Aa[ka];}if(jsx3.IDE){c.Q2(2,ub.Gb);return jsx3.IDE;}return null;};g.setNamespace=function(f){if(f instanceof jsx3.app.Server){this._jsxYn=f;this.jsxserverns=f.getEnv(ub.Db);}else{this._jsxYn=null;this.jsxserverns=f;}return this;};g.getOutboundStubPath=function(){if(this.jsxstubpath==null){var
wb=this.getMEPNode(ub.Bb);if(wb){var
lb=wb.getAttribute(ub.Hb);return lb!=null&&jsx3.util.strTrim(lb)!=ub.Sa?lb:null;}}else return this.jsxstubpath;return null;};g.setOutboundStubPath=function(q){this.jsxstubpath=q;return this;};g.getInboundURL=function(){if(this.jsxinboundurl==null){var
K=this.getMEPNode(ub.Ib);if(K){var
Ib=K.getAttribute(ub.Cb);return Ib!=null&&jsx3.util.strTrim(Ib)!=ub.Sa?Ib:null;}}else return this.jsxinboundurl;return null;};g.setInboundURL=function(h){this.jsxinboundurl=h;return this;};g.getOutboundURL=function(){return this.jsxoutboundurl;};g.setOutboundURL=function(i){this.jsxoutboundurl=i;return this;};g.getOperationName=function(){return this.operation;};g.setOperationName=function(m){this.operation=m;return this;};g.getRulesXML=function(){if(!this.jsxrulesxml){var
bb=this.getRulesURL();var
fa=new
jsx3.xml.Document();fa.load(bb);if(fa.hasError()){c.Q2(2,ub.Jb+bb+ub.Kb+fa.getError());}else this.jsxrulesxml=fa;}return this.jsxrulesxml;};g.setRulesXML=function(j){this.jsxrulesxml=j;};g.resetRulesTree=function(){delete this[ub.Lb];return this;};g.getOperationNode=function(){var
Ib=this.getRulesXML();if(Ib){var
Ga=Ib.selectSingleNode(ub.Mb+this.getOperationName()+ub.Nb);return Ga?Ga:(this.getRulesXML()).selectSingleNode(ub.Ob);}return null;};g.getMEPNode=function(l){var
Z=this.getOperationNode();return Z?Z.selectSingleNode(ub.Pb+l+ub.Nb):null;};g.getUserName=function(){return this.jsxusername;};g.setUserName=function(l){this.jsxusername=l;return this;};g.getUserPass=function(){return this.jsxuserpass;};g.setUserPass=function(o){this.jsxuserpass=o;return this;};g.setOnSuccess=function(h){this.jsxonsuccess=h;return this;};g.setOnError=function(b){this.jsxonerror=b;return this;};g.onSuccess=function(){this.publish({subject:ub.La});var
Y=typeof this.jsxonsuccess;if(Y==ub.Qb||Y==ub.Rb){this.jsxonsuccess(this);}else if(Y==ub.b)this.eval(this.jsxonsuccess);};g.onError=function(){this.publish({subject:ub.Ma});var
wb=typeof this.jsxonerror;if(wb==ub.Qb||wb==ub.Rb){this.jsxonerror(this);}else if(wb==ub.b)this.eval(this.jsxonerror);};g.setRequest=function(e){if(e!=null){this.jsxhttprequest=e;}else delete this[ub.Sb];};g.getRequest=function(){return this.jsxhttprequest;};g.getInboundDocument=function(){return this.jsxinbounddocument==null?null:this.jsxinbounddocument;};g.setInboundDocument=function(q){this.jsxinbounddocument=q;};g.getOutboundDocument=function(){return this.jsxoutbounddocument==null?null:this.jsxoutbounddocument;};g.setOutboundDocument=function(b){this.jsxoutbounddocument=b;};g.getWSDL=function(){if(this.wsdl==null){var
L=(this.getRulesXML()).selectSingleNode(ub.Tb);if(L){var
I=L.getAttribute(ub.Ub);}else return null;}return this.wsdl==null?this.wsdl=jsx3.CACHE.openDocument(I):this.wsdl;};g.getEndpointURL=function(){return this.jsxserviceurl==null?(this.getOperationNode()).getAttribute(ub.Vb):this.jsxserviceurl;};g.setEndpointURL=function(a){this.jsxserviceurl=a;return this;};g.doOutboundFilter=function(d){c.Q2(5,ub.Wb);if(d==null)d=(this.getMEPNode(ub.Bb)).getAttribute(ub.Xb);this.eval(d);};g.doInboundFilter=function(d){c.Q2(5,ub.Yb);if(d==null){var
Xa=this.getMEPNode(ub.Ib);if(Xa){d=Xa.getAttribute(ub.Zb);}else{c.Q2(5,ub._b);return;}}this.eval(d);};g.getMethod=function(){if(this.jsxmethod==null){var
Kb=(this.getOperationNode()).getAttribute(ub.ac);if(jsx3.util.strEmpty(Kb))Kb=ub.bc;this.jsxmethod=Kb;}return this.jsxmethod;};g.setMethod=function(f){this.jsxmethod=f;};g.getJSONP=function(){if(this.jsxjsonp==null)this.jsxjsonp=(this.getOperationNode()).getAttribute(ub.cc)==ub.p;return this.jsxjsonp;};g.setJSONP=function(k){this.jsxjsonp=k;};g._setValid=function(h){this.YS=h;};g._isValid=function(){return this.YS;};g._isJSON=function(p){var
qa=this.getMEPNode(p);var
Cb=qa.selectSingleNode(ub.dc);return Cb&&Cb.getAttribute(ub.ec)==ub.Ka;};g.doCall=function(a){var
Sa=this.getRulesXML();if(Sa!=null)if(!this.getMode()){var
Ta=(this.getServer()).resolveURI(this.getInboundURL());c.Q2(5,ub.fc+Ta+ub.gc);if(this._isJSON(ub.Ib)){var
da=jsx3.net.Request.open(ub.hc,Ta,false);da.send();var
va=da.getResponseText();if(!jsx3.util.strEmpty(va)){jsx3.sleep(function(){this.onResponse({target:{getResponseText:function(){return va;}}});},null,this);}else{c.Q2(2,ub.ic+Ta+ub.jc+zb.getError());return false;}}else{var
zb=((this.getServer()).getCache()).getOrOpenDocument(Ta,Ta);if(zb.hasError()){c.Q2(2,ub.kc+Ta+ub.Kb+zb.getError());return false;}else{zb=zb.cloneDocument();jsx3.sleep(function(){this.onResponse({target:{getResponseXML:function(){return zb;}}});},null,this);}}}else if((this.getMethod()).search(ub.lc)==0){var
Va=((this.getServer()).resolveURI(this.getEndpointURL())).toString();c.Q2(5,ub.mc+Va+ub.gc);var
v=this.getUniqueId();if(this.getJSONP()){var
S=ub.nc+v;var
Fa=this;window[S]=function(q){Fa.doRespond(q);};var
Lb=typeof this.getJSONP()==ub.b?this.getJSONP():ub.oc;Va=Va+(Va.indexOf(ub.pc)==ub.qc?ub.pc:ub.rc)+Lb+ub.sc+S;}(this.getServer()).loadInclude(Va,ub.tc+v,ub.uc,false);}else{var
V=this.getOutboundURL();var
Mb;if(V){V=(this.getServer()).resolveURI(V);c.Q2(5,ub.vc+V+ub.gc);Mb=((this.getServer()).getCache()).getOrOpenDocument(V,V);if(Mb.hasError()){c.Q2(2,ub.wc+V+ub.Kb+Mb.getError());return false;}else Mb=Mb.cloneDocument();}else{Mb=this.getServiceMessage();if((this.getMethod()).toUpperCase()==ub.bc&&!Mb){c.Q2(4,ub.xc);return false;}}if(!this._isValid()&&a){return false;}else{this.setOutboundDocument(Mb);this.doOutboundFilter();c.Q2(5,ub.yc+this.getEndpointURL()+ub.gc);var
ra=this.getRequest();ra.open(this.getMethod(),this.getEndpointURL(),true,this.getUserName(),this.getUserPass());var
Hb=this.getHeaders();var
u;for(u in Hb)if(!(typeof Hb[u]==ub.Qb||typeof Hb[u]==ub.Rb)){ra.setRequestHeader(u.toString(),Hb[u]);c.Q2(5,ub.zc+u+ub.Ac+Hb[u]+ub.gc);}var
ob;if(this._isJSON(ub.Bb)){ob=c.XML2JSON(Mb);}else ob=Mb!=null&&Mb instanceof jsx3.xml.Document&&!Mb.hasError()?Mb.serialize(ub.Bc):null;ra.send(ob,this.getTimeout());return true;}}return false;};g.setRequestHeader=function(l,a){var
da=this.getHeaders();da[l]=a;};g.getHeaders=function(){if(this.jsxheaders==null){this.jsxheaders={};var
yb=(this.getOperationNode()).selectNodes(ub.Cc);for(var
Wa=yb.iterator();Wa.hasNext();){var
N=Wa.next();this.jsxheaders[N.getAttribute(ub.Dc)+ub.Sa]=N.getAttribute(ub.Ec)+ub.Sa;}}return this.jsxheaders;};g.setTimeouts=function(s,n,i,q){c.Q2(4,ub.Fc);return this;};g.onTimeout=function(){this.publish({subject:ub.Na});};g.setTimeout=function(h,i,o){(this.getRequest()).subscribe(ub.Gc,this,ub.Na);this.subscribe(ub.Na,i,o);this.jsxtimeout=h;return this;};g.getTimeout=function(){return this.jsxtimeout;};g.resetRules=function(){var
Ja=(this.getRulesXML()).selectNodes(ub.Hc);for(var
cb=Ja.iterator();cb.hasNext();)(cb.next()).removeAttribute(ub.Ic);return this;};g._resetNamespaceRegistry=function(){this.nshash={};this.nsinc=0;};c.Q2=function(s,p){if(c.dK==null)if(jsx3.util.Logger){c.dK=jsx3.util.Logger.getLogger(c.jsxclass.getName());if(c.dK==null)return;}else return;c.dK.log(s,p);};g._reset=function(){this.resetRules();this._setValid(true);this._resetNamespaceRegistry();};g.getServiceMessage=function(l,s){var
Qa=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());var
J,ya;this._reset();var
yb=this.getOperationNode();c.Q2(5,ub.Jc+this.getOperationName()+ub.Kc+this.getRulesURL()+ub.gc);if(!s){J=this._getOutboundStubDocument();s=this.getOutboundStubURL();}if(s||J instanceof jsx3.xml.Document){var
Ia=this.getServer();if(!(J instanceof jsx3.xml.Document)){s=Ia.resolveURI(s);J=((this.getServer()).getCache()).getOrOpenDocument(s,s);}if(!J.hasError()){var
ka=this.getOutboundStubPath();var
va=ka.split(ub.Lc);var
w={};for(var
Cb=0;Cb<va.length;Cb++)if(va[Cb].search(ub.Mc)>-1)w[RegExp.$1]=1;J=J.cloneDocument();ya=J.selectSingleNode(ka,J.getDeclaredNamespaces(w));if(!ya){c.Q2(2,ub.Nc+ka+ub.Oc);return null;}}else{c.Q2(2,ub.Pc+s+ub.Kb+J.getError());return null;}}var
y=yb.selectSingleNode(ub.Pb+(l==null?ub.Bb:(l.substring(0,1)).toUpperCase())+ub.Nb);var
Mb=y.selectNodes(ub.dc);var
ja;for(var
lb=Mb.iterator();lb.hasNext();)ja=this.doAddAndRecurse(J,ya,lb.next(),l,true);Qa.log(ub.Qc);return J?J:ja;};g.registerNamespace=function(n,l,r){var
Fa=ub.Sa;var
rb=null;if(n==c.IE[ub.Ia]){Fa=ub.Ia;rb=n;}else if(n!=ub.Sa&&this.nshash[n]!=null){rb=n;Fa=this.nshash[n];}else if(n!=ub.Sa){this.nsinc++;this.nshash[n]=ub.Rc+this.nsinc;rb=n;Fa=ub.Rc+this.nsinc;if(r!=true){var
fa=l.getRootNode();fa.setAttribute(ub.Sc+Fa,rb);}}return {prefix:Fa,uri:rb};};g.doAddAndRecurse=function(_jsxa,_jsxj,f,n,h){if(f.getAttribute(ub.Ic))return;var
Sa=false;var
Eb=this;var
oa;var
Ua=function(q){q.setAttribute(ub.Ic,ub.p);};var
ma=function(b){b.removeAttribute(ub.Ic);};var
eb=function(p){(p.getParent()).removeChild(p);};var
Xa=function(r){Eb.setNodeValue(t,r);};var
lb=function(k){return Eb.getNamedNodeChild(k,f);};var
u=function(e){(Eb.getNamedRuleChild(e,f)).setAttribute(ub.Ic,ub.p);};var
ia=function(e){(Eb.getNamedRuleChild(e,f)).setAttribute(ub.Ic,ub.p);};var
qa=function(m){(Eb.getNamedRuleChild(m,f)).removeAttribute(ub.Ic);};var
fb=function(a){Eb.CDFCONTEXT.context=Eb.CDFCONTEXT.context.selectSingleNode(a);};var
pb=function(s){Eb.CDFCONTEXT.records=Eb.CDFCONTEXT.context.selectNodes(s);};var
Ib=f.selectSingleNode(ub.Tc);if(Ib){var
cb=f.selectSingleNode(ub.Uc+Ib.getValue()+ub.Nb);if(cb!=null){if(this.CDFCONTEXT&&this.CDFCONTEXT.records&&this.CDFCONTEXT.records.hasNext())f=cb;}else c.Q2(2,ub.Vc+Ib.getValue()+ub.Wc);}var
wa=f.getAttribute(ub.ec);var
Nb=wa?this.registerNamespace(wa,_jsxa,h||f.getAttribute(ub.Xc)==ub.Yc):{prefix:ub.Sa,uri:null};var
tb,t,S=f.getAttribute(ub.Zc);if(f.getAttribute(ub.Xc)==ub.Yc){tb=true;t=_jsxa.createNode(2,Nb.prefix+(Nb.prefix!=ub.Sa?ub._c:ub.Sa)+S,Nb.uri);_jsxj.setAttributeNode(t);}else if(f.getAttribute(ub.Xc)==ub.ad){tb=false;t=_jsxa.createNode(4);_jsxj.appendChild(t);}else{tb=false;if(_jsxa){t=_jsxa.createNode(1,Nb.prefix+(Nb.prefix!=ub.Sa?ub._c:ub.Sa)+S,Nb.uri);_jsxj.appendChild(t);}else{_jsxa=new
jsx3.xml.Document();t=_jsxa.createDocumentElement(Nb.prefix+(Nb.prefix!=ub.Sa?ub._c:ub.Sa)+f.getAttribute(ub.Zc),Nb.uri);}var
da=f.selectSingleNode(ub.bd+c.IE[ub.Ca]+ub.Nb);if(da!=null&&da!=ub.Sa){var
ab;if((ab=f.getAttribute(ub.cd))!=null&&ab!=ub.Sa){var
ha=f.getAttribute(ub.dd);if(ha!=null&&ha!=ub.Sa){if(ab.indexOf(ub._c)>0)ab=ab.replace(ub.ed,ub.Sa);ab=ub.fd+ab;}else{if(ab.indexOf(ub._c)>0)ab=ab.replace(ub.ed,ub.Sa);wa=f.getAttribute(ub.gd);Nb=this.registerNamespace(wa,_jsxa,h);ab=Nb.prefix==ub.Sa?ab:Nb.prefix+ub._c+ab;}var
ea=_jsxa.createNode(2,ub.hd,ub.Fa);ea.setValue(ab);t.setAttributeNode(ea);}}}this.publish({subject:ub.Pa,rule:f,action:ub.id,description:ub.jd+t.getNodeName()+ub.kd,level:6});var
E=f.selectNodes(ub.ld);var
Da=false;var
gb;var
C,Ha;for(oa=E.iterator();oa.hasNext();){var
w=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
T=this.CDFCONTEXT?this.CDFCONTEXT.records:null;var
K=this.CDFCONTEXT&&this.CDFCONTEXT.parentContext?this.CDFCONTEXT.parentcontext:null;var
Y=oa.next();var
Ra=Y.getAttribute(ub.Dc);var
Ia=Y.getAttribute(ub.Ec);var
v=this.getNamespace();if(v==null||jsx3.util.strTrim(v)==ub.Sa)v=null;if(Ra==ub.md){var
Oa=jsx3.GO(Ia,v);if(Oa!=null){this.publish({subject:ub.Pa,rule:f,action:ub.nd,description:ub.od+Ia+ub.bb+(v?ub.pd+v+ub.bb:ub.Sa)+ub.qd,level:6});this.doMapAndUpdate(t,Oa,ub.rd,f);}else c.Q2(2,ub.sd+Ia+ub.td);}else if(Ra==ub.ud||Ra==ub.vd){var
L=Ia.split(ub.wd);var
Q=L[0];var
Lb=this.getServer(),Jb;if(Lb!=null){Jb=(Lb.getCache()).getDocument(Q);}else Jb=jsx3.CACHE.getDocument(Q);if(Jb!=null){var
rb=Jb.selectSingleNode(L[1]);if(rb!=null){this.publish({subject:ub.Pa,rule:f,action:ub.xd,description:(v?ub.yd+v+ub.zd:ub.Ad)+ub.Bd+L[0]+ub.Cd+L[1]+ub.Dd,level:6});this.updateNode(t,rb,ub.rd);}else c.Q2(2,ub.Ed+L[0]+ub.Fd+L[1]+ub.Ab);}else c.Q2(2,ub.Gd+L[0]+ub.Ab);}else if(Ra==ub.Hd){this.publish({subject:ub.Pa,rule:f,action:ub.Id,description:(v?ub.yd+v+ub.zd:ub.Ad)+ub.Bd+Ia+ub.Jd,level:6});this.getCDFDocument(Ia,ub.rd,v);}else if(Ra==ub.Kd){var
aa;if(aa=this.CDFCONTEXT.records.next()){this.publish({subject:ub.Pa,rule:f,action:ub.Ld,description:ub.Md,level:6});C=aa;Ha=aa.selectNodes(ub.dc);this.CDFCONTEXT=new
c.CdfContext(C,this.CDFCONTEXT,Ha);gb=true;Da=true;}else{eb(t);Sa=true;gb=false;}}else if(Ra==ub.Nd){var
Ca=this.CDFCONTEXT.context.getAttribute(Ia);if(Ca){this.publish({subject:ub.Pa,rule:f,action:ub.Od,description:ub.Pd+Ia+ub.Jd,level:6});Xa(Ca);}}else if(Ra==ub.Qd){this.publish({subject:ub.Pa,rule:f,action:ub.Rd,description:ub.Sd+Ia+ub.Td,level:6});var
ga={RULENODE:f,MESSAGENODE:t,my:Eb,OBJECTNAME:Ia,OBJECTTYPE:Ra,CDFCONTEXTPARENT:K,CDFCONTEXT:w,CDFRECORDS:T,setCDFRecords:pb,setCDFContext:fb,enableNamedRule:qa,disableNamedRule:ia,enableReferencedRule:Ua,disableReferencedRule:ma,skipNamedRule:u,getNamedChild:lb,setValue:Xa,removeChild:eb};this.eval(Ia,ga);}}if(t.getValue()==ub.Sa&&n!=null&&f.selectSingleNode(ub.dc)==null){var
za=f.getAttribute(ub.cd);if(za!=null&&za!=ub.Sa){var
X=c.simpletypes[za.substring(za.indexOf(ub._c)+1)];var
xb=X!=null?typeof X==ub.Qb?X():X:ub.Ud;t.setValue(xb);}}else if(!Sa&&t.getValue()==ub.Sa&&f.selectSingleNode(ub.dc)==null&&f.getAttribute(ub.Xc)!=ub.Yc&&!h&&f.selectSingleNode(ub.Vd)==null){eb(t);Sa=true;}if(Sa!=true)this.validate(t,f);var
Hb=f.getAttribute(ub.Wd);if(gb==null){Hb=Hb!=null?Hb:false;gb=this.eval(Hb);}var
U=false;if(!Sa&&f.getAttribute(ub.Xd)!=ub.p&&(f.getParent()).getAttribute(ub.Xd)==ub.p){var
nb=_jsxj;var
Cb=f.getParent();while(Cb.getAttribute(ub.Xd)==ub.p){Cb=Cb.getParent();var
ra=nb;nb=nb.getParent();}if(tb){_jsxj.removeAttributeNode(t);nb.setAttributeNode(t);}else nb.insertBefore(t,ra);}else U=f.getAttribute(ub.Xd)==ub.p;var
Db=f.selectNodes(ub.dc);for(oa=Db.iterator();oa.hasNext();)this.doAddAndRecurse(_jsxa,t,oa.next(),n,null);if(Da&&this.CDFCONTEXT)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;wa=f.getAttribute(ub.Yd);if(wa!=null&&wa!=ub.Sa){Nb=this.registerNamespace(wa,_jsxa,h);t.setValue(Nb.prefix+ub._c+f.getAttribute(ub.Zd));}if(f.getAttribute(ub.cd)==ub._d&&f.getAttribute(ub.gd)==ub.Da){var
ta=t.getAttributes();for(oa=ta.iterator();oa.hasNext();){var
qb=oa.next();if(qb.getBaseName()==ub.ae){var
Fb=(f.selectSingleNode(ub.be)).getValue();var
_=this.nshash[Fb];var
Ga=_+ub._c+(f.selectSingleNode(ub.ce)).getValue()+ub.db+(t.selectNodes(ub.de)).size()+ub.fb;qb.setValue(Ga);}}}if(gb&&!U){this.doAddAndRecurse(_jsxa,_jsxj,f,n,null);}else if(U&&!tb)(t.getParent()).removeChild(t);return _jsxa;};g.findNameByValue=function(f,r){for(var Ia in f)if(f[Ia]==r)return Ia.toString();return null;};g.validate=function(s,i){var
x=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());var
Cb=i.selectNodes(ub.ee);var
xa=true;if(Cb.size()>0){var
da=s.getValue()+ub.Sa;if(!i.selectSingleNode(ub.fe+da+ub.Nb))for(var
Db=Cb.iterator();xa&&Db.hasNext();){var
W=Db.next();var
Xa=W.getAttribute(ub.Dc);var
Da=W.getAttribute(ub.Ec);if(Xa==ub.ge){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.he&&!(da<Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.ie&&!(da<=Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.je&&!(da>=Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.ke&&!(da>Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.le&&da.length!=Number(Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.me&&da.length>Number(Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.ne&&da.length<Number(Da)){this.invalidate(s,i,da,Xa,Da);xa=false;}else if(Xa==ub.oe){var
yb=new
RegExp(Da);if(da.search(yb)!=0){this.invalidate(s,i,da,Xa,Da);xa=false;}}}}x.log(ub.pe);return xa;};g.invalidate=function(b,h,d,i,f){this._setValid(false);this.publish({subject:ub.Oa,rule:h,message:b,type:i,value:f});this.publish({subject:ub.Pa,rule:h,action:ub.qe,description:d+ub.re+i+ub._c+f,level:3});};g.updateNode=function(i,k,p){var
ga=k;var
wa=i;if(p==ub.se){ga=i;wa=k;}var
vb=this.getNodeValue(ga);this.setNodeValue(wa,vb);};g.setNodeValue=function(s,h){s.setValue(h+ub.Sa);};g.getNodeValue=function(q){return q.getValue();};g.doMapAndUpdate=function(d,j,q,e){if(jsx3.gui.Form&&j.instanceOf(ub.te)){if(jsx3.gui.RadioButton&&j.instanceOf(ub.ue)){if(q==ub.se){j.setGroupValue(this.getNodeValue(d));}else{var
zb=j.getGroupValue();this.setNodeValue(d,zb==null?ub.Sa:zb);}}else if(jsx3.gui.CheckBox&&j.instanceOf(ub.ve)){if(q==ub.se){var
cb=this.getNodeValue(d);j.setChecked(this.eval(cb)?1:0);}else this.setNodeValue(d,j.getChecked()?ub.j:ub.we);}else if(q==ub.se){j.setValue(this.getNodeValue(d));}else if(q==ub.rd)this.setNodeValue(d,j.getValue()+ub.Sa);}else if(jsx3.gui.Block&&j.instanceOf(ub.xe))if(q==ub.se){j.setText(this.getNodeValue(d),true);}else this.setNodeValue(d,j.getText());};g.doReadAndRecurse=function(b,l){var
v=this;var
_=function(j){return v.getNamedNodeChild(j,b);};var
u=l.selectSingleNode(ub.Tc);if(u){var
wb=l.selectSingleNode(ub.Uc+u.getValue()+ub.Nb);if(wb!=null){l=wb;}else c.Q2(2,ub.Vc+u.getValue()+ub.Wc);}this.publish({subject:ub.Pa,rule:l,action:ub.ye,description:ub.jd+b.getNodeName()+ub.kd,level:6});var
K=l.selectNodes(ub.ld);var
zb=true;var
yb=false;for(var
Da=K.iterator();Da.hasNext();){var
ja=this.CDFCONTEXT?this.CDFCONTEXT.context:null;var
Ga=Da.next();var
Ea=Ga.getAttribute(ub.Dc);var
_a=Ga.getAttribute(ub.Ec);var
ma=this.getNamespace();if(Ea==ub.md){var
rb=jsx3.GO(_a,ma);if(rb!=null){this.publish({subject:ub.Pa,rule:l,action:ub.nd,description:ub.od+_a+ub.bb+(ma?ub.pd+ma+ub.bb:ub.Sa)+ub.ze+b.getValue()+ub.Jd,level:6});this.doMapAndUpdate(b,rb,ub.se,l);}else c.Q2(2,ub.sd+_a+ub.td);}else if(Ea==ub.ud||Ea==ub.vd){var
Ja=_a.split(ub.wd);var
Cb=Ja[0];var
ga=this.getServer(),bb;if(ga!=null){bb=(ga.getCache()).getDocument(Cb);}else bb=jsx3.CACHE.getDocument(Cb);if(bb!=null){var
Za=bb.selectSingleNode(Ja[1]);if(Za!=null){this.publish({subject:ub.Pa,rule:l,action:ub.xd,level:6,description:(ma?ub.yd+ma+ub.zd:ub.Ad)+ub.Bd+Ja[0]+ub.Cd+Ja[1]+ub.Ae+jsx3.util.strTruncate(b.getValue(),30,null,0.6666666666666666)+ub.Jd});this.updateNode(b,Za,ub.se);}else c.Q2(2,ub.Ed+Ja[0]+ub.Fd+Ja[1]+ub.Ab);}else c.Q2(2,ub.Gd+Ja[0]+ub.Ab);}else if(Ea==ub.Hd){this.publish({subject:ub.Pa,rule:l,action:ub.Id,description:(ma?ub.yd+ma+ub.zd:ub.Ad)+ub.Be+_a+ub.Ce,level:6});_a=_a||this.getUniqueId()+ub.De;this.getCDFDocument(_a,ub.se,ma);}else if(Ea==ub.Kd){this.publish({subject:ub.Pa,rule:l,action:ub.Ld,description:ub.Ee,level:6});var
Kb=this.CDFCONTEXT.context.createNode(1,ub.dc);Kb.setAttribute(ub.Fe,this.getUniqueId());this.CDFCONTEXT.context.appendChild(Kb);this.CDFCONTEXT=new
c.CdfContext(Kb,this.CDFCONTEXT);yb=true;}else if(Ea==ub.Nd){this.publish({subject:ub.Pa,rule:l,action:ub.Od,description:ub.Ge+_a+ub.He+jsx3.util.strTruncate(b.getValue(),30,null,0.6666666666666666)+ub.Jd,level:6});this.CDFCONTEXT.context.setAttribute(_a,b.getValue());zb=false;}else if(Ea==ub.Qd){this.publish({subject:ub.Pa,rule:l,action:ub.Rd,description:ub.Sd+_a+ub.Td,level:6});var
Ya={my:v,OBJECTNAME:_a,OBJECTTYPE:Ea,CDFCONTEXT:ja,MESSAGENODE:b,RULENODE:l,RECURSE:zb,getNamedChild:_};this.eval(_a,Ya);}}if(zb)this._doReadAndRecurse(l,b);if(yb)this.CDFCONTEXT=this.CDFCONTEXT.parentcontext;};g._doReadAndRecurse=function(m,r){var
vb=m.selectNodes(ub.Ie);for(var
xb=vb.iterator();xb.hasNext();){var
wa=xb.next();var
Sa=wa.getAttribute(ub.Zc);if(wa.getAttribute(ub.Xc)==ub.Yc){var
ya=r.getAttributes();L6:for(var
_a=ya.iterator();_a.hasNext();){var
Pa=_a.next();if(Pa.getBaseName()==Sa){this.doReadAndRecurse(Pa,wa);break L6;}}}else if(wa.getAttribute(ub.Xd)==ub.p){this._doReadAndRecurse(wa,r);}else{ya=r.selectNodes(ub.Je+Sa+ub.Nb);for(var
L=ya.iterator();L.hasNext();)this.doReadAndRecurse(L.next(),wa);}}};c.CdfContext=function(e,a,m){this.context=e;this.parentcontext=a;this.records=m;};g.getNamedNodeChild=function(p,a){var
N=a.getChildNodes();for(var
Fb=N.iterator();Fb.hasNext();){var
Xa=Fb.next();var
Eb=Xa.getBaseName();if(Eb==p)return Xa;}return null;};g.doval=function(l){this.eval(l);};g.getNamedRuleChild=function(b,l){return l.selectSingleNode(ub.Ke+b+ub.Nb);};g.getUniqueId=function(){return jsx3.xml.CDF.getKey();};g.doRespond=function(f){if(this._isJSON(ub.Ib)&&!(f.target&&f.target.getResonseText instanceof Function)){this.onResponse({target:{getResponseText:function(){return f;}}});}else this.onResponse(f);};g.onResponse=function(s){var
Va=s.target;var
Ia,xa,w;var
sb=false;if(Va instanceof jsx3.net.Request){this.status=Va.getStatus();this.statusText=Va.getStatusText();c.Q2(5,ub.Le+this.getOperationName()+ub.Me+this.getEndpointURL()+ub.Ne+this.status);if(this.status!=200&&this.status!=202){c.Q2(2,ub.Le+this.getOperationName()+ub.Me+Va.getURL()+ub.Oe+this.status+ub.Pe+this.statusText);sb=true;}if(this._isJSON(ub.Ib)){xa=Va.getResponseText();try{Ia=c.JSON2XML(xa);if(!Ia){c.Q2(2,ub.Qe);this.onError();return;}}catch(Kb){w=jsx3.lang.NativeError.wrap(Kb);c.Q2(2,ub.Re+w.getMessage());this.onError();return;}}else Ia=Va.getResponseXML();if(Ia&&!Ia.hasError()){this.setInboundDocument(Ia);}else if(this.getMEPNode(ub.Ib)){c.Q2(2,ub.Le+this.getOperationName()+ub.Me+this.getEndpointURL()+ub.Se+this.statusText);this.onError();return;}}else{if(this._isJSON(ub.Ib)){xa=Va.getResponseText();try{Ia=c.JSON2XML(xa);if(!Ia){c.Q2(2,ub.Qe);this.onError();return;}}catch(Kb){w=jsx3.lang.NativeError.wrap(Kb);c.Q2(2,ub.Re+w.getMessage());this.onError();return;}}else Ia=Va.getResponseXML();this.setInboundDocument(Ia);this.status=200;this.statusText=ub.Te+this.getInboundURL()+ub.Ue;sb=this.getStatus()!=200&&this.getStatus()!=202;}var
Jb=this.getMEPNode(ub.Ib);if(Jb){this.doInboundFilter();this.doInboundMap();}else c.Q2(5,ub.Ve);if(sb){this.onError();}else this.onSuccess();};g.getCDFDocument=function(m,r,j){var
aa=this.getServer(),v;var
V=aa!=null?aa.getCache():jsx3.CACHE;if(r==ub.rd){v=V.getDocument(m);if(v){this.CDFCONTEXT=new
c.CdfContext(v.getRootNode(),null,(v.getRootNode()).selectNodes(ub.dc));}else c.Q2(2,ub.We+m+ub.Xe+this.getOperationName()+ub.Ye);}else{v=jsx3.xml.CDF.Document.newDocument();V.setDocument(m,v);this.CDFCONTEXT=new
c.CdfContext(v.getRootNode(),null);this._jsxallcdfs[m]=V;}};g.getStatus=function(){var
ta=this._status||this.status;return !ta?200:ta;};g.setStatus=function(h){this._status=h;};g.getMode=function(){return this._jsxmode!=null?this._jsxmode:(this.getServer()).getEnv(ub.Ze);};g.setMode=function(r){this._jsxmode=r;};g.doInboundMap=function(){var
ta=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());c.Q2(5,ub._e);var
fa=this.getOperationNode();if(fa){var
La=this.getInboundDocument();var
Ib=this.getStatus();var
Qa=Ib!=200&&Ib!=202&&Ib!=0?ub.af:ub.Ib;if(Qa==ub.Ib&&this.dh instanceof jsx3.xml.Document){c.Q2(5,ub.bf);jsx3.require(ub.cf);var
L=new
jsx3.xml.Template(this.dh);var
ba=jsx3.xml.CDF.Document.wrap(L.transformToObject(La));if(!ba.hasError()){c.Q2(5,ub.df);var
Za=this.getMEPNode(ub.Ib);var
aa=Za.selectSingleNode(ub.ef);if(aa){var
Fa=aa.getAttribute(ub.Ec);if(Fa&&(Fa=jsx3.util.strTrim(String(Fa)))!=ub.Sa){var
sb=this.getServer();var
pb=sb!=null?sb.getCache():jsx3.CACHE;pb.setDocument(Fa,ba);}else c.Q2(2,ub.ff);}else c.Q2(2,ub.gf);}else c.Q2(2,ub.hf+ba.getError());}else{var
na=this.getMEPNode(Qa);if(na==null&&Qa==ub.af)na=this.getMEPNode(ub.Ib);if(na){var
sa=na.selectNodes(ub.dc);for(var
D=sa.iterator();D.hasNext();){var
F=D.next();var
V=F.getAttribute(ub.Zc);var
Hb=F.getAttribute(ub.ec);var
Mb=ub.Sa;if(Hb!=null&&jsx3.util.strTrim(Hb)!=ub.Sa){Mb=ub.jf;La.setSelectionNamespaces(ub.kf+Hb+ub.gc);}var
oa=ub.lf+Mb+V;var
B=La.selectSingleNode(oa);if(B!=null){this._jsxallcdfs={};if(!B.equals(La.getRootNode())){var
ob=B.getParent();var
mb=ob.selectNodes(Mb+V);for(var
ha=mb.iterator();ha.hasNext();)this.doReadAndRecurse(ha.next(),F);}else this.doReadAndRecurse(B,F);for(var R in this._jsxallcdfs){var
db=this._jsxallcdfs[R];db.setDocument(R,db.getDocument(R));}}}}else c.Q2(5,ub.mf);}}ta.log(ub.nf);};c.getNSForURL=function(s,j){var
Lb=(s.getRootNode()).getAttributes();for(var
Fa=Lb.size()-1;Fa>=0;Fa--)if((Lb.get(Fa)).getValue()==j)return (Lb.get(Fa)).getBaseName();return null;};c.getURLForNS=function(q,j){if(jsx3.util.strEmpty(j))return null;try{var
ta=q.selectSingleNode(ub.of+j+ub.pf+j);}catch(Kb){var
La={};La.FUNCTION=ub.qf;La.PREFIX=j+ub.Sa;La.DESCRIPTION=ub.rf;jsx3.util.Logger.logError(La);return null;}return ta?ta.getValue():null;};c.getVersion=function(){return ub.sf;};g.compile=function(){var
Ga=new
jsx3.util.Timer(c.jsxclass,this.getEndpointURL());this._resetCompiler();var
tb=this.getMEPNode(ub.Ib);var
wa=[];wa.push(ub.tf);wa.push(ub.uf);wa.push(ub.vf);this._compile(tb,wa,true);wa.push(ub.wf);var
hb=[],_=[];for(var lb in this.Xm){hb.push(this.Xm[lb]);_.push(ub.Sc+this.Xm[lb]+ub.xf+lb+ub.bb);}wa[1]+=(_.join(ub.yf)+ub.zf+hb.join(ub.yf)+ub.Af);var
rb=wa.join(ub.Bf);var
ta=new
jsx3.xml.Document();ta.loadXML(rb);if(ta.hasError()){c.Q2(2,ub.Cf+ta.getError());return null;}else this.dh=ta;Ga.log(ub.Df);return ta;};g._compile=function(j,e,o){var
K=this.qL(j);var
Oa,pa;if(o){e.push(ub.Ef);}else{Oa=j.getAttribute(ub.Zc);if(j.getAttribute(ub.Xc)==ub.Yc)Oa=ub.Ff+Oa;pa=j.getAttribute(ub.Fe);e.push(ub.Gf+pa+ub.Hf);}var
ob=j.selectNodes(ub.If);var
bb=[],P;for(P=ob.iterator();P.hasNext();){var
Ca=P.next();var
E=Ca.getAttribute(ub.Dc);var
I=Ca.getAttribute(ub.Ec);if(E==ub.Hd){e.push(ub.Jf);bb.push(ub.Kf);}else if(E==ub.Kd){e.push(ub.Lf);bb.push(ub.Mf);}else e.push(ub.Nf+I+ub.Of);}var
V=j.selectNodes(ub.dc),Bb;for(P=V.iterator();P.hasNext();){Bb=P.next();var
Ib;var
ib=Bb.selectSingleNode(ub.Tc);if(ib){var
Ua=Bb.selectSingleNode(ub.Uc+ib.getValue()+ub.Nb);if(Ua!=null){Ib=Bb.getAttribute(ub.Zc);Bb=Ua;}}var
Eb=this.qL(Bb);var
w=Eb?Eb.prefix+ub._c:ub.Sa;if(o)w=ub.lf+w;Oa=Ib||Bb.getAttribute(ub.Zc);if(Bb.getAttribute(ub.Xc)==ub.Yc)Oa=ub.Ff+Oa;pa=Bb.getAttribute(ub.Fe);e.push(ub.Pf+w+Oa+ub.Qf+pa+ub.Rf);}for(P=bb.length-1;P>=0;P--)e.push(bb[P]);e.push(ub.Sf);V=j.selectNodes(ub.Tf);for(P=V.iterator();P.hasNext();){Bb=P.next();this._compile(Bb,e);}};g._resetCompiler=function(){this.dh=null;this.Xm={};this.Sl=0;};g.qL=function(j){var
Kb=j.getAttribute(ub.ec);if(Kb==c.IE[ub.Ia]){return;}else if(Kb&&(Kb=jsx3.util.strTrim(String(Kb)))!=ub.Sa){if(!this.Xm[Kb]){this.Sl+=1;this.Xm[Kb]=ub.Rc+this.Sl;}return {prefix:ub.Rc+this.Sl,namespace:Kb};}};});jsx3.net.Service.prototype.getOperation=jsx3.net.Service.prototype.getOperationName;jsx3.net.Service.prototype.setOperation=jsx3.net.Service.prototype.setOperationName;jsx3.net.Service.prototype.getStubURL=jsx3.net.Service.prototype.getOutboundStubURL;jsx3.net.Service.prototype.setStubURL=jsx3.net.Service.prototype.setOutboundStubURL;jsx3.net.Service.prototype.addHeader=jsx3.net.Service.prototype.setRequestHeader;jsx3.net.Service.prototype.setServiceURL=jsx3.net.Service.prototype.setEndpointURL;jsx3.Service=jsx3.net.Service;
