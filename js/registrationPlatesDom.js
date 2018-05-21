document.addEventListener('DOMContentLoaded', function () {

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".list-plates");

   

    //Below to get the stored users from local storage
    //var storedUserList = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Plate')) : {};
    //var namesToStore = greeting(storedUserList);
    //displayCounter.innerHTML = namesToStore.counter();
    var RegList = [];
  


    function showNumberPlates() {
        
        let numPlate = regNumText.value;
        var numPlateFormat = numPlate.toUpperCase(); 
        var regNumbersToStore = document.createElement('regNumbersToStore');
       // console.log(numPlate);
        
        //Adding numberPlates dynamically
        if(numPlate.length > 0 && numPlate !== null)
        {
            

            //To Display the registration numbers in the list
            var newDisplay = document.createElement("div"); 
            // and give it some content 
            var newContent = document.createTextNode(numPlateFormat); 

            console.log(newContent);
            // add the text node to the newly created div
            newDisplay.appendChild(newContent);  

        }


       
    }

    /**showBtn.addEventListener('click', function () {
        
      
    });**/

    addBtn .addEventListener('click', function () {
      showNumberPlates();
    });
});