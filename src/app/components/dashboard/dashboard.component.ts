import { Component, OnInit } from '@angular/core';
import { Rule } from 'src/app/models/rule.model';
import { RulesService } from 'src/app/services/rules/rules.service';
import { ConventionsService } from 'src/app/services/conventions/conventions.service';
import { Convention } from 'src/app/models/convention.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public rules: Rule[];

  private conventions: Convention;
  private pages: number;
  private currentPage = 1;
  private perPage = 5;
  private searchTerm: string;
  private sortBy = 'asc';

  private get paginatedRules() {
    const begin = ((this.currentPage - 1) * this.perPage),
          end = begin + this.perPage;
    return this.rules.slice( begin, end );
  }

  constructor(
    private conventionsService: ConventionsService,
    private rulesService: RulesService
  ) {
    this.getConventions();
    this.getRules();
  }

  ngOnInit() { }

  private getConventions() {
    this.conventionsService.getConventions().subscribe((conventions) => this.conventions = conventions);
  }

  private getRules( term?: string ) {
    if ( term && term.trim() ) {
      this.rulesService.searchRule( term ).subscribe( ( rules ) => {
        this.updateDisplay(rules);
      });
    } else {
      this.rulesService.getRules().subscribe( ( rules ) => {
        this.updateDisplay(rules);
      });
    }
  }

  private counter(i: number) {
    return new Array(i);
  }

  private getConditionName( value ): string{
    const result = this.conventions.conditions.filter( condition => value === condition.value);
    return result[0].name;
  }

  private updateDisplay(rules: Rule[]) {
    this.rules = rules;
    this.pages = Math.ceil(rules.length / this.perPage);
  }

  public delete( id, index ) {
    this.rulesService.deleteRule( id ).subscribe(() => {
      this.rules.splice(index, 1);
    });
  }

  public decreasePagination() {
    this.currentPage = this.currentPage > 1 ? (this.currentPage - 1) : this.currentPage;
  }

  public increasePagination() {
    this.currentPage = this.currentPage < this.pages ? (this.currentPage + 1) : this.currentPage;
  }

  public searchRule( term ) {
    this.getRules( term );
  }

  public sort( sortBy ) {
    this.sortBy = sortBy;
    this.rules.sort( ( rule1, rule2 ) => {
      return (sortBy === 'asc') ? rule1['name'].localeCompare(rule2['name']) : rule2['name'].localeCompare(rule1['name']);
    });
  }

}
