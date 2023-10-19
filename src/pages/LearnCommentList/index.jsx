import React, { useState } from 'react';
import { Input, Button, Divider, List, Avatar } from 'antd';
import styles from './index.module.css';

function LearnCommentList() {
  const [creator, setCreator] = useState('');
  const [content, setContent] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleChange = (e) => {
    setCreator(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    setCommentList([...commentList, { creator, content }]);
  };

  return (
    <div className={styles.page}>
      <Input
        className={styles.inputClass}
        value={creator}
        onChange={handleChange}
        placeholder="请输入评论人"
      ></Input>
      <Input.TextArea
        className={styles.textAreaClass}
        placeholder="请输入评论内容"
        onChange={handleContentChange}
      ></Input.TextArea>
      <Button className={styles.btnClass} type="primary" onClick={handleClick}>
        发表评论
      </Button>

      <Divider />

      <div>
        <List
          itemLayout="horizontal"
          dataSource={commentList}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                }
                title={<a>{item.creator}</a>}
                description={item.content}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default LearnCommentList;
