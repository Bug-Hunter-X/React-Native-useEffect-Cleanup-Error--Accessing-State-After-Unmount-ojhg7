```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    let interval = setInterval(() => {
      if(isMounted.current){
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      isMounted.current = false;
    };
  }, []);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};
```