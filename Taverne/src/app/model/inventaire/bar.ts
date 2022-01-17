import { Intervention } from './../fonctionnalitees/intervention';
import { Events } from './../fonctionnalitees/events';
import { Employe } from './../comptes/employe';
import { Stock } from './stock';
export class Bar {
  constructor(
    private _idBar?: number,
    private _nom?: string,
    private _stocks?: Stock,
    private _events?: Events,
    private _employes?: Employe,
    private _interventions?: Intervention
  ) {}

  public get idBar(): number | undefined {
    return this._idBar;
  }

  public set idBar(value: number | undefined) {
    this._idBar = value;
  }

  public get nom(): string | undefined {
    return this._nom;
  }

  public set nom(value: string | undefined) {
    this._nom = value;
  }

  public get stocks(): Stock | undefined {
    return this._stocks;
  }

  public set stocks(value: Stock | undefined) {
    this._stocks = value;
  }

  public get events(): Events | undefined {
    return this._events;
  }

  public set events(value: Events | undefined) {
    this._events = value;
  }

  public get employes(): Employe | undefined {
    return this._employes;
  }

  public set employes(value: Employe | undefined) {
    this._employes = value;
  }

  public get interventions(): Intervention | undefined {
    return this._interventions;
  }

  public set interventions(value: Intervention | undefined) {
    this._interventions = value;
  }
}
