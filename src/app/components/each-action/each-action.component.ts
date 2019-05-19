import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-each-action',
  templateUrl: './each-action.component.html',
  styleUrls: ['./each-action.component.scss']
})
export class EachActionComponent implements OnInit {

  @Input() conventions: {[key: string]: any};
  @Input() action: {[key: string]: any};

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  private get hasInput(): boolean {
    return this.action.type === 1;
  }

  private emitChange() {
    this.update.emit( this.action );
  }

  public actionChange( action ) {
    this.action.action = action.value;
    this.action.type = action.type;
    if ( this.hasInput ) {
      this.action.value = '';
    } else {
      delete this.action.value;
    }
    this.emitChange();
  }

  public inputChange() {
    this.emitChange();
  }

}
