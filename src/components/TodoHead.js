import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9cef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        font-size: 21px;
        color: #868e96;
    }

    .tasks-left {
        margin-top: 40px;
        font-size: 18px;
        color: #20c997;
        font-weight: bold;
    }
`;

function TodoHead() {

    let TodayDate = new Date();
    let date = TodayDate.getFullYear() +  '년 ' + (TodayDate.getMonth() + 1 ) + '월 ' + TodayDate.getDate() + '일';

  return (
    <TodoHeadBlock>
        <h1>{date}</h1>
        <div className="day">일요일</div>
        <div className="tasks-left">할 일 1개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;