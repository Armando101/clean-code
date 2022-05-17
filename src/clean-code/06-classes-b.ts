(() => {
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
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthday: Date;
    constructor({ name, gender, birthday }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthday = birthday;
    }
  }

  class User extends Person {
    public email: string;
    private lastAccess: Date;
    public role: string;
    constructor({
      email,
      role,
      lastAccess,
      name,
      gender,
      birthday,
    }: UserProps) {
      super({ name, gender, birthday });
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: Date;
    email: string;
    role: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthday: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: Date;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      lastAccess,
      name,
      gender,
      birthday,
    }: UserSettingsProps) {
      super({ email, role, lastAccess, name, gender, birthday });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // const newPerson = new UserSettings(
  //   "/usr/armando",
  //   "/home",
  //   "rivera.armando@gmail.com",
  //   "Admin",
  //   new Date(),
  //   "Armando",
  //   "M",
  //   new Date("1997-08-29")
  // );
  // console.log(newPerson);
  // console.log(newPerson.checkCredentials());
})();
