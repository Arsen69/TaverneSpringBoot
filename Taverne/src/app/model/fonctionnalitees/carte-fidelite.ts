import { Client } from './../comptes/client';

export class CarteFidelite {
  constructor(
    private _id?: number,
    private _client?: Client,
    private _points?: number
  ) {}

  set id(value: number | undefined) {
    this._id = value;
  }

  set client(value: Client | undefined) {
    this._client = value;
  }

  set points(value: number | undefined) {
    this._points = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  get client(): Client | undefined {
    return this._client;
  }

  get points(): number | undefined {
    return this._points;
  }

}
