export class Rule {
  id: number;
  name: string;
  condition: number;
  conditions: Array<{[key: string]: any}>;
  actions: Array<{[key: string]: any}>;
}
