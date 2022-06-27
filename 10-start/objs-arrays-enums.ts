enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = '';

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log(`is ${Role.ADMIN}`);
}
