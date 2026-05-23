global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ name: "John" }),
  })
);

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

  return response.json();
}

describe("Mock API test", () => {
  it("returns mocked user", async () => {
    const data = await fetchUser();

    expect(data.name).toBe("John");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
