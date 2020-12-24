export default class Recipepuppy {
    a:string = '';

    // eslint-disable-next-line no-undef
    console: Console;

    constructor(a) {
      this.a = a;
    }

    print() {
      this.console.log(this.a);
    }
}
