/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValorantV1AccountNameTagGet400ResponseErrorsInner } from '../models/ValorantV1AccountNameTagGet400ResponseErrorsInner';
import { HttpFile } from '../http/http';

export class ValorantV1AccountNameTagGet503Response {
    'status'?: number;
    'errors'?: Array<ValorantV1AccountNameTagGet400ResponseErrorsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ValorantV1AccountNameTagGet400ResponseErrorsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ValorantV1AccountNameTagGet503Response.attributeTypeMap;
    }

    public constructor() {
    }
}

