/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/Core','sap/ui/core/library','sap/ui/unified/library'],function(q,C){"use strict";sap.ui.getCore().initLibrary({name:"sap.ui.table",version:"1.38.4",dependencies:["sap.ui.core","sap.ui.unified"],types:["sap.ui.table.NavigationMode","sap.ui.table.SelectionBehavior","sap.ui.table.SelectionMode","sap.ui.table.SortOrder","sap.ui.table.VisibleRowCountMode","sap.ui.table.SharedDomRef"],interfaces:[],controls:["sap.ui.table.AnalyticalColumnMenu","sap.ui.table.AnalyticalTable","sap.ui.table.ColumnMenu","sap.ui.table.Table","sap.ui.table.TreeTable"],elements:["sap.ui.table.AnalyticalColumn","sap.ui.table.Column","sap.ui.table.Row"],extensions:{flChangeHandlers:{"sap.ui.table.Column":{"propertyChange":"default"},"sap.ui.table.Table":{"moveElements":"default"},"sap.ui.table.AnalyticalTable":{"moveElements":"default"}}}});var t=sap.ui.table;t.NavigationMode={Scrollbar:"Scrollbar",Paginator:"Paginator"};t.SelectionBehavior={Row:"Row",RowSelector:"RowSelector",RowOnly:"RowOnly"};t.SelectionMode={MultiToggle:"MultiToggle",Multi:"Multi",Single:"Single",None:"None"};t.SortOrder={Ascending:"Ascending",Descending:"Descending"};t.VisibleRowCountMode={Fixed:"Fixed",Interactive:"Interactive",Auto:"Auto"};t.SharedDomRef={HorizontalScrollBar:"hsb",VerticalScrollBar:"vsb"};t.GroupEventType={group:"group",ungroup:"ungroup",ungroupAll:"ungroupAll",moveUp:"moveUp",moveDown:"moveDown",showGroupedColumn:"showGroupedColumn",hideGroupedColumn:"hideGroupedColumn"};t.ColumnHeader=t.Column;if(!t.TableHelper){t.TableHelper={createLabel:function(c){throw new Error("no Label control available!");},createTextView:function(c){throw new Error("no TextView control available!");},createTextField:function(c){throw new Error("no TextField control available!");},createImage:function(c){throw new Error("no Image control available!");},bFinal:false};}return t;});
