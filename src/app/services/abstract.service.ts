import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractModel } from './models/abstract.models';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AbstractService<T extends AbstractModel<ID>, ID> {

  public static baseUrl: string = environment.baseUrl;

  constructor(
    protected http: HttpClient,
  ) { }

  listAll(): Observable<T[]> {
    return listAll(this.http, AbstractService.baseUrl + "");
  }

  listBy(httpParams: HttpParams): Observable<T[]> {
    return listBy(this.http, AbstractService.baseUrl + "", httpParams);
  }

  listByEndPoint(endpoint: string, httpParams: HttpParams): Observable<T[]> {
    return listBy(this.http, AbstractService.baseUrl + endpoint, httpParams);
  }
}

export const listAll = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string): Observable<T[]> => {
  return http.get<T[]>(endpoint);
};

export const listBy = <T extends AbstractModel<ID>, ID>(http: HttpClient, endpoint: string, httpParams?: HttpParams): Observable<T[]> => {
  return http
    .get<T[]>(endpoint, {
      params: httpParams
    })
    .pipe();
};
