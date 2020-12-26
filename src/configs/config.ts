import { load } from 'ts-dotenv';

const env = load({
  GIPHY_KEY: String,
  BASEURLGIPHY: String,
  BASEURLRECIPEPUPPY: String,
  PORT: Number,
  BASEURLRECIPEPUPPYPATH: String,
});

const urlBaseRecipePuppy = env.BASEURLRECIPEPUPPY ?? '';
const urlBaseGiphy = env.BASEURLGIPHY ?? '';
const PORT = env.PORT ?? '8080';
const BASEURLRECIPEPUPPYPATH = env.BASEURLRECIPEPUPPYPATH ?? '';
const BASEURLGIPHY = env.BASEURLGIPHY ?? '';
const GIPHY_KEY = env.GIPHY_KEY ?? '';

export {
  urlBaseRecipePuppy, urlBaseGiphy, PORT, BASEURLRECIPEPUPPYPATH, BASEURLGIPHY, GIPHY_KEY,
};
