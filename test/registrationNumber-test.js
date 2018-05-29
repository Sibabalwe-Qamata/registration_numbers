describe('The Registration Number Plates function', function() 
{
  it('It should return the Number plates of the Town Given.',
    function() {
      var numbers = displayRegNumberPlates({});

      numbers.enterRegPlate("CA 785 965");
      numbers.filterTown("CapeTown");

      assert.equal(numbers.getPlate(), "CA 785 965");
     });
  });