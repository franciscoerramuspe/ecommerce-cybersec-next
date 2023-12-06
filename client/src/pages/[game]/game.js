import { BasicLayout } from "@/layouts";
import { Game } from "@/components/Game";
import { Separator } from "@/components/Shared";

export default function GamePage(props) {
  const { game } = props;
  console.log(game.attributes.cover.data.attributes.url);
  const wallpaper = game.attributes.cover.data.attributes.url;

  return (
    <>
      {/* <Seo
        title={game.attributes.title}
        description={game.attributes.summary}
      /> */}

      <BasicLayout>
        <Game.HeaderWallpaper image={wallpaper} />
        <Game.Panel gameId={game.id} game={game.attributes} />

        <Separator height={50} />

        <Game.Info game={game.attributes} />

        <Separator height={30} />

        {/* <Game.Media
          video={game.attributes.video}
          screenshots={game.attributes.screenshots.data}
        /> */}

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}