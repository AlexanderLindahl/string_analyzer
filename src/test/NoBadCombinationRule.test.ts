import { NoBadCombinationRule } from "../rules/NoBadCombinationRule";

describe("Make sure a string does not conatain a bad combination", () => {
  it("Make sure a string does not contain a bad combination", () => {
    const rule = new NoBadCombinationRule(["ab", "cd", "pq", "xy"]);
    const niceRes = rule.isNice("harbcee");

    expect(niceRes).toBe(true);

    const badRes = rule.isNice("abcd");
    expect(badRes).toBe(false);
  });
});
