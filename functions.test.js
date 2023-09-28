const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.add(1, 2)).toBe(3);
})

test('adds 2 + 2 not to equal 5', () => { 
  expect(functions.add(2, 2)).not.toBe(5);
})

test('adds 1 + 2 to equal null', () => {
  expect(functions.add(1, 2)).not.toBe(null);
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('should be null', () => {
  expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
	expect(functions.isNull()).toBeFalsy();
});

test('User should be Brad Traversy', () => {
  expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'});
})

test('Should be under 1600', () => { 
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
  expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex
test('should only contain words', () => {
  expect('testing').toMatch(/\w+/g);
})

test('should only contain numbers', () => {
  expect('654654').toMatch(/\d+/g);
})

// Arrays
test('should contain a Karen', () => {
  expect(['Heather', 'Karen', 'Becky']).toContain('Karen');
})

// Asynchronous code testing
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1);
  return functions.fetchUser().then(user => {
    expect(user.name).toEqual('Leanne Graham');
  })
});

// Async & Await
test('User fetched name should be Leanne Graham', async() => {
  expect.assertions(1);
  const user = await functions.fetchUser();
  expect(user.name).toEqual('Leanne Graham');
})