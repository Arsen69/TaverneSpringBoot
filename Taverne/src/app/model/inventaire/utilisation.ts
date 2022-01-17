import { Boisson } from './boisson';
import { Stock } from './stock';
export class Utilisation {
  constructor(
    private _id?: number,
    private _volume?: number,
    private _ingerdient?: Stock,
    private _boisson?: Boisson
  ) {}
  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }
  public get volume(): number | undefined {
    return this._volume;
  }

  public set volume(value: number | undefined) {
    this._volume = value;
  }
  public get ingerdient(): Stock | undefined {
    return this._ingerdient;
  }

  public set ingerdient(value: Stock | undefined) {
    this._ingerdient = value;
  }
  public get boisson(): Boisson | undefined {
    return this._boisson;
  }

  public set boisson(value: Boisson | undefined) {
    this._boisson = value;
  }
}
