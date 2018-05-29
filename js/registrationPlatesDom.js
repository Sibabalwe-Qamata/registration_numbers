document.addEventListener('DOMContentLoaded', function () 
{

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");

    var showRegNum = document.getElementById("display");

   

    //Below to get the stored users from local storage
    var storedRegList = localStorage.getItem('Plate') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var RegToStore = displayRegNumberPlates(storedRegList);

    

    function showNumberPlates(regNumbers) {
       
        //Adding numberPlates dynamically
        var newDisplay = document.createElement("div"); 
        newDisplay.classList.add('registrationNum');

        newDisplay.textContent = regNumbers;
        showRegNum.appendChild(newDisplay); 

    }

     function addNumberPLate(){

             let numPlate = regNumText.value;
             regNumText.value = "";

            
             
             let verifyPlate = RegToStore.getMap();
             let lastInputPlate;
             
         
             if(Object.keys(verifyPlate).length === 0)
             { lastInputPlate = ""}else { lastInputPlate = Object.keys(verifyPlate)[Object.keys(verifyPlate).length -1]};

             if(numPlate !== lastInputPlate)
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


    function filterByTown(town){
        for(var k =0; k < showRegNum.children.length; k++)
        {
            if(showRegNum.children[k].textContent.startsWith(town))
            {
                showRegNum.children[k].style.display = 'block';
            }
            else{
                showRegNum.children[k].style.display = 'none'; 
            }
        }
    }



    function checkLocation() 
    {
        let RegList = RegToStore.PlateList();

        let location =  document.querySelector("input[name='town']:checked"); 
        let selectedTown = RegToStore.filterTown(location.value);

        Object.keys(selectedTown).map( regPlate => {showNumberPlates(regPlate);})
        
    }

 showBtn.addEventListener('click', function () {
        checkLocation();
      });  
addBtn.addEventListener('click', function () {
    addNumberPLate();
  });

  
});