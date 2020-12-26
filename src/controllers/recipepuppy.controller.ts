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
          await resp.results.forEach((item) => {
            const describe = {
              title: item.title, ingredients: item.ingredients.split(','), link: item.href, gif: item.thumbnail,
            };
            recipes.push(describe);
          });
          res.send(new RecipepuppyModel(query.split(','), recipes)).status(200);
        }
      }
    }
}
