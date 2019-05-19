import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RuleWrapperComponent } from '../components/rule-wrapper/rule-wrapper.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'rule/new', component: RuleWrapperComponent },
  { path: 'rule/:id', component: RuleWrapperComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
