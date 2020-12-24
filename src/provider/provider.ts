import axios from 'axios';
import { urlBaseRecipePuppy } from '../configs/config';

export module Provider {

    export const options = {
      host: urlBaseRecipePuppy,
      path: '/api',
    };

    export async function puppyData() {
      try {
        const response = await axios.get(options.host + options.path);
        if (response.status === 200) { return response.data; }
        return null;
      } catch (error) {
        return null;
      }
    }
}
