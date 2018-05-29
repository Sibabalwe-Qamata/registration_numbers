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
    function filterRegPlate(TownChoice) 
    {
        let townSelected = {};
        let locationIndicator = '';

        if(TownChoice ==="CapeTown"){
            locationIndicator ='CA';
        }
        else if(TownChoice === "Paarl"){
            locationIndicator = 'CJ';
        }
        else if(TownChoice === "Worcester"){
            locationIndicator = 'CW';
        }
        else if(TownChoice ==="All"){
            return plateStored;
        }

       let PlateStoredList =  Object.keys(plateStored);

       for(var i = 0; i <PlateStoredList.length; i++)
       {
            if(PlateStoredList[i].startsWith(locationIndicator))
            {
                townSelected[i]=0
            }
       }
       return townSelected;
    }
    

    //To-Do: a function to check it the number plate starts with "C" or end with "WP" and return true or false


    //To-Do: a filter function to filter the 

    //Below are Getter functions

    function getRegPlate() {
        return numberPlateDisplay;
    }

    function getLocationMap() {
        return plateStored;
    }

    function getPlateList() {
        //let PlateArray= ;
        return Object.keys(plateStored);
    }

   
    return {
        enterRegPlate: setRegPlate,
        set_language: setTownLocation,

        getPlate: getRegPlate,
        getMap: getLocationMap,
        PlateList: getPlateList,

        filterTown:filterRegPlate
     }

}