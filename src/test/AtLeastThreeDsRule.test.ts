import { AtLeastThreeDsRule } from "../rules/AtLeastThreeDsRule";
import { IRule } from "../rules/IRule";
import { LetterTwiceInARowRule } from "../rules/LetterTwiceInARowRule";

describe("tests that rule works", () => {
  let rule: IRule;
  beforeEach(() => {
    rule = new AtLeastThreeDsRule();
  });

  it("Should make sure a string with 3 d's is nice", () => {
    let input: string = "dajhasdlfkjd";
    let result: boolean = rule.isNice(input);

    expect(result).toBe(true);
  });

  it("Should make sure a string with 2 d's is not nice", () => {
    let input: string = "IAmABadStringBecauseILackDsInMe";
    let result: boolean = rule.isNice(input);

    expect(result).toBe(false);
  });
});
