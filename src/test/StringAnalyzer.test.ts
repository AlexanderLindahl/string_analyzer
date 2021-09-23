import { AtLeastThreeDsRule } from "../rules/AtLeastThreeDsRule";
import { AtLeastThreeVowelsRule } from "../rules/AtLeastThreeVowelsRule";
import { IRule } from "../rules/IRule";
import { LetterTwiceInARowRule } from "../rules/LetterTwiceInARowRule";
import { NoBadCombinationRule } from "../rules/NoBadCombinationRule";
import { StringAnalyzer } from "../StringAnalyzer/StringAnalyzer";

describe("Make sure a string does not conatain a bad combination", () => {
  it("Should make sure a string does not contain a bad combination", () => {
    const rules: IRule[] = [
      new AtLeastThreeVowelsRule(),
      new AtLeastThreeDsRule(),
      new NoBadCombinationRule(["pq", "xy", "ab", "cd"]),
      new LetterTwiceInARowRule(),
    ];
    const analyzer = new StringAnalyzer(rules);
    const niceRes = analyzer.analyze("harbceddde");

    expect(niceRes).toBe(true);

    const badRes = analyzer.analyze("abcd");
    expect(badRes).toBe(false);
  });
});
