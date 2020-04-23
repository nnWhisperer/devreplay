import commander = require('commander');

import { fixFromFile, formatILintOut, lintFromFile } from './lint';
import { arrayify } from './utils';
import path = require('path');
import fs = require('fs');

interface IArgv {
    fix?: boolean;
    init?: boolean;
    dir?: boolean;
    out?: string;
}

interface IOption {
    short?: string;
    // Commander will camelCase option names.
    name: keyof IArgv | 'fix' | 'init' | 'dir';
    type: 'string' | 'boolean' | 'array';
    describe: string; // Short, used for usage message
    description: string; // Long, used for `--help`
}

const options: IOption[] = [
    {
        name: 'fix',
        type: 'boolean',
        describe: 'fix the file',
        description: 'fix the file',
    },
    {
        name: 'dir',
        type: 'boolean',
        describe: 'target the directory files',
        description: 'target the directory files'
    }
];

for (const option of options) {
    const commanderStr = optionUsageTag(option) + optionParam(option);
    if (option.type === 'array') {
        commander.option(commanderStr, option.describe, collect, []);
    } else {
        commander.option(commanderStr, option.describe);
    }
}

// Hack to get unknown option errors to work. https://github.com/visionmedia/commander.js/pull/121
const parsed = commander.parseOptions(process.argv.slice(2));
commander.args = parsed.operands;
if (parsed.unknown.length !== 0) {
    (commander.parseArgs as (args: string[], unknown: string[]) => void)([], parsed.unknown);
}
const argv = commander.opts() as IArgv;

if (
    !(
        argv.init === undefined ||
        commander.args.length > 0
    )
) {
    console.error('No files specified. Use --project to lint a project folder.');
    process.exit(1);
}

let ruleFileName: string | undefined;

if (argv.dir) {
    const files = arrayify(commander.args);
    const dirName = files[0];
    if (files.length >= 2) {
        ruleFileName = files[1];
    }
    fs.readdirSync(dirName).forEach(fileName => {
        fileName = path.join(dirName, fileName);
        if (argv.fix === true) {
            const results = fixFromFile(fileName, ruleFileName);
            console.log(results);
        } else {
            const results = lintFromFile(fileName, ruleFileName);
            for (const result of results) {
                console.log(formatILintOut(result));
            }
        }
      });
}
else{
    const files = arrayify(commander.args);
    const fileName = files[0];
    if (files.length >= 2) {
        ruleFileName = files[1];
    }
    if (argv.fix === true) {
        const results = fixFromFile(fileName, ruleFileName);
        console.log(results);
    } else {
        console.log(fileName);
        const results = lintFromFile(fileName, ruleFileName);
        for (const result of results) {
            console.log(formatILintOut(result));
        }
    }
}

function optionUsageTag({ short, name }: IOption) {
    return short !== undefined ? `-${short}, --${name}` : `--${name}`;
}

function optionParam(option: IOption) {
    switch (option.type) {
        case 'string':
            return ` [${option.name}]`;
        case 'array':
            return ` <${option.name}>`;
        case 'boolean':
            return '';
        default:
            return '';
    }
}

function collect(val: string, memo: string[]) {
    memo.push(val);

    return memo;
}
