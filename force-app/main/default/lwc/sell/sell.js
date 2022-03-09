/*************************************
 * Written by: Whitney Dwire
 * Description: This file handles the Sell page
 * when the user clicks submit
 * and shows the confirmation
 * or when he wants to sell more
 *
 ************************************/


import { LightningElement } from 'lwc';
import thumbsupGuy from '@salesforce/resourceUrl/thumbsupGuy';

export default class Sell extends LightningElement {

    thumbsup = thumbsupGuy; //databinding for image
    formVis = true;
    // this function handles switching between form and confirmation
    //when user clicks submit
    handleClick(e){
        if(e.target.name == "formSubmit"){
            this.formVis = false;
        }
        if(e.target.name == "sellAgain"){
            this.formVis = true;
        }
    }
}