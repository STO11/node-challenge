import axios from 'axios';
import { urlBaseRecipePuppy, GIPHY_KEY, BASEURLGIPHY } from '../configs/config';

export module Provider {

    export const optionsrecipe = {
      host: urlBaseRecipePuppy,
      path: '/api',
    };

    export async function puppyData(query:string) {
      try {
        // console.log(`${optionsrecipe.host}${optionsrecipe.path}${query}`);
        const response = await axios.get(`${optionsrecipe.host}${optionsrecipe.path}${query}`);
        if (response.status === 200) { return response.data; }
        return null;
      } catch (error) {
        return null;
      }
    }

    export async function getGiphy(title) {
      try {
        // console.log(`${BASEURLGIPHY}?api_key=${GIPHY_KEY}&q=${title}`);
        const response = await axios.get(`${BASEURLGIPHY}?api_key=${GIPHY_KEY}&q=${title}&limit=1`);
        if (response.status === 200) { return response.data; }
        return null;
      } catch (error) {
        return null;
      }
    }
}
