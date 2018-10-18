import { CompareToDirective } from './compare-to.directive';

describe('CompareToDirective', () => {
  it('should create an instance', () => {
    const directive = new CompareToDirective('sttCompareTo', 'reverse');
    expect(directive).toBeTruthy();
  });
});
