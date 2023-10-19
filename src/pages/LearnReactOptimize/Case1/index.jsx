import React, { useEffect, useState } from 'react';

/**
 * 组件卸载的时候清除相关事件、定时器
 * @returns
 */
function Case1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default Case1;
