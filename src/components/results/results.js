import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { disableHighlight } from 'styles/mixins';

const ResultsWrapper = styled.div`
  margin: 24px 0px 12px;
`;

const Title = styled.div`
  font-size: 24px;
  font-family: 'Apercu Med';
  text-align: center;
  margin-bottom: 16px;
  ${disableHighlight}
`;

const Traits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 375px;
  ${disableHighlight}
`;

const ElementalTrait = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 171.5px;
  width: 171.5px;
  margin: 2px;
  color: #fff;
  background: ${({ color }) => color};
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const Score = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 24px;
`;

const Symbol = styled.div`
  font-size: 88px;
  opacity: 0.6;
  text-transform: uppercase;
`;

const Label = styled.div`
  position: absolute;
  bottom: 4px;
  left: 4px;
  opacity: 0.8;
  text-transform: capitalize;
`;

const Descriptors = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 11px;
  opacity: 0.8;

  position: absolute;
  top: 4px;
  right: 4px;
  span {
    margin-bottom: 1px;
  }
`;

const traits = {
  d: { label: 'decisive', color: '#e01e5a', descriptors: ['authoritative', 'determined', 'courageous', 'responsible'] },
  i: { label: 'interactive', color: '#ecb22e', descriptors: ['cheerful', 'educating', 'inspiring', 'unifying'] },
  s: { label: 'stabilizing', color: '#2eb67d', descriptors: ['observant', 'principled', 'purposeful', 'patient'] },
  c: { label: 'conscientious', color: '#35c5f0', descriptors: ['balanced', 'concerned', 'methodical', 'organized'] },
};

function Results({ results }) {
  return (
    <ResultsWrapper>
      <Title>Results</Title>
      <Traits>
        {results.map(({ symbol, score }) => (
          <ElementalTrait
            key={`${symbol}`}
            color={traits[symbol].color}
          >
            <Score>{score}</Score>
            <Symbol>{symbol}</Symbol>
            <Label>{traits[symbol].label}</Label>
            <Descriptors>{traits[symbol].descriptors.map((desc, i) => <span key={`desc_${i + 1}`}>{desc}</span>)}</Descriptors>
          </ElementalTrait>
        ))}
      </Traits>
    </ResultsWrapper>
  );
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.oneOf(['d', 'i', 's', 'c']).isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Results;
