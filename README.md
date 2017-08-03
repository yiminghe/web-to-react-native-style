
# web-to-react-native-style

transform web style to react-native style

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/web-to-react-native-style.svg?style=flat-square
[npm-url]: http://npmjs.org/package/web-to-react-native-style
[travis-image]: https://img.shields.io/travis/yiminghe/web-to-react-native-style.svg?style=flat-square
[travis-url]: https://travis-ci.org/yiminghe/web-to-react-native-style
[coveralls-image]: https://img.shields.io/coveralls/yiminghe/web-to-react-native-style.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yiminghe/web-to-react-native-style?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/yiminghe/web-to-react-native-style.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/yiminghe/web-to-react-native-style
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/web-to-react-native-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/web-to-react-native-style

## api

### transform(propertyName, value): Object

```
import { transform } from 'web-to-react-native-style';
transform('padding','10px 5px') => {paddingTop:10,paddingBottom:10,paddingLeft:5,paddingRight:5}
```
