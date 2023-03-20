import { OptionDefinition } from "command-line-args";
import { CommandCategoryDetails } from "./models";

export const DefaultMainArgs: OptionDefinition[] = [
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'command', type: String, defaultOption: true }
];

export const Messages = {
    apiKeyNotFound: "API Key not found",
    apiKeyNotFoundInCI: "API Key not found. Please use --apiKey",
    environmentNotFound: "Environment flag not found",
    environmentNotFoundInCI: "Environment flag not found. Please use --env"
}

export const AllCommandDetails: CommandCategoryDetails[] = [
    {
        commandCategoryName: "apidocs",
        decsription: "API Documentation",
        commands: []
    }
]

export enum CommandCategories {
    apidocs = "apidocs"
}