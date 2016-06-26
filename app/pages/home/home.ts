import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {PurchaseService} from '../../services/purchase.service';
import {OnInit} from '@angular/core';


@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [PurchaseService] // teach injector how to make a PurchaseService
})

export class HomePage implements OnInit {
  sliderLevel: number;
  purchases:any;
  
  constructor(private _navController: NavController, private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.getPurchases();
  }
  
  getPurchases() {
    this.purchaseService.getPurchases().then(
        result => this.purchases = result // function (result) {this.purchases = result}
    );
  }



  pushPage(title: string) {
    this._navController.push(DetailPage, { title: title });
  }
}
