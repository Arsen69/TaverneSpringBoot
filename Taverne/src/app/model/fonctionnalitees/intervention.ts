import { Intervenant } from './../comptes/intervenant';
import { StatutIntervention } from './statutIntervention';

export class Intervention {
  constructor(
    private _debut?: Date,
    private _fin?: Date,
    private _type?: string,
    private _coutIntervenant?: number,
    private _prixClient?: number,
    private _statut?: StatutIntervention,
    private _intervenant?: Intervenant,
    private _bar?: Bar
  ) {}

  set debut(value: Date | undefined) {
    this._debut = value;
  }

  set fin(value: Date | undefined) {
    this._fin = value;
  }

  set type(value: string | undefined) {
    this._type = value;
  }

  set coutIntervenant(value: number | undefined) {
    this._coutIntervenant = value;
  }

  set prixClient(value: number | undefined) {
    this._prixClient = value;
  }

  set statut(value: StatutIntervention | undefined) {
    this._statut = value;
  }

  set intervenant(value: Intervenant | undefined) {
    this._intervenant = value;
  }

  set bar(value: Bar | undefined) {
    this._bar = value;
  }

  get debut(): Date | undefined {
    return this._debut;
  }

  get fin(): Date | undefined {
    return this._fin;
  }

  get type(): string | undefined {
    return this._type;
  }

  get coutIntervenant(): number | undefined {
    return this._coutIntervenant;
  }

  get prixClient(): number | undefined {
    return this.prixClient;
  }

  get statut(): StatutIntervention | undefined {
    return this._statut;
  }

  get intervenant(): Intervenant | undefined {
    return this._intervenant;
  }

  get bar(): Bar | undefined {
    return this._bar;
  }
}
