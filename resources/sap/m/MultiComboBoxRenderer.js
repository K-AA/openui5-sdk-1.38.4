/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ComboBoxBaseRenderer','sap/ui/core/Renderer','sap/ui/core/ValueStateSupport'],function(q,C,R,V){"use strict";var M=R.extend(sap.m.ComboBoxBaseRenderer);M.CSS_CLASS_MULTICOMBOBOX="sapMMultiComboBox";M.DOT_CSS_CLASS_MULTICOMBOBOX=".sapMMultiComboBox";M.addOuterClasses=function(r,c){sap.m.ComboBoxBaseRenderer.addOuterClasses.apply(this,arguments);r.addClass(M.CSS_CLASS_MULTICOMBOBOX);if(c._hasTokens()){r.addClass("sapMMultiComboBoxHasToken");}};M.addInnerClasses=function(r,c){C.addInnerClasses.apply(this,arguments);r.addClass(M.CSS_CLASS_MULTICOMBOBOX+"InputInner");};M.addButtonClasses=function(r,c){C.addButtonClasses.apply(this,arguments);r.addClass(M.CSS_CLASS_MULTICOMBOBOX+"Arrow");};M.openInputTag=function(r,c){r.write('<div class="sapMMultiComboBoxBorder"');r.writeAttribute("id",c.getId()+"-border");r.write(">");r.renderControl(c._oTokenizer);r.write("<div class=\"sapMMultiComboBoxInputContainer\">");C.openInputTag.call(this,r,c);};M.closeInputTag=function(r,c){C.closeInputTag.call(this,r,c);r.write("</div>");r.write("</div>");r.write("<div class=\"sapMMultiComboBoxShadowDiv\"/>");};return M;},true);
