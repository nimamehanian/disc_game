import { hot } from 'react-hot-loader/root';
import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { disableHighlight } from 'styles/mixins';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import DiscWordCards from 'components/discWordCards/discWordCards';

const Header = styled.div`
  color: #fff;
  background: #1db954;
  height: 60px;
  font-size: 20px;
  font-family: 'Apercu Med';
  line-height: 3;
  padding: 0px 0px 0px 8px;
  margin-bottom: 16px;
  ${disableHighlight}
`;

const DiscWordCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header>DISC</Header>
        <DiscWordCardsContainer>
          <DiscWordCards />
        </DiscWordCardsContainer>
        {/* <Switch> */}
        {/*   <Route exact path="/pathB" component={ComponentB} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default hot(App);
