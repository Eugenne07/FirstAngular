import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'calc', component: CalcComponent },
  { path: 'country-list', component: CountryListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
