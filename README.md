# appmetrics-test
Trying out the appmetrics ecosystem

# install

```bash
$ npm i appmetrics-dash express --save
```

# usage

1. Add monitoring agent and run express on port 3000.
```js
require('appmetrics-dash').monitor();
// ...
app.listen(3000);
```

2. Make som requests to `localhost:3000/simple`
3. Check dashboard at `localhost:3001/appmetrics-dash`
4. profit

# Reference
- https://github.com/RuntimeTools/appmetrics
- https://developer.ibm.com/node/2017/10/13/appmetrics-dash_profiling/
- https://developer.ibm.com/open/2015/12/11/writing-appmetrics-probe/

# license
MIT
