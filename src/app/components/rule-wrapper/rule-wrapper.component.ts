import { Component, OnInit } from '@angular/core';
import { Convention } from 'src/app/models/convention.model';
import { ConventionsService } from 'src/app/services/conventions/conventions.service';
import { RulesService } from 'src/app/services/rules/rules.service';
import { Rule } from 'src/app/models/rule.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-rule-wrapper',
  templateUrl: './rule-wrapper.component.html',
  styleUrls: ['./rule-wrapper.component.scss']
})
export class RuleWrapperComponent implements OnInit {

  public conventions: Convention;
  public rules: Rule[];
  public rule: {[key: string]: any} = {
    name: '',
    condition: 0,
    conditions: [],
    actions: []
  };

  private isCreate = true;

  constructor(
    private route: ActivatedRoute,
    private conventionsService: ConventionsService,
    private rulesService: RulesService,
    private location: Location
  ) {
    conventionsService.getConventions().subscribe( ( conventions ) => this.conventions = conventions );
    rulesService.getRules().subscribe( rules =>  this.rules = rules );
    // tslint:disable-next-line: radix
    const id = parseInt( this.route.snapshot.paramMap.get('id') );
    if ( id ) {
      this.isCreate = false;
      rulesService.getRule( id ).subscribe( rule => this.rule = rule );
    }
  }

  ngOnInit() { }

  public save() {
    this.rulesService.addRule( this.rule as Rule ).subscribe( rule => {
      this.rules.push( rule );
      this.goBack();
    });
  }

  goBack(): void {
    this.location.back();
  }

  public update() {
    this.rulesService.updateRule( this.rule as Rule ).subscribe( () => this.goBack() );
  }

}
