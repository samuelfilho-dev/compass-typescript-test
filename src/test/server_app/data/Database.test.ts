import { DataBase } from "../../../app/server_app/data/DataBase";
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";

type someTypeWithId = {
  id: string;
  name: string;
  color: string;
};

describe("Database test suite", () => {
  let sut: DataBase<someTypeWithId>;

  const fakeId = "1234";

  const someObjectOne = {
    id: "",
    name: "someName",
    color: "blue",
  };

  const someObjectTwo = {
    id: "",
    name: "someOtherName",
    color: "blue",
  };

  beforeEach(() => {
    sut = new DataBase<someTypeWithId>();
    jest.spyOn(IdGenerator, "generateRandomId").mockReturnValue(fakeId);
  });

  it("should return id after insert", async () => {
    const actual = await sut.insert({ id: "" } as any);

    expect(actual).toBe(fakeId);
  });

  it("should get element after insert", async () => {
    const id = await sut.insert(someObjectOne);
    const actual = await sut.getBy('id', id);

    expect(actual).toBe(someObjectOne);
  });

  it("should find all elements with same property", async () => {
    await sut.insert(someObjectOne);
    await sut.insert(someObjectTwo);

    const expected = [someObjectOne, someObjectTwo];
    
    const actual = await sut.findAllBy('color', 'blue');

    expect(actual).toEqual(expected);
  });

  it('should change color on object', async () => {
    const id = await sut.insert(someObjectOne);
    const expectedColor = 'red';

    await sut.update(id, 'color', expectedColor);
    const object = await sut.getBy('id', id);

    const actualColor = object.color;

    expect(actualColor).toBe(expectedColor);
  });

  it('should delete object', async () => {
    const id = await sut.insert(someObjectOne);
    await sut.delete(id);

    const acutal = await sut.getBy('id', id);

    expect(acutal).toBeUndefined();
  });
});
