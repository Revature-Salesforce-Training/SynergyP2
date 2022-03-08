import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement, track, wire } from 'lwc';
import FilterByCardType from '@salesforce/apex/Filter.FilterByCardType';
import FilterByRarity from '@salesforce/apex/Filter.FilterByRarity';
import FilterBySet from '@salesforce/apex/Filter.FilterBySet';

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

    get TypeOptions() {
        
        return this.options1;
    }

    get RarityOptions() {
        return this.options2;

    }

    get SetOptions() {
        return this.options3;
    }

    handle(e){
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