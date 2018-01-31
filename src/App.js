import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBundler from './containers/BurgerBundler/BurgerBundler'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBundler />
        </Layout>
      </div>
    );
  }
}

export default App;
