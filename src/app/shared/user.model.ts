export class User {
  username: string;
  password: string;
  token: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.token = "";

  }

}
