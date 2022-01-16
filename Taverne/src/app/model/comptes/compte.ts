export class Compte {
  constructor(
    protected _id?: number,
    protected _nom?: string,
    protected _prenom?: string,
    protected _login?: string,
    protected _password?: string,
    protected _email?: string,
    protected _version?: number,
    protected _enabled?: boolean
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  get prenom(): string | undefined {
    return this._prenom;
  }

  get login(): string | undefined {
    return this._login;
  }

  get password(): string | undefined {
    return this._password;
  }

  get email(): string | undefined {
    return this._email;
  }

  get version(): number | undefined {
    return this._version;
  }

  get enabled(): boolean | undefined {
    return this._enabled;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }

  set login(value: string | undefined) {
    this._login = value;
  }

  set password(value: string | undefined) {
    this._password = value;
  }

  set email(value: string | undefined) {
    this._email = value;
  }

  set version(value: number | undefined) {
    this._version = value;
  }

  set enabled(value: boolean | undefined) {
    this._enabled = value;
  }
}
