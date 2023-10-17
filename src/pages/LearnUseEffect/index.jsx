import React, { useEffect } from "react";
import { useState } from "react";
import BasicButton from "../../components/basic/Button/index";


const LearnUseState = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(`count---->`, count);
  }, [count])

  return (
    <BasicButton onClick={handleClick}>
      You pressed me {count} times
    </BasicButton>
  );
}


export default LearnUseState;
