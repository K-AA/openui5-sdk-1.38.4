/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2016 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.require([
	"sap/ui/model/FormatException",
	"sap/ui/model/odata/type/ODataType",
	"sap/ui/model/odata/type/Raw",
	"sap/ui/model/ParseException",
	"sap/ui/model/ValidateException"
], function (FormatException, ODataType, Raw, ParseException, ValidateException) {
	/*global QUnit */
	/*eslint max-nested-callbacks: 0*/
	"use strict";

	//*********************************************************************************************
	QUnit.module("sap.ui.model.odata.type.Raw");

	QUnit.test("basics", function (assert) {
		var oRaw = new Raw(undefined, undefined);

		assert.ok(oRaw instanceof ODataType, "is an ODataType");
		assert.strictEqual(oRaw.getName(), "sap.ui.model.odata.type.Raw");

		[undefined, false, true, 0, 1, null, {}, "", "foo"].forEach(function (vValue) {
			assert.strictEqual(oRaw.formatValue(vValue, "any"), vValue);
		});

		["", "boolean", "int", "float", "object", "string"].forEach(function (sTargetType) {
			assert.throws(function () {
				oRaw.formatValue("", sTargetType);
			}, new FormatException(
				"Type 'sap.ui.model.odata.type.Raw' does not support formatting"));
		});
		assert.throws(function () {
			oRaw.parseValue("", "string");
		}, new ParseException(
			"Type 'sap.ui.model.odata.type.Raw' does not support parsing"));
		assert.throws(function () {
			oRaw.validateValue(null);
		}, new ValidateException(
			"Type 'sap.ui.model.odata.type.Raw' does not support validating"));

		assert.throws(function () {
			return new Raw(false);
		}, new Error("Unsupported arguments"));
		assert.throws(function () {
			return new Raw(undefined, false);
		}, new Error("Unsupported arguments"));
		assert.throws(function () {
			return new Raw(undefined, undefined, undefined);
		}, new Error("Unsupported arguments"));
	});

});