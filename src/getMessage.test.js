const getMessage = require('./getMessage');

describe('getMessage', () => {
    describe('for number equal 101', function() {
        it('returns "number is greater than 100"', function() {
            expect(getMessage(101)).toEqual('number is greater than 100'); //bylo abc - nie dzialalo...!!
    describe('for number equal 101', function() {
        it('number is NOT greater than 100"', function() {
            expect(getMessage(50)).toEqual('number is NOT greater than 100');

        });
    });
});


TextDecoderStream('getMessage (version 2)', function() {
    expect(getMessage(101).toEqual('number is greater than 100'));
    expect(getMessage(50).toEqual('number is NOT greater than 100'));
})