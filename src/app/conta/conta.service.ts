import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AbstractService, listAll } from '../services/abstract.service';
import { map, Observable } from 'rxjs';
import { Conta } from './model/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private _http: HttpClient) { }

  private status: string;
  response = [];

  public create(conta: Conta) {
    this._http.post<Conta>(`${AbstractService.baseUrl}conta/create`, conta).pipe(map(result => {
      console.log(result);
    })).subscribe((d:any) => {
      this.response.push();
    });
  }

  public listall():  Observable<Conta[]>{
    return listAll(this._http, `${AbstractService.baseUrl}conta/getAll`);
  }

  public listallByName(name: string):  Observable<Conta[]>{
    return listAll(this._http, `${AbstractService.baseUrl}conta/getContasByName/${name}`);
  }

  public delete(id: number) {
    this._http.delete(`${AbstractService.baseUrl}Conta/delete/${id}`).subscribe(() => this.status = 'Delete successful');
  }

}