import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-live-table',
  templateUrl: './live-table.component.html',
  styleUrls: ['./live-table.component.css']
})


export class LiveTableComponent implements OnInit {

  players: Object[];
  currentGameweek: Number;
  playersMap: Object;
  results: Array<Object>[];

  constructor(private _ngZone: NgZone, af: AngularFire) {
    af.database.list('/league/110296/players').subscribe(players => {
      let map = {};
      this.players = players;

      players.forEach(player => {
        map[player.id] = {
          "name": player.name,
          "team": player.team
        };
      });

      af.database.list('/league/110296/gameweeks').subscribe(gameweeks => {
        this._ngZone.run(() => {
          console.log(gameweeks);
          this.currentGameweek = gameweeks[0]["$value"];

          this.results = gameweeks[1];

          const sortGameweek = (a, b) => b.totalPoints - a.totalPoints;

          // compute total points
          this.results.reduce((previous, current, currentIndex) => {
            if (previous === null) {
              current.forEach(gameweekResult => {
                gameweekResult["totalPoints"] = gameweekResult["points"];
              });
            } else {
              current.forEach((gameweekResult, index) => {
                gameweekResult["totalPoints"] = gameweekResult["points"] + previous[index]["totalPoints"] - gameweekResult["transferCost"];
              });
            }

            return current;

          }, null);

          this.results.forEach(gameweekResults => gameweekResults.sort(sortGameweek));

        })
      });

      this.playersMap = map;

    });




  }

  ngOnInit() {
  }

}
