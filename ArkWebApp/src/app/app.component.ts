import { ActionColumnContext, AdaptableButton, AdaptableOptions, CustomDisplayFormatterContext } from '@adaptabletools/adaptable-angular-aggrid';
import { ColDef, GridOptions, Module, ValueGetterParams } from '@ag-grid-community/core';
import { Component } from '@angular/core';
import { CommonConfig } from './configs/common-config';
import { BLANK_DATETIME_FORMATTER_CONFIG, CUSTOM_DISPLAY_FORMATTERS_CONFIG, CUSTOM_FORMATTER, dateFormatter, dateTimeFormatter, DATETIME_FORMATTER_CONFIG_ddMMyyyy_HHmm } from './shared/functions/formatter';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../app/shared/styles/grid-page.layout.scss', './app.component.scss']
})
export class AppComponent {

  constructor(){}

}
