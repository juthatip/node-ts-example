import { groupUsersByDepartment } from "../utils/groupUsers";
import type { User } from "../utils/groupUsers";

describe("groupUsersByDepartment", () => {
  it("should return an empty object", () => {
    expect(groupUsersByDepartment([])).toEqual({});
  });

  it("should group users by department and count gender correctly", () => {
    const users: User[] = [
      {
        company: { department: "Engineering" },
        gender: "male",
        age: 25,
        hair: { color: "brown" },
        firstName: "test1",
        lastName: "test2",
        address: { postalCode: "12345" },
      },
      {
        company: { department: "Engineering" },
        gender: "female",
        age: 30,
        hair: { color: "black" },
        firstName: "test3",
        lastName: "test4",
        address: { postalCode: "67890" },
      },
    ];

    const result = groupUsersByDepartment(users);
    expect(result).toHaveProperty("Engineering");
    expect(result["Engineering"].male).toBe(1);
    expect(result["Engineering"].female).toBe(1);
  });

  it("should return age ranges correctly", () => {
    const users: User[] = [
      {
        company: { department: "Sales" },
        gender: "male",
        age: 22,
        firstName: "test1",
        lastName: "test2",
        address: { postalCode: "75948" },
        hair: { color: "blonde" },
      },
      {
        company: { department: "Sales" },
        gender: "female",
        age: 39,
        firstName: "test3",
        lastName: "test4",
        address: { postalCode: "75948" },
        hair: { color: "red" },
      },
      {
        company: { department: "Sales" },
        gender: "female",
        age: 50,
        firstName: "test5",
        lastName: "test6",
        address: { postalCode: "75948" },
        hair: { color: "red" },
      },
    ];

    const result = groupUsersByDepartment(users);
    expect(result["Sales"].ageRange).toBe("22-50");
  });
});
