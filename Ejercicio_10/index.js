import { suma, multiplica } from "./controller/controller.js";
import chalk from 'chalk';

const mult = multiplica(suma(1, 2), suma(4, 5))
console.log(`Multiplicacion normal: ${mult}`)

const verde = multiplica(suma(1, 2), suma(4, 5))
console.log(chalk.green(`Multiplicacion de color verde : ${verde}`))

