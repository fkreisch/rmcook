import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksService } from '../links.service';
import { Link } from '../link'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})

export class SettingsComponent {
  
  links: Link[];
  
  constructor(private linksService: LinksService) {
    this.linksService.get_links().subscribe((res : any[])=>{
      this.links = res;
    });
  };
  
}