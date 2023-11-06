// playstation.js
import { useState, useEffect } from "react";
import { Tab } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
// import { GameList } from "@/components/PlayStation"; // Assume you have a GameList component
import styles from "./playstation.module.scss";

export default function PlayStationPage() {
  const [ps4Games, setPs4Games] = useState([]);
  const [loading, setLoading] = useState(true);
  const [playstationGames, setPlaystationGames] = useState([]);

//   useEffect(() => {
    // Function to fetch PS5 games data
//     const fetchPS4Games = async () => {
//       try {
//         // Replace with actual API endpoint
//         const response = await fetch('/api/ps4-games'); 
//         const data = await response.json();
//         setPs4Games(data);
//       } catch (error) {
//         console.error("Failed to fetch PS4 games", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPS4Games();
//   }, []);

  const panes = [
    {
      menuItem: "PS5 Games",
      render: () => (
        <Tab.Pane attached={false}>
          <p>PS5 Games</p>
        </Tab.Pane>
      ),
    },
    {
        menuItem: "PS4 Games",
      render: () => (
        <Tab.Pane attached={false}>
          <p>PS4 Games</p>
        </Tab.Pane>
      ),
    }
    // You can add more panes if necessary, for other PlayStation categories
  ];

  return (
    <>
      {/* <Seo title="PlayStation Games" /> */}
      <BasicLayout isContainer relative>
        {/* Any additional content or components can go here */}
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}


