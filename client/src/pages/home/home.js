import { BasicLayout } from "@/layouts"
import { Container } from "semantic-ui-react"
import { Home } from "@/components/Home"
import { Separator, BarTrust, BannerAd } from "@/components/Shared"

const platformsId = {
  playstation: 1,
  xbox: 3,
  nintendo: 2,
  pc: 4,
};


export default function HomePage() {
  return (
    <>
    <BasicLayout>
        <Home.BannerLastGamePublished />
        <Separator height={100} />
        
        <Container>
          <Home.LatestGames title="Latest Release"/>
        </Container>
        
        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />
        
        <Container>
        <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playstation}
          />
        </Container>

        <Separator height={100} />
        
        <BannerAd
          title="Register and get the best prices of the market!"
          subtitle="Compare prices between platforms and explore over 100+ options!"
          btnTitle="Register now"
          btnLink="/account"
          image="/images/img01.png"
        />
    </BasicLayout>
    </>
  )
}

