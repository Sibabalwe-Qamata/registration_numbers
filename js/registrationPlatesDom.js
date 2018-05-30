document.addEventListener('DOMContentLoaded', function () 
{

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");

    var showRegNum = document.getElementById("display");

    var showUserError = document.getElementById("errors");

   

    //Below to get the stored users from local storage
    var storedRegList = localStorage.getItem('Plate') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var RegToStore = displayRegNumberPlates(storedRegList);


    //To-Do:   Add Verify function here

    function verifyInput()
    {
        //Regex Function 





    }

    function showNumberPlates(regNumbers) 
    {
        if(regNumbers !== null){
            var newDisplay = document.createElement("div"); 
            newDisplay.classList.add('registrationNum');
    
            newDisplay.textContent = regNumbers;
            showRegNum.appendChild(newDisplay);

            //Insert Before here ...
        }
       

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


     function addNumberPLate()
     {

             let numPlate = regNumText.value;
             regNumText.value = "";

            
             
             let verifyPlate = RegToStore.getMap();
             let lastInputPlate;
             
         
             if(Object.keys(verifyPlate).length === 0)
             { lastInputPlate = ""}else { lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1]};

            if(numPlate === "" || numPlate.length > 10 ){
                errorsDisplay();
            }

             if((numPlate !== lastInputPlate))
             {
                var numPlateFormat = numPlate.toUpperCase();
                if(numPlateFormat)
                {
                    RegToStore.enterRegPlate(numPlateFormat); 
                    
                    let getRegPlate = RegToStore.getMap();

                    let lastOne = Object.keys(getRegPlate)[Object.keys(getRegPlate).length -1];
                    showNumberPlates(lastOne);
                
                    localStorage.setItem("RegistrationNumbers", JSON.stringify(getRegPlate));
                }
             }

     }


    function filterByTown(town)
    {
      let CPT_plates = ['CA ', 'CJ ', ' CW ', 'CAW', 'CAR', 'CEO', 'CFM' ];
    }



    function checkLocation() 
    {
        let RegList = RegToStore.PlateList();

        let location =  document.querySelector("input[name='town']:checked"); 

        if (location !== null){
            let selectedTown = RegToStore.filterTown(location.value);
            Object.keys(selectedTown).map( regPlate => {showNumberPlates(regPlate);})
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