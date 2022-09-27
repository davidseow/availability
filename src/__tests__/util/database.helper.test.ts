import { formatDate } from '../../util/database.helper';

describe('formatDate()', () => {
  it('should return empty array when passed empty array', () => {
    expect(formatDate([])).toEqual([]);
  });

  it('should return array of "Date" when passed a list of timestamps', () => {
    const sampleListOfTimeStamps = [
      1664654400000, 1664654400000, 1664656200000
    ];
    expect(formatDate(sampleListOfTimeStamps)).toEqual(
      sampleListOfTimeStamps.map((t) => new Date(t))
    );
  });
});
