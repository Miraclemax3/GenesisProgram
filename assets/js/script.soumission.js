// display

function displayChoice() {
    
    document.getElementById('choice').style.display='block';
}

//variables

var standard = 7565 * 1.10;
var  premium = 12345 * 1.13;
var excelium = 15400 * 1.16;





/// Residential
function calculeQuoteRes() {
   var appRes = document.getElementById("appartmentResidential").value;
   var floorRes = document.getElementById("floorResidential").value;
   return (appRes / floorRes) / 6;
}

function calculeTotalResShafts() {
   var floorRes = document.getElementById("floorResidential").value;
    var resFloorRes = floorRes / 20 ;
   if (floorRes > 20) {
      
      return calculeQuoteRes() * Math.ceil(resFloorRes);
   }
   return calculeQuoteRes();
}

function shaftRes() {
        var appRes = Number(document.getElementById("appartmentResidential").value);    
    if ( appRes < 0 ) {
        alert("You can`t have a negative number of appartment!");
    }else{
        var floorRes = Number(document.getElementById("floorResidential").value);    
    if ( floorRes < 0 ) {
        alert("You can`t have a negative number of floor!");   
        
    }else{
    
   var quoteRes = calculeQuoteRes();
   document.getElementById("totalShaft").innerHTML = "Total of elevators needed is " + Math.ceil(calculeTotalResShafts());
}
}
}

/// Total Price
function resStandard() {
   resTotal(standard);
}

function resPremium() {
   resTotal(premium);
}

function resExcelium() {
   resTotal(excelium);
}


function resTotal(quotient) {
   var priceResQuality = Math.ceil(calculeTotalResShafts()) * quotient;
   document.getElementById('price').innerHTML = "Total price is $ " + Math.ceil(priceResQuality);
}

/// commercial

function commercialShaft() {
        var numShaft = Number(document.getElementById("shaftCommercial").value);    
    if ( numShaft < 0 ) {
        alert("You can`t have a negative number of elevators!");
    }else{
    
    var numShaft = document.getElementById("shaftCommercial").value;
    document.getElementById("totalShaft").innerHTML = "Total of elevators needed is " + Math.ceil(numShaft);
        
    }


    
}
function comStandard() {
    comtotal(standard);
}

function comPremium() {
    comtotal(premium);
}

function comExcelium() {
    comtotal(excelium);
}
function comtotal(quotient) {
    var numShaft = document.getElementById("shaftCommercial").value;
    var comresult1= numShaft * quotient;
    document.getElementById("price").innerHTML = "Total price is $" + Math.ceil(comresult1);
}


/// corporatif

function calculeQuoteCorp(){
    var numFl = Number(document.getElementById("floorCorporate").value);
    var numOcc = Number(document.getElementById("occupantsCorporate").value);
    var numBas = Number(document.getElementById("basementCorporate").value);
    var answer= Math.ceil(((numFl + numBas) * numOcc) /1000);  // nombre d`occupants /nombre d`ascenseur = occupant total
    var answer2= Math.ceil((numFl + numBas) / 20);  //nombre de colone
    var answer3= Math.ceil(answer / answer2);
    return answer3*answer2;
}
function shaftCorp(){
     var numOcc = Number(document.getElementById("occupantsCorporate").value);    
        if ( numOcc < 0 ) {
        alert("You can`t have a negative number of occupant!");
        }else{
     var numFl = Number(document.getElementById("floorCorporate").value);    
        if ( numFl < 0 ) {
        alert("You can`t have a negative number of floor!");   
        
        }else{
    var numBas = Number(document.getElementById("basementCorporate").value);    
        if ( numBas < 0 ) {
        alert("You can`t have a negative number of basement!");   
        
        }else{

    var quoteCorporate = calculeQuoteCorp();
    document.getElementById("totalShaft").innerHTML = "Total elevators needed is " + Math.ceil(calculeQuoteCorp());
}
}
}
}
/// Total Price
function corpStandard() {
   corpTotal(standard);
}

function corpPremium() {
   corpTotal(premium);
}

function corpExcelium() {
   corpTotal(excelium);
}


function corpTotal(quotient) {
   var priceCorpQuality = calculeQuoteCorp() * quotient;
   document.getElementById('price').innerHTML = "Total price is $ " + Math.ceil(priceCorpQuality);
}
    



/// hybride


function calculeQuoteHybrid(){

    var numHours = Number(document.getElementById("businessHoursHybrid").value);    
    var numFloor = Number(document.getElementById("floorHybrid").value);
    var numOccup = Number(document.getElementById("occupantsHybrid").value);
    var numBasee = Number(document.getElementById("basementHybrid").value);
    var answer4= Math.ceil(((numFloor + numBasee) * numOccup) /1000);
    var answer5= Math.ceil((numFloor + numBasee) / 20);
    var answer6= Math.ceil(answer4 / answer5);
    return answer6*answer5;
    

}

function shaftHybrid(){
    var numFloor = Number(document.getElementById("floorHybrid").value);    
        if ( numFloor < 0 ) {
        alert("You can`t have a negative number of floor!");
        }else{
     var numOccup = Number(document.getElementById("occupantsHybrid").value);    
        if ( numOccup < 0 ) {
        alert("You can`t have a negative number of occupant!");   
        
        }else{
    var numBasee = Number(document.getElementById("basementHybrid").value);    
        if ( numBasee < 0 ) {
        alert("You can`t have a negative number of basement!");   
        
        }else{

    var numHours = Number(document.getElementById("businessHoursHybrid").value);    
    if ( numHours > 24 ) {
        alert("There is only 24 hours in a day!");
    }else if (numHours <0) {
        alert("There is no negative hour in a day!");
    

    var quoteHybrid = calculeQuoteHybrid();
    document.getElementById("totalShaft").innerHTML = "Total elevators needed is " + Math.ceil(calculeQuoteHybrid());
    }
        }
        }
        }
}


/// Total Price
function hybridStandard() {
   hybridTotal(standard);
}

function hybridPremium() {
   hybridTotal(premium);
}

function hybridExcelium() {
   hybridTotal(excelium);
}


function hybridTotal(quotient) {
   var priceHybridQuality = calculeQuoteHybrid() * quotient;
   document.getElementById('price').innerHTML = "Total price is $ " + Math.ceil(priceHybridQuality);
}
    
