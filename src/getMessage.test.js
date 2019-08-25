const getMessage = require('./getMessage');

describe('getMessage', () => {
    describe('for number equal 101', function() {
        it('returns "number is greater than 100"', function() {
            expect(getMessage(101)).toEqual('number is greater than 100'); //bylo abc - nie dzialalo...!!

        });
    });
});