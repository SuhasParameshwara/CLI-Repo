//import chalk from "chalk";
import FormData from "form-data";
import fs from 'fs';
import { Headers } from "node-fetch";
import ora from "ora";
import { isURL } from "../../helper/isURL";
import { ApiReferenceOperationType, ApiReferenceSourceType, ImportCommandOptions } from "../../models";
import d360APIFetch from "../d360APIFetch";


export default async function importFlow(options: ImportCommandOptions) {
    const spinner = ora();
    spinner.start();
    const formData = new FormData();
    if (!isURL(options.path)) {

        const stream = fs.createReadStream(options.path);
        // var string = '';
        // stream.on('data',function(data){
        //     string += data.toString();
        //   });
        //   stream.on('end',function(){
        //     console.log('final output ' + string);
        //   });
        // console.log(process.env.NODE_CONFIG_DIR + options.path);
        formData.append("file", stream);
    }
    else {
        formData.append("url", options.path);
    }
    formData.append("projectVersionId", options.versionId);
    formData.append("sourceType", ApiReferenceSourceType.CommandLine);
    formData.append("operationType", ApiReferenceOperationType.Import);
    formData.append("proceedAnyway", "true");
    const requestOptions = {
        method: 'POST',
        body: formData,
        headers: new Headers({
            'api_token': options.apiKey
        })
    };
    console.log("Import flow called..");
    return d360APIFetch("/v2/APIDocs", requestOptions).then(res => {
        console.log(res);
        spinner.stop();
    }).catch(r => {
        console.log(r);
        spinner.stop();
    })
}