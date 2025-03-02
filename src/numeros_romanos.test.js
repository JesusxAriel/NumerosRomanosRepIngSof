const { convertirARomano } = require('./numeros_romanos');

test('Convertir 1 a romano', () => {
  expect(convertirARomano(1)).toBe('I');
});

test('Convertir 2 a romano', () => {
    expect(convertirARomano(2)).toBe('II');
  });

  test('Convertir 3 a romano', () => {
    expect(convertirARomano(3)).toBe('III');
  });

  test('Convertir 4 a romano', () => {
    expect(convertirARomano(4)).toBe('IV');
  });

  test('Convertir 5 a romano', () => {
    expect(convertirARomano(5)).toBe('V');
  });

  test('Convertir 6 a romano', () => {
    expect(convertirARomano(6)).toBe('VI');
  });

  test('Convertir 7 a romano', () => {
    expect(convertirARomano(7)).toBe('VII');
  });

  test('Convertir 8 a romano', () => {
    expect(convertirARomano(8)).toBe('VIII');
  });

  test('Convertir 9 a romano', () => {
    expect(convertirARomano(9)).toBe('IX');
  });
  test('Convertir 10 a romano', () => {
    expect(convertirARomano(10)).toBe('X');
  });
  test('Convertir 13 a romano', () => {
    expect(convertirARomano(13)).toBe('XIII');
  });
  test('Convertir 14 a romano', () => {
    expect(convertirARomano(14)).toBe('XIV');
  });
  test('Convertir 18 a romano', () => {
    expect(convertirARomano(18)).toBe('XVIII');
  });
  test('Convertir 25 a romano', () => {
    expect(convertirARomano(25)).toBe('XXV');
  });
  test('Convertir 39 a romano', () => {
    expect(convertirARomano(39)).toBe('XXXIX');
  });
  test('Convertir 40 a romano', () => {
    expect(convertirARomano(40)).toBe('XL');
  });
  test('Convertir 50 a romano', () => {
    expect(convertirARomano(50)).toBe('L');
  });
  test('Convertir 75 a romano', () => {
    expect(convertirARomano(75)).toBe('LXXV');
  });
  test('Convertir 90 a romano', () => {
    expect(convertirARomano(90)).toBe('XC');
  });
  test('Convertir 100 a romano', () => {
    expect(convertirARomano(100)).toBe('C');
  });
  test('Convertir 150 a romano', () => {
    expect(convertirARomano(150)).toBe('CL');
  });
  test('Convertir 200 a romano', () => {
    expect(convertirARomano(200)).toBe('CC');
  });
  test('Convertir 250 a romano', () => {
    expect(convertirARomano(250)).toBe('CCL');
  });
  test('Convertir 300 a romano', () => {
    expect(convertirARomano(300)).toBe('CCC');
  });
  test('Convertir 350 a romano', () => {
    expect(convertirARomano(350)).toBe('CCCL');
  });