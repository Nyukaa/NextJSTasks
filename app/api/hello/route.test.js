import { GET } from "./route";

describe("GET /api/hello", () => {
  it("should return hello message", async () => {
    const response = await GET();

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ message: "Hello World" });
  });
});
