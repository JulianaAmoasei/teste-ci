import { soma, multiplica } from "../index.js";

describe('função soma', () => {
  test('deve retornar 4', () => {
    expect(soma(2, 2)).toEqual(4);
  })
});

describe('função multiplica', () => {
  test('deve retornar 4', () => {
    expect(multiplica(2, 2)).toEqual(4);
  })
});