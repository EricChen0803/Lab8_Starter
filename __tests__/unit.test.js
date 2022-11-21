// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('111-111-1111 to be a true phone number', () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
  });
  test('222-222-2222 to be a true phone number', () => {
    expect(functions.isPhoneNumber("222-222-2222")).toBe(true);
  });
  test('1111 to be a false phone number', () => {
    expect(functions.isPhoneNumber("1111")).toBe(false);
  });
  test('2222 to be a false phone number', () => {
    expect(functions.isPhoneNumber("2222")).toBe(false);
  });

test('erchen@ucsd.edu to be a true email', () => {
    expect(functions.isEmail("erchen@ucsd.edu")).toBe(true);
  });
  test('e@ucsd.edu to be a true email', () => {
    expect(functions.isEmail("e@ucsd.edu")).toBe(true);
  });
  test('ucsd.edu to be a false email', () => {
    expect(functions.isEmail("ucsd.edu")).toBe(false);
  });
  test('edu to be a false email', () => {
    expect(functions.isEmail("edu")).toBe(false);
  });

  test('Ccccc to be a strong password', () => {
    expect(functions.isStrongPassword("Ccccc")).toBe(true);
  });
  test('bbbbb to be a strong password', () => {
    expect(functions.isStrongPassword("bbbbb")).toBe(true);
  });
  test('1bbbb to be a weak password', () => {
    expect(functions.isStrongPassword("1bbbb")).toBe(false);
  });
  test('2bbbb to be a weak password', () => {
    expect(functions.isStrongPassword("2bbbb")).toBe(false);
  });

  test('01/01/2002 to be a valid date', () => {
    expect(functions.isDate("01/01/2002")).toBe(true);
  });
  test('02/01/22 to be a valid date', () => {
    expect(functions.isDate("02/01/2002")).toBe(true);
  });
  test('01/01/22 to be an invalid date', () => {
    expect(functions.isDate("01/01/22")).toBe(false);
  });
  test('01/01/2 to be an invalid date', () => {
    expect(functions.isDate("01/01/2")).toBe(false);
  });

  test('#000000 to be a valid hex color', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
  });
  test('#000001 to be a valid hex color', () => {
    expect(functions.isHexColor("#000001")).toBe(true);
  });
  test('#0000 to be a invalid hex color', () => {
    expect(functions.isHexColor("#0000")).toBe(false);
  });
  test('#11111 to be a invalid hex color', () => {
    expect(functions.isHexColor("#11111")).toBe(false);
  });
