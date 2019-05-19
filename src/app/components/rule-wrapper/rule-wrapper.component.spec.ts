import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleWrapperComponent } from './rule-wrapper.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConditionWrapperComponent } from '../condition-wrapper/condition-wrapper.component';
import { ActionWrapperComponent } from '../action-wrapper/action-wrapper.component';
import { EachConditionComponent } from '../each-condition/each-condition.component';
import { EachActionComponent } from '../each-action/each-action.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ConventionsService } from 'src/app/services/conventions/conventions.service';
import { HttpClientModule } from '@angular/common/http';
import { RulesService } from 'src/app/services/rules/rules.service';

const conventionsStub = {
  id: 1,
  conditions: [
    { name: 'any', value: 0 },
    { name: 'all', value: 1 },
  ],
  fields: [
    { name: 'From', value: 0 },
    { name: 'To', value: 1 },
    { name: 'Subject', value: 2 },
    { name: 'Date Received', value: 3 }
  ],
  predicates: [
    { name: 'Contains', type: 0, value: 0 },
    { name: 'Not equal', type: 1, value: 1 },
    { name: 'Less than', type: 1, value: 2 }
  ],
  actions: [
    { name: 'Mark as Read', type: 0, value: 0 },
    { name: 'Mark as Unread', type: 0, value: 1 },
    { name: 'Move to', type: 1, value: 2 },
    { name: 'Forward to', type: 1, value: 3 },
    { name: 'Add Label', type: 1, value: 4 },
    { name: 'Archive Message', type: 0, value: 5 },
  ],
  dates: [
    { name: '1 day', value: 1 },
    { name: '3 days', value: 3 },
    { name: '1 week', value: 7 },
    { name: '2 weeks', value: 14 },
    { name: '1 month', value: 30 },
    { name: '2 months', value: 60 },
    { name: '6 months', value: 180 },
    { name: '1 year', value: 365 },
  ]
};

describe('RuleWrapperComponent', () => {
  let component: RuleWrapperComponent;
  let fixture: ComponentFixture<RuleWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RuleWrapperComponent,
        ConditionWrapperComponent,
        ActionWrapperComponent,
        EachConditionComponent,
        EachActionComponent
      ],
      imports: [
        NgSelectModule,
        FormsModule,
        RouterModule.forRoot([]),
        HttpClientModule,
      ],
      providers: [
        ConventionsService,
        RulesService,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleWrapperComponent);
    component = fixture.componentInstance;
    component.conventions = conventionsStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
