jQuery.sap.declare("ch.pictet.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ch.pictet.Component", {
	metadata: {
		"manifest": "json"
	}
});