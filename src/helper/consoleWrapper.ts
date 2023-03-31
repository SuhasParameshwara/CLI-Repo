import chalk from "chalk";

function error(message: string) {
    return console.error(chalk.red(message));
}

export { error };