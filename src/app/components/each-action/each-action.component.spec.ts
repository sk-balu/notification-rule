import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachActionComponent } from './each-action.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

describe('EachActionComponent', () => {
  let component: EachActionComponent;
  let fixture: ComponentFixture<EachActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachActionComponent ],
      imports: [
        NgSelectModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachActionComponent);
    component = fixture.componentInstance;
    component.action = { action: 2, type: 1, value: 'letbaluhear@gmail.com' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
