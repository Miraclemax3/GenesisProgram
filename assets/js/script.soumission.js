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
   var quoteRes = calculeQuoteRes();
   document.getElementById("totalShaft").innerHTML = "Total of elevators needed is " + Math.ceil(calculeTotalResShafts());
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
   var priceResQuality = calculeTotalResShafts() * quotient;
   document.getElementById('price').innerHTML = "Total price is $ " + Math.ceil(priceResQuality);
}

/// commercial

function commercialShaft() {
    
    var numShaft = document.getElementById("shaftCommercial").value;
    document.getElementById("totalShaft").innerHTML = "Total of elevators needed is " + Math.ceil(numShaft);
    
    
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
    var quoteCorporate = calculeQuoteCorp();
    document.getElementById("totalShaft").innerHTML = "Total elevators needed is " + Math.ceil(calculeQuoteCorp());
        
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
    var numFloor = Number(document.getElementById("floorHybrid").value);
    var numOccup = Number(document.getElementById("occupantsHybrid").value);
    var numBasee = Number(document.getElementById("basementHybrid").value);
    var answer4= Math.ceil(((numFloor + numBasee) * numOccup) /1000);
    var answer5= Math.ceil((numFloor + numBasee) / 20);
    var answer6= Math.ceil(answer4 / answer5);
    return answer6*answer5;

}

function shaftHybrid(){
    var quoteHybrid = calculeQuoteHybrid();
    document.getElementById("totalShaft").innerHTML = "Total elevators needed is " + Math.ceil(calculeQuoteHybrid());
}

/// Total Price
function hybridStandard() {
   hybridTotal(standard);
}

function hybridPremium() {
   hyrbidTotal(premium);
}

function hybridExcelium() {
   hybridTotal(excelium);
}


function hybridTotal(quotient) {
   var priceHybridQuality = calculeQuoteHybrid() * quotient;
   document.getElementById('price').innerHTML = "Total price is $ " + Math.ceil(priceHybridQuality);
}
    
