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


   

   
    function errorsDisplay()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Error Input! Please enter a Western Cape Registration Number Plate and the press the Add button!";
        showUserError.appendChild(errorMsg);
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
    
    function checkDuplicate(regPlate){
        var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
        var arrayValueStores = Object.keys(valueStored);
        RegToStore.getPlatesStored(arrayValueStores);


        const containsPlate = arrayValueStores.some( element => element === numPlateFormat);
        if(containsPlate === true)
        {
            errorsDisplayDuplicates()
            while (showUserError.firstChild) {
                showUserError.removeChild(showUserError.firstChild);
            }

        }
    }

     function addNumberPLate()
     {
             var numPlate = regNumText.value;
<<<<<<< HEAD
=======
            
>>>>>>> 1dff91758a7cc7311420c27f8e7beb47a51857a7
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

                    showNumberPlates(lastOne);
                    /**if(arrayList.includes(numPlateFormat) === true)
                    {
                        while (showUserError.firstChild) {
                            showUserError.removeChild(showUserError.firstChild);
                        }
                        window.setInterval(errorsDisplayDuplicates(), 1000);
                    }
                    else{
                        showNumberPlates(lastOne);
                    }**/
                   
                }
             }
             else if(verifyInput(numPlate) === false)
             {
                while (showUserError.firstChild) {
                    showUserError.removeChild(showUserError.firstChild);
                } 
                var errorMsg = document.createElement("div"); 
                 errorMsg.classList.add('userErrors');
                 errorMsg.textContent = "Oops that is an incorrect Input!";
                 showUserError.appendChild(errorMsg); 
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
<<<<<<< HEAD
        var locationIndicator =  document.querySelector("input[name='town']:checked"); 

            while (showRegNum.firstChild) {
            showRegNum.removeChild(showRegNum.firstChild);
            }

            if(locationIndicator.value === null || locationIndicator === undefined){
                errorsDisplay();
            }
            else if (locationIndicator.value !== null)
            {
                var valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
                var arrayValueStores = Object.keys(valueStored);
                RegToStore.getPlatesStored(arrayValueStores);

            
                RegToStore.filterTown(arrayValueStores, locationIndicator);
                if(locationIndicator.value === "CapeTown")
                {
                    var forCape = RegToStore.getCapeTownList();
                    if(forCape.length === 0){
                        errorsDisplayUponFilter();
                    }
                    else{
                        while (showUserError.firstChild) {
                            showUserError.removeChild(showUserError.firstChild);
                            }
                    for(var z =0 ; z <forCape.length; z++){ showNumberPlates(forCape[z])}
                    }
                
                }
                if(locationIndicator.value === "Paarl")
                {
                    var forPaarl = RegToStore.getPaarlList();
                    if(forPaarl.length === 0){
                        errorsDisplayUponFilter();
                    }else{
                        while (showUserError.firstChild) {
                            showUserError.removeChild(showUserError.firstChild);
                            }
                    for(var p =0 ; p <forPaarl.length; p++){ showNumberPlates(forPaarl[p])}}
                
                }
                if(locationIndicator.value === "Worcester")
                {
                    var forWorcester = RegToStore.getWorcesterList();
                    if(forWorcester.length === 0){
                        errorsDisplayUponFilter();
                    }
                    else{
                        while (showUserError.firstChild) {
                            showUserError.removeChild(showUserError.firstChild);
                            }
                    for(var w =0 ; w <forWorcester.length; w++){ showNumberPlates(forWorcester[w])}
                    }
                }
                if(locationIndicator.value === "All"){
                    var forAll = RegToStore.all(); 
                    if(forAll.length === 0){
                        errorsDisplayUponFilter();
                    }
                    else{
                        while (showUserError.firstChild) {
                            showUserError.removeChild(showUserError.firstChild);
                            }
                        for(var a =0 ; a <arrayValueStores.length; a++){ showNumberPlates(arrayValueStores[a])}
                    }
                    
                }
        }
        else{
=======
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
>>>>>>> 1dff91758a7cc7311420c27f8e7beb47a51857a7
            
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