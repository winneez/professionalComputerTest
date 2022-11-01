import { SubmitTaxFilingComponent } from './submit-tax-filing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { CardModule } from 'primeng/card';
import { TaxDetailComponent } from './component/tax-detail/tax-detail.component';
import { TaxComputationOrdinaryComponent } from './component/tax-computation-ordinary/tax-computation-ordinary.component';
import { TaxComputationAdditionalComponent } from './component/tax-computation-additional/tax-computation-additional.component';
import { TaxDetailCompleteComponent } from './component/tax-detail-complete/tax-detail-complete.component';
import { TaxComputationCompleteComponent } from './component/tax-computation-complete/tax-computation-complete.component';
import { DeclarationComponent } from './component/declaration/declaration.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FieldsetModule } from 'primeng/fieldset';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';

@NgModule({
  declarations: [
    SubmitTaxFilingComponent,
    TaxDetailComponent,
    TaxComputationOrdinaryComponent,
    TaxComputationAdditionalComponent,
    TaxDetailCompleteComponent,
    TaxComputationCompleteComponent,
    DeclarationComponent,
  ],
  imports: [
    CommonModule,
    StepsModule,
    CardModule,
    AccordionModule,
    BrowserAnimationsModule,
    FieldsetModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule
  ],
  exports: [BrowserAnimationsModule],
})
export class SubmitTaxFilingModule {}
