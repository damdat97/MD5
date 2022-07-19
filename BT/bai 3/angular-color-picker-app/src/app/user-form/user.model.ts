export class User {
  constructor(
    public email: string,
    public password: string,
    public confirmPassword: string,
    public country: string,
    public age: number,
    public phone: string) {}
}
