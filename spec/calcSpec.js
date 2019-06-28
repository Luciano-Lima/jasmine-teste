describe ("whatCanIDrink", function() {
    
    beforeEach(function(){
        drink = new whatCanIDrink();
    });
    
    describe("check age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        
        it("should return Sorry. I can’t tell what drink because that age is incorrect!"), function() {
            
        }
        
        it("should return drink toddy" , function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
    
        it("should return drink coke" , function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("should return drink beear", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("should return drink wisky", function() {
            var result = whatCanIDrink(130)
            expect(result).toBe("Drink Whisky");
        });
    });
});    
