function displayRegNumberPlates(NumberPlateDatabase) 
{

    var numberPlateDisplay = '';
    var town = '';

    var plateStored = NumberPlateDatabase || {};
   
    function setRegPlate(numPlate) 
    {
        if (numPlate !== " ") {
            numberPlateDisplay = numPlate;
        }

        if (plateStored[numPlate] === undefined) 
        {
            plateStored[numPlate] = 0;
        }
    }
    function getRegPlate(){
        return numberPlateDisplay;
    }

    function verifyInput(getRegNum)
    {
        var regex =/^\w+[a-zA-Z0-9-]+ .*/;
        var formatedInput = getRegNum.match(regex);
        
        
        if((getRegNum.length > 11))
        {
          return false;
        }
        else if((getRegNum.length <= 11))
        {
          return true;
        }
    }
   
    function getRegPlateList()
    {
        return plateStored;
    }
   
    function filterRegPlate(TownChoice) 
    {
        var townSelected = [];
       
        var newArray = Object.keys(plateStored);

       if(TownChoice === "All"){
            return newArray ;
       }
       for(var i = 0; i <newArray.length; i++)
       {
            if(newArray[i].startsWith(TownChoice))
            {
                townSelected.push(newArray[i]);

            } 
       }
       return townSelected;
    }
    
  
    return {
        enterRegPlate: setRegPlate,
    
        validateInput: verifyInput,

        getPlate: getRegPlate,
        
        getStoredList: getRegPlateList,

        filterTown:filterRegPlate

      
     }

}