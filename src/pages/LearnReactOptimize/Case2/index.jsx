import React, { useMemo, useCallback } from 'react';
import { Button } from 'antd';
import styles from './index.module.css';
/**
 * 使用 useMemo 缓存数据，类似于 Vue 的 computed 计算属性
 * 使用 useCallback 缓存函数
 * @returns
 */

const data = {
  userName: '张三',
  age: 19,
  fav: '篮球、排球',
};

const getUserInfo = () => {
  return {
    ...data,
    random: Math.random(),
  };
};
function Case2() {
  const [count, setCount] = React.useState(0);
  const userInfo = useMemo(() => getUserInfo(), []);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div>姓名：{userInfo.userName}</div>
        <div>年龄：{userInfo.age}</div>
        <div>爱好：{userInfo.fav}</div>
        <div>随机数: {userInfo.random}</div>
        <div>当前页面渲染次数: {count}</div>
        <Button onClick={handleClick}>刷新渲染组件</Button>
      </div>
    </div>
  );
}

export default Case2;
