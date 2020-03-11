import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CycleWordCardsButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 36px;
  width: ${({ direction }) => direction === 'BACK' ? '36px' : '94px'};
  font-size: ${({ direction }) => direction === 'BACK' ? '18px' : '14px'};
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  color: ${({ direction }) => direction === 'BACK' ? '#6772e5' : '#fff'};
  background: ${({ direction, isDisabled }) => isDisabled ? (direction === 'BACK' ? '#d3dde4' : '#6772e566') : (direction === 'BACK' ? '#fff' : '#6772e5')};
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 555ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
  span {
    margin-left: 4px;
    position: relative;
    top: 1px;
    left: 0px;
    transition: all 555ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
  }
  &:hover {
    ${({ isDisabled }) => isDisabled ? '' : `
      box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.11), 0px 3px 6px rgba(0, 0, 0, 0.08);
      transform: translateY(${isDisabled ? '0px' : '-1px'});
      span {
        color: #e39f48;
        left: 4px;
      }
    `}
  }
`;

function CycleWordCardsButton({ onClickHandler, isDisabled, isLastWordGroup, direction }) {
  return (
    <CycleWordCardsButtonWrapper
      onClick={isDisabled ? () => ({}) : onClickHandler}
      isDisabled={isDisabled}
      direction={direction}
    >
      {direction === 'BACK' ? '←' : (isLastWordGroup ? 'Finish!' : <>{'Next'}<span>{'→'}</span></>)}
    </CycleWordCardsButtonWrapper>
  );
}

CycleWordCardsButton.defaultProps = {
  onClickHandler: () => ({}),
  isDisabled: false,
};

CycleWordCardsButton.propTypes = {
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  isLastWordGroup: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['BACK', 'NEXT']).isRequired,
};

export default CycleWordCardsButton;
