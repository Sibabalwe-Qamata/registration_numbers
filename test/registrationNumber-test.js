describe('The Registration Number Plates function (getNumberPlates Function)', function() 
{
  it('It should return the Number plates of the Town Given. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates({});

      numbers.enterRegPlate("CA 785 965");
      assert.equal(numbers.getPlate(), "CA 785 965");
     });

     it('It should return the Number plates of the Town Given. (i.e Worcester)',
     function() {
       var numbers = displayRegNumberPlates({});
       numbers.enterRegPlate("CW 785 965");
       assert.equal(numbers.getPlate(), "CW 785 965");
      });
    
      it('It should return the Number plates of the Town Given. (i.e Paarl)',
      function() {
        var numbers = displayRegNumberPlates({});
        numbers.enterRegPlate("CJ 785 965");
        assert.equal(numbers.getPlate(), "CJ 785 965");
       });
  });

  describe('The Registration Number Plates function (Filter Function)', function() 
{
  it('It should return the Number plates of the Town Choosen Town. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates({});

      numbers.enterRegPlate('CA 785 254');
      numbers.enterRegPlate('CA 123 254');

      numbers.filterTown(numbers.PlateList(), "CapeTown")

      assert.deepEqual(numbers.getCapeTownList(),['CA 785 254', 'CA 123 254']);

     });

    
      it('It should return the Number plates of the Town Choosen Town. (i.e Paarl)',
      function() {
        var numbers = displayRegNumberPlates({});

        numbers.enterRegPlate('CJ 785 254');
        numbers.enterRegPlate('CJ 123 254');
  
        numbers.filterTown(numbers.PlateList(), "Paarl")
  
        assert.deepEqual(numbers.getPaarlList(),['CJ 785 254', 'CJ 123 254']);
       
       });


       it('It should return the Number plates of the Town Choosen Town. (i.e Worcester)',
       function() {
        var numbers = displayRegNumberPlates({});
  
        numbers.enterRegPlate('CW 785 254');
        numbers.enterRegPlate('CW 123 254');
  
        numbers.filterTown(numbers.PlateList(), "Worcester")
  
        assert.deepEqual(numbers.getWorcesterList(),['CW 785 254', 'CW 123 254']);
         
        });
  });