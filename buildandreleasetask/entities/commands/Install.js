"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function Install() {
    console.log('Installing Aspir8...');
    (0, child_process_1.exec)("dotnet tool install -g aspirate", (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Aspirate installed successfully: ${stdout}`);
    });
}
exports.default = Install;
