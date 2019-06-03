import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksService } from '../links.service';
import { Link } from '../link'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  
  links: Observable<Link[]>;
  
  constructor(private linksService: LinksService) {
    this.linksService.getLinks().subscribe((res : Observable<Link[]>)=>{
      this.links = res;
    });
  };
  
}