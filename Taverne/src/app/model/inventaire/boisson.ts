import { Bar } from './bar';
import { Utilisation } from './utilisation';

export class Boisson {
  constructor(
    protected _id?: number,
    protected _bar?: Bar,
    protected _nom?: string,
    protected _prixHT?: number,
    protected _prixHThh?: number,
    protected _tva?: number,
    protected _utilisations?: Utilisation[]
  ) {}

  get utilisations(): Utilisation[] | undefined {
    return this._utilisations;
  }

  set utilisations(value: Utilisation[] | undefined) {
    this._utilisations = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  get bar(): Bar | undefined {
    return this._bar;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  get prixHT(): number | undefined {
    return this._prixHT;
  }

  get prixHThh(): number | undefined {
    return this._prixHThh;
  }

  get tva(): number | undefined {
    return this._tva;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  set bar(value: Bar | undefined) {
    this._bar = value;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  set prixHT(value: number | undefined) {
    this._prixHT = value;
  }

  set prixHThh(value: number | undefined) {
    this._prixHThh = value;
  }

  set tva(value: number | undefined) {
    this._tva = value;
  }
}
