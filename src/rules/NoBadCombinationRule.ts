import { IRule } from "./IRule";

export class NoBadCombinationRule implements IRule {
  badCombinations: string[];
  constructor(badCombination_: string[]) {
    this.badCombinations = badCombination_;
  }
  isNice(input: string): boolean {
    return this.badCombinations
      .map((combo) => {
        return !input.includes(combo);
      })
      .every((x) => x);
  }
}
