import React from 'react';

import Aux from '../../hoc/Auxiliary';
import styles from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Main__wrap}>
      {props.children}
    </main>
  </Aux>
);

export default layout;