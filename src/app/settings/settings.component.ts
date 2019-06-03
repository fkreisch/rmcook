import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  
  readonly ROOT_URL = 'https://rmcook-b0a1e.firebaseio.com';

  posts: any;
  
  constructor(private http: HttpClient) {};
  
  getPosts() {

    this.posts = this.http.get(this.ROOT_URL + '/links.json');
    console.log (this.posts);

  };
}