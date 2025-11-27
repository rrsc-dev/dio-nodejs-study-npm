// npm i -> instala as dependências listadas no package.json
// npm init -y -> cria um package.json com as configurações padrão
// npm init -> cria um package.json com perguntas para configurar o arquivo
// node --watch index.js -> reinicia a aplicação sempre que houver mudanças no arquivo
// npm i pretty-console-logs -D -> instala a dependência apenas para desenvolvimento
// npm uninstall pretty-console-logs -> desinstala a dependência
// npm fund *nome do package -> lista a página com os arquivos das dependências do projeto e suas versões, o *nome do package é opcional
// npm update *nome do package -> atualiza todas as dependências do projeto

import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(logSymbols.success, chalk.red.bgBlue.italic.bold("Hello world!"));
console.log(
  logSymbols.error,
  chalk.red.bgRedBright.italic.bold("Hello world!")
);
