sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("test.application.controller.home", {
        onInit: function () {

        },

        onListPress : function()
        {
            // var odata=fetch("https://reqres.in/api/users")
            // .then((data1) =>{
            //     data1.json();
            //     const oModel = new JSONModel(data1);
            //     this.getView().setModel(oModel);
            //     console.log(data1.data);
            // })
            // .then()


            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("userList");

        },

        onTablePress : function()
        {
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("userTable");
        }


    });
});
