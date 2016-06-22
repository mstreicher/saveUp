import { Injectable } from '@angular/core';
import { PURCHASES } from './mock-purchases';


@Injectable()
export class PurchaseService {
    getPurchases() {
        return PURCHASES;
    }
}
