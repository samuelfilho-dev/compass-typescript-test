import { getStingInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
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

  it.only('should return info for valid string', () => {
    const acutal = getStingInfo('My-String');

    expect(acutal.lowerCase).toBe('my-string');
    expect(acutal.extraInfo).toEqual({});

    expect(acutal.characters).toHaveLength(9);
    expect(acutal.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
    expect(acutal.characters).toContain<string>('M');
    expect(acutal.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r','i', 'n', 'g','M', 'y', '-'])
    );

    expect(acutal.extraInfo).not.toBe(undefined);
    expect(acutal.extraInfo).not.toBeUndefined();
    expect(acutal.extraInfo).toBeDefined();
    expect(acutal.extraInfo).toBeTruthy();
  });
});
