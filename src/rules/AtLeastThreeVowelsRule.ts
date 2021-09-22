import { IRule } from "./IRule";

export class AtLeastThreeVowelsRule implements IRule {
  isNice(input: string): boolean {
    const vowels = ["a", "e", "i", "o", "u"];
    let counter = 0;
    input.split("").map((c) => {
      vowels.includes(c) && counter++;
    });

    return counter >= 3;
  }
}
