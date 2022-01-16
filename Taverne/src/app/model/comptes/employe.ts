import { Compte } from './compte';

export class Employe extends Compte {
  constructor(
    _id?: number,
    _nom?: string,
    _prenom?: string,
    _login?: string,
    _password?: string,
    _email?: string,
    _version?: number,
    _enabled?: boolean,
    private _bar?: Bar,
    private _events?: Array<Events>
  ) {
    super(_id, _nom, _prenom, _login, _password, _email, _version, _enabled);
  }

  set bar(value: Bar | undefined) {
    this._bar = value;
  }

  set events(value: Array<Events> | undefined) {
    this._events = value;
  }

  get bar(): Bar | undefined {
    return this._bar;
  }

  get events(): Array<Events> | undefined {
    return this._events;
  }
}
