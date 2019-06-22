import { Component, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '../link';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface LinkID extends Link { id: string; }

@Component({
  selector: 'app-links-display',
  templateUrl: './links-display.component.html',
  styleUrls: ['./links-display.component.css']
})

export class LinksDisplayComponent {

  private linksCollection: AngularFirestoreCollection<Link>;
  links: Observable<LinkID[]>;
  modalRef: BsModalRef;

  openModal(linkedit: TemplateRef<any>) {
    this.modalRef = this.modalService.show(linkedit);
  }

  constructor(private readonly afs: AngularFirestore, private modalService: BsModalService) {

    this.linksCollection = afs.collection<Link>('links');

    this.links = this.linksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Link;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
