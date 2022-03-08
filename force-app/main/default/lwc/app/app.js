import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    shop = true;
    sell = false;

    switchpage(e){
        console.log('yoooo');
        this.shop = this.sell;
        this.sell = !this.shop;
    }
}