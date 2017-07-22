import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { md5 } from 'md5/md5';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { privateKey, publicKey, endpoint } from '../../environments/environment.prod';

@Injectable()
export class CharactersService {
  private ts = new Date().getTime().toString();
  private hash = md5(this.ts + privateKey + publicKey); // a ordem importa
  private query: string;
  constructor(private http: Http) { }

  getLimit() {
    if (+this.ts.slice(this.ts.length - 4, this.ts.length - 2)) {
      return +this.ts.slice(this.ts.length - 4, this.ts.length - 2);
    } else {
      return 100;
    }
  }

  getOfset() {
    return +this.ts.slice(this.ts.length - 2, this.ts.length);
  }

  getFromMarvel(typeOfContent: string = '/characters', limit = this.getLimit(), offset = this.getOfset()): Observable<any> {
    this.query = `?limit=${limit}&offset=${offset}&apikey=${publicKey}&ts=${this.ts}&hash=${this.hash}`;
    const url = endpoint + typeOfContent + this.query;

    // console.log('ts');
    // console.log(this.ts);
    // console.log('offset');
    // console.log(offset);
    // console.log('limit');
    // console.log(limit);
    // console.log('url');
    // console.log(url);

    return (
      this
        .http
        .get(url)
        .map(response => response.json())
    );
  }
}
