function displayRegNumberPlates(NumberPlateDatabase) 
{

    var numberPlateDisplay = '';
    var town = '';
    var plateStored = NumberPlateDatabase || [];


    function setRegPlate(numPlate) {
        if (numPlate !== " ") {
            numberPlateDisplay = numPlate;
        }

        if (plateStored [numPlate] === undefined) 
        {
            plateStored[numPlate] = 0;
        }
    }

    function setTownLocation(location) {
        town = location;
    }


    // To-DO:  a function to add space to the registration plate numbers format the registration plate
    function formatRegPlate(word) 
    {
        
    }
    

    //To-Do: a function to check it the number plate starts with "C" or end with "WP" and return true or false
    function checkLocation() {
      
    }

    //To-Do: a filter function to filter the 

    //Below are Getter functions

    function getRegPlate() {
        return Name_to_greet;
    }



    function getLanguageChoice() {
        return language;
    }

    function getNameMap() {
        return namesGreeted;
    }

    function getCounter() {
        return Object.keys(namesGreeted).length;
    }
    
    
     return {
        set_Name: setName,
        set_language: setLanguage,
        capitilize: CapitilizeString,


        get_name: getNameToGreet,
        get_language: getLanguageChoice,
        get_NameList: getNameMap, 
        doGreet: greetUser,
        counter: getCounter
    }

}
