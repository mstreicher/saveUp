import { Injectable } from '@angular/core';
import { PURCHASES } from './mock-purchases';


@Injectable()
export class PurchaseService {
    getPurchases() {
        return Promise.resolve(PURCHASES);
    }

    getOnePurchase(name:string) {

        for (var item of PURCHASES) {
            if (name === item.name) {
                return Promise.resolve(item);
            }
        }


    }
}
