import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './modules/routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RuleWrapperComponent } from './components/rule-wrapper/rule-wrapper.component';
import { ConditionWrapperComponent } from './components/condition-wrapper/condition-wrapper.component';
import { EachConditionComponent } from './components/each-condition/each-condition.component';
import { ActionWrapperComponent } from './components/action-wrapper/action-wrapper.component';
import { EachActionComponent } from './components/each-action/each-action.component';

import { InMemRuleService } from './utils/rules.service';
import { RulesService } from './services/rules/rules.service';
import { ConventionsService } from './services/conventions/conventions.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleWrapperComponent,
    ConditionWrapperComponent,
    EachConditionComponent,
    ActionWrapperComponent,
    EachActionComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot( InMemRuleService,{ delay: 0 } )
  ],
  providers: [ RulesService, ConventionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
