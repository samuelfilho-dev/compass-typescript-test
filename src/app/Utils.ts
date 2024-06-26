export class StringUtils {
  public toUpperCase(arg: string) {
    if (!arg) {
      throw new Error("Invalid Argument");
    }
    return arg.toUpperCase();
  }
}

export function toUpperCase(arg: string) {
  return arg.toUpperCase();
}

export type stringInfo = {
  lowerCase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};


export function getStingInfo(arg: String): stringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    uppercase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {},
  };
}
