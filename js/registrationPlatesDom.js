document.addEventListener('DOMContentLoaded', function () 
{

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    //var resetBtn = document.querySelector(".reset");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");


    var showRegNumParent = document.getElementById("parentDisplay");
    var showRegNum = document.getElementById("display");

    var showUserError = document.getElementById("errors");

    //Below to get the stored users from local storage
    var storedRegList = localStorage.getItem('RegistrationNumbers') ? JSON.parse(localStorage.getItem('RegistrationNumbers')) : {};
    var RegToStore = displayRegNumberPlates(storedRegList);

   
    function checkDuplicate(regPlate){
        var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
    
        RegToStore(valueStored);
        var containsPlate = arrayValueStores.some( element => element === numPlateFormat);
        if(containsPlate)
        {
           return true;

        }
    }


    function checkWesternCapePlate(regPlateNumber)
    {
        var j = 0;
        var res = false;
        var WCplates =  ['CA ','CAM','CAR','CAW', 'CBL', 'CBM', 'CBR', 'CBS', 'CBT', 'CBY','CCA','CCC','CCD', 'CCK','CCM', 'CCO',
        'CCP', 'CEA', 'CEG', 'CEM', 'CEO','CER', 'CES', 'CEX' ,'CEY', 'CFA', 'CFG', 'CFM','CFP', 'CFR','CG ', 'CJ ', 'CK ', 
        'CL ', 'CN ', 'CO ', 'CR ','CS ', 'CT ', 'CV ','CW ', 'CX ' ,'CY ', 'CZ '];

        
        for(j; j < WCplates.length; j++){
            
            if(WCplates[j] === regPlateNumber){
                res =  true;
            }
            
        }
        return res;
      
    }

     function addNumberPLate()
     {
             var numPlate = regNumText.value.toUpperCase();
             regNumText.value = "";
             var location = numPlate.slice(0,3).toUpperCase();

             if((numPlate !== '' && RegToStore.validateInput(numPlate) && checkWesternCapePlate(location)))
             {
                var duplicateCheck = JSON.parse(localStorage.getItem("RegistrationNumbers"));
                var arrayDuplicateCheck = Object.keys(duplicateCheck);

                if(arrayDuplicateCheck.length > 0 && arrayDuplicateCheck.includes(numPlate) === true)
                {
                    setTimeout(function(){  
                        alert("Oops that is a Duplicate. Please enter the correct input!");
                    }, 1000);
                }
                if(numPlate && arrayDuplicateCheck.includes(numPlate) === false)
                {
                    RegToStore.enterRegPlate(numPlate); 
                    
                    var getRegPlate = RegToStore.getStoredList();
                
                   
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));

                    var PlatesValues = JSON.parse(localStorage.getItem("RegistrationNumbers"));
                    var arrayList = Object.keys(PlatesValues);
                    
                    showNumberPlates(numPlate);   
                    }                
             }
             else if((RegToStore.validateInput(numPlate) === false))
             {
                setTimeout(function(){  
                    alert("Oops that is an Error Input. Please enter the correct input!");
                }, 1000);
               
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