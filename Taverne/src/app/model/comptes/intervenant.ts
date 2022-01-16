import { Compte } from './compte';

export class Intervenant extends Compte {
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
    private _artiste?: string,
    private _interventions?: Array<Intervention>
  ) {
    super(_id, _nom, _prenom, _login, _password, _email, _version, _enabled);
  }

  set entreprise(value: string | undefined) {
    this._entreprise = value;
  }

  set artiste(value: string | undefined) {
    this._artiste = value;
  }

  set interrventions(value: Array<Intervention> | undefined) {
    this._interventions = value;
  }

  get entreprise(): string | undefined {
    return this._entreprise;
  }

  get artiste(): string | undefined {
    return this._artiste;
  }

  get interrventions(): Array<Intervention> | undefined {
    return this._interventions;
  }
}
