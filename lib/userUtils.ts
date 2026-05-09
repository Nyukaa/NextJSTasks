export interface User {
  id: number;
  name: string;
  age: number;
}

/**
 * Validates user input before creating a new user.
 * Returns an error message string, or null if valid.
 */
export function validateUser(data: Partial<User>): string | null {
  if (!data.name || data.name.trim() === "") {
    return "Name is required";
  }
  if (data.age === undefined || data.age === null) {
    return "Age is required";
  }
  if (typeof data.age !== "number" || isNaN(data.age)) {
    return "Age must be a number";
  }
  if (data.age < 0 || data.age > 150) {
    return "Age must be between 0 and 150";
  }
  return null;
}

/**
 * Creates a new user object with an auto-incremented ID.
 */
export function createUser(users: User[], name: string, age: number): User {
  const newId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  return { id: newId, name: name.trim(), age };
}

/**
 * Finds a user by ID. Returns undefined if not found.
 */
export function findUserById(users: User[], id: number): User | undefined {
  return users.find((u) => u.id === id);
}
