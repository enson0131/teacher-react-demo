import React from 'react';
import { Button } from 'antd';

function LearnDefineProperty() {
  const obj = { };
  let value = 1;
  Object.defineProperty(obj, 'name', {
    get: () => {
      console.log(`监听到外部获取 name 属性`);
      return value;
    },
    set: (nameValue) => {
      // 这里对于Vue来说将会触发视图更新
      console.log(`监听到外部想给name设置值为：${nameValue}`);
      // obj.name = nameValue; 会死循环
      value = nameValue;
    }
  });


  const handleClick = () => {
    console.log(`获取name值`, obj.name);
    obj.name = 2;
    console.log(`获取设置的name值`, obj.name);
  }

  return (
    <div>
      <Button onClick={handleClick}>defineProperty</Button>
    </div>
  );
}

export default LearnDefineProperty;
