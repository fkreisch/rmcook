import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LinksService } from '../links.service';
import { Link } from '../link';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-links-admin',
  templateUrl: './links-admin.component.html',
  styleUrls: ['./links-admin.component.css']
})
export class LinksAdminComponent {

  links: Observable<Link[]>;

  constructor(private linksService: LinksService) {
    this.linksService.getLinks().subscribe((res: Observable<Link[]>) => {
      this.links = res;
    });
  }

}
