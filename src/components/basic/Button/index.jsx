import React from 'react';
import { Button } from 'antd';

const BasicButton = (props) => {
  return <Button {...props}></Button>;
};

export default React.memo(BasicButton, (oldProps, newProps) => {
  return oldProps === newProps; // true - 不更新 false - 更新
});
