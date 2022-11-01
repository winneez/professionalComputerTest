import { TaxDetailCompleteComponent } from './submit-tax-filing/component/tax-detail-complete/tax-detail-complete.component';
import { SubmitTaxFilingComponent } from './submit-tax-filing/submit-tax-filing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'submit-tax-filing', component: SubmitTaxFilingComponent },
  { path: '', redirectTo: 'submit-tax-filing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: false,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
