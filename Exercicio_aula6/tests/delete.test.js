const Constants = require('../src/utils/Constants');
const Delete = require('../src/utils/delete');

test('Caso válido', () => {
    const result = Delete.delete({
        nome: "Guilherme",
        autor: "100",
        ano: "srs",
        estilo: "Fogo"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Delete.delete({
        autor: "100",
        ano: "srs",
        estilo: "Fogo"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando autor', () => {
    const result = Delete.delete({
        nome: "Guilherme",
        ano: "100",
        estilo: "srs"
    });    
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});