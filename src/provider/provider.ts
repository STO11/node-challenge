import axios from 'axios';
import { urlBaseRecipePuppy, GIPHY_KEY, BASEURLGIPHY } from '../configs/config';

export module Provider {

    export const optionsrecipe = {
      host: urlBaseRecipePuppy,
      path: '/api',
    };

    export async function puppyData(query:string) {
      try {
        const response = await axios.get(`${optionsrecipe.host}${optionsrecipe.path}${query}`);
        if (response.status === 200) { return response.data; }
        return null;
      } catch (error) {
        return null;
      }
    }

    export async function getGiphy(title) {
      try {
        const response = await axios.get(`${BASEURLGIPHY}?api_key=${GIPHY_KEY}&q=${title}`);
        if (response.status === 200) { return response.data; }
        return null;
      } catch (error) {
        return null;
      }
    }
}
