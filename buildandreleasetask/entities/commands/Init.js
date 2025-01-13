"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = __importStar(require("azure-pipelines-task-lib/task"));
const child_process_1 = require("child_process");
const DisableSecrets_1 = __importDefault(require("../flags/DisableSecrets"));
const ProjectPath_1 = __importDefault(require("../flags/ProjectPath"));
const ContainerImageTag_1 = __importDefault(require("../flags/ContainerImageTag"));
const ContainerRegistry_1 = __importDefault(require("../flags/ContainerRegistry"));
const ContainerRepositoryPrefix_1 = __importDefault(require("../flags/ContainerRepositoryPrefix"));
const ContainerBuilder_1 = __importDefault(require("../flags/ContainerBuilder"));
const TemplatePath_1 = __importDefault(require("../flags/TemplatePath"));
const commandFlags = [
    new ProjectPath_1.default(),
    new ContainerBuilder_1.default(),
    new ContainerRegistry_1.default(),
    new ContainerRepositoryPrefix_1.default(),
    new ContainerImageTag_1.default(),
    new TemplatePath_1.default(),
    new DisableSecrets_1.default()
];
function Init() {
    console.log('Initializing Aspir8');
    let command = "aspirate init --non-interactive";
    commandFlags.forEach(flag => {
        command += `${flag.getCommandLineArgument()}`;
    });
    console.log("Executing the following command: ");
    console.log(command);
    console.log("--------------------------------");
    const workingDirectory = tl.getInput('workingDirectory', false);
    (0, child_process_1.exec)(command, { cwd: workingDirectory }, (error, stdout, stderr) => {
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
exports.default = Init;
