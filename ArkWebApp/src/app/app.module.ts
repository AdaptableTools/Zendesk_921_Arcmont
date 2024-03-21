import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { environment } from 'src/environments/environment';  
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { AdaptableAngularAgGridModule } from '@adaptabletools/adaptable-angular-aggrid';  
import { AgGridModule } from '@ag-grid-community/angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GridComponent } from './grid/grid.component';

@NgModule({  
  declarations: [  
    AppComponent, GridComponent, 
    // UnauthorizedComponent, HomeComponent, DetailedViewComponent, AccessControlComponent
  ],  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    HttpClientModule,


    AdaptableAngularAgGridModule, 
    AgGridModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatProgressSpinnerModule,
    // FilterPaneModule,

  ],  
  providers: [  
    HttpClient,  
    /* 
    Switched to: DD-MM-YYYY.
      Default locale is 'en-US' : MM-DD-YYYY
      
      Applicable to all Ng Material fields for this module.
    */
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},  
    // {provide: DateAdapter, useClass: InputDateAdapter, deps: [MAT_DATE_LOCALE, Platform]}

  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 