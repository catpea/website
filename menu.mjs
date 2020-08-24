#!/usr/bin/env -S node --experimental-modules

import { exec, spawn } from 'child_process';
import inquirer from 'inquirer';
const prompt = inquirer.prompt;

let operate = 1;

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [

    {
      name: "Synchronize data repositories",
      value: "bin/sync/index.sh",
    },

    {
      name: "Build",
      value: "bin/build/index.sh",
    },

    {
      name: "Publish",
      value: "bin/publish/index.sh",
    },
 

    ],
  },
];

function execute(answers){
  return new Promise(function(OK, NO){
    if(answers.action === 'exit-menu'){
      operate = false;
      return OK();
    }
    console.log(`Executing ${answers.action}`);

    const child = spawn(answers.action);

    child.stdout.on('data', (data) => {
      console.log(`stdout:\n${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('error', (error) => {
      console.error(`error: ${error.message}`);
      NO(error.message);
    });

    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
      console.log('');
      operate++;
      OK();
    });

  });
}

async function main(){
  await execute({action: './bin/banner/index.mjs'})
  while(operate){
    const anwsers = await prompt(questions);
    await execute(anwsers);
  }
}

main();
