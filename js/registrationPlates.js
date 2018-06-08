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
    function filterTownStored(arrayStored)
    {
        PlateStoredList = arrayStored;
       
    }


    function verifyInput(getRegNum)
    {
        //Regex Function 
        var regex =/^\w+[a-zA-Z0-9-]+ .*/;
        var formatedInput = getRegNum.match(regex);
        if(formatedInput === null || (getRegNum.length> 10))
        {
          return false;
        }
        else if((formatedInput.includes(getRegNum)) === true && (getRegNum.length <= 10))
        {
          return true;
        }
    }
    
    function getPlateStoredLocalStorage(){
        return PlateStoredList;
    }

    function filterRegPlate(TownChoice) 
    {
        var townSelected = [];
       
       if(TownChoice === "All"){
            return PlateStoredList;
       }
       for(var i = 0; i <PlateStoredList.length; i++)
       {
            if(PlateStoredList[i].startsWith(TownChoice))
            {
                townSelected.push(PlateStoredList[i]);

            } 
       }
       return townSelected;
    }
    

    function getRegPlate() {
        return numberPlateDisplay;
    }

    function getLocationMap() {
        return plateStored;
    }


   
    return {
        enterRegPlate: setRegPlate,
        set_town: setTownLocation,

        validateInput: verifyInput,

        getPlate: getRegPlate,
        getMap: getLocationMap,

        getPlatesStored: filterTownStored,

        filterTown:filterRegPlate,

        getStoredPlate : getPlateStoredLocalStorage
      
     }

}