import { LightningElement } from 'lwc';
import thumbsupGuy from '@salesforce/resourceUrl/thumbsupGuy';

export default class Sell extends LightningElement {

    thumbsup = thumbsupGuy;
    formVis = true;

    handleClick(e){
        if(e.target.name == "formSubmit"){
            this.formVis = false;
        }
        if(e.target.name == "sellAgain"){
            this.formVis = true;
        }
    }
}