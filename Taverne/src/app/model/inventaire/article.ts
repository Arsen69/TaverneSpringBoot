import { TypeArticle } from './type-article';
import { Fournisseur } from '../comptes/fournisseur';

export class Article {
  constructor(
    private _id?: number,
    private _nom?: string,
    private _cout?: number,
    private _typeProduit?: TypeArticle,
    private _volume?: number,
    private _fournisseur?: Fournisseur,
    private _version?: number
  ) {}

  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  public get nom(): string | undefined {
    return this._nom;
  }

  public set nom(value: string | undefined) {
    this._nom = value;
  }

  public get cout(): number | undefined {
    return this._cout;
  }

  public set cout(value: number | undefined) {
    this._cout = value;
  }

  public get typerproduit(): TypeArticle | undefined {
    return this._typeProduit;
  }

  public set typerproduit(value: TypeArticle | undefined) {
    this._typeProduit = value;
  }

  public get volume(): number | undefined {
    return this._volume;
  }

  public set volume(value: number | undefined) {
    this._volume = value;
  }

  public get fournisseur(): Fournisseur | undefined {
    return this._fournisseur;
  }

  public set fournisseur(value: Fournisseur | undefined) {
    this._fournisseur = value;
  }

  public get version(): number | undefined {
    return this._version;
  }

  public set version(value: number | undefined) {
    this._version = value;
  }
}
