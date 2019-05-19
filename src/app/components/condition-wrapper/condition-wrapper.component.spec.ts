import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionWrapperComponent } from './condition-wrapper.component';
import { EachConditionComponent } from '../each-condition/each-condition.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

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

describe('ConditionWrapperComponent', () => {
  let component: ConditionWrapperComponent;
  let fixture: ComponentFixture<ConditionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionWrapperComponent, EachConditionComponent ],
      imports: [
        NgSelectModule,
        FormsModule
      ],
      providers:[
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionWrapperComponent);
    component = fixture.componentInstance;
    component.conditions = [];
    component.conventions = conventionsStub;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
