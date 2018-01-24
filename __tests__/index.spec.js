import { transform } from '../src/';

describe('web-to-react-native-style', () => {
  it('support padding', () => {
    expect(transform('padding', '10px 4px')).toMatchSnapshot();
  });

  it('support margin', () => {
    expect(transform('margin', '10px 4px')).toMatchSnapshot();
  });

  it('support font-weight', () => {
    expect(transform('font-weight', '10')).toMatchSnapshot();
  });

  it('support border', () => {
    expect(transform('border', '10px solid red')).toMatchSnapshot();
  });

  it('support border-radius', () => {
    expect(transform('border-radius', '1px 2px')).toMatchSnapshot();
  });

  it('support border-color', () => {
    expect(transform('border-color', 'red #f015ca')).toMatchSnapshot();
  });

  it('support border-width', () => {
    expect(transform('border-width', '2px 5rpx')).toMatchSnapshot();
  })

  it('support flex', () => {
    expect(transform('display', 'flex')).toMatchSnapshot();
  });

  it('support background', () => {
    expect(transform('background', '#fff')).toMatchSnapshot();
  });

  it('support box-shadow', () => {
    expect(transform('box-shadow', '10px 5px 5px black;')).toMatchSnapshot();
  });

  it('support text-shadow', () => {
    expect(transform('text-shadow', '10px 5px 5px black;')).toMatchSnapshot();
  });

  it('support font-family', () => {
    expect(transform('font-family', `'lucida grande', tahoma, verdana, arial, sans-serif`)).toMatchSnapshot();
  });

  it('support transform', () => {
    expect(transform('transform', `translate(12px, 50%) scale(2, 0.5) rotate(10deg)`)).toMatchSnapshot();
  });
});
