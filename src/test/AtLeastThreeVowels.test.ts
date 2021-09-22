import { AtLeastThreeVowelsRule } from "../rules/AtLeastThreeVowelsRule";

describe("Test to make sure AtLeastThreeVowelsRule works as expected", () => {
  it("Should make sure a string is nice if it contains at least three vowels", () => {
    const rule = new AtLeastThreeVowelsRule();
    const niceRes = rule.isNice("haaree");

    expect(niceRes).toBe(true);

    const badRes = rule.isNice("hej");
    expect(badRes).toBe(false);
  });
});
