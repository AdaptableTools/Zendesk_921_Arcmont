import { ActionColumnContext, AdaptableApi, AdaptableButton, AdaptableOptions, CustomDisplayFormatterContext } from '@adaptabletools/adaptable-angular-aggrid';
import { ColDef, GridApi, GridOptions, ValueGetterParams } from '@ag-grid-community/core';
import { Injectable } from '@angular/core';
import { CommonConfig } from '../configs/common-config';
import { getSharedEntities, setSharedEntities } from '../shared/functions/utilities';
import { BLANK_DATETIME_FORMATTER_CONFIG, CUSTOM_DISPLAY_FORMATTERS_CONFIG, CUSTOM_FORMATTER, DATETIME_FORMATTER_CONFIG_ddMMyyyy_HHmm } from '../shared/functions/formatter';

@Injectable()
export class Test2Service {
  gridOptions: GridOptions
  adaptableOptions: AdaptableOptions
  columnDefs: ColDef[]
  gridApi : GridApi
  adaptableApi: AdaptableApi
  
  constructor() 
   {
      this.init()
   }

   init()
   {
     this.columnDefs = [
    {
      field: 'uniqueID',
      hide: true,
      suppressFiltersToolPanel: true,
      suppressColumnsToolPanel: true,
    },
    { headerName: "Position Id", field: 'positionId',hide: true, type:'abColDefNumber' },
    { headerName: "Asset Id", field: 'assetId',hide: true, type:'abColDefNumber'},
    { headerName: "Issuer Short Name ",field: 'issuerShortName',enableValue: true, type:'abColDefString' },
    { headerName: "Asset",field : 'asset',enableValue: true, type:'abColDefString' },
    { headerName: "Fund",field : 'fund', type:'abColDefString' },
    { headerName: "Fund Hedging", field: 'fundHedging', type:'abColDefString' },
    { headerName: "Fund Ccy",  field: 'fundCcy', type:'abColDefString' },
    { headerName: "Amount",  field: 'amount', type:'abColDefNumber' },
    {
      headerName: 'As Of Date ',
      field: 'asOfDate',
      hide: true,
      type: 'abColDefDate',
    },
    {
      headerName: 'Trade Date',
      field: 'tradeDate',
      rowGroup: true,
      hide: true,
      type: 'abColDefDate',
    },
    { headerName: "Type", field : 'typeDesc', type:'abColDefString'},
    {
      headerName: 'Settle Date',
      field: 'settleDate',
      type: 'abColDefDate',
    },
    { headerName: "Modified By",  field: 'modifiedBy', type:'abColDefString'},
    {
      headerName: 'Modified On',
      field: 'modifiedOn',
      valueGetter:(params:ValueGetterParams)=>{
        const rawValue = params.data?.modifiedOn;
        if (rawValue === '0001-01-01T00:00:00') {
          return null;
        }
        return rawValue
      },
      type: 'abColDefDate',
      cellClass: 'dateUK',
    },
    {
      headerName: 'Rate',
      field: 'Rate',
      type: 'abColDefNumber',
    },
  ]   
  
  this.gridOptions = {
    ...CommonConfig.ADAPTABLE_GRID_OPTIONS,
    enableRangeSelection: true,
    sideBar: true,
    suppressMenuHide: true,
    singleClickEdit: true,
    // statusBar: {
    //   statusPanels: [
    //     { statusPanel: 'agTotalRowCountComponent', align: 'left' },
    //     { statusPanel: 'agFilteredRowCountComponent' },
    //   ],
    // },
    
    columnDefs: this.columnDefs,
    defaultColDef: {
      resizable: true,
      enableValue: true,
      enableRowGroup: true,
      enablePivot: true,
      sortable: true,
      filter: true
    },
    autoGroupColumnDef:{
      sort: 'desc',
      sortable: true,
    },
    rowGroupPanelShow: 'always',
    allowContextMenuWithControlKey: true,
  };

  this.adaptableOptions = {
    licenseKey: CommonConfig.ADAPTABLE_LICENSE_KEY,
    primaryKey: "uniqueID",
    userName: `Sample User`,
    adaptableId: "Test Grid 2",
    adaptableStateKey: `Test Grid 2 Key`,

    exportOptions: CommonConfig.GENERAL_EXPORT_OPTIONS,

    layoutOptions: {
      autoSaveLayouts: true,
    },

    teamSharingOptions: {
      enableTeamSharing: true,
      persistSharedEntities: getSharedEntities.bind(this), //https://docs.adaptabletools.com/guide/version-15-upgrade-guide
      loadSharedEntities: getSharedEntities.bind(this)
    },

    actionOptions:{
      actionColumns:[
        {
          columnId: 'ActionDelete',
          friendlyName: 'Delete',
          actionColumnButton: {
            onClick: (
              button: AdaptableButton<ActionColumnContext>,
              context: ActionColumnContext
            ) => {
            },
            icon:{
              src: '../assets/img/trash.svg',
              style: {
                height: 25, width: 25
              }
            }
          },
        },
      ]
    },
    generalOptions: {

      /* Adaptable calls this on grid init */
      /* Custom comparator for descending order */
      customSortComparers: [
        {
          scope: {
            ColumnIds: ['tradeDate']
          },
          comparer: (valueA: Date, valueB: Date) => {
            if(valueA > valueB)
              return 1;
            else if(valueA < valueB)
              return -1;
            else
              return 0;
          }
        }
      ]
    },

    userInterfaceOptions:{
      customDisplayFormatters:[
        CUSTOM_DISPLAY_FORMATTERS_CONFIG('percentFormatter',['Rate']),
        {
          scope:{
            ColumnIds:['amount']
          },
          id:'amountFormatter',
          label:'amountFormatter',
          handler:(customDisplayFormatterContext: CustomDisplayFormatterContext)=>{
            const currentValue:any = customDisplayFormatterContext.cellValue;
            if(currentValue!=undefined && Number(Number(currentValue).toFixed(2))!=0    ){
                if(Number.isInteger(Number(Number(currentValue).toFixed(2)))){         // Don't show trailing 0's if number rounded off to 2 decimals is an integer
                    return Number(currentValue).toLocaleString(undefined,{
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    })
                }
                else{
                    return Number(currentValue).toLocaleString(undefined, {     // Show 2 trailing digits if non integer
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });    
                }
            }
            else if(Number(Number(currentValue).toFixed(2))==0) {
                return "-"
            } else{
                return ""
            }
         }
        }
      ]
    },

    predefinedConfig: {
      Dashboard: {
        Revision: 12,
        ModuleButtons: CommonConfig.DASHBOARD_MODULE_BUTTONS,
        IsCollapsed: true,
        Tabs: [{
          Name:'Layout',
          Toolbars: ['Layout'],
        },{
          Name:'Export',
          Toolbars: ['Export'],
        }],
        DashboardTitle: ' '
      },
      QuickSearch: {
        QuickSearchText: '',
        Style: {
          BackColor: '#ffff00',
          ForeColor: '#808080',
        },

      },

      Export:{
        Revision: 10,
        CurrentReport: 'Visual Data',
        CurrentDestination: 'Excel'
      },

      Layout:{
        Revision: 45,
        CurrentLayout: 'Basic Test2 Layout',
        Layouts: [{
          Name: 'Basic Test2 Layout',
          Columns: [
            'modifiedOn',
            'settleDate',
            'typeDesc',
            'positionCcy',
            'fundCcy',
            'fxRateBaseEffective',
            'pgh_FXRateBaseEffective',
            'amount',
            'parAmount',
            'parAmountLocal',
            'fundedParAmountLocal',
            'costAmountLocal',
            'fundedCostAmountLocal',
            'assetId',
            'modifiedBy',
            'isEdited',
            'isOverride',
            'girSource',
            'girSourceID',
            'actionNew',
            'ActionDelete',
            'Rate'
          ],
          PinnedColumnsMap: {
            actionNew: 'right',
            ActionDelete: 'right',
          },
          ColumnWidthMap:{
            ActionDelete: 50,
          },
          ColumnSorts: [
            {
              ColumnId: 'tradeDate',
              SortOrder: 'Desc',
            },
          ],
          AggregationColumns:{
            amount:'sum'
          }
        }]
      },

      CalculatedColumn: {
        CalculatedColumns: [
          {
            FriendlyName: 'Total PRs',
            ColumnId: 'total_pr_count',
            Query: {
              ScalarExpression: '[positionId]',
            },
            CalculatedColumnSettings: {
              DataType: 'Number',
            },
          }
        ]
      },

      FormatColumn: {
        Revision: 39.12,
        FormatColumns: [
          {
            Scope:  { ColumnIds:this.columnDefs.map(def=>def.field)},
            Style: {
              BackColor: '#C1EFFF', FontWeight: 'Bold'
            },
            Rule: {
              BooleanExpression: `[asset] = "UNITRANCHE"`
            }
          },
          BLANK_DATETIME_FORMATTER_CONFIG(['modifiedOn']),
          DATETIME_FORMATTER_CONFIG_ddMMyyyy_HHmm(['modifiedOn']),
          CUSTOM_FORMATTER(['Rate'],['percentFormatter']),
          {
            Scope: {
              /*
              NOTE:   'settleDate' is of type "dd/MM/yyyy" string and not in ISO string date format as the underlying value. So, no formatter as such is supplied for it. The same underlying value is displayed correctly on the group on UI. We were expecting the same value would be exported directly if no formattor is supplied. 

              */
              ColumnIds: ['asOfDate',  'settleDate'],     
            },
            DisplayFormat: {
              Formatter: 'DateFormatter',
              Options: {
                Pattern: 'dd/MM/yyyy'
              },
            },
            IncludeGroupedRows: true,
          },

          {
            Scope: {
              ColumnIds: ['amount'],
            },
            DisplayFormat: {
              Formatter: 'NumberFormatter',
              Options: {
                CustomDisplayFormats:['amountFormatter']
              },
            },
            IncludeGroupedRows: true,
          }
        ],
      },
      StatusBar: {
        Revision: 1,
        StatusBars: [
          {
            Key: 'Center Panel',
            StatusBarPanels: ['Filter']
          },
          {
            Key: 'Right Panel',
            StatusBarPanels: ['StatusBar','CellSummary','Layout','Export'],
          },
        ],
      }
    }
  }

 }
}
