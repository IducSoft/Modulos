import chalk from "chalk";
import { suma, multiplicala } from "./controller.js";



let suma1 = suma(1, 2),
    suma2 = suma(4, 5);

let multiplicacion = multiplicala(suma1, suma2);

console.log(chalk.green(multiplicacion));