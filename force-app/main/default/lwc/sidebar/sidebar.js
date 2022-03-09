/********************************
 * Writer: David Labib
 * Description: This script calls the 
 * apex methods to retivie the options for the filtering
 * when a user clicks on a filter, the other 
 * apex methods will be called to retivie the results
 *******************************/


import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement, track, wire } from 'lwc';
//the apex classes for actual filtering
import FilterByCardType from '@salesforce/apex/Filter.FilterByCardType';
import FilterByRarity from '@salesforce/apex/Filter.FilterByRarity';
import FilterBySet from '@salesforce/apex/Filter.FilterBySet';
//the apex classes to get the options for filtering
import getCardTypes from '@salesforce/apex/GetPicklistValues.getCardTypes';
import getRarity from '@salesforce/apex/GetPicklistValues.getRarity';
import getSets from '@salesforce/apex/GetPicklistValues.getSets';

import EvenlyMatched from '@salesforce/resourceUrl/EvenlyMatched';
import CardImages from '@salesforce/resourceUrl/CardImages';

export default class App extends LightningElement {
    error;
    options1;  
    options2;
    options3;

    Evenly = EvenlyMatched;
    ZoodiacDrident = CardImages + '/images/ZoodiacDrident.webp';
    
    //wire methods to get the options for filtering
    //as soon as the component is called
    @wire(getCardTypes) 
    CardTypes({error, data}){
        if(data){
            this.options1 = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.options1 = undefined;
        }
    };

    @wire(getRarity) 
    Raritys({error, data}){
        if(data){
            this.options2 = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.options2 = undefined;
        }

    }

    @wire(getSets) 
    Sets({error, data}){
        if(data){
            this.options3 = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.options3 = undefined;
        }
    };
    
    @track cards;
    @track error;
    value = '';
    //pass through the array of options to the radio in markup
    get TypeOptions() {
        
        return this.options1;
    }

    get RarityOptions() {
        return this.options2;

    }

    get SetOptions() {
        return this.options3;
    }
    //this function fires when the user clicks on a radio options
    handle(e){
        //check the name of the radio that triggered the event, to call the correct apex method for filtering
        if(e.target.name == 'CardType'){
            console.log(e.target.value);
            FilterByCardType({CardType: e.target.value})
            .then(result => {
                this.cards = result;
                console.log(this.cards);
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            });
        }

        if(e.target.name == 'Rarity'){
            console.log(e.target.value);
            FilterByRarity({Rarity: e.target.value})
            .then(result => {
                this.cards = result;
                console.log(this.cards);
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            });
        }

        if(e.target.name == 'Set'){
            console.log(e.target.value);
            FilterBySet({SetName: e.target.value})
            .then(result => {
                this.cards = result;
                console.log(this.cards);
            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            });
        }

    }
    renderedCallback(){
        /*
        if(this.cards.length == 0){
            this.cards=undefined;
        }
        */
    }
}