describe('The Registration Number Plates function (getNumberPlates Function)', function() 
{
  it('It should return the Number plates of the Town Given. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates();

      numbers.enterRegPlate("CA 785 965");
      assert.equal(numbers.getPlate(), "CA 785 965");
     });

     /**it('It should return the Number plates of the Town Given. (i.e Worcester)',
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
       });**/
  });

  describe('The Registration Number Plates function (Filter Function)', function() 
{
  it('It should return  an array of number plates of the town choosen. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates();

      numbers.enterRegPlate('CA 785 254');
      numbers.enterRegPlate('CA 123 254');

      numbers.filterTown('CA ');

      assert.equal(numbers.filterTown(
        
      ),['CA 785 254', 'CA 123 254']);

     });


     it('It should return  false since the input is invalid.',
    function() {
      var numbers = displayRegNumberPlates();
      assert.equal(numbers.validateInput("ca134235467586"),false);

     });

    
     /*** it('It should return an array of number plates of the town choosen. (i.e Paarl)',
      function() {
        var numbers = displayRegNumberPlates({});

        numbers.enterRegPlate('CJ 785 254');
        numbers.enterRegPlate('CJ 123 254');
  
        numbers.filterTown('CJ ');
  
        assert.equal(numbers.filterTown(),['CJ 785 254', 'CJ 123 254']);
       
       });


       it('It should return an array of number plates of the town choosen.. (i.e Worcester)',
       function() {
        var numbers = displayRegNumberPlates({});
  
        numbers.enterRegPlate('CW 785 254');
        numbers.enterRegPlate('CW 123 254');
  
        numbers.filterTown('CW ')
  
        assert.equal(numbers.filterTown(),['CW 785 254', 'CW 123 254']);
         
        });


       it('It should return an array of number plates of the town choosen.. (i.e All towns)',
       function() {
        var numbers = displayRegNumberPlates({});
  
        numbers.enterRegPlate('CW 785 254');
        numbers.enterRegPlate('CA 112 254');
        numbers.enterRegPlate('CJ 001 254');
  
        
  
        assert.equal(numbers.getStoredPlate("All"),['CW 785 254', 'CA 112 254', 'CJ 001 254']);
         
        });


        it('It should return an array which does not contain any values since the are no registration numbers entered... (i.e All towns)',
        function() {
         var numbers = displayRegNumberPlates({});
   
         numbers.enterRegPlate('');
         
         numbers.filterTown(numbers.PlateList(), "All")
         assert.isArray(numbers.all(), 'The array does not contain any registration numbers')
        
          
         });**/

  });