sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("test.application.controller.home", {
        onInit: function () {

            
            // var odata=fetch("https://reqres.in/api/users")
            // .then((data) =>{
            //     const oModel = new JSONModel(data);
            //     this.getView().setModel(oModel);
            //     console.log("data");
            // })


            fetch("https://reqres.in/api/users")
            .then((res)=>res.json())
            .then((odata)=>
            {
            console.log(odata.data)
            const dataModel = new JSONModel(odata.data);debugger
            this.getView().setModel(dataModel);
            console.log(dataModel);

            })
            .catch((err)=>console.log(err))
           
        },

        onListItemPress : function(oEvent)
        {
            var oItem=oEvent.getSource();
            var spath=oItem.getBindingContext().getPath();
            var item_data=this.getView().getModel().getProperty(spath);

            const itemModel=new JSONModel(item_data);

            this.getView().setModel(itemModel, "itemModel");
            console.log(itemModel);
            
            this.dialog??=this.loadFragment({name : 'test.application.view.fragments.detailList'});

            this.dialog.then((odialog)=>odialog.open());

            console.log(data);
        },


        onCloseDialog : function(){
            this.byId("dialog2").close();
        },

        onNavBack :function()
        {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Routehome");
        }

    });
});
