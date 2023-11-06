// pc.js
import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { BasicLayout } from '@/layouts';
import styles from './pc.module.scss';

export default function PCPage() {
  const [pcGames, setPcGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logic for fetching PC games can go here
  // useEffect(() => {
  //   ... similar to PlayStationPage
  // }, []);

  const panes = [
    {
      menuItem: 'Steam Games',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Steam Games will be listed here.</p>
        </Tab.Pane>
      ),
    },
    // ... more panes if needed
  ];

  return (
    <>
      <BasicLayout isContainer relative>
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}
