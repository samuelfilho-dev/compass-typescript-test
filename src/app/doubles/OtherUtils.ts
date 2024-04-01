import { v4 } from "uuid";

export type stringInfo = {
  lowerCase: string;
  uppercase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCall = (arg: string) => void;

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export function toLowerCaseWithId(arg: string) {
    return arg.toLowerCase() + v4();
}
 
export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callback: LoggerServiceCall) {
    if (!arg) {
        callback('Invalid Argument');
        return;
    }

    callback(`Call function with ${arg}`);
    return arg.toUpperCase();
};

export class OtherStringUtils {
    
    public callExternalService() {
        console.log('Calling external service');
    }

    public toUpperCase(arg: string){
        return arg.toUpperCase();
    }

    public logString(arg: string) {
        console.log(arg);
    }
}