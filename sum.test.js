const sum = require('./sum')

describe('sum', () => {
    it('should add 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('object assignment', () => { 
        const obj = {};
        expect(obj).toEqual({});
    });
});

describe("truthy or falsy", () => {
    it("null", () => {
        const n = null;
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).toBeFalsy();
    })
});

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    })
});