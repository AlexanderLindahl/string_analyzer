import { LetterTwiceInARowRule } from "../rules/LettertwiceInARowRule";

describe("Make sure a string is nice if it contains a letter Twice in a row", () => {
  it("Make sure a string is nice if it contains a letter Twice in a row", () => {
    const rule = new LetterTwiceInARowRule();
    const niceRes = rule.isNice("haaree");

    expect(niceRes).toBe(true);

    const badRes = rule.isNice("hej");
    expect(badRes).toBe(false);
  });
});
