const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "minhamusica",
        autor: "guilherme",
        ano: "1996",
        estilo: "rock"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        autor: "guilherme",
        ano: "1996",
        estilo: "rock"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando autor', () => {
    const result = Validation.create({
        nome: "minhamusica",        
        ano: "1996",
        estilo: "rock"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando ano', () => {
    const result = Validation.create({
        nome: "minhamusica",
        autor: "guilherme",        
        estilo: "rock"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando estilo', () => {
    const result = Validation.create({
        nome: "minhamusica",
        autor: "guilherme",
        ano: "1996"        
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});