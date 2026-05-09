import { validateUser, createUser, findUserById, User } from "../lib/userUtils";

const mockUsers: User[] = [
  { id: 1, name: "Anna", age: 25 },
  { id: 2, name: "Alex", age: 30 },
];

// ─── findUserById ─────────────────────────────────────────────────────────────

describe("findUserById", () => {
  it("finding user by id", () => {
    expect(findUserById(mockUsers, 1)).toEqual({
      id: 1,
      name: "Anna",
      age: 25,
    });
  });

  it("return undefined for unexist id", () => {
    expect(findUserById(mockUsers, 99)).toBeUndefined();
  });

  it("return undefined for empty array", () => {
    expect(findUserById([], 1)).toBeUndefined();
  });
});
