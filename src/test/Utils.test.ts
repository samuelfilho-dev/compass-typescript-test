import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

  it("Should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  
});
