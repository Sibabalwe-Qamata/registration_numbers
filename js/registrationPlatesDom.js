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

            localStorage.setItem("RegistrationNumbers", JSON.stringify(numPlateFormat));
        }
    }


    function filterTown(town){
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


    function checkTown()
    {
        var checkedRadioBtn = document.querySelector("input[name='town']:checked");
        if(checkedRadioBtn === "CapeTown")
        {
            filterTown("CY");

        }
        else if(checkedRadioBtn === "Paarl")
        {
            filterTown("CJ");
        }
        else if(checkedRadioBtn === "Worcester")
        {
            filterTown("CW");
        }
        else if(checkedRadioBtn === "All")
        {
            for(var p =0;p <showRegNum.children.length; p++)
            {
                showRegNum.children[p].style.display ="block";
            }
        } 
    }

addBtn.addEventListener('click', function () {
    showNumberPlates();
  });
/**showBtn.addEventListener('click', function () {
    checkTown(); 
});**/


});