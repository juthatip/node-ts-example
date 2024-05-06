interface User {
  gender: "male" | "female";
  age: number;
  firstName: string;
  lastName: string;
  address: {
    postalCode: string;
  };
  company: {
    department: string;
  };
  hair: {
    color: string;
  };
}

interface DepartmentSummary {
  male: number;
  female: number;
  ageRange: string;
  hair: Record<string, number>;
  addressUser: Record<string, string>;
}

const groupUsersByDepartment = (
  users: User[]
): Record<string, DepartmentSummary> => {
  const groupUsers: Record<string, DepartmentSummary> = {};

  users.forEach((user) => {
    const department = user.company.department;
    if (!groupUsers[department]) {
      groupUsers[department] = {
        male: 0,
        female: 0,
        ageRange: `${user.age}-${user.age}`,
        hair: {},
        addressUser: {},
      };
    }

    const dataGroupUsers = groupUsers[department];

    dataGroupUsers[user.gender] += 1;

    const [minAge, maxAge] = dataGroupUsers.ageRange.split("-").map(Number);

    /* let minUserAge = minAge > user.age ? user.age : minAge;
      let maxUserAge = maxAge <= user.age ? user.age : maxAge; */

    dataGroupUsers.ageRange = `${Math.min(minAge, user.age)}-${Math.max(
      maxAge,
      user.age
    )}`;

    dataGroupUsers.hair[user.hair.color] =
      (dataGroupUsers.hair[user.hair.color] || 0) + 1;

    dataGroupUsers.addressUser[`${user.firstName}${user.lastName}`] =
      user.address.postalCode;
  });

  return groupUsers;
};

export { groupUsersByDepartment };
export type { User };
