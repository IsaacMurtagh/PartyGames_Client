import stringToNumber from '../stringToNumber';

describe('stringToNumber', () => {

  it('given an alphanumeric string', () => {
    const string = 'hello123';
    expect(stringToNumber(string)).toEqual(682);
  });

  it('given all a\'s string', () => {
    const string = 'aaa';
    expect(stringToNumber(string)).toEqual(291);
  });

})