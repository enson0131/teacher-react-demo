import React from 'react';

/**
 * for 循环中合理的使用key
 * @returns
 */

const list = [
  {
    id: 1,
    name: '张三',
  },
  {
    id: 2,
    name: '李四',
  },
  {
    id: 3,
    name: '王五',
  },
];
function Case3() {
  return (
    <div>
      {list.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default Case3;
