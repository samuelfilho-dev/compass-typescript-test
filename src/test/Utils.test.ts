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

  describe('getStingInfo for arg My-String should', () => {
    it('return right length', () => {
        const actual = getStingInfo('My-String');
        expect(actual.characters).toHaveLength(9);
    });

    it('return right lower case')
  });

  it.only('should return info for valid string', () => {
    const actual = getStingInfo('My-String');

    expect(actual.lowerCase).toBe('my-string');
    expect(actual.extraInfo).toEqual({});

    expect(actual.characters).toHaveLength(9);
    expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
    expect(actual.characters).toContain<string>('M');
    expect(actual.characters).toEqual(
        expect.arrayContaining(['S', 't', 'r','i', 'n', 'g','M', 'y', '-'])
    );

    expect(actual.extraInfo).not.toBe(undefined);
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
  });
});
