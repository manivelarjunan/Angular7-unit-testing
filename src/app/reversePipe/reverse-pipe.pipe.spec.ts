import { ReversePipePipe } from './reverse-pipe.pipe';

// Isolated test case.
describe('ReversePipePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipePipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('olleh')).toBe('hello');
  });
});
