export class Convention {
  id: number;
  conditions: Array<{[key: string]: any}>;
  fields: Array<{[key: string]: any}>;
  predicates: Array<{[key: string]: any}>;
  actions: Array<{[key: string]: any}>;
}
