"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function DotnetVersionTest() {
    console.log('Executing dotnet --version command');
    (0, child_process_1.exec)("dotnet --version", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`dotnet version: ${stdout}`);
    });
}
exports.default = DotnetVersionTest;
