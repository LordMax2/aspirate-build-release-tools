"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Build_1 = __importDefault(require("../commands/Build"));
const DotnetVersionTest_1 = __importDefault(require("../commands/DotnetVersionTest"));
const Generate_1 = __importDefault(require("../commands/Generate"));
const Init_1 = __importDefault(require("../commands/Init"));
const Install_1 = __importDefault(require("../commands/Install"));
function CommandFactory(command) {
    switch (command) {
        case "build":
            return Build_1.default;
        case "generate":
            return Generate_1.default;
        case "init":
            return Init_1.default;
        case "install":
            return Install_1.default;
        case "dotnetversiontest":
            return DotnetVersionTest_1.default;
        default:
            throw new Error("Command doesnt exist..");
    }
}
exports.default = CommandFactory;
