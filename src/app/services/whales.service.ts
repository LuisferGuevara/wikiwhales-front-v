import { IWhale } from './../models/model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhalesService {
  constructor(private http: HttpClient) {}

  public getAllWhales(): Observable<any> {
    return this.http.get('https://wikiwhales-back.vercel.app/whales');
  }

  public getOneWhale(id: string): Observable<any> {
    return this.http.get(`https://wikiwhales-back.vercel.app/whales/${id}`);
  }
  public postWhale(newWhale: any) {
    return this.http.post(
      'https://wikiwhales-back.vercel.app/whales/create',
      newWhale
    );
  }
  public deleteWhale(id: string) {
    return this.http.delete(
      `https://wikiwhales-back.vercel.app/whales/delete/${id}`
    );
  }

  public putWhale(id: string, updatedWhale: any) {
    return this.http.put(
      'https://wikiwhales-back.vercel.app/whales/edit/' + id,
      updatedWhale
    );
  }
}
