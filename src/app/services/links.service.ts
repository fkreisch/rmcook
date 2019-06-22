import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Link } from '../link';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LinkID extends Link { id: string; }

@Injectable({
  providedIn: 'root'
})

export class LinksService {

  linksCollection: AngularFirestoreCollection<Link>;
  links: Observable<LinkID[]>;

  constructor(public afs: AngularFirestore) {

    this.linksCollection = afs.collection<Link>('links');

    this.links = this.linksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Link;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getLinks() {
    return this.links;
  }

  addLink(link: Link) {
    this.linksCollection.add(link);
  }
}
