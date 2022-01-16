import { Compte } from './compte';

export class Admin extends Compte {
  constructor(
    _id?: number,
    _nom?: string,
    _prenom?: string,
    _login?: string,
    _password?: string,
    _email?: string,
    _version?: number,
    _enabled?: boolean
  ) {
    super(_id, _nom, _prenom, _login, _password, _email, _version, _enabled);
  }
}
