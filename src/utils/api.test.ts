import findBucketListById from "./api";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API call", () => {
  it("should return bucket list", async () => {
    const expected = ["some bucket list item", "another bucket list item"];
    mockedAxios.get.mockResolvedValue({ data: expected });

    const actual = await findBucketListById('2');

    expect(actual).toEqual(expected);
  });

  it("should return error message", async () => {
    
    const expected = [
      "Error trying to retrieve your bucket list... ",
      "Check the console for more details.",
    ];
    mockedAxios.get.mockRejectedValue("Network error: Something went wrong");

    const actual = await findBucketListById("someId");

    expect(actual).toEqual(expected);
  });
});
