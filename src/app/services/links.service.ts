import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Link } from '../link';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LinksService {

  linksCollection: AngularFirestoreCollection<Link>;
  links: Observable<Link[]>;
  linkDoc: AngularFirestoreDocument<Link>;

  constructor(public afs: AngularFirestore) {
    this.linksCollection = afs.collection<Link>('links', ref => ref.orderBy('name', 'asc'));
  }

  getLinks() {
    this.links = this.linksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        console.log ('BUILD - Links');
        return { ...data };
      }))
    );
    console.log ('GET - Links');
    return this.links;
  }

  addLink(link: Link) {
    this.linksCollection.add(link);
    console.log ('ADD - Links');
  }

  deleteLink(linkid: any) {
    this.linkDoc = this.afs.doc(`links/${linkid}`);
    this.linkDoc.delete();
    console.log ('DELETE - Links');
  }

  updateLink(linkid: any, link: Link) {
    this.linkDoc = this.afs.doc(`links/${linkid}`);
    this.linkDoc.update(link);
    console.log ('UPDATE - Links');
  }
}
