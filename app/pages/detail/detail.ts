import {Component} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {PurchaseService} from '../../services/purchase.service';
import {OnInit} from '@angular/core';
import {Purchase} from '../../services/purchase';
import {HomePage} from "../home/home";


@Component({
  templateUrl: 'build/pages/detail/detail.html',
  providers: [PurchaseService] // teach injector how to make a PurchaseService
})

export class DetailPage implements OnInit {
  title: string;
  purchase = new Purchase();

  constructor(private _navController: NavController, private _navParams: NavParams, private purchaseService: PurchaseService) {
    this.title = _navParams.get('title');
    this._navController = _navController;
  }

  ngOnInit() {
    this.getOnePurchase();
  }

  getOnePurchase() {
    this.purchaseService.getOnePurchase(this.title )
        .then(result => this.purchase = result
        )
        .then(result => console.log(result)
        )
  }

  pushPage(title: string) {
    // this._navController.popToRoot();
    this._navController.pop();
  }

}

