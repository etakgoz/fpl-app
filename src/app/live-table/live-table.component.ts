import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.css']
})


export class LiveTableComponent implements OnInit {

  items: Object[];

  constructor(private _ngZone: NgZone, af: AngularFire) {
    af.database.list('/league/110296/players').subscribe(items => {
      this._ngZone.run(() => {
        this.items = items;
      })
    });
  }

  ngOnInit() {
  }

}
