import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DiscWordCardWrapper = styled.div`
  background: #fff;
  width: 171.5px;
  max-width: 343px;
  height: 94px;
  margin: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
`;

const Word = styled.div`
  color: #282828;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MostOrLeastButtons = styled.div`
  display: flex;
  justify-content: space-around;
  height: 36px;
  overflow: hidden;
  letter-spacing: 0.6px;
  font-family: 'Apercu Med';
  div {
    color: #fff;
    font-variant: small-caps;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    cursor: pointer;
    transition: all 0.15s ease;
    &:first-child {
      background: #969696;
      opacity: ${({ isLeastSelected }) => isLeastSelected ? 1 : 0.4};
    }
    &:last-child {
      background: #1db954;
      opacity: ${({ isMostSelected }) => isMostSelected ? 1 : 0.4};
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

function DiscWordCard({
  description,
  setAnswers,
  currentWordGroupIndex,
  isLeastSelected,
  isMostSelected,
}) {
  return (
    <DiscWordCardWrapper>
      <Word>{description}</Word>
      <MostOrLeastButtons isLeastSelected={isLeastSelected} isMostSelected={isMostSelected}>
        <div
          onClick={() => setAnswers(answers =>
            [
              ...answers.slice(0, currentWordGroupIndex),
              [
                { description, rank: 4 },
                answers[currentWordGroupIndex][1].description === description ? { description: '', rank: 0 } : answers[currentWordGroupIndex][1],
              ],
              ...answers.slice(currentWordGroupIndex + 1),
            ]
          )}
        >
          least
        </div>

        <div
          onClick={() => setAnswers(answers =>
            [
              ...answers.slice(0, currentWordGroupIndex),
              [
                answers[currentWordGroupIndex][0].description === description ? { description: '', rank: 0 } : answers[currentWordGroupIndex][0],
                { description, rank: 1 },
              ],
              ...answers.slice(currentWordGroupIndex + 1),
            ]
          )}
        >
          most
        </div>
      </MostOrLeastButtons>
    </DiscWordCardWrapper>
  );
}

DiscWordCard.propTypes = {
  description: PropTypes.string.isRequired,
  setAnswers: PropTypes.func.isRequired,
  currentWordGroupIndex: PropTypes.number.isRequired,
  isLeastSelected: PropTypes.bool.isRequired,
  isMostSelected: PropTypes.bool.isRequired,
};

export default DiscWordCard;
