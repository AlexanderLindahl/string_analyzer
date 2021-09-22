import { IRule } from "../rules/IRule";

export class StringAnalyzer {
  rules: IRule[];

  constructor(rules_: IRule[]) {
    this.rules = rules_;
  }

  analyze = (input: string): boolean => {
    return this.rules
      .map((rule) => {
        return rule.isNice(input);
      })
      .every((x) => x);
  };
}
