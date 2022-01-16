import { Achat } from './../fonctionnalitees/achat';
import { CarteFidelite } from './../fonctionnalitees/carte-fidelite';
import { Compte } from './compte';

export class Client extends Compte {
  constructor(
    _id?: number,
    _nom?: string,
    _prenom?: string,
    _login?: string,
    _password?: string,
    _email?: string,
    _version?: number,
    _enabled?: boolean,
    private _carteFidelite?: CarteFidelite,
    private _achats?: Array<Achat>
  ) {
    super(_id, _nom, _prenom, _login, _password, _email, _version, _enabled);
  }

  get carteFidelite(): CarteFidelite | undefined {
    return this._carteFidelite;
  }

  get achat(): Array<Achat> | undefined {
    return this._achats;
  }

  set carteFidelite(value: CarteFidelite | undefined) {
    this._carteFidelite = value;
  }

  set achat(value: Array<Achat> | undefined) {
    this._achats = value;
  }
}
