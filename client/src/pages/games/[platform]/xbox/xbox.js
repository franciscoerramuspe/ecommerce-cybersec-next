// xbox.js
import { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import { BasicLayout } from '@/layouts';
import styles from './xbox.module.scss';

export default function XboxPage() {
  const [xboxGames, setXboxGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logic for fetching Xbox games can go here
  // useEffect(() => {
  //   ... similar to PlayStationPage
  // }, []);

  const panes = [
    {
      menuItem: 'Xbox Series X Games',
      render: () => (
        <Tab.Pane attached={false}>
          <p>Xbox Series X Games will be listed here.</p>
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
