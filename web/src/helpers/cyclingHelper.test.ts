import { getSchedule } from './cyclingHelper';

describe('getSchedule', () => {
  const testDate = new Date(2022, 6, 2);

  it('Ahead of schedule', () => {
    expect(getSchedule(10000, 7000, testDate)).to.equal(2014);
  });

  it('Near schedule', () => {
    expect(getSchedule(10000, 5000, testDate)).to.equal(14);
  });

  it('Behind schedule', () => {
    expect(getSchedule(10000, 3000, testDate)).to.equal(-1986);
  });
});
