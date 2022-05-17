(() => {
  type Gender = "M" | "F" | "X";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {
      super(name, gender, birthday);
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthday: Date
    ) {
      super(email, role, lastAccess, name, gender, birthday);
    }
  }

  const newPerson = new UserSettings(
    "/usr/armando",
    "/home",
    "rivera.armando@gmail.com",
    "Admin",
    new Date(),
    "Armando",
    "M",
    new Date("1997-08-29")
  );
  console.log(newPerson);
  console.log(newPerson.checkCredentials());
})();
