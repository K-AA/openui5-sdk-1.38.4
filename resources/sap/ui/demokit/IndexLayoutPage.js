/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/IconPool','./IndexLayout','sap/ui/model/json/JSONModel','sap/ui/core/Control','sap/ui/core/Element','jquery.sap.encoder'],function(q,I,a,J,C,E){"use strict";var b=function IndexPage(d,t,B,c){var m=new J(d);sap.ui.getCore().setModel(m);var o=new b.Repeat({categories:{path:"/categories",template:new b.Cat({title:"{text}",layout:new a({enableScaling:true,content:{path:"links",template:new a._Tile({title:"{text}",description:"{desc}",target:t,icon:{path:"icon",formatter:function(i){if(!i){i="learning-assistant";}return"sap-icon://"+i;}},href:"{ref}"})}})})}});if(c){I.addIcon("explored","custom","brandico","e001",true);I.addIcon("cart","custom","brandico","e002",true);I.addIcon("makit","custom","brandico","e005",true);I.addIcon("helloworld","custom","brandico","e003",true);I.addIcon("poa","custom","brandico","e007",true);I.addIcon("flexbox","custom","brandico","e00A",true);I.addIcon("crud","custom","brandico","e009",true);I.addIcon("icon-explorer","custom","brandico","e006",true);I.addIcon("splitapp","custom","brandico","e00C",true);I.addIcon("mvc","custom","brandico","e00B",true);}sap.ui.getCore().attachInit(function(){if(c){var f=q.sap.getModulePath("","/../test-resources/sap/m/demokit/demokit-home/");b._introduceCustomFont("brandico",f,"demoAppsIconFont");}q("body").append("<div id='root'></div>");o.placeAt("root");});};E.extend("sap.ui.demokit.IndexLayoutPage.Cat",{metadata:{properties:{"title":"string"},aggregations:{"layout":{type:"sap.ui.demokit.IndexLayout",multiple:false}}}});C.extend("sap.ui.demokit.IndexLayoutPage.Repeat",{metadata:{aggregations:{"categories":{type:"sap.ui.demokit.IndexLayoutPage.Cat",multiple:true}}},renderer:function(r,c){r.write("<div");r.writeControlData(c);r.write(">");var d=c.getCategories();for(var i=0;i<d.length;i++){r.write("<div");r.writeElementData(d[i]);r.write(">");if(d[i].getTitle()){r.write("<h2>");r.writeEscaped(d[i].getTitle());r.write("</h2>");}r.renderControl(d[i].getLayout());r.write("</div>");}r.write("</div>");}});b._introduceCustomFont=function(f,F,s){var c="@font-face {"+"font-family: '"+f+"';"+"src: url('"+F+s+".eot');"+"src: url('"+F+s+".eot?#iefix') format('embedded-opentype'), url('"+F+s+".ttf') format('truetype');"+"font-weight: normal;"+"font-style: normal;"+"}";q('head').append('<style type="text/css">'+c+'</style>');};return b;},true);
