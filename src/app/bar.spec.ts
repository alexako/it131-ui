import { Bar } from './bar';

describe('Bar', () => {
  it('should create an instance', () => {
    expect(new Bar()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
      let bar = new Bar({
          name: 'Test bar',
          rating: 3.5,
          description: 'Description for test bar'
      });

      expect(bar.name).toEqual('Test bar');
      expect(bar.rating).toEqual(3.5);
      expect(bar.description).toEqual('Description for test bar');
  });
});
