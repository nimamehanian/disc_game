import React from 'react';
import styled from 'styled-components';
import { disableHighlight } from 'styles/mixins';

const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 336px;
  height: 48px;
  border-bottom: 2px solid #6772e5;
  margin: 0px 19.5px 24px;
  overflow: hidden;
  position: relative;
  font-family: 'Apercu Med';
  ${disableHighlight}
`;

const Counter = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Current = styled.div`
  font-size: 28px;
  color: #6772e5;
  transform: translateY(4.5px);
`;

const Total = styled.div`
  font-size: 14px;
  color: #6772e599;
  span {
    margin: 0px 4px;
  }
`;

const Juice = styled.div`
  width: 336px;
  height: 5px;
  background: #6772e5;
  position: absolute;
  bottom: 0px;
  transition: all 333ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
  transform: ${({ currentWordGroup }) => `translate3d(${-336 + (currentWordGroup * 14)}px, 1px, 0px)`};
`;

function ProgressBar({ currentWordGroup, amountOfWordGroups }) {
  return (
    <ProgressBarWrapper>
      <Counter>
        <Current>{currentWordGroup}</Current>
        <Total>
          <span>{'/'}</span>
          {amountOfWordGroups}
        </Total>
      </Counter>
      <Juice currentWordGroup={currentWordGroup} />
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
