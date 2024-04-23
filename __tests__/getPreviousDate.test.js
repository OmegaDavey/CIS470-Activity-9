
const getNextDate = require('../modules/getPreviousDate');
const getPreviousDate = require('../modules/getPreviousDate');

test('Previous date test', () => {
    test('Previous date test', () => {
        // Test case 1: Previous date of 4/16/2024 should be 4/15/2024
        expect(getPreviousDate(4, 16, 2024)).toEqual({ month: 4, day: 15, year: 2024 });

        // Test case 2: Previous date of 1/1/2000 should be 12/31/1999
        expect(getPreviousDate(1, 1, 2000)).toEqual({ month: 12, day: 31, year: 1999 });

        // Test case 3: Previous date of 12/31/2021 should be 12/30/2021
        expect(getPreviousDate(12, 31, 2021)).toEqual({ month: 12, day: 30, year: 2021 });
    });

    
});
