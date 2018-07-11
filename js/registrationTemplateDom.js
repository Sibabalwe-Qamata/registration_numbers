"use strict";
document.addEventListener('DOMContentLoaded', function () 
{

    let regNumTextHandlebars = document.querySelector(".regNumberHandlebars");
    let addBtnHandlebars = document.querySelector(".addHandlebars");
    let resetBtnHandlebars = document.querySelector(".resetHandlebars");
    let showBtnHandlebars = document.querySelector(".showHandlebars");
    //let normalFilter = document.querySelector(".selectWhichTown").value;
    let DisplayPlatesHandlebars = document.querySelector(".list-platesHandlebars");
    let showUserErrorHandlebars = document.querySelector(".errorDisplayHandlebars");


    let showRegNumParentHandlebars = document.getElementById("parentDisplayHandlebars");
    let showRegNumHandlebars = document.getElementById("displayHandlebars");

    //var showUserError = document.getElementById(".errorDisplay");

    //Below to get the stored users from local storage
    let storedRegListHandlebars = localStorage.getItem('RegistrationNumbers-Handlebars') ? JSON.parse(localStorage.getItem('RegistrationNumbers-Handlebars')) : {};
    console.log("LocalStorage: ",storedRegListHandlebars);
    let RegToStoreHandlebars = displayRegNumberPlates(storedRegListHandlebars);


    function checkDuplicateHandlebars(regPlateHandlebars){
        let valueStoredHandlebars = JSON.parse(localStorage.getItem("RegistrationNumbers-Handlebars"));
    
        RegToStore(valueStoredHandlebars);
        let containsPlateHandlebars = arrayValueStores.some( element => element === numPlateFormat);
        if(containsPlateHandlebars)
        {
            return true;

        }
    }


    function checkWesternCapePlateHandlebars(regPlateNumberHandlebars)
    {
        let j = 0;
        let res = false;
        const WCplates =  ['CA ','CAM','CAR','CAW', 'CBL', 'CBM', 'CBR', 'CBS', 'CBT', 'CBY','CCA','CCC','CCD', 'CCK','CCM', 'CCO',
        'CCP', 'CEA', 'CEG', 'CEM', 'CEO','CER', 'CES', 'CEX' ,'CEY', 'CFA', 'CFG', 'CFM','CFP', 'CFR','CG ', 'CJ ', 'CK ', 
        'CL ', 'CN ', 'CO ', 'CR ','CS ', 'CT ', 'CV ','CW ', 'CX ' ,'CY ', 'CZ '];

        
        for(j; j < WCplates.length; j++){
            
            if(WCplates[j] === regPlateNumberHandlebars){
                res =  true;
            }
            
        }
        return res;
      
    }

     function addNumberPLateHandlebars()
     {
             let numPlateHandlebars = regNumTextHandlebars.value.toUpperCase();
             regNumTextHandlebars.value = "";
             let locationHandlebars = numPlateHandlebars.slice(0,3).toUpperCase();

             console.log(numPlateHandlebars);
             if((numPlateHandlebars !== '' && RegToStoreHandlebars.validateInput(numPlateHandlebars) && checkWesternCapePlateHandlebars(location)))
             {
     
                if(storedRegListHandlebars !== null)
                {
                    let arrayDuplicateCheck = Object.keys(storedRegListHandlebars);
                    if(arrayDuplicateCheck.includes(numPlateHandlebars) === true)
                    {
                        showUserErrorHandlebars.innerHTML = "Oops that is a Duplicate. Please enter the correct input!";
                    
                    }
                    else if(arrayDuplicateCheck.includes(numPlateHandlebars) === false)
                    {
                        RegToStoreHandlebars.enterRegPlate(numPlateHandlebars); 
                    
                        let getRegPlateHandlebars = RegToStoreHandlebars.getStoredList();
                    
                       
                        localStorage.setItem("RegistrationNumber-Handlebars", JSON.stringify(getRegPlate));
    
                        let PlatesValues = JSON.parse(localStorage.getItem("RegistrationNumbers-Handlebars"));
                        let arrayList = Object.keys(PlatesValues);
                        console.log("Gets here!!!");
                        showUserError.innerHTML  = '';
                        showNumberPlatesHandlebars(numPlateHandlebars);  
                    }
                }              
             }
             else if((RegToStoreHandlebars.validateInput(numPlateHandlebars) === false))
             {
                 showUserErrorHandlebars.innerHTML = "Oops that is an Error Input. Please enter the correct input!";
             }
     }

     function showNumberPlatesHandlebars(regNumbersHandlebars) 
     {
         let lastReg;

         console.log("Function Executed!");
         if((regNumbersHandlebars !== null) && lastReg !== regNumbersHandlebars)
         {
             var newDisplay = document.createElement("div"); 
             newDisplay.classList.add('registrationNum');
             var newText = document.createTextNode(regNumbersHandlebars);
            
            newDisplay.appendChild(newText);
            showRegNumHandlebars.insertBefore(newDisplay, showRegNumHandlebars.childNodes[0]);
         }
     }

    function checkLocationHandlebars() 
    {
        let normalFilter = document.querySelector(".selectWhichTown").value;
        console.log(normalFilter);


        if (normalFilter !== null)
        {
            let valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers-Handlebars"));
            let check = displayRegNumberPlates(valueStored);
            
            let selectedTownsArray = check.filterTown(normalFilter);

            showUserErrorHandlebars.innerHTML  = '';
            showRegNumHandlebars.innerHTML = '';
            if(selectedTownsArray.length > 0){
                for(var p =0 ; p <selectedTownsArray.length; p++)
                { 
                    console.log(selectedTownsArray[p]);
                    showNumberPlatesHandlebars(selectedTownsArray[p]);
                }
            }
            else{
                showUserErrorHandlebars.innerHTML  = 'Town selected is not in the list. Please add town!';
            }
            
          
        }
    }

  window.addEventListener("load", function()
  {
    var PlatesValueStored = JSON.parse(localStorage.getItem("RegistrationNumbers-Handlebars"));
    if(PlatesValueStored !== undefined && PlatesValueStored !== null){
        var arrayValues = Object.keys(PlatesValueStored); 
        for(var p =0; p < arrayValues.length; p++)
        {
            showNumberPlates(arrayValues[p]);
        }
    }
  })
  
showBtnHandlebars.addEventListener('click', function () {
        checkLocationHandlebars();
      });  
addBtnHandlebars.addEventListener('click', function () {
    addNumberPLateHandlebars();
  });

  resetBtnHandlebars.addEventListener('click', function ()
   {
    window.location.reload();
    localStorage.clear();
    showRegNumHandlebars.innerHTML = '';

   }
  );

});