React classNames minimal utility

```javascript
import classNames from '@aqrojo/class-names'
//...

const App = () => (
  <div className={classNames(
    'static-class1', 
    'static-class2',
    {
      'dynamic-class-1': true,
      dynamicClass2: true
    }
  )}>
    Hello world
  </div>  
)
```
