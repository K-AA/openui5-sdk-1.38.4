/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/thirdparty/URI','sap/ui/Global'],function(q,U){"use strict";(function(){var f=k(),t,I,m,R=D(),C=D().substr(-8,8)+R,H=window.location.host,a=sap.ui.Device.os.name+"_"+sap.ui.Device.os.version,b=sap.ui.Device.browser.name+"_"+sap.ui.Device.browser.version,A="",c="",e,T,F,p={},S=0,d,o,g,h,j=0;function k(){var i=!!document.querySelector("meta[name=sap-ui-fesr][content=true]"),P=window.location.search.match(/[\?|&]sap-ui-(?:xx-)?fesr=(true|x|X|false)&?/);if(P){i=P[1]&&P[1]!="false";}return i;}function l(){if(!(window.performance&&window.performance.getEntries)){q.sap.log.warning("Interaction tracking is not supported on browsers with insufficient performance API");}if(!m){m=true;var X=window.XMLHttpRequest.prototype.open,i=window.XMLHttpRequest.prototype.send,s=window.XMLHttpRequest.prototype.setRequestHeader;window.XMLHttpRequest.prototype.open=function(){X.apply(this,arguments);if(I||f||t){var E=new U(arguments[1]).host();if(!E||E===H){T=D();if(I||f){this.addEventListener("readystatechange",n);this.pendingInteraction=p;if(f){if(g){this.setRequestHeader("SAP-Perf-FESRec",g);this.setRequestHeader("SAP-Perf-FESRec-opt",h);g=null;h=null;F=T;S++;}else if(!F){F=T;}if(c!=p.appVersion){c=p.appVersion;A=c?w(c):"";}this.setRequestHeader("SAP-PASSPORT",B(e,R,T,p.component+A,p.trigger+"_"+p.event+"_"+S));}}if(!f&&t){this.setRequestHeader("SAP-PASSPORT",B(e,R,T));}}}};window.XMLHttpRequest.prototype.send=function(){i.apply(this,arguments);if((I||f)&&this.pendingInteraction){this.pendingInteraction.bytesSent+=arguments[0]?arguments[0].length*2:0;}};window.XMLHttpRequest.prototype.setRequestHeader=function(E,V){s.apply(this,arguments);if(I||f){if(!this.requestHeaderLength){this.requestHeaderLength=0;}this.requestHeaderLength+=(E.length+V.length+3)*2;}};window.addEventListener("scroll",q.sap.interaction.notifyScrollEvent);window.addEventListener("mousewheel",q.sap.interaction.notifyScrollEvent);}}function n(){if(this.readyState===4&&this.pendingInteraction){var s=this.getResponseHeader("content-length"),i=this.getResponseHeader("content-encoding")==="gzip",E=this.getResponseHeader("sap-perf-fesrec");this.pendingInteraction.bytesReceived+=s?parseInt(s,10):0;this.pendingInteraction.bytesReceived+=this.getAllResponseHeaders().length*2;this.pendingInteraction.bytesSent+=this.requestHeaderLength||0;this.pendingInteraction.requestCompression=i&&(this.pendingInteraction.requestCompression!==false);this.pendingInteraction.networkTime+=E?Math.round(parseFloat(E,10)/1000):0;var G=this.getResponseHeader("sap-statistics");if(G){var J=q.sap.measure.getRequestTimings();this.pendingInteraction.sapStatistics.push({url:this.responseURL,statistics:G,timing:J?J[J.length-1]:undefined});}delete this.requestHeaderLength;delete this.pendingInteraction;}}function r(i){return[v(R,32),v(F,32),v(i.navigation,16),v(i.roundtrip,16),v(i.duration,16),v(i.requests.length,8),v(C,40),v(i.networkTime,16),v(i.requestTime,16),v(a,20),"SAP_UI5"].join(",");}function u(i){return[v(i.component,20,true),v(i.trigger+"_"+p.event,20,true),"",v(b,20),v(i.bytesSent,16),v(i.bytesReceived,16),"","",v(i.processing,16),i.requestCompression?"X":"","","","","",v(i.busyDuration,16),"","","",""].join(",");}function v(i,L,s){if(!i){i=i===0?"0":"";}else if(typeof i==="number"){i=Math.round(i).toString();if(i.length>L){i="-1";}}else{i=s?i.substr(-L,L):i.substr(0,L);}return i;}function w(V){var i=new q.sap.Version(V);return"@"+i.getMajor()+"."+i.getMinor()+"."+i.getPatch();}q.sap.interaction={};q.sap.interaction.setActive=function(i){if(i&&!I){l();}I=i;};q.sap.interaction.getActive=function(){return I||f;};q.sap.interaction.notifyStepStart=function(E,i){if(I||f){if(o||i){var s;if(i){s="startup";}else if(o.originalEvent){s=o.originalEvent.type;}else{s=o.type;}q.sap.measure.startInteraction(s,E);var G=q.sap.measure.getAllInteractionMeasurements();var J=G[G.length-1];var P=q.sap.measure.getPendingInteractionMeasurement();p=P?P:p;if(f&&J&&J.requests.length>0){g=r(J);h=u(J);}o=null;}}};q.sap.interaction.notifyStepEnd=function(){if(I||f){if(d){q.sap.clearDelayedCall(d);}d=q.sap.delayedCall(1,q.sap.measure,"endInteraction");}};q.sap.interaction.notifyEventStart=function(E){o=(I||f)?E:null;};function x(){q.sap.interaction.notifyStepStart();j=0;}q.sap.interaction.notifyScrollEvent=function(E){if(I||f){if(!j){q.sap.interaction.notifyEventStart(E);}else{q.sap.clearDelayedCall(j);}j=q.sap.delayedCall(250,undefined,x);}};q.sap.interaction.notifyEventEnd=function(){if(o){if(o.type.match(/^(mousedown|touchstart|keydown)$/)){q.sap.measure.endInteraction(true);}}};q.sap.fesr={};q.sap.fesr.setActive=function(i){if(i&&!f){f=true;if(!I){l();}}else if(!i){f=false;}};q.sap.fesr.getActive=function(){return f;};q.sap.fesr.getCurrentTransactionId=function(){return T;};q.sap.fesr.getRootId=function(){return R;};q.sap.fesr.addBusyDuration=function(i){if(!p.busyDuration){p.busyDuration=0;}p.busyDuration+=i;};q.sap.passport={};q.sap.passport.setActive=function(i){if(i&&!t){t=true;l();}else if(!i){t=false;}};function y(s){var E=[];for(var i=0;i<s.length;++i){E.push(s.charCodeAt(i));}return E;}function z(s){var E="";for(var i=0;i<s.length;i++){var G=s[i].toString(16);G=Array(2-G.length+1).join("0")+G;E+=G;}return E;}function B(i,s,E,G,J){var K=[0x2A,0x54,0x48,0x2A,0x03,0x01,0x30,0x00,0x00,0x53,0x41,0x50,0x5F,0x45,0x32,0x45,0x5F,0x54,0x41,0x5F,0x50,0x6C,0x75,0x67,0x49,0x6E,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x00,0x00,0x53,0x41,0x50,0x5F,0x45,0x32,0x45,0x5F,0x54,0x41,0x5F,0x55,0x73,0x65,0x72,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x53,0x41,0x50,0x5F,0x45,0x32,0x45,0x5F,0x54,0x41,0x5F,0x52,0x65,0x71,0x75,0x65,0x73,0x74,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x00,0x05,0x53,0x41,0x50,0x5F,0x45,0x32,0x45,0x5F,0x54,0x41,0x5F,0x50,0x6C,0x75,0x67,0x49,0x6E,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x20,0x34,0x36,0x33,0x35,0x30,0x30,0x30,0x30,0x30,0x30,0x33,0x31,0x31,0x45,0x45,0x30,0x41,0x35,0x44,0x32,0x35,0x30,0x39,0x39,0x39,0x43,0x33,0x39,0x32,0x42,0x36,0x38,0x20,0x20,0x20,0x00,0x07,0x46,0x35,0x00,0x00,0x00,0x31,0x1E,0xE0,0xA5,0xD2,0x4E,0xDB,0xB2,0xE4,0x4B,0x68,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x02,0x00,0xE2,0x2A,0x54,0x48,0x2A,0x01,0x00,0x27,0x00,0x00,0x02,0x00,0x03,0x00,0x02,0x00,0x01,0x04,0x00,0x08,0x58,0x00,0x02,0x00,0x02,0x04,0x00,0x08,0x30,0x00,0x02,0x00,0x03,0x02,0x00,0x0B,0x00,0x00,0x00,0x00,0x2A,0x54,0x48,0x2A,0x01,0x00,0x23,0x01,0x00,0x01,0x00,0x01,0x00,0x02,0x00,0x01,0x03,0x00,0x17,0x00,0xAB,0xCD,0xEF,0xAB,0xCD,0xEF,0xAB,0xCD,0xEF,0xAB,0xCD,0xEF,0xAB,0xCD,0xEF,0x2A,0x54,0x48,0x2A];var L=[372,32];var M=[149,32];var N=[9,32];var P=[117,32];var O=[75,40];var Q=[7,2];var V=y("SAP_E2E_TA_UI5LIB");V=V.concat(y(new Array(32+1-V.length).join(' ')));if(G){G=y(G.substr(-32,32));G=G.concat(y(new Array(32+1-G.length).join(' ')));K.splice.apply(K,N.concat(G));K.splice.apply(K,P.concat(G));}else{K.splice.apply(K,N.concat(V));K.splice.apply(K,P.concat(V));}K.splice.apply(K,M.concat(y(E)));K.splice.apply(K,Q.concat(i));if(J){J=y(J.substr(-40,40));J=J.concat(y(new Array(40+1-J.length).join(' ')));K.splice.apply(K,O.concat(J));}var W=z(K).toUpperCase();return W.substring(0,L[0]).concat(s)+W.substring(L[0]+L[1]);}q.sap.passport.traceFlags=function(i){switch(i){case'low':e=[0x00,0x00];break;case'medium':e=[0x89,0x0A];break;case'high':e=[0x9F,0x0D];break;default:e=[];e.push((parseInt(i,16)&0xFF00)/256);e.push((parseInt(i,16)&0xFF));}return e;};function D(){var i=function(){var J=Math.floor(Math.random()*0x10000);return(new Array(4+1-J.toString(16).length)).join('0')+J.toString(16);};var s=function(){var J=(Math.floor(Math.random()*0x10000)&0x0fff)+0x4000;return(new Array(4+1-J.toString(16).length)).join('0')+J.toString(16);};var E=function(){var J=(Math.floor(Math.random()*0x10000)&0x3fff)+0x8000;return(new Array(4+1-J.toString(16).length)).join('0')+J.toString(16);};var G=(i()+i()+i()+s()+E()+i()+i()+i());return G.toUpperCase();}e=q.sap.passport.traceFlags();q.sap.interaction.notifyStepStart(null,true);if(f){l();}if(/sap-ui-xx-e2e-trace=(true|x|X)/.test(location.search)){q.sap.require("sap.ui.core.support.trace.E2eTraceLib");}}());return q;});
