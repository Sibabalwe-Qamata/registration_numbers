function displayRegNumberPlates(NumberPlateDatabase) 
{

   var numberPlateDisplay = '';
    var town = '';
    var plateStored = NumberPlateDatabase || [];


    function setRegPlate(numPlate) 
    {
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
        return numberPlateDisplay;
    }

    function getLocationMap() {
        return plateStored;
    }

    function getCounter() {
        return Object.keys(plateStored);
    }
    
    
    return {
        enterRegPlate: setRegPlate,
        set_language: setTownLocation,

        getPlate: getRegPlate,
        getMap: getLocationMap,
        counter: getCounter
     }

}
