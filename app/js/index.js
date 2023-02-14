/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Lexical this')

const person = {
    name: 'Jone Maria',
    cars: ['farari', 'lombo'],
    toString: function () {
        // og(`${this.name} has ${this.cars}`)
        const _this = this;
        this.cars.forEach( car => {
            log(`${this.name} has ${car}`)
        })
    }
}


person.toString()

  
