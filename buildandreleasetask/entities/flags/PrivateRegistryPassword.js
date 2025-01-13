"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommandFlagBase_1 = __importDefault(require("./CommandFlagBase"));
class PrivateRegistryPassword extends CommandFlagBase_1.default {
    constructor() {
        super("privateRegistryPassword", "--private-registry-password");
    }
}
exports.default = PrivateRegistryPassword;
