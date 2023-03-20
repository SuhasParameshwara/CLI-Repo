import { CommandCategories } from "../../constants";
import BaseCommand from "../baseCommand";

export default class ResyncCommand extends BaseCommand {
    constructor() {
        super();
        this.command = "apidocs:resync";
        this.description = "Resync your OpenAPI definition to Document360";
        this.commandCategory = CommandCategories.apidocs;
        this.usage = "apidocs:resync [options]";
    }
}