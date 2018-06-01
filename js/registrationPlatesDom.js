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

             let numPlate = regNumText.value;
             regNumText.value = "";

            
             
             let verifyPlate = RegToStore.getMap();
             let lastInputPlate;
             
         
             if(Object.keys(verifyPlate).length === 0)
             { lastInputPlate = ""}
             else 
             { lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1]};

            if(numPlate === "" || numPlate.length > 10 ){
                errorsDisplay();
            }

            lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1];
            if(numPlate === lastInputPlate)
            {
                errorsDisplayDuplicates();
            }

             if(numPlate !== lastInputPlate)
             {
                var numPlateFormat = numPlate.toUpperCase();
                if(numPlateFormat)
                {
                    RegToStore.enterRegPlate(numPlateFormat); 
                    
                    let getRegPlate = RegToStore.getMap();

                    let lastOne = Object.keys(getRegPlate)[Object.keys(getRegPlate).length -1];
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));
                    showNumberPlates(lastOne);
                }
             }
          

     }

     function showNumberPlates(regNumbers) 
     {
         //let numPlatesScreen = [];
         let lastReg;
 
         //numPlatesScreen.push(regNumbers);
        
         
         if((regNumbers !== null) && lastReg !== regNumbers)
         {
             var newDisplay = document.createElement("div"); 
             newDisplay.classList.add('registrationNum');
     
             newDisplay.textContent = regNumbers;
            
            showRegNum.appendChild(newDisplay);
             //Insert Before here ...
              //showRegNumParent.insertBefore(newDisplay, theFirstChild);
         }
     }
 


    function filterByTown(town)
    {
      let CPT_plates = ['CA ', 'CJ ', ' CW ', 'CAW', 'CAR', 'CEO', 'CFM' ];
    }



    function checkLocation() 
    {
        let locationIndicator =  document.querySelector("input[name='town']:checked").value; 

        if (locationIndicator !== null){
            let valueStored = JSON.parse(localStorage.getItem("RegistrationNumbers"));
            let arrayValueStores = Object.keys(valueStored);
            RegToStore.getPlatesStored(arrayValueStores);

            let CapeT =[];
            let Paarl_List = [];
            let Worcester = [];
            for(let k =0; k < arrayValueStores.length; k++)
            {
                if(arrayValueStores[k].startsWith("CA ") === true)
                {
                    CapeT.push(arrayValueStores[k]);
                    showNumberPlates(CapeT[k]);
                }
                else if(arrayValueStores[k].startsWith("CJ ") === true)
                {
                    Paarl_List.push(arrayValueStores[k]);
                    showNumberPlates(Paarl_List[k]);
                }
                else if(arrayValueStores[k].startsWith("CW ") === true){
                    Worcester.push(arrayValueStores[k]);
                    showNumberPlates(Worcester[k]);
                }
            }
            console.log("Cape Town", CapeT);
            console.log("Paarl", Paarl_List);
            console.log("Worcester", Worcester);
            let selectedTown = RegToStore.filterTown(locationIndicator);

            console.log(selectedTown);

            //showNumberPlates(selectedTown);
        }
        else{
            errorsDisplay();
        }
    }

 showBtn.addEventListener('click', function () {
        checkLocation();


        
      });  
addBtn.addEventListener('click', function () {
    addNumberPLate();
  });

  
});