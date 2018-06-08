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


   

   
    function errorsDisplay()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Error Input! Please enter a Western Cape Registration Number Plate and the press the Add button!";
        showRegNum.appendChild(errorMsg);
    }

    function errorsDisplayDuplicates()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Oops that is a Duplicate!";
        showRegNum.appendChild(errorMsg);
    }

    function errorsDisplayUponFilter()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Oops town Selected is not in the list!";
        sshowRegNum.appendChild(errorMsg);
    }
    
    function checkDuplicate(regPlate){
        var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
        var arrayValueStores = Object.keys(valueStored);
        RegToStore.getPlatesStored(arrayValueStores);


        const containsPlate = arrayValueStores.some( element => element === numPlateFormat);
        if(containsPlate === true)
        {
            errorsDisplayDuplicates()
            while (showRegNum.firstChild) {
                sshowRegNum.removeChild(showRegNum.firstChild);
            }

        }
    }

     function addNumberPLate()
     {
             var numPlate = regNumText.value;
            
             regNumText.value = "";

             var verifyPlate = RegToStore.getMap();
             if(numPlate !== '' && RegToStore.validateInput(numPlate) === true)
             {
                var numPlateFormat = numPlate.toUpperCase();
                
                if(numPlateFormat)
                {
                    RegToStore.enterRegPlate(numPlateFormat); 
                    
                    var getRegPlate = RegToStore.getMap();
                    
                    var lastOne = Object.keys(getRegPlate)[Object.keys(getRegPlate).length -1];
                   
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));

                    var PlatesValues = JSON.parse(localStorage.getItem("RegistrationNumbers"));
                    var arrayList = Object.keys(PlatesValues);
                   
                    RegToStore.getPlatesStored(arrayList);

                   
                    showNumberPlates(numPlateFormat);

                    /**if(arrayList.includes(numPlateFormat) === true)
                    {
                        setTimeout(alert("That is a duplicate registration number!"), 3000);
                    }
                    else{
                        showNumberPlates(numPlateFormat);
                    }**/
                   
                }




                
             }
             else if(RegToStore.validateInput(numPlate) === false)
             {
               /** while (showRegNum.firstChild) {
                    showRegNum.removeChild(showRegNum.firstChild);
                } **/
                setTimeout(function(){  
                    alert("Oops that an Error Input. Please enter the correct input!");
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
            var arrayValueStores = Object.keys(valueStored);
            RegToStore.getPlatesStored(arrayValueStores);
            var selectedTownsArray = RegToStore.filterTown(locationIndicator.value);
            
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