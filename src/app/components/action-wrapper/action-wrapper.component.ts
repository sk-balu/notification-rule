import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Convention } from 'src/app/models/convention.model';

@Component({
  selector: 'app-action-wrapper',
  templateUrl: './action-wrapper.component.html',
  styleUrls: ['./action-wrapper.component.scss']
})
export class ActionWrapperComponent implements OnInit {

  @Input() conventions: Convention;
  @Input() actions: any;

  @Output() actionsChange = new EventEmitter();

  private anEmptyAction = { action: 1, type: 0, value: '' };

  constructor() { }

  private checkDefault() {
    if ( !this.actions.length ) {
      this.addAction();
    }
  }

  ngOnInit() {
    this.checkDefault();
  }

  public emitChange() {
    this.actionsChange.emit( this.actions );
  }

  public addAction() {
    this.actions.push( Object.assign({}, this.anEmptyAction) );
    this.emitChange();
  }

  public removeAction( ruleIndex ) {
    this.actions.splice( ruleIndex, 1);
    this.emitChange();
  }

  public update( updatedAction, index ) {
    this.actions.splice( index, 1, updatedAction);
    this.emitChange();
  }

}
