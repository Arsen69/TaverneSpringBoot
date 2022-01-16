import { Article } from './article';
import { Bar } from './bar';

export class Stock {
  constructor(
    private _idStock?: number,
    private _volumTot?: number,
    private _seuilLimite?: number,
    private _articles?: Article,
    private _bar?: Bar,
    private _version?: number
  ) {}

  public get idStock(): number | undefined {
    return this._idStock;
  }

  public set idStock(value: number | undefined) {
    this._idStock = value;
  }

  public get volumTot(): number | undefined {
    return this._volumTot;
  }

  public set volumTot(value: number | undefined) {
    this._volumTot = value;
  }
  public get seuilLimite(): number | undefined {
    return this._seuilLimite;
  }

  public set seuilLimite(value: number | undefined) {
    this._seuilLimite = value;
  }

  public get aticles(): Article | undefined {
    return this._articles;
  }

  public set aticles(value: Article | undefined) {
    this._articles = value;
  }

  public get bar(): Bar | undefined {
    return this._bar;
  }

  public set bar(value: Bar | undefined) {
    this._bar = value;
  }

  public get version(): number | undefined {
    return this._version;
  }

  public set version(value: number | undefined) {
    this._version = value;
  }
}
