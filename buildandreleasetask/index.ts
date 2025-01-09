"use strict";
import * as tl from "azure-pipelines-task-lib/task";
import CommandFactory from "./entities/factories/CommandFactory";

async function run(): Promise<void> {
    try {
        let inputString: string | undefined = tl.getInput('command', true);
        
        // Verify that we have an input-string
        if (inputString === undefined) {
            console.error("Input string is undefined");
            return;
        }

        inputString = inputString.toLowerCase();
        
        const commandFunction = CommandFactory(inputString);

        // Verify that we successfully got a function in return
        if (typeof commandFunction !== 'function') {
            console.error("CommandFactory did not return a function");
            return;
        }

        // Invoke the function command
        commandFunction();
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, (err as Error).message);
    }
}

run();
