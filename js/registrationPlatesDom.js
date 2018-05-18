document.addEventListener('DOMContentLoaded', function () {

    var regNumText = document.querySelector(".regNumber");
    var addBtn = document.querySelector(".add");
    var showBtn = document.querySelector(".show");
    var DisplayPlates = document.querySelector(".displayPlates");
   

    //Below to get the stored users from local storage
    var storedUserList = localStorage.getItem('Name') ? JSON.parse(localStorage.getItem('Plate')) : {};
    var namesToStore = greeting(storedUserList);
    //displayCounter.innerHTML = namesToStore.counter();

    //Check if there is anything in LocalStorage which is a Map....
    /**function verifyMap() {
        if (localStorage.getItem('Array', JSON.parse(localStorage.getItem('Name'))) === undefined) {
            localStorage.setItem("ArrayList:", []);
        }
    }**/


    function showNumberPlates() {
        //var checkedRadioBtn = document.querySelector("input[name='language']:checked");
        let numPlate = regNumText.value.trim();  

         if(numPlate)
         {
             /**if(checkedRadioBtn !== null)
             {
                     
                var nameInCaps = namesToStore.capitilize(nameOfPerson);
                var nameToset = namesToStore.set_Name(nameInCaps);
                 languageType = checkedRadioBtn.value;
                var languageToUse = namesToStore.set_language(languageType);

                namesToStore.get_name();
                var newMapList = namesToStore.get_NameList();
                var greetMessage = namesToStore.doGreet();
       
                 localStorage.setItem("Name", JSON.stringify(newMapList));

                 displayCounter.innerHTML = namesToStore.counter();
                 DisplayGreet.innerHTML = greetMessage;


             }**/
         }
        if(numPlate === "")
         {
             if((languageType === '') || (languageType === null) ){
                DisplayGreet.innerHTML = "Please enter a name and choose a language!";
             }
            
         }

         if(typeof(numPlate) != null){

            if((languageType === '') || (languageType === null) ){
                DisplayGreet.innerHTML = "Please enter a name and choose a language!";
             }
         }

    }


    resetBtn.addEventListener('click', function () {
        
        window.location.reload();
        localStorage.clear();
        displayCounter.innerHTML = 0;
    });

    greetBtn.addEventListener('click', function () {
        verifyMap();
        greetPerson();
    });
});