document.addEventListener('DOMContentLoaded', function () 
{

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");


    var showRegNumParent = document.getElementById("parentDisplay");
    var showRegNum = document.getElementById("display");

    //var theFirstChild = showRegNum.firstChild;

    var showUserError = document.getElementById("errors");

    //Below to get the stored users from local storage
    var storedRegList = localStorage.getItem('Plate') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var RegToStore = displayRegNumberPlates(storedRegList);

   
    function checkDuplicate(regPlate){
        var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
       
       /** var arrayValueStores = Object.keys(valueStored);

        //Not defined...
        RegToStore.getPlatesStored(arrayValueStores);**/

        RegToStore(valueStored);
        var containsPlate = arrayValueStores.some( element => element === numPlateFormat);
        if(containsPlate)
        {
           return true;

        }
    }

     function addNumberPLate()
     {
             var numPlate = regNumText.value;
            
             regNumText.value = "";

            // var verifyPlate = RegToStore.getAll();
             if(numPlate !== '' && RegToStore.validateInput(numPlate) === true)
             {
                var numPlateFormat = numPlate.toUpperCase();
                
                if(numPlateFormat)
                {
                    RegToStore.enterRegPlate(numPlateFormat); 
                    
                    var getRegPlate = RegToStore.getStoredList();
                    
                   // var lastOne = Object.keys(getRegPlate)[Object.keys(getRegPlate).length -1];
                   
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));

                    var PlatesValues = JSON.parse(localStorage.getItem("RegistrationNumbers"));
                    var arrayList = Object.keys(PlatesValues);
                    
                    showNumberPlates(numPlateFormat);   
                    }                
             }
             else if(RegToStore.validateInput(numPlate) === false)
             {
                setTimeout(function(){  
                    alert("Oops that is an Error Input. Please enter the correct input!");
                }, 3000);
               
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
            showRegNum.insertBefore(newDisplay, showRegNum.childNodes[0]);
         }
     }

    function checkLocation() 
    {
        //Check Error when the button is pressed without handling the User Input Error .....
        var locationIndicator =  document.querySelector("input[name='town']:checked"); 
        if (locationIndicator.value !== null)
        {
            var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
            var check = displayRegNumberPlates(valueStored);
            
            var selectedTownsArray = check.filterTown(locationIndicator.value);
            
            showRegNum.innerHTML = '';
            for(var p =0 ; p <selectedTownsArray.length; p++)
            { 
                showNumberPlates(selectedTownsArray[p]);
            
            }
            
        }
    }

  window.addEventListener("load", function()
  {
    var PlatesValueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
    if(PlatesValueStored !== undefined && PlatesValueStored !== null){
        var arrayValues = Object.keys(PlatesValueStored); 
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