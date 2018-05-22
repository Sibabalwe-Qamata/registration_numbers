document.addEventListener('DOMContentLoaded', function () {

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".displayPlates");
   

    //Below to get the stored users from local storage
    var storedUserList = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var namesToStore = greeting(storedUserList);
    
    function showNumberPlates() 
    {
        //var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        let numPlate = regNumText.value.trim();  

         if(numPlate !== null || numPlate !== "")
         {
            /**Do-Something
             * Take input to some function
             * Store the input in localStorage
             * 
             * **/ 
         }
        if(numPlate === "")
         {
           /**Do-Something
            * 
            * 'It should not add any values in the 
            * 
            * 
            */ 
         }
    }


    showBtn .addEventListener('click',function () 
    {
        
      
    });

    addBtn.addEventListener('click',function ()
    {
      
    });
});