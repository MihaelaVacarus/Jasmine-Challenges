describe("My whatCanIDrink function", function() {
    beforeEach(function() {
        drink = new whatCanIDrink();
    });

    describe("Check age", function() {
        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("should return drink Toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("should return drink coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });

        it("should return drink beer when called as whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });

        it("should return drink whiskey when called as whatCanIDrink(60)", function() {
            var result = whatCanIDrink(60)
            expect(result).toBe("Drink Whiskey");
        });

        it("should should be unable to return a drink when called as whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        });
    });
});
