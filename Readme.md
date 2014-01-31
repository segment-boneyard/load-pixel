
# load-pixel

  Load conversion pixel easily.

## Installation

```bash
$ component install segmentio/load-pixel
```

## Example

```js
var pixel = require('load-pixel')('//facebook.com/:id/offsiet_event.php');

pixel({
  currency: 'USD',
  value: 1,
  id: 18403
}, { id: 10 });
```

## License

  (MIT)

