document.addEventListener('DOMContentLoaded', function () {

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");

    var showRegNum = document.getElementById("display");

   

    //Below to get the stored users from local storage
    //var storedUserList = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Plate')) : {};
    //var namesToStore = greeting(storedUserList);
    //displayCounter.innerHTML = namesToStore.counter();
    var RegList = [];
  


    function showNumberPlates() {
        
        let numPlate = regNumText.value;
       
        var regNumbersToStore = document.createElement('regNumbersToStore');
        //Adding numberPlates dynamically
        if(numPlate.length > 0 && numPlate !== null)
        {
            var numPlateFormat = numPlate.toUpperCase(); 

            //To Display the registration numbers in the list
            var newDisplay = document.createElement("div"); 
            newDisplay.classList.add('registrationNum');
            // and give it some content 

            newDisplay.textContent = numPlateFormat;
            showRegNum.appendChild(newDisplay); 
         
        }


       
    }

    /**showBtn.addEventListener('click', function () {
        
      
    });**/

    addBtn .addEventListener('click', function () {
      showNumberPlates();
    });
});