document.addEventListener('DOMContentLoaded', function () 
{

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");


    var showRegNumParent = document.getElementById("parentDisplay");
    var showRegNum = document.getElementById("display");

    var theFirstChild = showRegNum.firstChild;

    var showUserError = document.getElementById("errors");

   

    //Below to get the stored users from local storage
    var storedRegList = localStorage.getItem('Plate') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var RegToStore = displayRegNumberPlates(storedRegList);


    //To-Do:   Add Verify function here

    function verifyInput()
    {
        //Regex Function 
    }

   
    function errorsDisplay()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Error Input! Please enter a Western Cape Registration Number Plate and the press the Add button!";
        showUserError.appendChild(errorMsg);
    }

    function removeElements()
    {
        showRegNum.removeChild(element.firstChild);

    }
    function errorsDisplayDuplicates()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Oops that is a Duplicate!";
        showUserError.appendChild(errorMsg);
    }

    function errorsDisplayUponFilter()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Oops town Selected is not in the list!";
        showUserError.appendChild(errorMsg);
    }
    

     function addNumberPLate()
     {

             var numPlate = regNumText.value;
             regNumText.value = "";

             var verifyPlate = RegToStore.getMap();
             if(numPlate !== '')
             {
                var numPlateFormat = numPlate.toUpperCase();
                if(numPlateFormat)
                {
                    RegToStore.enterRegPlate(numPlateFormat); 
                    
                    var getRegPlate = RegToStore.getMap();

                    var lastOne = Object.keys(getRegPlate)[Object.keys(getRegPlate).length -1];
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));
                    showNumberPlates(lastOne);
                }
             }
          

     }

     function showNumberPlates(regNumbers) 
     {
         var lastReg;
         if((regNumbers !== null) && lastReg !== regNumbers)
         {
             var newDisplay = document.createElement("div"); 
             newDisplay.classList.add('registrationNum');
             var newText = document.createTextNode(regNumbers);
            
            newDisplay.appendChild(newText);
             //Insert Before here ...
            showRegNum.insertBefore(newDisplay, showRegNum.childNodes[0]);
         }
     }

    function checkLocation() 
    {
        var locationIndicator =  document.querySelector("input[name='town']:checked").value; 

        var CapeT =[];
        var Paarl_List = [];
        var Worcester = [];
        var allTowns = [];

       
            
            while (showRegNum.firstChild) {
            showRegNum.removeChild(showRegNum.firstChild);
            }

            if (locationIndicator !== null)
            {
            var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
            var arrayValueStores = Object.keys(valueStored);
            RegToStore.getPlatesStored(arrayValueStores);

          
            for(var k =0; k < arrayValueStores.length; k++)
            {
                if(arrayValueStores[k].startsWith("CA ") === true)
                {
                    CapeT.push(arrayValueStores[k]);
                }
                else if(arrayValueStores[k].startsWith("CJ ") === true)
                {
                    Paarl_List.push(arrayValueStores[k]);
                }
                else if(arrayValueStores[k].startsWith("CW ") === true){
                    Worcester.push(arrayValueStores[k]);
                }
                allTowns.push(arrayValueStores[k]);
            }
            console.log("Cape Town: ", CapeT);
            console.log("All", allTowns);
            console.log("Worcester: ", Worcester)
            console.log("Paarl: ", Paarl_List);
           
            if(locationIndicator === "CapeTown")
            {
                if(CapeT.length === 0){
                    errorsDisplayUponFilter();
                }
                else{
                    while (showUserError.firstChild) {
                        showUserError.removeChild(showUserError.firstChild);
                        }
                for(var z =0 ; z <CapeT.length; z++){ showNumberPlates(CapeT[z])}
                }
               
            }
            if(locationIndicator === "Paarl")
            {
                if(Paarl_List.length === 0){
                    errorsDisplayUponFilter();
                }else{
                    while (showUserError.firstChild) {
                        showUserError.removeChild(showUserError.firstChild);
                        }
                for(var p =0 ; p <Paarl_List.length; p++){ showNumberPlates(Paarl_List[p])}}
              
            }
            if(locationIndicator === "Worcester")
            {
                if(Worcester.length === 0){
                    errorsDisplayUponFilter();
                }
                else{
                    while (showUserError.firstChild) {
                        showUserError.removeChild(showUserError.firstChild);
                        }
                for(var w =0 ; w <Worcester.length; w++){ showNumberPlates(Worcester[w])}
                }
            }
            if(locationIndicator === "All"){
                if(allTowns.length === 0){
                    errorsDisplayUponFilter();
                }
                else{
                    while (showUserError.firstChild) {
                        showUserError.removeChild(showUserError.firstChild);
                        }
                    for(var a =0 ; a <allTowns.length; a++){ showNumberPlates(allTowns[a])}
                }
                
            }
        }
       
    }



  window.addEventListener("load", function()
  {
    var PlatesValueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));

    if(PlatesValueStored !== undefined && PlatesValueStored !== null){
        var arrayValues = Object.keys(PlatesValueStored); // It throws an array if nothing is added on local storage
    
        for(var p =0; p < arrayValues.length; p++)
        {
            showNumberPlates(arrayValues[p]);
        }
    }
  })
  
 showBtn.addEventListener('click', function () {
        checkLocation();
        
      });  
addBtn.addEventListener('click', function () {
    addNumberPLate();
  });

  
});