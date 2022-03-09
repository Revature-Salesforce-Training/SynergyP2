import { LightningElement, wire, track } from 'lwc';

import grabAllCardFieldsX from '@salesforce/apex/GrabAllCardFieldsX.grabAllCardFieldsX';
import ThatGrassLooksGreener from '@salesforce/resourceUrl/ThatGrassLooksGreener';
import EvenlyMatched from '@salesforce/resourceUrl/EvenlyMatched';
import ZoodiacDrident from '@salesforce/resourceUrl/ZoodiacDrident';
import ZoodiacRatpier from '@salesforce/resourceUrl/ZoodiacRatpier';
import Electrumite from '@salesforce/resourceUrl/Electrumite';
import CalledByTheGrave from '@salesforce/resourceUrl/CalledByTheGrave';
import RescueCat from '@salesforce/resourceUrl/RescueCat';
import SkyStrikerEngage from '@salesforce/resourceUrl/SkyStrikerEngage';
import BlackRoseDragon from '@salesforce/resourceUrl/BlackRoseDragon';
import TrapTrick from '@salesforce/resourceUrl/TrapTrick';

export default class Cardgridx extends LightningElement {

    ThatGrassLooksGreener = ThatGrassLooksGreener;
    EvenlyMatched = EvenlyMatched;
    ZoodiacDrident = ZoodiacDrident;
    ZoodiacRatpier = ZoodiacRatpier;
    Electrumite = Electrumite;
    CalledByTheGrave = CalledByTheGrave;
    RescueCat = RescueCat;
    SkyStrikerEngage = SkyStrikerEngage;
    BlackRoseDragon = BlackRoseDragon;
    TrapTrick = TrapTrick;

   
   



    @track
    mock_card_database={
        RescueCat: {
                id: 1,
                name: "Rescue Cat",
                price: "2.99",
                image: "rescue_cat.jpg",
                rarity: "Premium Gold",
                type: "Main Deck Monster",
                set: "Maximum Gold",
                instock:"25"
        },
        BlackRoseDragon:{
                id: 2,
                name: "Black Rose Dragon",
                price: "5.00",
                image: "black_rose_dragon.jpg",
                rarity: "Premium Gold",
                type: "Extra Deck Monster",
                set: "Maximum Gold",
                instock:"33"
        },
        SkyStrikerEngage:{
                id: 3,
                name: "Sky Striker Mobilize",
                price: "7.25",
                image: "sky_striker_mobilize.jpg",
                rarity: "Ultra",
                type: "Spell",
                set: "2019 Gold Sarcophagus Tin Mega Pack",
                instock:"45"
        },
        TrapTrick:{
                id: 4,
                name: "Trap Trick",
                price: "3.50",
                image: "trap_trick.jpg",
                rarity: "Ultra",
                type: "Trap",
                set: "2019 Gold Sarcophagus Tin Mega Pack",
                instock:"77"
        },
        ThatGrassLooksGreener:{
                id: 5,
                name: "That Grass Looks Greener",
                price: "5.20",
                image: "that_grass_looks_greener.jpg",
                rarity: "Secret",
                type: "Spell",
                set: "Rage Tempest",
                instock:"67"
        },
         ZoodiacDrident:{
                id: 6,
                name: "Zoodiac Drident",
                price: "5.50",
                image: "zoodiac_drident.jpg",
                rarity: "Secret",
                type: "Extra Deck Monster",
                set: "Rage Tempest",
                instock:"28"
        },
         ZoodiacRatpier:{
                id: 7,
                name: "Zoodiac Ratpier",
                price: "3.80",
                image: "zoodiac_ratpier.jpg",
                rarity: "Super",
                type: "Main Deck Monster",
                set: "Extreme Force",
                instock:"40"
        },
         HeavyMetal:{
                id: 8,
                name: "Heavymetal Foes Electrumite",
                price: "2.40",
                image: "heavymetalfoes_electrumite.jpg",
                rarity: "Secret",
                type: "Extra Deck Monster",
                set: "Extreme Force",
                instock:"55"
        },
         EvenlyMatched:{
                id: 9,
                name: "Evenly Matched",
                price: "12.00",
                image: "evenly_matched.jpg",
                rarity: "Secret",
                type: "Trap",
                set: "Circuit Break",
                instock:"85"
        },
      CallByTheGrave:{
                id: 10,
                name: "Called By The Grave",
                price: "6.70",
                image: "called_by_the_grave.jpg",
                rarity: "Super",
                type: "Spell",
                set: "Extreme Force",
                instock:"35"
        }
    
    };

    @track 
  cart_object = {
        item_total: 0,
        cart_items: [],
        cart_total: 0,
        cart_quantity: 0,
        cart_quantity_total: 0,
    };

    @wire(grabAllCardFieldsX) cards;
        printCards() {
        console.log('hello');
        console.log(cards);
        }

    
    
     

     validateQty(qty){
            if (qty < 1 || isNaN(qty)) {
                
                return false;
            } 
            else if(qty > 25){
                return "Limit 25 cards per customer";
            }
            else {
                return true;
            }

        }
    

    handleAddToCart(e){
        // console.dir(e.target.value);
        e.preventDefault();
     
        let emptyCartButton = this.template.querySelector(".empty-btn");
        let cartTotalDiv = this.template.querySelector(".cart-total");
        let miniCardList = this.template.querySelectorAll(".mini-card-cont");
        console.log(cartTotalDiv);
        console.log(cartTotalDiv.innerHTML);
        let cart_object = this.cart_object;
        let chosenInput = e.currentTarget.dataset.addtocart;
        console.log(chosenInput);

        let blackRoseDragonQty = parseInt(this.template.querySelector(".Qty-black-rose").value);
        let blackRoseDragonPrice = parseInt(this.template.querySelector(".black-rose-price").textContent);
        let blackRoseQuantityWarning = this.template.querySelector(".black-rose.qty-warning-text");
        let blackRoseDragonMiniImg = this.template.querySelector(".br-mini");
        let blackRoseDragonOverlay = blackRoseDragonMiniImg.querySelector(".overlay");
        let blackRoseDragonOverlayQtyContainer = blackRoseDragonOverlay.querySelector(".cart-quantity-container");
        let blackRoseDragonOverlayQty = blackRoseDragonOverlayQtyContainer.querySelector(".cart-quantity");
        

        let rescueCatQty = parseInt(this.template.querySelector(".Qty-rescuecat").value);
        console.log(rescueCatQty);
        let rescueCatPrice = parseInt(this.template.querySelector(".rescuecat-price").innerHTML);
        let rescueCatQuantityWarning = this.template.querySelector(".rescuecat.qty-warning-text");
        let rescueCatMiniImg = this.template.querySelector(".rc-mini");
        let rescueCatOverlay = rescueCatMiniImg.querySelector(".overlay");
        let rescueCatOverlayQtyContainer = rescueCatOverlay.querySelector(".cart-quantity-container");
        let rescueCatOverlayQty = rescueCatOverlayQtyContainer.querySelector(".cart-quantity");

        let skyStrikerMobilizeQty = parseInt(this.template.querySelector(".Qty-skystriker").value);
        let skyStrikerMobilizePrice = parseInt(this.template.querySelector(".skystriker-price").innerHTML);
        let skyStrikerQuantityWarning = this.template.querySelector(".skystriker.qty-warning-text");
        let skyStrikerMobilizeMiniImg = this.template.querySelector(".ss-mini");
        let skyStrikerMobilizeOverlay = skyStrikerMobilizeMiniImg.querySelector(".overlay");
        let skyStrikerMobilizeOverlayQtyContainer = skyStrikerMobilizeOverlay.querySelector(".cart-quantity-container");
        let skyStrikerMobilizeOverlayQty = skyStrikerMobilizeOverlayQtyContainer.querySelector(".cart-quantity");
        
        let trapTrickQty = parseInt(this.template.querySelector(".Qty-traptrick").value);
        let trapTrickPrice = parseInt(this.template.querySelector(".traptrick-price").innerHTML);
        let trapTrickQuantityWarning = this.template.querySelector(".traptrick.qty-warning-text");
        let trapTrickMiniImg = this.template.querySelector(".tt-mini");
        let trapTrickOverlay = trapTrickMiniImg.querySelector(".overlay");
        let trapTrickOverlayQtyContainer = trapTrickOverlay.querySelector(".cart-quantity-container");
        let trapTrickOverlayQty = trapTrickOverlayQtyContainer.querySelector(".cart-quantity");
        
        let grassLooksGreenerQty = parseInt(this.template.querySelector(".Qty-grass-greener").value);
        let grassLooksGreenerPrice = parseInt(this.template.querySelector(".grass-greener-stock").innerHTML);
        let grassLooksGreenerQuantityWarning = this.template.querySelector(".grass-greener.qty-warning-text");
        let grassLooksGreenerMiniImg = this.template.querySelector(".gg-mini");
        let grassLooksGreenerOverlay = grassLooksGreenerMiniImg.querySelector(".overlay");
        let grassLooksGreenerOverlayQtyContainer = grassLooksGreenerOverlay.querySelector(".cart-quantity-container");
        let grassLooksGreenerOverlayQty = grassLooksGreenerOverlayQtyContainer.querySelector(".cart-quantity");
        
        let zoodiacDridentQty = parseInt(this.template.querySelector(".Qty-zoodiac-dri").value);
        let zoodiacDridentPrice = parseInt(this.template.querySelector(".zoodiac-dri-price").innerHTML);
        let zoodiacDridentQuantityWarning = this.template.querySelector(".zoodiac-dri.qty-warning-text");
        let zoodiacDridentMiniImg = this.template.querySelector(".zd-mini");
        let zoodiacDridentOverlay = zoodiacDridentMiniImg.querySelector(".overlay");
        let zoodiacDridentOverlayQtyContainer = zoodiacDridentOverlay.querySelector(".cart-quantity-container");
        let zoodiacDridentOverlayQty = zoodiacDridentOverlayQtyContainer.querySelector(".cart-quantity");
        
        let zoodiacRatpierQty = parseInt(this.template.querySelector(".Qty-zoodiac-rat").value);
        let zoodiacRatpierPrice = parseInt(this.template.querySelector(".zoodiac-rat-price").innerHTML);
        let zoodiacRatpierQuantityWarning = this.template.querySelector(".zoodiac-rat.qty-warning-text");
        let zoodiacRatpierMiniImg = this.template.querySelector(".zr-mini");
        let zoodiacRatpierOverlay = zoodiacRatpierMiniImg.querySelector(".overlay");
        let zoodiacRatpierOverlayQtyContainer = zoodiacRatpierOverlay.querySelector(".cart-quantity-container");
        let zoodiacRatpierOverlayQty = zoodiacRatpierOverlayQtyContainer.querySelector(".cart-quantity");
        
        let heavyMetalFoesElectrumiteQty = parseInt(this.template.querySelector(".Qty-electrumite").value);
        let heavyMetalFoesElectrumitePrice = parseInt(this.template.querySelector(".electrumite-price").innerHTML);
        let heavyMetalFoesElectrumiteQuantityWarning = this.template.querySelector(".electrumite.qty-warning-text");
        let heavyMetalFoesElectrumiteMiniImg = this.template.querySelector(".el-mini");
        let heavyMetalFoesElectrumiteOverlay = heavyMetalFoesElectrumiteMiniImg.querySelector(".overlay");
        let heavyMetalFoesElectrumiteOverlayQtyContainer = heavyMetalFoesElectrumiteOverlay.querySelector(".cart-quantity-container");
        let heavyMetalFoesElectrumiteOverlayQty = heavyMetalFoesElectrumiteOverlayQtyContainer.querySelector(".cart-quantity");
        
        let evenlyMatchedQty = parseInt(this.template.querySelector(".Qty-evenlymatched").value);
        let evenlyMatchedPrice = parseInt(this.template.querySelector(".evenlymatched-price").innerHTML);
        let evenlyMatchedQuantityWarning = this.template.querySelector(".evenlymatched.qty-warning-text");
        let evenlyMatchedMiniImg = this.template.querySelector(".ev-mini");
        let evenlyMatchedOverlay = evenlyMatchedMiniImg.querySelector(".overlay");
        let evenlyMatchedOverlayQtyContainer = evenlyMatchedOverlay.querySelector(".cart-quantity-container");
        let evenlyMatchedOverlayQty = evenlyMatchedOverlayQtyContainer.querySelector(".cart-quantity");
        
        let calledByTheGraveQty = parseInt(this.template.querySelector(".Qty-grave").value);
        let calledByTheGravePrice = parseInt(this.template.querySelector(".called-grave-price").innerHTML);
        let calledByTheGraveQuantityWarning = this.template.querySelector(".called-grave.qty-warning-text");
        let calledByTheGraveMiniImg = this.template.querySelector(".cg-mini");
        let calledByTheGraveOverlay = calledByTheGraveMiniImg.querySelector(".overlay");
        let calledByTheGraveOverlayQtyContainer = calledByTheGraveOverlay.querySelector(".cart-quantity-container");
        let calledByTheGraveOverlayQty = calledByTheGraveOverlayQtyContainer.querySelector(".cart-quantity");

        
       


        switch(chosenInput) {
            case "br":
                
                console.log(blackRoseQuantityWarning);
                if(!this.validateQty(blackRoseDragonQty)){
                        blackRoseQuantityWarning.style.display = "block";
                        blackRoseQuantityWarning.textContent = "Please enter a valid quantity";
                        setTimeout(function(){
                            blackRoseQuantityWarning.style.display = "none";
                            }, 3000);
                        return;
                }
            
                if(typeof(this.validateQty(blackRoseDragonQty)) === "string"){
                        blackRoseQuantityWarning.style.display = "block";
                        blackRoseQuantityWarning.textContent = this.validateQty(blackRoseDragonQty);
                        setTimeout(function(){
                            blackRoseQuantityWarning.style.display = "none";
                            }, 3000);
                        return;
                    }
                        let blackRoseDragonTotal = blackRoseDragonQty * blackRoseDragonPrice;
                        cart_object.cart_items.push("blackRoseDragon");
                        cart_object.cart_total += blackRoseDragonTotal;
                        cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                        blackRoseDragonMiniImg.removeAttribute("hidden");
                        blackRoseDragonOverlay.style.display = "block";
                        blackRoseDragonOverlayQty.innerHTML = blackRoseDragonQty;
                        cart_object.cart_quantity += blackRoseDragonQty;
                        cart_object.cart_quantity_total += blackRoseDragonQty;
                        cart_object.item_total += blackRoseDragonTotal;
                        
                        
                        break;
                
            case "rc":
                
                if(!this.validateQty(rescueCatQty)){
                        rescueCatQuantityWarning.style.display = "block";
                        rescueCatQuantityWarning.textContent = "Please enter a valid quantity";
                        setTimeout(function(){
                            rescueCatQuantityWarning.style.display = "none";
                            }
                            , 3000);
                        return;
                }

                if(typeof(this.validateQty(rescueCatQty)) === "string"){
                    rescueCatQuantityWarning.style.display = "block";
                    rescueCatQuantityWarning.textContent = this.validateQty(rescueCatQty);
                        setTimeout(function(){
                            rescueCatQuantityWarning.style.display = "none";
                            }
                            , 3000);
                        return;
                }

                let rescueCatTotal = rescueCatQty * rescueCatPrice;
                cart_object.cart_items.push("rescueCat");
                cart_object.cart_total += rescueCatTotal;
                console.log(cartTotalDiv)
                console.log(cart_object)
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                rescueCatMiniImg.removeAttribute("hidden");
                rescueCatOverlay.style.display = "block";
                rescueCatOverlayQty.innerHTML = rescueCatQty;
                cart_object.cart_quantity += rescueCatQty;
                cart_object.cart_quantity_total += rescueCatQty;
                cart_object.item_total += rescueCatTotal;
             

                break;
            
            case "tt":

                if(!this.validateQty(trapTrickQty)){
                    trapTrickQuantityWarning.style.display = "block";
                    trapTrickQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        trapTrickQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(trapTrickQty)) === "string"){
                    trapTrickQuantityWarning.style.display = "block";
                    trapTrickQuantityWarning.textContent = this.validateQty(trapTrickQty);
                        setTimeout(function(){
                            trapTrickQuantityWarning.style.display = "none";
                            }
                            , 3000);
                        return;
                }

                let trapTrickTotal = trapTrickQty * trapTrickPrice;
                cart_object.cart_items.push("trapTrick");
                cart_object.cart_total += trapTrickTotal;
                console.log(cartTotalDiv)
                console.log(cart_object)
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                trapTrickMiniImg.removeAttribute("hidden");
                trapTrickOverlay.style.display = "block";
                trapTrickOverlayQty.innerHTML = trapTrickQty;
                cart_object.cart_quantity += trapTrickQty;
                cart_object.cart_quantity_total += trapTrickQty;
                cart_object.item_total += trapTrickTotal;
            

                break;

            case "cg":

                if(!this.validateQty(calledByTheGraveQty)){
                    calledByTheGraveQuantityWarning.style.display = "block";
                    calledByTheGraveQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        calledByTheGraveQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(calledByTheGraveQty)) === "string"){
                    calledByTheGraveQuantityWarning.style.display = "block";
                    calledByTheGraveQuantityWarning.textContent = this.validateQty(calledByTheGraveQty);
                        setTimeout(function(){
                            calledByTheGraveQuantityWarning.style.display = "none";
                            }
                            , 3000);
                        return;
                }

                let calledByTheGraveTotal = calledByTheGraveQty * calledByTheGravePrice;
                cart_object.cart_items.push("calledByTheGrave");
                cart_object.cart_total += calledByTheGraveTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                calledByTheGraveMiniImg.removeAttribute("hidden");
                calledByTheGraveOverlay.style.display = "block";
                calledByTheGraveOverlayQty.innerHTML = calledByTheGraveQty;
                cart_object.cart_quantity += calledByTheGraveQty;
                cart_object.cart_quantity_total += calledByTheGraveQty;
                cart_object.item_total += calledByTheGraveTotal;
                         

                break;

            case "ss":

                if(!this.validateQty(skyStrikerMobilizeQty)){
                    skyStrikerQuantityWarning.style.display = "block";
                    skyStrikerQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        skyStrikerQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(skyStrikerMobilizeQty)) === "string"){
                        skyStrikerQuantityWarning.style.display = "block";
                        skyStrikerQuantityWarning.textContent = this.validateQty(skyStrikerMobilizeQty);
                        setTimeout(function(){
                            skyStrikerQuantityWarning.style.display = "none";
                            }
                            , 3000);
                        return;
                }

                let skyStrikerMobilizeTotal = skyStrikerMobilizeQty * skyStrikerMobilizePrice;
                cart_object.cart_items.push("skyStrikerMobilize");
                cart_object.cart_total += skyStrikerMobilizeTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                skyStrikerMobilizeMiniImg.removeAttribute("hidden");
                skyStrikerMobilizeOverlay.style.display = "block";
                skyStrikerMobilizeOverlayQty.innerHTML = skyStrikerMobilizeQty;
                cart_object.cart_quantity += skyStrikerMobilizeQty;
                cart_object.cart_quantity_total += skyStrikerMobilizeQty;
                cart_object.item_total += skyStrikerMobilizeTotal;

                break;

            case "gg":

                if(!this.validateQty(grassLooksGreenerQty )){
                    grassLooksGreenerQuantityWarning.style.display = "block";
                    grassLooksGreenerQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        grassLooksGreenerQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(grassLooksGreenerQty)) === "string"){
                    grassLooksGreenerQuantityWarning.style.display = "block";
                    grassLooksGreenerQuantityWarning.textContent = this.validateQty(grassLooksGreenerQty);
                    setTimeout(function(){
                        grassLooksGreenerQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                let grassLooksGreenerTotal = grassLooksGreenerQty * grassLooksGreenerPrice;
                cart_object.cart_items.push("grassLooksGreener");
                cart_object.cart_total += grassLooksGreenerTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                grassLooksGreenerMiniImg.removeAttribute("hidden");
                grassLooksGreenerOverlay.style.display = "block";
                grassLooksGreenerOverlayQty.innerHTML = grassLooksGreenerQty;
                cart_object.cart_quantity += grassLooksGreenerQty;
                cart_object.cart_quantity_total += grassLooksGreenerQty;
                cart_object.item_total += grassLooksGreenerTotal;
             
                break;

            case "zd":

                if(!this.validateQty(zoodiacDridentQty)){
                    zoodiacDridentQuantityWarning.style.display = "block";
                    zoodiacDridentQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        zoodiacDridentQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(zoodiacDridentQty)) === "string"){
                    zoodiacDridentQuantityWarning.style.display = "block";
                    zoodiacDridentQuantityWarning.textContent = this.validateQty(zoodiacDridentQty);
                    setTimeout(function(){
                        zoodiacDridentQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                let zoodiacDridentTotal = zoodiacDridentQty * zoodiacDridentPrice;
                cart_object.cart_items.push("zoodiacDrident");
                cart_object.cart_total += zoodiacDridentTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                zoodiacDridentMiniImg.removeAttribute("hidden");
                zoodiacDridentOverlay.style.display = "block";
                zoodiacDridentOverlayQty.innerHTML = zoodiacDridentQty;
                cart_object.cart_quantity += zoodiacDridentQty;
                cart_object.cart_quantity_total += zoodiacDridentQty;
                cart_object.item_total += zoodiacDridentTotal;

                break;

            case "zr":

                if(!this.validateQty(zoodiacRatpierQty)){
                    zoodiacRatpierQuantityWarning.style.display = "block";
                    zoodiacRatpierQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        zoodiacRatpierQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(zoodiacRatpierQty)) === "string"){
                    zoodiacRatpierQuantityWarning.style.display = "block";
                    zoodiacRatpierQuantityWarning.textContent = this.validateQty(zoodiacRatpierQty);
                    setTimeout(function(){
                        zoodiacRatpierQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                let zoodiacRatpierTotal = zoodiacRatpierQty * zoodiacRatpierPrice;
                cart_object.cart_items.push("zoodiacRatpier");
                cart_object.cart_total += zoodiacRatpierTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                zoodiacRatpierMiniImg.removeAttribute("hidden");
                zoodiacRatpierOverlay.style.display = "block";
                zoodiacRatpierOverlayQty.innerHTML = zoodiacRatpierQty;
                cart_object.cart_quantity += zoodiacRatpierQty;
                cart_object.cart_quantity_total += zoodiacRatpierQty;
                cart_object.item_total += zoodiacRatpierTotal;

                break;

            
            case "el":

                if(!this.validateQty(heavyMetalFoesElectrumiteQty)){
                    heavyMetalFoesElectrumiteQuantityWarning.style.display = "block";
                    heavyMetalFoesElectrumiteQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        heavyMetalFoesElectrumiteQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(heavyMetalFoesElectrumiteQty)) === "string"){
                    heavyMetalFoesElectrumiteQuantityWarning.style.display = "block";
                    heavyMetalFoesElectrumiteQuantityWarning.textContent = this.validateQty(heavyMetalFoesElectrumiteQty);
                    setTimeout(function(){
                        heavyMetalFoesElectrumiteQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                let heavyMetalFoesElectrumiteTotal = heavyMetalFoesElectrumiteQty * heavyMetalFoesElectrumitePrice;
                cart_object.cart_items.push("heavyMetalFoesElectrumite");
                cart_object.cart_total += heavyMetalFoesElectrumiteTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                heavyMetalFoesElectrumiteMiniImg.removeAttribute("hidden");
                heavyMetalFoesElectrumiteOverlay.style.display = "block";
                heavyMetalFoesElectrumiteOverlayQty.innerHTML = heavyMetalFoesElectrumiteQty;
                cart_object.cart_quantity += heavyMetalFoesElectrumiteQty;
                cart_object.cart_quantity_total += heavyMetalFoesElectrumiteQty;
                cart_object.item_total += heavyMetalFoesElectrumiteTotal;
         
                break;

            case "em":

                if(!this.validateQty(evenlyMatchedQty)){
                    evenlyMatchedQuantityWarning.style.display = "block";
                    evenlyMatchedQuantityWarning.textContent = "Please enter a valid quantity";
                    setTimeout(function(){
                        evenlyMatchedQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                if(typeof(this.validateQty(evenlyMatchedQty)) === "string"){
                    evenlyMatchedQuantityWarning.style.display = "block";
                    evenlyMatchedQuantityWarning.textContent = this.validateQty(evenlyMatchedQty);
                    setTimeout(function(){
                        evenlyMatchedQuantityWarning.style.display = "none";
                        }
                        , 3000);
                    return;
                }

                let evenlyMatchedTotal = evenlyMatchedQty * evenlyMatchedPrice;
                cart_object.cart_items.push("evenlyMatched");
                cart_object.cart_total += evenlyMatchedTotal;
                cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
                evenlyMatchedMiniImg.removeAttribute("hidden");
                evenlyMatchedOverlay.style.display = "block";
                evenlyMatchedOverlayQty.innerHTML = evenlyMatchedQty;
                cart_object.cart_quantity += evenlyMatchedQty;
                cart_object.cart_quantity_total += evenlyMatchedQty;
                cart_object.item_total += evenlyMatchedTotal;

                break;        
            
        } 
        
    }
    // emptyCartButton.addEventListener("click", function (e) {
    //     cart_object.cart_items = [];
    //     cart_object.cart_quantity = 0;
    //     cart_object.cart_quantity_total = 0;
    //     cart_object.cart_total = 0;
    //     cartTotalDiv.innerHTML =`$${cart_object.cart_total}`;
    //     for (let i = 0; i < miniCardList.length; i++) {
    //         miniCardList[i].setAttribute("hidden", true);
    //     }
        
    // });

    
    


    
    // rescueCatCartButton.addEventListener("click", function () {
    //   let rescueCatQty = parseInt(this.template.querySelector(".Qty-rescuecat").value);
    //   let rescueCatPrice = parseInt(this.template.querySelector(".rescuecat-price").innerHTML);
    //   let quantityWarning = this.template.querySelector(".rescuecat.qty-warning-text");
    //   let rescueCatMiniImg = this.template.querySelector(".rc-mini");
    //   let rescueCatOverlay = rescueCatMiniImg.querySelector(".overlay");
    //   let rescueCatOverlayQtyContainer = rescueCatOverlay.querySelector(".cart-quantity-container");
    //   let rescueCatOverlayQty = rescueCatOverlayQtyContainer.querySelector(".cart-quantity");
    
    //   console.log(quantityWarning);
    //   if(!validateQty(rescueCatQty)){
    //         quantityWarning.style.display = "block";
    //         quantityWarning.textContent = "Please enter a valid quantity";
    //         setTimeout(function(){
    //                 quantityWarning.style.display = "none";
    //             }, 3000);
    
    //         return;
    //   }
    
    //   if(typeof(validateQty(rescueCatQty)) === "string"){
    //         quantityWarning.style.display = "block";
    //         quantityWarning.textContent = validateQty(rescueCatQty);
    //         setTimeout(function(){
    //                 quantityWarning.style.display = "none";
    //             }, 3000);
    //         return;
    //     }
    
    
    //   let rescueCatTotal = rescueCatQty * rescueCatPrice;
    //   cart_object.cart_items.push(rescueCat);
    //   cart_object.cart_total += rescueCatTotal;
    //   cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //   rescueCatMiniImg.removeAttribute("hidden");
    //   rescueCatOverlay.style.display = "block";
    //   rescueCatOverlayQty.innerHTML = rescueCatQty;
    //   cart_object.cart_quantity += rescueCatQty;
    //   cart_object.cart_quantity_total += rescueCatQty;
    //   cart_object.item_total += rescueCatTotal;
    //   console.dir(cart_object);
    //   console.dir(cart_object.cart_items);
    //   console.dir(cart_object.cart_total);
    //   console.dir(cart_object.cart_quantity);
    // });
    
    // blackRoseDragonCartButton.addEventListener("click", function () {
    //     let blackRoseDragonQty = parseInt(this.template.querySelector(".Qty-black-rose").value);
    //     let blackRoseDragonPrice = parseInt(this.template.querySelector(".black-rose-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".black-rose.qty-warning-text");
    //     let blackRoseDragonMiniImg = this.template.querySelector(".br-mini");
    //     let blackRoseDragonOverlay = blackRoseDragonMiniImg.querySelector(".overlay");
    //     let blackRoseDragonOverlayQtyContainer = blackRoseDragonOverlay.querySelector(".cart-quantity-container");
    //     let blackRoseDragonOverlayQty = blackRoseDragonOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(blackRoseDragonQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(blackRoseDragonQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(blackRoseDragonQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let blackRoseDragonTotal = blackRoseDragonQty * blackRoseDragonPrice;
    //     cart_object.cart_items.push(blackRoseDragon);
    //     cart_object.cart_total += blackRoseDragonTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     blackRoseDragonMiniImg.removeAttribute("hidden");
    //     blackRoseDragonOverlay.style.display = "block";
    //     blackRoseDragonOverlayQty.innerHTML = blackRoseDragonQty;
    //     cart_object.cart_quantity += blackRoseDragonQty;
    //     cart_object.cart_quantity_total += blackRoseDragonQty;
    //     cart_object.item_total += blackRoseDragonTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // skyStrikerMobilizeCartButton.addEventListener("click", function () {
    //     let skyStrikerMobilizeQty = parseInt(this.template.querySelector(".Qty-skystriker").value);
    //     let skyStrikerMobilizePrice = parseInt(this.template.querySelector(".skystriker-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".skystriker.qty-warning-text");
    //     let skyStrikerMobilizeMiniImg = this.template.querySelector(".ss-mini");
    //     let skyStrikerMobilizeOverlay = skyStrikerMobilizeMiniImg.querySelector(".overlay");
    //     let skyStrikerMobilizeOverlayQtyContainer = skyStrikerMobilizeOverlay.querySelector(".cart-quantity-container");
    //     let skyStrikerMobilizeOverlayQty = skyStrikerMobilizeOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(skyStrikerMobilizeQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(skyStrikerMobilizeQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(skyStrikerMobilizeQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let skyStrikerMobilizeTotal = skyStrikerMobilizeQty * skyStrikerMobilizePrice;
    //     cart_object.cart_items.push(skyStrikerMobilize);
    //     cart_object.cart_total += skyStrikerMobilizeTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     skyStrikerMobilizeMiniImg.removeAttribute("hidden");
    //     skyStrikerMobilizeOverlay.style.display = "block";
    //     skyStrikerMobilizeOverlayQty.innerHTML = skyStrikerMobilizeQty;
    //     cart_object.cart_quantity += skyStrikerMobilizeQty;
    //     cart_object.cart_quantity_total += skyStrikerMobilizeQty;
    //     cart_object.item_total += skyStrikerMobilizeTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // trapTrickCartButton.addEventListener("click", function () {
    //     let trapTrickQty = parseInt(this.template.querySelector(".Qty-traptrick").value);
    //     let trapTrickPrice = parseInt(this.template.querySelector(".traptrick-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".traptrick.qty-warning-text");
    //     let trapTrickMiniImg = this.template.querySelector(".tt-mini");
    //     let trapTrickOverlay = trapTrickMiniImg.querySelector(".overlay");
    //     let trapTrickOverlayQtyContainer = trapTrickOverlay.querySelector(".cart-quantity-container");
    //     let trapTrickOverlayQty = trapTrickOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(trapTrickQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(trapTrickQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(trapTrickQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let trapTrickTotal = trapTrickQty * trapTrickPrice;
    //     cart_object.cart_items.push(trapTrick);
    //     cart_object.cart_total += trapTrickTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     trapTrickMiniImg.removeAttribute("hidden");
    //     trapTrickOverlay.style.display = "block";
    //     trapTrickOverlayQty.innerHTML = trapTrickQty;
    //     cart_object.cart_quantity += trapTrickQty;
    //     cart_object.cart_quantity_total += trapTrickQty;
    //     cart_object.item_total += trapTrickTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // grassLooksGreenerCartButton.addEventListener("click", function () {
    //     let grassLooksGreenerQty = parseInt(this.template.querySelector(".Qty-grass-greener").value);
    //     let grassLooksGreenerPrice = parseInt(this.template.querySelector(".grass-greener-stock").innerHTML);
    //     let quantityWarning = this.template.querySelector(".grass-greener.qty-warning-text");
    //     let grassLooksGreenerMiniImg = this.template.querySelector(".gg-mini");
    //     let grassLooksGreenerOverlay = grassLooksGreenerMiniImg.querySelector(".overlay");
    //     let grassLooksGreenerOverlayQtyContainer = grassLooksGreenerOverlay.querySelector(".cart-quantity-container");
    //     let grassLooksGreenerOverlayQty = grassLooksGreenerOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(grassLooksGreenerQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(grassLooksGreenerQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(grassLooksGreenerQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let grassLooksGreenerTotal = grassLooksGreenerQty * grassLooksGreenerPrice;
    //     cart_object.cart_items.push(grassLooksGreener);
    //     cart_object.cart_total += grassLooksGreenerTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     grassLooksGreenerMiniImg.removeAttribute("hidden");
    //     grassLooksGreenerOverlay.style.display = "block";
    //     grassLooksGreenerOverlayQty.innerHTML = grassLooksGreenerQty;
    //     cart_object.cart_quantity += grassLooksGreenerQty;
    //     cart_object.cart_quantity_total += grassLooksGreenerQty;
    //     cart_object.item_total += grassLooksGreenerTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // zoodiacDridentCartButton.addEventListener("click", function () {
    //     let zoodiacDridentQty = parseInt(this.template.querySelector(".Qty-zoodiac-dri").value);
    //     let zoodiacDridentPrice = parseInt(this.template.querySelector(".zoodiac-dri-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".zoodiac-dri.qty-warning-text");
    //     let zoodiacDridentMiniImg = this.template.querySelector(".zd-mini");
    //     let zoodiacDridentOverlay = zoodiacDridentMiniImg.querySelector(".overlay");
    //     let zoodiacDridentOverlayQtyContainer = zoodiacDridentOverlay.querySelector(".cart-quantity-container");
    //     let zoodiacDridentOverlayQty = zoodiacDridentOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(zoodiacDridentQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(zoodiacDridentQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(zoodiacDridentQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let zoodiacDridentTotal = zoodiacDridentQty * zoodiacDridentPrice;
    //     cart_object.cart_items.push(zoodiacDrident);
    //     cart_object.cart_total += zoodiacDridentTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     zoodiacDridentMiniImg.removeAttribute("hidden");
    //     zoodiacDridentOverlay.style.display = "block";
    //     zoodiacDridentOverlayQty.innerHTML = zoodiacDridentQty;
    //     cart_object.cart_quantity += zoodiacDridentQty;
    //     cart_object.cart_quantity_total += zoodiacDridentQty;
    //     cart_object.item_total += zoodiacDridentTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // zoodiacRatpierCartButton.addEventListener("click", function () {
    //     let zoodiacRatpierQty = parseInt(this.template.querySelector(".Qty-zoodiac-rat").value);
    //     let zoodiacRatpierPrice = parseInt(this.template.querySelector(".zoodiac-rat-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".zoodiac-rat.qty-warning-text");
    //     let zoodiacRatpierMiniImg = this.template.querySelector(".zr-mini");
    //     let zoodiacRatpierOverlay = zoodiacRatpierMiniImg.querySelector(".overlay");
    //     let zoodiacRatpierOverlayQtyContainer = zoodiacRatpierOverlay.querySelector(".cart-quantity-container");
    //     let zoodiacRatpierOverlayQty = zoodiacRatpierOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(zoodiacRatpierQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(zoodiacRatpierQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(zoodiacRatpierQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let zoodiacRatpierTotal = zoodiacRatpierQty * zoodiacRatpierPrice;
    //     cart_object.cart_items.push(zoodiacRatpier);
    //     cart_object.cart_total += zoodiacRatpierTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     zoodiacRatpierMiniImg.removeAttribute("hidden");
    //     zoodiacRatpierOverlay.style.display = "block";
    //     zoodiacRatpierOverlayQty.innerHTML = zoodiacRatpierQty;
    //     cart_object.cart_quantity += zoodiacRatpierQty;
    //     cart_object.cart_quantity_total += zoodiacRatpierQty;
    //     cart_object.item_total += zoodiacRatpierTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // heavyMetalFoesElectrumiteCartButton.addEventListener("click", function () {
    //     let heavyMetalFoesElectrumiteQty = parseInt(this.template.querySelector(".Qty-electrumite").value);
    //     let heavyMetalFoesElectrumitePrice = parseInt(this.template.querySelector(".electrumite-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".electrumite.qty-warning-text");
    //     let heavyMetalFoesElectrumiteMiniImg = this.template.querySelector(".el-mini");
    //     let heavyMetalFoesElectrumiteOverlay = heavyMetalFoesElectrumiteMiniImg.querySelector(".overlay");
    //     let heavyMetalFoesElectrumiteOverlayQtyContainer = heavyMetalFoesElectrumiteOverlay.querySelector(".cart-quantity-container");
    //     let heavyMetalFoesElectrumiteOverlayQty = heavyMetalFoesElectrumiteOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(heavyMetalFoesElectrumiteQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(heavyMetalFoesElectrumiteQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(heavyMetalFoesElectrumiteQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let heavyMetalFoesElectrumiteTotal = heavyMetalFoesElectrumiteQty * heavyMetalFoesElectrumitePrice;
    //     cart_object.cart_items.push(heavyMetalFoesElectrumite);
    //     cart_object.cart_total += heavyMetalFoesElectrumiteTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     heavyMetalFoesElectrumiteMiniImg.removeAttribute("hidden");
    //     heavyMetalFoesElectrumiteOverlay.style.display = "block";
    //     heavyMetalFoesElectrumiteOverlayQty.innerHTML = heavyMetalFoesElectrumiteQty;
    //     cart_object.cart_quantity += heavyMetalFoesElectrumiteQty;
    //     cart_object.cart_quantity_total += heavyMetalFoesElectrumiteQty;
    //     cart_object.item_total += heavyMetalFoesElectrumiteTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // evenlyMatchedCartButton.addEventListener("click", function () {
    //     let evenlyMatchedQty = parseInt(this.template.querySelector(".Qty-evenlymatched").value);
    //     let evenlyMatchedPrice = parseInt(this.template.querySelector(".evenlymatched-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".evenlymatched.qty-warning-text");
    //     let evenlyMatchedMiniImg = this.template.querySelector(".ev-mini");
    //     let evenlyMatchedOverlay = evenlyMatchedMiniImg.querySelector(".overlay");
    //     let evenlyMatchedOverlayQtyContainer = evenlyMatchedOverlay.querySelector(".cart-quantity-container");
    //     let evenlyMatchedOverlayQty = evenlyMatchedOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(evenlyMatchedQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(evenlyMatchedQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(evenlyMatchedQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let evenlyMatchedTotal = evenlyMatchedQty * evenlyMatchedPrice;
    //     cart_object.cart_items.push(evenlyMatched);
    //     cart_object.cart_total += evenlyMatchedTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     evenlyMatchedMiniImg.removeAttribute("hidden");
    //     evenlyMatchedOverlay.style.display = "block";
    //     evenlyMatchedOverlayQty.innerHTML = evenlyMatchedQty;
    //     cart_object.cart_quantity += evenlyMatchedQty;
    //     cart_object.cart_quantity_total += evenlyMatchedQty;
    //     cart_object.item_total += evenlyMatchedTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    // calledByTheGraveCartButton.addEventListener("click", function () {
    //     let calledByTheGraveQty = parseInt(this.template.querySelector(".Qty-grave").value);
    //     let calledByTheGravePrice = parseInt(this.template.querySelector(".called-grave-price").innerHTML);
    //     let quantityWarning = this.template.querySelector(".called-grave.qty-warning-text");
    //     let calledByTheGraveMiniImg = this.template.querySelector(".cg-mini");
    //     let calledByTheGraveOverlay = calledByTheGraveMiniImg.querySelector(".overlay");
    //     let calledByTheGraveOverlayQtyContainer = calledByTheGraveOverlay.querySelector(".cart-quantity-container");
    //     let calledByTheGraveOverlayQty = calledByTheGraveOverlayQtyContainer.querySelector(".cart-quantity");
    
    //     console.log(quantityWarning);
    //     if(!validateQty(calledByTheGraveQty)){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = "Please enter a valid quantity";
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //     }
    
    //     if(typeof(validateQty(calledByTheGraveQty)) === "string"){
    //             quantityWarning.style.display = "block";
    //             quantityWarning.textContent = validateQty(calledByTheGraveQty);
    //             setTimeout(function(){
    //                     quantityWarning.style.display = "none";
    //                 }, 3000);
    //             return;
    //         }
    
    //     let calledByTheGraveTotal = calledByTheGraveQty * calledByTheGravePrice;
    //     cart_object.cart_items.push(calledByTheGrave);
    //     cart_object.cart_total += calledByTheGraveTotal;
    //     cartTotalDiv.innerHTML = `$${cart_object.cart_total}`;
    //     calledByTheGraveMiniImg.removeAttribute("hidden");
    //     calledByTheGraveOverlay.style.display = "block";
    //     calledByTheGraveOverlayQty.innerHTML = calledByTheGraveQty;
    //     cart_object.cart_quantity += calledByTheGraveQty;
    //     cart_object.cart_quantity_total += calledByTheGraveQty;
    //     cart_object.item_total += calledByTheGraveTotal;
    //     console.dir(cart_object);
    //     console.dir(cart_object.cart_items);
    //     console.dir(cart_object.cart_total);
    //     console.dir(cart_object.cart_quantity);
    // });
    
    
    
    

    

        // for (const card in mock_card_database) {
    //   switch (card) {
    //     case "rescue_cat":
    //       rescueCat.children[1].children[0].innerHTML = "Rescue Cat";
    //       rescueCat.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       rescueCat.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       rescueCat.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       rescueCat.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       rescueCat.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "black_rose_dragon":
    //       blackRoseDragon.children[1].children[0].innerHTML = "Black Rose Dragon";
    //       blackRoseDragon.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       blackRoseDragon.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       blackRoseDragon.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       blackRoseDragon.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       blackRoseDragon.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "sky_striker_mobilize":
    //       skyStrikerMobilize.children[1].children[0].innerHTML =
    //         "Sky Striker Mobilize";
    //       skyStrikerMobilize.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       skyStrikerMobilize.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       skyStrikerMobilize.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       skyStrikerMobilize.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       skyStrikerMobilize.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "trap_trick":
    //       trapTrick.children[1].children[0].innerHTML = "Trap Trick";
    //       trapTrick.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       trapTrick.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       trapTrick.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       trapTrick.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       trapTrick.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "grass_looks_greener":
    //       grassLooksGreener.children[1].children[0].innerHTML =
    //         "That Grass Looks Greener";
    //       grassLooksGreener.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       grassLooksGreener.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       grassLooksGreener.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       grassLooksGreener.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       grassLooksGreener.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "zoodiac_drident":
    //       zoodiacDrident.children[1].children[0].innerHTML = "Zoodiac Drident";
    //       zoodiacDrident.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       zoodiacDrident.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       zoodiacDrident.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       zoodiacDrident.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       zoodiacDrident.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "zoodiac_ratpier":
    //       zoodiacRatpier.children[1].children[0].innerHTML = "Zoodiac Ratpier";
    //       zoodiacRatpier.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       zoodiacRatpier.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       zoodiacRatpier.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       zoodiacRatpier.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       zoodiacRatpier.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "heavy_metal_foes_electrumite":
    //       heavyMetalFoesElectrumite.children[1].children[0].innerHTML =
    //         "Heavymetalfoes Electrumite";
    //       heavyMetalFoesElectrumite.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       heavyMetalFoesElectrumite.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       heavyMetalFoesElectrumite.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       heavyMetalFoesElectrumite.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       heavyMetalFoesElectrumite.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "called_by_the_grave":
    //       calledByTheGrave.children[1].children[0].innerHTML =
    //         "Called By The Grave";
    //       calledByTheGrave.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       calledByTheGrave.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       calledByTheGrave.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       calledByTheGrave.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       calledByTheGrave.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //     case "evenly_matched":
    //       evenlyMatched.children[1].children[0].innerHTML = "Evenly Matched";
    //       evenlyMatched.children[1].children[1].innerHTML =
    //         mock_card_database[card].set;
    //       evenlyMatched.children[1].children[2].children[0].innerHTML =
    //         mock_card_database[card].rarity;
    //       evenlyMatched.children[1].children[3].children[0].innerHTML =
    //         mock_card_database[card].type;
    //       evenlyMatched.children[1].children[4].children[0].innerHTML =
    //         mock_card_database[card].instock;
    //       evenlyMatched.children[1].children[5].children[0].innerHTML =
    //         mock_card_database[card].price;
    //   }
    // }
    
    // console.dir(rescueCat.children[1].children[0].innerHTML); // Card Name
    // console.dir(rescueCat.children[1].children[1].innerHTML); // Card Set
    // console.dir(rescueCat.children[1].children[2].children[0].innerHTML); // Rarity
    // console.dir(rescueCat.children[1].children[3].children[0].innerHTML); // Type
    // console.dir(rescueCat.children[1].children[4].children[0].innerHTML); // Left in Stock
    // console.dir(rescueCat.children[1].children[5].children[0].innerHTML); // Card Price
    // console.dir(rescueCat.children[1].children[4].innerHTML); //button
    



}


    // import { mock_card_database } from "./mock_database.js";
    // import { cart_object } from "./cart_object.js";
    // // let all_cards = this.template.querySelectorAll('..card-info-flex-container');
    // // let all_cards_array = Array.from(all_cards);
    // // let all_cards_array_length = all_cards_array.length;
    
    // window.addEventListener("scroll", function (e) {
    //   let scroll = window.scrollY;
    //   if (scroll > 600) {
    //     this.template.querySelector(".sticky-cart").classList.add("expand-height");
    //   } else {
    //     this.template.querySelector(".sticky-cart").classList.remove("expand-height");
    //   }
    // });
    
    // let rescueCatCartButton = this.template.querySelector(".add-to-cart.rescuecat");
    // let blackRoseDragonCartButton = this.template.querySelector(
    //   ".add-to-cart.black-rose"
    // );
    // let skyStrikerMobilizeCartButton = this.template.querySelector(
    //   ".add-to-cart.skystriker"
    // );
    // let trapTrickCartButton = this.template.querySelector(".add-to-cart.traptrick");
    // let grassLooksGreenerCartButton = this.template.querySelector(
    //   ".add-to-cart.grass-greener"
    // );
    // let zoodiacDridentCartButton = this.template.querySelector(
    //   ".add-to-cart.zoodiac-dri"
    // );
    // let zoodiacRatpierCartButton = this.template.querySelector(
    //   ".add-to-cart.zoodiac-rat"
    // );
    // let heavyMetalFoesElectrumiteCartButton = this.template.querySelector(
    //   ".add-to-cart.electrumite"
    // );
    // let evenlyMatchedCartButton = this.template.querySelector(
    //   ".add-to-cart.evenlymatched"
    // );
    // let calledByTheGraveCartButton = this.template.querySelector(
    //   ".add-to-cart.called-grave"
    // );
    
    // let rescueCat = this.template.querySelector(".card-info-flex-container.rescuecat");
    // let blackRoseDragon = this.template.querySelector(
    //   ".card-info-flex-container.black-rose"
    // );
    // let skyStrikerMobilize = this.template.querySelector(
    //   ".card-info-flex-container.skystriker"
    // );
    // let trapTrick = this.template.querySelector(".card-info-flex-container.traptrick");
    // let grassLooksGreener = this.template.querySelector(
    //   ".card-info-flex-container.grass-greener"
    // );
    // let zoodiacDrident = this.template.querySelector(
    //   ".card-info-flex-container.zoodiac-dri"
    // );
    // let zoodiacRatpier = this.template.querySelector(
    //   ".card-info-flex-container.zoodiac-rat"
    // );
    // let heavyMetalFoesElectrumite = this.template.querySelector(
    //   ".card-info-flex-container.electrumite"
    // );
    // let evenlyMatched = this.template.querySelector(
    //   ".card-info-flex-container.evenlymatched"
    // );
    // let calledByTheGrave = this.template.querySelector(
    //   ".card-info-flex-container.called-grave"
    // );
    




    /*-------------------------------------------------*/

    // let blackRoseTotal = chosenValue * mock_card_database.black_rose.price;
    // blackRoseTotal = blackRoseTotal.toFixed(2);
    // blackRoseTotal = blackRoseTotal.toString();
    // blackRoseTotal = blackRoseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // this.cart_object.cart_items.push({ name: "Black Rose Dragon", price: blackRoseTotal, image: "black_rose_dragon.jpg", quantity: chosenValue, rarity: "Premium Gold", type: "Extra Deck Monster", set: "Maximum Gold", instock: "33" });
    // this.cart_object.cart_quantity_total += chosenValue;
    // this.cart_object.cart_total += parseFloat(blackRoseTotal);
    // this.cart_object.cart_total = this.cart_object.cart_total.toFixed(2);
    // this.cart_object.cart_total = this.cart_object.cart_total.toString();
    // this.cart_object.cart_total = this.cart_object.cart_total.replace(/\B(?=(\d{3})+(?!\d))/g, ",")