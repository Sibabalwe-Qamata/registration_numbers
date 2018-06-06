function displayRegNumberPlates(NumberPlateDatabase) 
{

    var numberPlateDisplay = '';
    var town = '';
    var plateStored = NumberPlateDatabase || {};

    var PlateStoredList;

    var CapeT =[];
    var Paarl_List = [];
    var Worcester = [];
    var allTowns = [];


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
        //return PlateStoredList;
    }

    function getPlateStoredLocalStorage(){
        return PlateStoredList;
    }
    // To-DO:  a function to add space to the registration plate numbers format the registration plate
    function filterRegPlate(PlateStored, place) 
    {
        for(var k =0; k < PlateStored.length; k++)
        {
            if(PlateStored[k].startsWith("CA ") === true && place === "CapeTown")
            {
                CapeT.push(PlateStored[k]);
            }
            else if(PlateStored[k].startsWith("CJ ") === true && place ==="Paarl")
            {
                Paarl_List.push(PlateStored[k]);
            }
            else if(PlateStored[k].startsWith("CW ") === true && place ==="Worcester"){
                Worcester.push(PlateStored[k]);
            }
            else if(place === "All"){
                allTowns.push(PlateStored[k]);
            }
            
        }
        
    }
    
    //To-Do: a function to check it the number plate starts with "C" or end with "WP" and return true or false

    function getCapeTown(){
        return CapeT;
    }

    function getPaarl(){
        return Paarl_List;
    }

    function getWorcester(){
        return Worcester;
    }
   
    function getAll(){
        return allTowns;
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
        getPaarlList: getPaarl,
        getCapeTownList: getCapeTown,
        getWorcesterList: getWorcester,
        all: getAll, 
        getStoredPlate : getPlateStoredLocalStorage
      
     }

}