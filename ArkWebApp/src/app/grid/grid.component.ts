import { AdaptableOptions, AdaptableReadyInfo } from '@adaptabletools/adaptable-angular-aggrid';
import { GridOptions, GridReadyEvent, Module } from '@ag-grid-community/core';
import { Component, Input, OnInit } from '@angular/core';
import { CommonConfig } from '../configs/common-config';
import { Test1Service } from '../services/test1.service';
import { Test2Service } from '../services/test2.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [
    Test1Service,
    Test2Service
  ]
})
export class GridComponent implements OnInit {

  agGridModules: Module[] = CommonConfig.AG_GRID_MODULES
  rowData1 : any = []
  rowData2 : any = []
  commongridOptions: GridOptions = this.t1Svc.gridOptions
  commonadaptableOptions: AdaptableOptions = this.t1Svc.adaptableOptions
  boolflag: boolean = true

  constructor( 
    private t1Svc: Test1Service, 
    private t2Svc: Test2Service
) {}

  ngOnInit(): void {
    this.rowData1 = [
      {"uniqueID":1,"positionId":971,"assetId":111,"asset":"Some tranche","issuerShortName":"Some Complémentaires","fund":"DL-ABC-XYZ","fundHedging":"DL-ABC-XYZ","fundCcy":"SLR","asOfDate":"2022-10-20T00:00:00","tradeDate":"01/06/2021","settleDate":"2014-11-25T00:00:00","positionCcy":"INR","amount":1233333.32,"parAmount":4000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":4000000,"fundedParAmountLocal":4000000,"costAmountLocal":4000000,"fundedCostAmountLocal":4000000,"modifiedBy":null,"modifiedOn":"0001-01-01T00:00:00","typeDesc":"Buy Trade","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.23},
      {"uniqueID":3,"positionId":971,"assetId":111,"asset":"Some tranche","issuerShortName":"Some Issuer","fund":"DL-ABC-XYZ","fundHedging":"DL-ABC-XYZ","fundCcy":"SLR","asOfDate":"2022-10-20T00:00:00","tradeDate":"22/12/2016","settleDate":"2016-07-02T00:00:00","positionCcy":"INR","amount":0,"parAmount":-3845776.05,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":-3845776.05,"fundedParAmountLocal":-3845776.05,"costAmountLocal":-3845776.05,"fundedCostAmountLocal":-3845776.05,"modifiedBy":null,"modifiedOn":"0001-01-01T00:00:00","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.23},
      {"uniqueID":4,"positionId":976,"assetId":110,"asset":"UNITRANCHE","issuerShortName":"RMRFBIDCO","fund":"DL-ABC-XYZ","fundHedging":"DL-ABC-XYZ","fundCcy":"SLR","asOfDate":"2022-10-20T00:00:00","tradeDate":"02/11/2014","settleDate":"2014-11-25T00:00:00","positionCcy":"INR","amount":0.000000323,"parAmount":5000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":5000000,"fundedParAmountLocal":5000000,"costAmountLocal":5000000,"fundedCostAmountLocal":5000000,"modifiedBy":null,"modifiedOn":"2023-06-07T13:14:59.697","typeDesc":"Buy Trade","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.43},
      {"uniqueID":5,"positionId":976,"assetId":110,"asset":"UNITRANCHE","issuerShortName":"RMRFBIDCO","fund":"DL-ABC-XYZ","fundHedging":"DL-ABC-XYZ","fundCcy":"SLR","asOfDate":"2022-10-20T00:00:00","tradeDate":"05/05/2016","settleDate":"2015-01-16T00:00:00","positionCcy":"INR","amount":123.325000000,"parAmount":-5000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":-5000000,"fundedParAmountLocal":-5000000,"costAmountLocal":-5000000,"fundedCostAmountLocal":-5000000,"modifiedBy":null,"modifiedOn":"2021-12-21T00:00:00","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.00}
    ]

    this.rowData2 = [
      {"uniqueID":6,"positionId":1000,"assetId":500,"asset":"BHD","issuerShortName":"YZ Issuer","fund":"DL-ABC-THE","fundHedging":"DL-ABC-THE","fundCcy":"GBP","asOfDate":"2024-04-15T00:00:00","tradeDate":"08/08/2024","settleDate":"2024-12-15T00:00:00","positionCcy":"USD","amount":5737238.67,"parAmount":4000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":4000000,"fundedParAmountLocal":4000000,"costAmountLocal":4000000,"fundedCostAmountLocal":4000000,"modifiedBy":null,"modifiedOn":"0001-01-01T00:00:00","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":2.45},
      {"uniqueID":7,"positionId":1001,"assetId":500,"asset":"BHD","issuerShortName":"YZ Issuer","fund":"DL-ABC-THE","fundHedging":"DL-ABC-THE","fundCcy":"GBP","asOfDate":"2024-04-15T00:00:00","tradeDate":"27/05/2024","settleDate":"2024-09-07T00:00:00","positionCcy":"USD","amount":0,"parAmount":-18545776.75,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":-3845776.05,"fundedParAmountLocal":-3845776.05,"costAmountLocal":-3845776.05,"fundedCostAmountLocal":-3845776.05,"modifiedBy":null,"modifiedOn":"0001-01-01T00:00:00","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":1.73},
      {"uniqueID":8,"positionId":1002,"assetId":510,"asset":"Some Facilit ","issuerShortName":"FGRHEH","fund":"DL-ABC-THE","fundHedging":"DL-ABC-THE","fundCcy":"GBP","asOfDate":"2024-04-15T00:00:00","tradeDate":"08/11/2024","settleDate":"2024-15-25T00:00:00","positionCcy":"USD","amount":2.006700323,"parAmount":5000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":5000000,"fundedParAmountLocal":5000000,"costAmountLocal":5000000,"fundedCostAmountLocal":5000000,"modifiedBy":null,"modifiedOn":"2023-06-07T13:14:59.697","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.76},
      {"uniqueID":9,"positionId":1003,"assetId":510,"asset":"Some Facility","issuerShortName":"FGRHEH","fund":"DL-ABC-THE","fundHedging":"DL-ABC-THE","fundCcy":"GBP","asOfDate":"2024-04-15T00:00:00","tradeDate":"08/05/2024","settleDate":"2024-06-16T00:00:00","positionCcy":"USD","amount":23.325000000,"parAmount":-5000000,"pgh_FXRateBaseEffective":1.26058894715611,"fxRateBaseEffective":0,"parAmountLocal":-5000000,"fundedParAmountLocal":-5000000,"costAmountLocal":-5000000,"fundedCostAmountLocal":-5000000,"modifiedBy":null,"modifiedOn":"2021-12-21T00:00:00","typeDesc":"Paydown","isEdited":false,"girSourceID":0,"girSource":null,"isOverride":false,"Rate":0.09}
    ]

  }

  onTest1(){
    this.commongridOptions = this.t1Svc.gridOptions
    this.commonadaptableOptions = this.t1Svc.adaptableOptions
    this.boolflag = true
  }

  onTest2(){
    this.commongridOptions = this.t2Svc.gridOptions
    this.commonadaptableOptions = this.t2Svc.adaptableOptions
    this.boolflag = false
  }

  onAdaptableReady = (params: AdaptableReadyInfo) => {

    if (this.boolflag) {
      this.t1Svc.adaptableApi = params.adaptableApi;
      this.t1Svc.adaptableApi.toolPanelApi.closeAdapTableToolPanel();
      this.t1Svc.adaptableApi.columnApi.autosizeAllColumns();
    }
    else{
      this.t2Svc.adaptableApi = params.adaptableApi
      this.t2Svc.adaptableApi.toolPanelApi.closeAdapTableToolPanel()
      this.t2Svc.adaptableApi.columnApi.autosizeAllColumns()
    }

  };

  onGridReady(params: GridReadyEvent){

    if (this.boolflag) {
      this.t1Svc.gridApi = params.api
      params.api.closeToolPanel();
    }
    else {
      this.t2Svc.gridApi = params.api
      params.api.closeToolPanel();
    }
  };

}
