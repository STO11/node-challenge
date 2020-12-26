/* eslint-disable no-console */
import { Provider } from '../provider/provider';
import RecipepuppyModel from '../models/recipepuppy.model';

export module RecipepuppyController {
    export function home(req, res) {
      console.log(req);
      res.send('Seja bem vindo!');
    }

    export async function loadRecipePuppy(req, res) {
      const query = req.query.i;
      const recipes = [];
      if (query) {
        const resp = await Provider.puppyData(`?i=${query}`);
        if (resp.results.length > 0) {
          // eslint-disable-next-line no-restricted-syntax
          for await (const item of resp.results) {
            const gifImg = await Provider.getGiphy(item.title);
            const ingredients = item?.ingredients.split(',').sort((a, b) => a.trim().localeCompare(b.trim()));
            const describe = {
              title: item?.title ?? '', ingredients, link: item?.href ?? '', gif: gifImg?.data[0]?.images.original.url,
            };
            recipes.push(describe);
          }
          res.send(new RecipepuppyModel(query.split(','), recipes)).status(200);
        } else {
          res.status(204).send('No data');
        }
      } else {
        res.status(204).send('No data');
      }
    }
}
