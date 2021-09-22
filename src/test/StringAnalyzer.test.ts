import { AtLeastThreeVowelsRule } from "../rules/AtLeastThreeVowelsRule";
import { IRule } from "../rules/IRule";
import { StringAnalyzer } from "../StringAnalyzer/StringAnalyzer";

describe("Make sure a string does not conatain a bad combination", () => {
  it("Should make sure a string does not contain a bad combination", () => {
    const rules: IRule[] = [new AtLeastThreeVowelsRule()];
    const analyzer = new StringAnalyzer(rules);
    const niceRes = analyzer.analyze("harbcee");

    expect(niceRes).toBe(true);

    const badRes = analyzer.analyze("abcd");
    expect(badRes).toBe(false);
  });
});
