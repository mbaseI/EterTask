import { onlyUnique, toTimestamp } from './utils';

describe('onlyUnique function', () => {
  it('should return unique values from an array', () => {
    const array = [1, 2, 3, 1, 2, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    const result = array.filter(onlyUnique);

    expect(result).toEqual(expectedOutput);
  });

  it('should return an empty array if input array is empty', () => {
    const array = [];
    const expectedOutput = [];
    const result = array.filter(onlyUnique);

    expect(result).toEqual(expectedOutput);
  });
});

describe('toTimestamp', () => {
  it('should convert a date string to a timestamp', () => {
    const date = new Date('2023-04-11T12:00:00');
    const timestamp = toTimestamp(date);
    expect(timestamp).toEqual(1681203600000);
  });
});
