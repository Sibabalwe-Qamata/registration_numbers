describe('The Registration Number Plates Factory Function (getNumberPlates Function)', function() 
{
  it('It should return the Number plates of the Town Given. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates();

      numbers.enterRegPlate("CA 785 965");
      assert.equal(numbers.getPlate(), "CA 785 965");
     });

     it('It should return the Number plates of the Town Given. (i.e Paarl)',
     function() {
       var numbers = displayRegNumberPlates();
 
       numbers.enterRegPlate("CJ 785 965");
       assert.equal(numbers.getPlate(), "CJ 785 965");
      });

      it('It should return the Number plates of the Town Given. (i.e Worcester)',
      function() {
        var numbers = displayRegNumberPlates();
  
        numbers.enterRegPlate("CW 785 965");
        assert.equal(numbers.getPlate(), "CW 785 965");
       });

  });

  describe('The Registration Number Plates Factory Function (Filter Function)', function() 
{
  it('It should return  an array of number plates of the town choosen. (i.e Cape Town)',
    function() {
      var numbers = displayRegNumberPlates();

      numbers.enterRegPlate('CA 785 254');
      numbers.enterRegPlate('CA 123 254');

      assert.deepEqual(numbers.filterTown('CA '),['CA 785 254', 'CA 123 254']);

     });

     it('It should return an array of number plates of the town choosen. (i.e Paarl)',
      function() {
        var numbers = displayRegNumberPlates({});

        numbers.enterRegPlate('CJ 785 254');
        numbers.enterRegPlate('CJ 123 254');
  
        assert.deepEqual(numbers.filterTown('CJ '),['CJ 785 254', 'CJ 123 254']);
       
       });


       it('It should return an array of number plates of the town choosen. (i.e Worcester)',
      function() {
        var numbers = displayRegNumberPlates({});

        numbers.enterRegPlate('CW 785 254');
        numbers.enterRegPlate('CW 123 254');
  
        assert.deepEqual(numbers.filterTown('CW '),['CW 785 254', 'CW 123 254']);
       
       });

       it('It should return an array of number plates of the town choosen. (i.e George)',
       function() {
         var numbers = displayRegNumberPlates({});
 
         numbers.enterRegPlate('CAW 785 254');
         numbers.enterRegPlate('CAW 123 254');
   
         assert.deepEqual(numbers.filterTown('CAW'),['CAW 785 254', 'CAW 123 254']);
        
        });

        it('It should return an array of number plates of the town choosen. (i.e Somerset West)',
       function() {
         var numbers = displayRegNumberPlates({});
 
         numbers.enterRegPlate('CFM 785 254');
         numbers.enterRegPlate('CFM 123 254');
   
         assert.deepEqual(numbers.filterTown('CFM'),['CFM 785 254', 'CFM 123 254']);
        
        });

       it('It should return an array of number plates of the town choosen.. (i.e All towns)',
       function() {
        var numbers = displayRegNumberPlates({});
  
        numbers.enterRegPlate('CW 785 254');
        numbers.enterRegPlate('CA 112 254');
        numbers.enterRegPlate('CJ 001 254');
  
  
        assert.deepEqual(numbers.filterTown("All"),['CW 785 254', 'CA 112 254', 'CJ 001 254']);
         
        });
      });
    

describe('The Registration Number Plates Factory Function (validateInput Function)', function() 
{
  it('It should return  false since the input is invalid, and does not match alphanumeric characters.',
  function() {
    var numbers = displayRegNumberPlates();
    assert.equal(numbers.validateInput("ca134235467586"),false);

   });


   it('It should return  false since the input is invalid, and does not match alphanumeric characters.',
   function() {
     var numbers = displayRegNumberPlates();
     assert.equal(numbers.validateInput("c$$$$$$$$$$$"),false);

    });

    it('It should return  true since the input is valid, and matches alphanumeric characters.',
   function() {
     var numbers = displayRegNumberPlates();
     assert.equal(numbers.validateInput("CA 213-782"),true);

    });
  });
  