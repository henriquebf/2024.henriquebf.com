import { classNames } from './utilsHelper';

describe('classNames', () => {
  it('Single classname', () => {
    expect(classNames(['xxx'])).to.equal('xxx');
  });

  it('Multiple classnames', () => {
    expect(classNames(['xxx', 'yyy', 'zzz'])).to.equal('xxx yyy zzz');
  });

  it('Multiple classnames with falsy', () => {
    expect(classNames(['xxx', 'yyy', 'zzz', undefined])).to.equal('xxx yyy zzz');
  });
});
