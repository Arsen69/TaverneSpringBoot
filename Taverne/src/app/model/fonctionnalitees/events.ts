import { Bar } from './../inventaire/bar';
import { Employe } from './../comptes/employe';

export class Events {
  constructor(
    private _id?: number,
    private _bar?: Bar,
    private _employe?: Employe,
    private _debut?: Date,
    private _fin?: Date,
    private _remarque?: string
  ) {}

  set id(value: number | undefined) {
    this._id = value;
  }

  set bar(value: Bar | undefined) {
    this._bar = value;
  }

  set employe(value: Employe | undefined) {
    this._employe = value;
  }

  set debut(value: Date | undefined) {
    this._debut = value;
  }

  set fin(value: Date | undefined) {
    this._fin = value;
  }

  set remarque(value: string | undefined) {
    this._remarque = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  get bar(): Bar | undefined {
    return this._bar;
  }

  get employe(): Employe | undefined {
    return this._employe;
  }

  get debut(): Date | undefined {
    return this._debut;
  }

  get fin(): Date | undefined {
    return this._fin;
  }

  get remarque(): string | undefined {
    return this._remarque;
  }
}
