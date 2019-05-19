import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionWrapperComponent } from './action-wrapper.component';
import { EachActionComponent } from '../each-action/each-action.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Convention } from 'src/app/models/convention.model';

describe('ActionWrapperComponent', () => {
  let component: ActionWrapperComponent;
  let fixture: ComponentFixture<ActionWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionWrapperComponent, EachActionComponent ],
      imports: [
        NgSelectModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionWrapperComponent);
    component = fixture.componentInstance;
    component.actions = [];
    component.conventions = {} as Convention;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
