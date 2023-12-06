import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import { size } from "lodash";
import { BasicLayout } from "@/layouts";
import {
  GridGames,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";

export default function SearchPage(props) {
  const { games, pagination, searchText } = props;
  console.log(games);
  const hasResult = size(games) > 0;

  useEffect(() => {
    document.getElementById("search-games").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch>
        <Container>
          <Separator height={50} />

          <h2>Searching: {searchText}</h2>
          {hasResult ? (
            <>
              <GridGames games={games} />
              <Separator height={30} />
              {/* <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              /> */}
            </>
          ) : (
            <NoResult text="No results found" />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}