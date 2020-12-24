import { load } from 'ts-dotenv';

const env = load({
  GIPHY_KEY: String,
  BASEURLGIPHY: String,
  BASEURLRECIPEPUPPY: String,
});

const urlBaseReciPepuppy = env.BASEURLRECIPEPUPPY;
const urlBaseGiphy = env.BASEURLGIPHY;
export { urlBaseReciPepuppy, urlBaseGiphy };
