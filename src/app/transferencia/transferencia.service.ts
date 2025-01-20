import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AbstractService, listAll } from '../services/abstract.service';
import { map, Observable } from 'rxjs';
import { Transferencia } from './model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  constructor(private _http: HttpClient) { }
  private status: string;
  response = [];

  public create(transferencia: Transferencia) {
    this._http.post<Transferencia>(`${AbstractService.baseUrl}transferencia/create`, transferencia).pipe(map(result => {
    })).subscribe((d:any) => {
      this.response.push();
    });
  }

  public listall():  Observable<Transferencia[]>{
    return listAll(this._http, `${AbstractService.baseUrl}transferencia/getAll`);
  }

  public delete(id: number) {
    this._http.delete(`${AbstractService.baseUrl}transferencia/delete/${id}`).subscribe(() => this.status = 'Delete successful');
  }

}