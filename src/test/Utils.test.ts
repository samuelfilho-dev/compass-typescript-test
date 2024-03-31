import { StringUtils, getStingInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("String Utils Tests", () => {
    let sut: StringUtils;

    beforeEach(() => {  
      sut = new StringUtils();
    });

    it("Should return correct UpperCase ", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
    });

    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid Argument");
    });

    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrowError("Invalid Argument");
    });

    it("Should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done('GetStringInfo should throw error for invalid arg!');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid Argument");
        done();
      }
    });
  });

  it("Should return uppercase valid string", () => {
    // ** Tiple AAA Structure **
    // Arrange
    const sut = toUpperCase;
    const expected = "ABC";

    //Act
    const actual = sut("abc");

    //Assert
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStingInfo for arg My-String should", () => {
    it("return right length", () => {
      const actual = getStingInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    it("return right lower case", () => {
      const actual = getStingInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });

    it("return right upper case", () => {
      const actual = getStingInfo("My-String");
      expect(actual.uppercase).toBe("MY-STRING");
    });

    it("return right characters", () => {
      const actual = getStingInfo("My-String");
      expect(actual.characters).toHaveLength(9);
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"])
      );
    });

    it("return defined extra info", () => {
      const actual = getStingInfo("My-String");

      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    });

    it("return right extra info", () => {
      const actual = getStingInfo("My-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
