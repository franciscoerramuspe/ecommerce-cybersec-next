import PlaystationPage from './playstation';
import XboxPage from './xbox';
import NintendoPage from './nintendo';
import PCPage from './pc';

export default function PlatformPage({ platform, ...props }) {
  console.log(platform); // This will log the platform name

  switch(platform) {
    case 'playstation':
      return <PlaystationPage {...props} />;
    case 'xbox':
      return <XboxPage {...props} />;
    case 'nintendo':
      return <NintendoPage {...props} />;
    case 'pc':
      return <PCPage {...props} />;
    default:
      return <h2>Platform: {platform} not supported</h2>;
  }
}

// Implement getServerSideProps when you're ready to fetch data
