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
