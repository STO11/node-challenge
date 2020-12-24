import { urlBaseRecipePuppy, urlBaseGiphy } from '../configs/config';

export default class RecipepuppyController {
    a:string = '';

    

    // eslint-disable-next-line no-undef
    console: Console;

    constructor(a) {
      this.a = a;
    }

    print() {
      this.console.log(urlBaseRecipePuppy);
      this.console.log(urlBaseGiphy);
    }

    loadRecipePuppy(){
      
      

      // var req = http.request(options, function(res) {
      //   console.log('STATUS: ' + res.statusCode);
      //   console.log('HEADERS: ' + JSON.stringify(res.headers));
      //   res.setEncoding('utf8');
      //   res.on('data', function (chunk) {
      //     console.log('BODY: ' + chunk);
      //   });
      // });
    }
}
