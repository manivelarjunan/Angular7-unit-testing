import { ReversePipe } from './reverse-value.pipe';

// Isolated test case.
describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('olleh')).toBe('hello');
  });
});
