/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */

logTitle('Generator')

const getStudent = function* () {
    yield 'a';
    yield 23;
    yield true;
    yield {name: 'Amigos', age: 24};

}

const studentGen = getStudent();
let result = studentGen.next();
while (!result.done) {
    console.log(result);
    result = studentGen.next();
}

  
