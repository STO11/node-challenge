import { Provider } from '../provider/provider';

export default class RecipepuppyController {
    a:string = '';

    constructor(a) {
      this.a = a;
    }

    // eslint-disable-next-line class-methods-use-this
    loadRecipePuppy() {
      const resp = Provider.puppyData();
      console.log(resp);
    }
}
