import React from 'react';
import { Button } from 'antd';

function LearnProxy() {
  /**
   * Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
   */

  const a = {};

  const p = new Proxy(a, {
    get: (obj, prop) => {
      console.log(`监听到 get 方法`)
      return obj[prop];
    },
    set: (obj, prop, value) => {
      console.log(`监听到 set 方法`)
      // The default behavior to store the value
      obj[prop] = value;

      // 表示成功
      return true;
    }
  })

  const handleClick = () => {
    p.name = 1;

    console.log(p.name);
  }
  return (
    <div>
      <Button onClick={handleClick}>Proxy 按钮</Button>
    </div>
  );
}

export default LearnProxy;
