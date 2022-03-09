/********************************
 * Written by: David Labib
 * Description: Simple JS to switch between
 * Shop and Sell pages
 */

import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    shop = true;
    sell = false;

    switchpage(e){
        this.shop = this.sell;
        this.sell = !this.shop;
    }
}