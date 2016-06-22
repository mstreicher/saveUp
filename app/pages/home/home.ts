import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {PurchaseService} from '../../services/purchase.service';
import {Purchase} from '../../services/purchase';

@Component({
  templateUrl: 'build/pages/home/home.html',

  providers: [PurchaseService]
})

export class HomePage {

  constructor(private _navController: NavController, private purchaseService: PurchaseService) {
  }

  sliderLevel: number;
  purchases:any;

  //ToDo: Implement Purchase Model in Template and Compontent and Detail Page

  getPurchases() {
    this.purchases = this.purchaseService.getPurchases();
  }


  pushPage(title: string) {
    this._navController.push(DetailPage, { title: title });
  }
}
