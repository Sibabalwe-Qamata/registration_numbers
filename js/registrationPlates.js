function displayRegNumberPlates(NumberPlateDatabase) 
{

    var numberPlateDisplay = '';
    var town = '';
    var plateStored = NumberPlateDatabase || {};

    var PlateStoredList;


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

    //Below has to take the array from localStorage
    function filterTownStored(arrayStored)
    {
        PlateStoredList = arrayStored;
        return PlateStoredList;

    }

    // To-DO:  a function to add space to the registration plate numbers format the registration plate
    function filterRegPlate(TownChoice) 
    {
        
        var locationIndicator = '';

        var townSelected = [];
        var countTown = 0;
        var holdPlate = '';

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
            return PlateStoredList;
        }

      

       for(var i = 0; i <PlateStoredList.length; i++)
       {
           
            if(PlateStoredList[i].startsWith(locationIndicator))
            {
                townSelected[countTown]=PlateStoredList[i];
            }
       }
       return townSelected;
    }
    

    //To-Do: a function to check it the number plate starts with "C" or end with "WP" and return true or false


    //To-Do: a filter function

    function filteredTowns(location)
    {
        var filterLocation = [];
        var countTown = 0;
        var holdPlate = '';
        var storeTown = Object.keys(plateStored);

        for(var i=0; i<storeTown.length;i++){
           holdPlate = storeTown[i].slice(0,3);
           holdPlate = holdPlate.trim();
           if(holdPlate === location){
  
              filterLocation[countTown] = storeTown[i];
              countTown ++;
           }
        }
        return filterLocation;
    }
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
        set_town: setTownLocation,

        getPlate: getRegPlate,
        getMap: getLocationMap,
        getPlatesStored: filterTownStored,
        PlateList: getPlateList,

        filterTown:filterRegPlate,
        townsSelected: filteredTowns
     }

}