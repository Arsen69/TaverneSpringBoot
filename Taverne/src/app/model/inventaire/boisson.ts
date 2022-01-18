export class Boisson {
  constructor(
    protected _id?: number,
    protected _idBar?: number,
    protected _nom?: string,
    protected _prixHT?: number,
    protected _prixHThh?: number,
    protected _tva?: number
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get id_Bar(): number | undefined {
    return this._id;
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

  set idBar(value: number | undefined) {
    this._idBar = value;
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
