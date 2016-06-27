import {Component, Input} from "@angular/core";
import {NavController, NavParams} from 'ionic-angular';
import {PurchaseService} from '../../services/purchase.service';
import {OnInit} from '@angular/core';
import {Purchase} from '../../services/purchase';
import {HomePage} from "../home/home";


@Component({
  templateUrl: 'build/pages/detail/detail.html',
  providers: [PurchaseService] // teach injector how to make a PurchaseService
})

export class DetailPage implements OnInit{

  name: String;
  purchase = new Purchase();

  constructor(
    private _navController: NavController, 
    private _navParams: NavParams, 
    private purchaseService: PurchaseService) {

      this._navController = _navController;
      this.name = _navParams.get('name');
  }

  ngOnInit() {
    this.getOnePurchase();
  }
  
  getOnePurchase() {
    this.purchaseService.getOnePurchase(name)
        .then(result => this.purchase = result
        )
        .then(result => console.log(result)
        )
  }


  pushPage(name: string) {
    this._navController.pop();
  }
}