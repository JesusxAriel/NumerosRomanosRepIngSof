const { convertirARomano } = require('./numeros_romanos');

test('Convertir 1 a romano', () => {
  expect(convertirARomano(1)).toBe('I');
});

test('Convertir 2 a romano', () => {
    expect(convertirARomano(2)).toBe('II');
  });
