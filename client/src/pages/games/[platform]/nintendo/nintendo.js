// nintendo.js
import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { BasicLayout } from '@/layouts';
import styles from './nintendo.module.scss';

export default function NintendoPage() {
  const [nintendoGames, setNintendoGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logic for fetching Nintendo games can go here
  // useEffect(() => {
  //   ... similar to PlayStationPage
  // }, []);

  const panes = [
    {
      menuItem: 'Switch Games',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Switch Games will be listed here.</p>
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
