import { IRule } from "./IRule";

export class AtLeastThreeDsRule implements IRule {
  isNice = (input: string) => {
    return input.split("").filter((c) => c.toLowerCase() === "d").length >= 3;
  };
}
