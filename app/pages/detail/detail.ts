import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail/detail.html'
})

export class DetailPage {
  title: string;

  constructor(private _navController: NavController, private _navParams: NavParams) {
    this.title = _navParams.get('title');
  }
}

