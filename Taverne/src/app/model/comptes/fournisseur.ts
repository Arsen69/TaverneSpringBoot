import { Compte } from './compte';

export class Fournisseur extends Compte {
  constructor(
    _id?: number,
    _nom?: string,
    _prenom?: string,
    _login?: string,
    _password?: string,
    _email?: string,
    _version?: number,
    _enabled?: boolean,
    private _entreprise?: string,
    private _catalogue?: Set<Article>
  ) {
    super(_id, _nom, _prenom, _login, _password, _email, _version, _enabled);
  }

  set entreprise(value: string | undefined) {
    this._entreprise = value;
  }

  set catalogue(value: Set<Article> | undefined) {
    this._catalogue = value;
  }

  get entreprise(): string | undefined {
    return this._entreprise;
  }

  get catalogue(): Set<Article> | undefined {
    return this._catalogue;
  }
}
