import {LightningElement, track, wire} from 'lwc';
import YUGIOH_LOGO from '@salesforce/resourceUrl/michaelYugioh';
import getAllCardsForSearchBar from '@salesforce/apex/getAllCardsForSearchBar.getAllCardsForSearchBar';


export default class nave extends LightningElement{
    //Initialize mock list of Queries
    countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia"];
    @track cards;
    @wire(getAllCardsForSearchBar) 
    AllCards({error, data}){
        if(data){
            this.cards = data;
            this.error = undefined;
        } else if(error){
            this.error = error;
            this.cards = undefined;
        }
    };

    //Initialize variables
    searchWrapper = this.template.querySelector(".autocomplete");
    searchWrapper1 = this.template.querySelector(".autocom-box");
    inputBox = this.searchWrapper;
    @track suggestionBox = [];
    @track suggestionBoxDummy = [];
    num = 1;
    Id;
    logo = YUGIOH_LOGO;
    
    //handKeyPress related to searchBar
    handleKeyPress(event){
        // console.log(event.target.value);

        let userData = event.target.value;
        let emptyArray = [];

        //If data exists, filters the selected array for names
        if(userData){
            emptyArray = this.cards.filter((data)=>{
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
            emptyArray = emptyArray.map((data)=>{
                this.num++;
                let filler1 = {Id: this.num, Name: data};
                this.suggestionBoxDummy.push(filler1);
                

                let filler = '<li>' + data + '</li>';
                data = filler;
                return data;
            });
            //sets CSS active for opacity
            this.template.querySelector('[data-id="divblock"]').className='autocom-box active';
            this.suggestionBox = this.suggestionBoxDummy; 
            this.suggestionBoxDummy = [];
        }else{
            //removes css active
            this.template.querySelector('[data-id="divblock"]').className='autocom-box';
        }
        

        // this.suggestionBox = emptyArray;

    }

    showSuggestions(list){
        let ListData;
        // eslint-disable-next-line no-empty
        if(!list.length){

        }else{
            ListData = list.join('');
        }
        console.log(ListData);
        // this.suggestionBox.appendChild(ListData);
        this.suggestionBox = this.template.querySelector('.autocom-box');
        // eslint-disable-next-line @lwc/lwc/no-inner-html
        // suggestionBox.innerHTML = ListData;
    }
    


    handleClick(e){
        this.dispatchEvent(new CustomEvent('menuchange', {detail : e.target.title}));
        console.log(e.target.title);
    }

    testClick(){
        console.log(this.cards);
    }
}