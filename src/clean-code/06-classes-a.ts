(() =>{
  type Gender = 'M' | 'F'

  class Person{
    constructor(
      public name : string, 
      public gender : Gender, 
      public birthDate : Date){
    }
  }

  class User extends Person{
    public lastAccess : Date;
    constructor (
      public email: string,
      public role: string,
      name : string,
      gender : Gender,
      birthDate : Date
    ){
      super( name, gender, birthDate)
      this.lastAccess = new Date()
    }

    checkCredentials(){
      return true
    }
  }

  class UserSettings extends User{
    constructor(
      public workingDirectory: string,
      public lastOpenFolder : string,
      public email: string,
      public role: string,
      name : string,
      gender : Gender,
      birthDate : Date
    ){
      super(email, role, name, gender, birthDate )
    }

  }

  const newPerson = new Person('Alvaro','M', new Date('1976-12-13'))
  console.log({newPerson});

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'johndoe@gmail.com',
    'Admin',
    'Alvaro',
    'M',
    new Date('1976-12-13')
  )

  console.log({ userSettings });
  

  
  
})();