// npm i -> instala as dependências listadas no package.json
// npm init -y -> cria um package.json com as configurações padrão
// npm init -> cria um package.json com perguntas para configurar o arquivo
// node --watch index.js -> reinicia a aplicação sempre que houver mudanças no arquivo
// npm i pretty-console-logs -D -> instala a dependência apenas para desenvolvimento

import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.red.bgBlue.italic.bold("Hello world!"));
console.log(
  logSymbols.error,
  chalk.red.bgRedBright.italic.bold("Hello world!")
);
