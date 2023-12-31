import { useState, useEffect } from "react";
import { Game } from "@/api"
import { title } from "process";
import { GridGames } from "@/components/Shared";


const gameCtrl = new Game();


export function LatestGames(props) {
    const { title, limit = 9, platformId = null } = props;
    const [games, setGames] = useState(null)
    
    useEffect(() => {
      (async () => {
        try {
          const response = await gameCtrl.getLatestPublished({
            limit,
            platformId
          });
          setGames(response.data)
          console.log(response)
        } catch (error) {
            console.error(error);
        }
        })();
      }, []);
    

    return (
        <div>
            <h2>{title}</h2>
            <GridGames games={games} />
        </div>
  )
}

