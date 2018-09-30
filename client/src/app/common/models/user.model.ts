export class User {
  constructor(
    public email: string,
    public login: string,
    public password?: string,
    public id?: string
  ) {}
}
