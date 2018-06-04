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

   /** function removeElements()
    {
        showRegNum.removeChild(element.firstChild);

    }**/
    function errorsDisplayDuplicates()
    {
        var errorMsg = document.createElement("div"); 
        errorMsg.classList.add('userErrors');

        errorMsg.textContent = "Oops that is a Duplicate!";
        showUserError.appendChild(errorMsg);
    }


     function addNumberPLate()
     {

             var numPlate = regNumText.value;
             regNumText.value = "";

             var verifyPlate = RegToStore.getMap();
             //var lastInputPlate;
             
         
             /**if(Object.keys(verifyPlate).length === 0)
             { lastInputPlate = ""}
             else 
             { lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1]};

            if(numPlate === "" || numPlate.length > 10 ){
                errorsDisplay(); // This need to go the Input error function
            }

            lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1];
            if(numPlate === lastInputPlate)
            {
                errorsDisplayDuplicates();
            }**/

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
           
              //showRegNumParent.insertBefore(newDisplay, theFirstChild);
         }
     }
 


    function filterByTown(town)
    {
    //  let CPT_plates = ['CA ', 'CJ ', ' CW ', 'CAW', 'CAR', 'CEO', 'CFM' ];
    }



    function checkLocation() 
    {
        var locationIndicator =  document.querySelector("input[name='town']:checked").value; 

        var CapeT =[];
        var Paarl_List = [];
        var Worcester = [];
        var allTowns = [];

        if (locationIndicator !== null){
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
                allTowns[arrayValueStores[k]];
            }
            console.log("Cape Town: ", CapeT);
            console.log("Paarl", Paarl_List);
            //console.log("Worcester", Worcester);
            var selectedTown = RegToStore.filterTown(locationIndicator);
            console.log(selectedTown);

            //showNumberPlates(selectedTown);
        }
        else if(document.querySelector("input[name='town']:checked").value === "CapeTown")
        {
           
        }
    }



  window.addEventListener("load", function()
  {
    var PlatesValueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
    var arrayValues = Object.keys(PlatesValueStored); // It throws an array if nothing is added on local storage
    
    for(var p =0; p < arrayValues.length; p++)
    {
        showNumberPlates(arrayValues[p]);
    }

  })
  

    
 showBtn.addEventListener('click', function () {
        checkLocation();
        
      });  
addBtn.addEventListener('click', function () {
    addNumberPLate();
  });

  
});