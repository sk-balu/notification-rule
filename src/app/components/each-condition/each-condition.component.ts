import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-each-condition',
  templateUrl: './each-condition.component.html',
  styleUrls: ['./each-condition.component.scss']
})
export class EachConditionComponent implements OnInit {

  @Input() conventions: {[key: string]: any};
  @Input() condition: {[key: string]: any};

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  private get getPredicateType() {
    const predicate = this.conventions.predicates.filter( obj => obj.value === this.condition.predicate );
    return predicate[0].type;
  }

  private get hasInput(): boolean {
    return this.getPredicateType === 0;
  }

  private get hasDate(): boolean {
    return this.getPredicateType === 1;
  }

  private emitChange() {
    this.update.emit( this.condition );
  }

  public fieldChange() {
    this.emitChange();
  }
  public predicateChange() {
    this.condition.value = this.hasDate ? 1 : '';
    this.emitChange();
  }
  public inputChange() {
    this.emitChange();
  }
  public dateChange() {
    this.emitChange();
  }

}
