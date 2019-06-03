import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class LinksService {

  constructor(private httpClient : HttpClient) {}

  getLinks(){
      return this.httpClient.get(environment.firebase.databaseURL + '/links.json');
  }
}