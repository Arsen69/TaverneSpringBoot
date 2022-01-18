export class Compte {
  constructor(
    protected _id?: number,
    protected _nom?: string,
    protected _prenom?: string,
    protected _login?: string,
    protected _password?: string,
    protected _mail?: string,
    protected _version?: number,
    protected _enabled?: boolean,
    private _birthday?: Date
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

  get mail(): string | undefined {
    return this._mail;
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

  set mail(value: string | undefined) {
    this._mail = value;
  }

  set version(value: number | undefined) {
    this._version = value;
  }

  set enabled(value: boolean | undefined) {
    this._enabled = value;
  }
  /**
   * Getter birthday
   * @return {Date}
   */
  public get birthday(): Date | undefined {
    return this._birthday;
  }

  /**
   * Setter birthday
   * @param {Date} value
   */
  public set birthday(value: Date | undefined) {
    this._birthday = value;
  }
}
