sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
     function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("login.login.controller.LoginForm", {
            onInit: function () {

            },
            checkDetails: function(){
                debugger;
                var uname = this.getView().byId("idIUname").getValue();
                var pwd   = this.getView().byId("idIPwd").getValue();

                if(uname === "" || pwd === "" ){
                    //jQuery.sap.require("sap.m.MessageBox");
                    MessageBox.show("Both input fields are mandatory", {
                        icon : sap.m.MessageBox.Icon.INFORMATION,
                        title : "Validation failed",
                        actions: [sap.m.MessageBox.Action.OK]
                    });

                }else{
                    if(uname == "test" && pwd == "test"){
                        MessageBox.show("Login successful", {
                            icon : sap.m.MessageBox.Icon.INFORMATION,
                            title : "Validation success",
                            actions: [sap.m.MessageBox.Action.OK]
                        });
                    }
                }

            }
        });
    });