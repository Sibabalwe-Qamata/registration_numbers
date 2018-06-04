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

     });

     it('It should return the Number plates of the Town Choosen Town. (i.e Worcester)',
     function() {
       var numbers = displayRegNumberPlates({});
       
      });
    
      it('It should return the Number plates of the Town Choosen Town. (i.e Paarl)',
      function() {
        var numbers = displayRegNumberPlates({});
       
       });
  });