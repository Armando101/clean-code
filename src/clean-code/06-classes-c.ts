(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

  type Gender = "M" | "F" | "X";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthday: Date;
  }

  interface UserProps {
    email: string;
    role: string;
    lastAccess: Date;
  }

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date
    ) {}
  }

  class User {
    constructor(
      public email: string,
      private lastAccess: Date,
      public role: string
    ) {}

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthday: Date;
  }
  class Settings {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string
    ) {}
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      birthday,
      email,
      gender,
      lastAccess,
      lastOpenFolder,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person(name, gender, birthday);
      this.user = new User(email, lastAccess, role);
      this.settings = new Settings(workingDirectory, lastOpenFolder);
    }
  }

  const newPerson = new UserSettings({
    lastOpenFolder: "/usr/armando",
    workingDirectory: "/home",
    email: "rivera.armando@gmail.com",
    role: "Admin",
    lastAccess: new Date(),
    name: "Armando",
    gender: "M",
    birthday: new Date("1997-08-29"),
  });
  console.log({ newPerson });
  console.log(newPerson.user.checkCredentials());
})();
