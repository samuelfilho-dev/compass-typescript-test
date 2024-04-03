import { IncomingMessage } from "http";
import { getRequestBody } from "../../../app/server_app/utils/Utils";

const requestMock = {
  on: jest.fn(),
};

const someObject = {
  name: "John",
  age: 30,
  city: "Paris",
};

const someObjectAsString = JSON.stringify(someObject);

describe("getRequestBody test suite", () => {
  it("Should return object for valid JSON", async () => {
    requestMock.on.mockImplementation((event, cb) => {
      if (event === "data") {
        cb(someObjectAsString);
      } else {
        cb();
      }
    });

    const acutal = await getRequestBody(requestMock as any as IncomingMessage);

    expect(acutal).toEqual(someObject);
  });

  it("Should throw error for invalid JSON", async () => {
    requestMock.on.mockImplementation((event, cb) => {
      if (event === "data") {
        cb("a" + someObjectAsString);
      } else {
        cb();
      }
    });

    await expect(getRequestBody(requestMock as any)).rejects.toThrow(
      "Unexpected token 'a', \"a{\"name\":\"\"... is not valid JSON"
    );
  });

  it("Should throw error for unexpected error", async () => {
    const someError = new Error("Something went wrong!");

    requestMock.on.mockImplementation((event, cb) => {
      if (event === "error") {
        cb(someError);
      }
    });

    await expect(getRequestBody(requestMock as any)).rejects.toThrow(
      someError.message
    );
  });
});
