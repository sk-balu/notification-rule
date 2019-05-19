import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Convention } from 'src/app/models/convention.model';

@Component({
  selector: 'app-condition-wrapper',
  templateUrl: './condition-wrapper.component.html',
  styleUrls: ['./condition-wrapper.component.scss']
})
export class ConditionWrapperComponent implements OnInit {

  @Input() conventions: Convention;
  @Input() conditions: any;

  @Output() conditionsChange = new EventEmitter();

  private anEmptyCondition = { field: 0, predicate: 0, value: ''};

  constructor() { }

  private checkDefault() {
    if ( !this.conditions.length ) {
      this.addCondition();
    }
  }

  ngOnInit() {
    this.checkDefault();
  }

  private emitChange() {
    this.conditionsChange.emit(this.conditions);
  }

  public addCondition() {
    this.conditions.push( Object.assign({}, this.anEmptyCondition) );
    this.emitChange();
  }

  public removeCondition( conditionIndex ) {
    this.conditions.splice( conditionIndex, 1);
    this.emitChange();
  }

  public update( updatedCondition, index ){
    this.conditions.splice( index, 1, updatedCondition);
    this.emitChange();
  }

}
