import { Bar } from './bar';
import { Utilisation } from './utilisation';

export class Boisson {
  constructor(
    protected _type?: string,
    protected _id?: number,
    protected _bar?: Bar,
    protected _nom?: string,
    protected _prixHT?: number,
    protected _prixHThh?: number,
    protected _tva?: number,
    protected _utilisations?: Utilisation[],
    protected _description?: string,
    protected _urlImage?: string
  ) {}

  get utilisations(): Utilisation[] | undefined {
    return this._utilisations;
  }

  set utilisations(value: Utilisation[] | undefined) {
    this._utilisations = value;
  }

  get type(): string | undefined {
    return this._type;
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

  set type(value: string | undefined) {
    this._type = value;
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
  /**
   * Getter $description
   * @return {string}
   */
  public get description(): string | undefined {
    return this._description;
  }

  /**
   * Setter $description
   * @param {string} value
   */
  public set description(value: string | undefined) {
    this._description = value;
  }

  /**
   * Getter $urlImage
   * @return {string}
   */
  public get urlImage(): string | undefined {
    return this._urlImage;
  }

  /**
   * Setter $urlImage
   * @param {string} value
   */
  public set urlImage(value: string | undefined) {
    this._urlImage = value;
  }
}
