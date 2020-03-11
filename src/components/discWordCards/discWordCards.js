import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import flatten from 'lodash/flatten';
import { disableHighlight } from 'styles/mixins';
import ProgressBar from 'components/progressBar/progressBar';
import DiscWordCard from 'components/discWordCard/discWordCard';
import CycleWordCardsButton from 'components/cycleWordCardsButton/cycleWordCardsButton';
import Results from 'components/results/results';
import words from 'src/words.json';
import { CLOVERLEAF_API_KEY } from 'root/keys';

const API_URL = 'https://test.cloverleaf.me/api';

const DiscWordCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 375px;
  ${disableHighlight}
`;

const Title = styled.div`
  font-size: 24px;
  font-family: 'Apercu Med';
  text-align: center;
  margin-bottom: 16px;
  ${disableHighlight}
`;

const BackAndNextButtons = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 375px;
  margin: 12px 12px 0px;
  ${disableHighlight}
`;

function DiscWordCards() {
  const [currentWordGroupIndex, setCurrentWordGroupIndex] = useState(0);
  const initialState = { description: '', rank: 0 };
  const [answers, setAnswers] = useState(Array(words.length).fill([initialState, initialState]));
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    (async function submit() {
      if (isComplete) {
        const response = await fetch(`${API_URL}/disc/evaluate`, {
          method: 'POST',
          body: JSON.stringify({ answers: flatten(answers) }),
          headers: {
            Authorization: `Bearer ${CLOVERLEAF_API_KEY}`,
            'Content-Type': 'application/json',
          }
        });
        const { scores } = await response.json();
        const traitScores = ['d', 'i', 's', 'c'].reduce((result, symbol) => [...result, { symbol, score: scores[symbol].total }], []);
        setResults(traitScores);
      }
    })();
  }, [isComplete]);

  return (
    <div>
      <ProgressBar
        currentWordGroup={currentWordGroupIndex + 1}
        amountOfWordGroups={words.length}
      />
      <Title>I see myself as</Title>
      <DiscWordCardsWrapper>
        {words[currentWordGroupIndex].map((word, idx) => (
          <DiscWordCard
            key={`disc_word_card_${idx + 1}`}
            description={word}
            setAnswers={setAnswers}
            currentWordGroupIndex={currentWordGroupIndex}
            isLeastSelected={answers[currentWordGroupIndex][0].description === word}
            isMostSelected={answers[currentWordGroupIndex][1].description === word}
          />
        ))}
      </DiscWordCardsWrapper>
      <BackAndNextButtons>
        <CycleWordCardsButton
          onClickHandler={() => currentWordGroupIndex === 0 ? () => ({}) : setCurrentWordGroupIndex(i => i - 1)}
          isDisabled={currentWordGroupIndex === 0 || isComplete}
          isLastWordGroup={currentWordGroupIndex === words.length - 1}
          direction='BACK'
        />
        <CycleWordCardsButton
          onClickHandler={() => currentWordGroupIndex < words.length - 1 ? setCurrentWordGroupIndex(i => i + 1) : setIsComplete(true)}
          isDisabled={!answers[currentWordGroupIndex][0].rank || !answers[currentWordGroupIndex][1].rank || isComplete}
          isLastWordGroup={currentWordGroupIndex === words.length - 1}
          direction='NEXT'
        />
      </BackAndNextButtons>
      {isComplete && results && <Results results={results} />}
    </div>
  );
}

export default DiscWordCards;
