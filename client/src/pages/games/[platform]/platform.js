import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  GridGames,
  Separator,
  NoResult,
  Pagination,
  Seo,
} from "@/components/Shared";

export default function PlatformPage(props) {

  const { games, platform, pagination } = props;
  console.log(games);
  console.log(platform);
  console.log(pagination);
  const hasProducts = size(games) > 0;
  console.log(hasProducts);

  return (
    <>
      {/* <Seo title={`Juegos de ${platform.attributes.title}`} /> */}

      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2>{platform.attributes.title}</h2>

          {hasProducts ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              {/* <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              /> */}
            </>
          ) : (
            <NoResult
              text={`The Category ${platform.attributes.title} has no games yet`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}