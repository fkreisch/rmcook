import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksService } from '../links.service';
import { Link } from '../link'

@Component({
  selector: 'app-links-display',
  templateUrl: './links-display.component.html',
  styleUrls: ['./links-display.component.css']
})

export class LinksDisplayComponent {
  
  links: Observable<Link[]>;
  
  constructor(private linksService: LinksService) {
    this.linksService.getLinks().subscribe((res : Observable<Link[]>)=>{
      this.links = res;
      console.log (res)
    });
  };
  
}