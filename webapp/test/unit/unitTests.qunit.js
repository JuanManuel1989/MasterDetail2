/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"log_in/log_in/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
