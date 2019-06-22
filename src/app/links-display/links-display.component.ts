import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl } from '@angular/forms';
import { LinksService } from '../services/links.service';

@Component({
  selector: 'app-links-display',
  templateUrl: './links-display.component.html',
  styleUrls: ['./links-display.component.css']
})

export class LinksDisplayComponent implements OnInit {

  modalRef: BsModalRef;

  linkForm = new FormGroup({
    elink: new FormControl(),
    name: new FormControl(),
    picture: new FormControl(),
  });

  constructor(private linksService: LinksService, private modalService: BsModalService) { }

  openModal(linkedit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(linkedit);
  }

  ngOnInit() {
    this.linksService.getLinks().subscribe(links => {
      this.links = links;
    });
  }

  onSubmit(): void {

  }

  makePost(linkedit: TemplateRef<any>): void {
    this.linksService.addLink(this.linkForm.value);
    this.modalRef.hide();
  }
}
