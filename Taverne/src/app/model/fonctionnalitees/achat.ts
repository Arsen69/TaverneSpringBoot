import { Boisson } from './../inventaire/boisson';

import { Client } from './../comptes/client';

export class Achat {
  constructor(
    protected _id?: number,
    protected _dateAchat?: Date,
    protected _boisson?: Boisson,
    protected _client?: Client
  ) {}

  set id(value: number | undefined) {
    this._id = value;
  }

  set date(value: Date | undefined) {
    this._dateAchat = value;
  }

  set boisson(value: Boisson | undefined) {
    this._boisson = value;
  }

  set client(value: Client | undefined) {
    this._client = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  get date(): Date | undefined {
    return this._dateAchat;
  }

  get boisson(): Boisson | undefined {
    return this._boisson;
  }

  get client(): Client | undefined {
    return this._client;
  }
}
