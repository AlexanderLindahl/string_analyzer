import { IRule } from "./IRule";

export class LetterTwiceInARowRule implements IRule {
  isNice(input: string): boolean {
    return input
      .split("")
      .map((char, index, array) => {
        return char === array[index + 1];
      })
      .includes(true);
  }
}
