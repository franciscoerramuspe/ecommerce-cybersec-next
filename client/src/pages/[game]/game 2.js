import { useState, useEffect } from "react"; // Import if state management or side effects are needed
import { BasicLayout } from "@/layouts";
import { Game as GameComponent } from "@/components/Game"; // Rename to avoid conflict with Game API
import { Separator } from "@/components/Shared";

export default function GamePage({ game }) { // Destructuring props
  // If state management is required, add useState here
  // const [state, setState] = useState(initialState);

  // If you need to fetch data or perform side effects, use useEffect here
  // useEffect(() => {
  //   // Data fetching or side effects
  // }, []);

  const wallpaper = game.attributes.wallpaper;

  return (
    <>
      <BasicLayout>
        <GameComponent.HeaderWallpaper image={wallpaper.data.attributes.url} />
        <GameComponent.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />

        <GameComponent.Info game={game.attributes} />

        <Separator height={30} />

        <GameComponent.Media
          video={game.attributes.video}
          screenshots={game.attributes.screenshots.data}
        />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
