import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ConventionsService } from 'src/app/services/conventions/conventions.service';
import { HttpClientModule } from '@angular/common/http';
import { RulesService } from 'src/app/services/rules/rules.service';
import { FormsModule } from '@angular/forms';
import { Rule } from 'src/app/models/rule.model';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        RouterModule.forRoot([]),
        HttpClientModule,
        FormsModule
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
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    component.rules = [] as Rule[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
