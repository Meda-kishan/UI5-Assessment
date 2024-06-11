sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"

],
function (Controller,Filter,FilterOperator,JSONModel) {
    "use strict";

    return Controller.extend("test.application.controller.home", {
        onInit: function () {

        },

        tableItemPressed: function(oEvent)
        {
            var oItem=oEvent.getSource();
            var spath=oItem.getBindingContext().getPath();
            var item_data=this.getView().getModel().getProperty(spath);

            const itemModel2=new JSONModel(item_data);

            this.getView().setModel(itemModel2, "itemModel2");

            this.dialog??=this.loadFragment({name : 'test.application.view.fragments.detailTable'});
            this.dialog.then((odialog)=>odialog.open());


        },

        onCloseDialog : function(){
            this.byId("dialog1").close();
        },

        onSearch : function(oEvent)
        {
            var oBindings=this.byId("table1").getBinding("items");
            var squery=oEvent.getParameter("query")
            var aList=[]

            if(squery)
            {
                aList.push(new Filter("CompanyName",FilterOperator.Contains,squery))
            }

            oBindings.filter(aList);
        },

        onNavBack :function()
        {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Routehome");
        }

    });
});
