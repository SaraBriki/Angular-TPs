import { DefaultImagePipe } from './default-image.pipe';

describe('DefaultImagePipe', () => {
  it('create an instance', () => {
    const defaultPipe = new DefaultImagePipe();
    expect(defaultPipe).toBeTruthy();
  });
});
