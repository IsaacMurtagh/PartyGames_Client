import splitCamelCase from "../splitCamelCase";

describe('splitCamelCase', () => {

  it('given camel case', () => {
    const string = 'CamelCaseString';

    expect(splitCamelCase(string)).toEqual('Camel Case String');
  });

});