import { BasicLayout } from "@/layouts"
import { Container } from "semantic-ui-react"
import { Home } from "@/components/Home"
import { Separator, BarTrust } from "@/components/Shared"

export default function HomePage() {
  return (
    <>
    <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        
        <Container>
          <Home.LatestGames />
        </Container>
        
        <Separator height={100} />

        <BarTrust />

    </BasicLayout>
    </>
  )
}

