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

import { BundleParsed } from '../models/BundleParsed';
import { HttpFile } from '../http/http';

export class V2storefeatured {
    'status'?: number;
    'data'?: Array<BundleParsed>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<BundleParsed>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2storefeatured.attributeTypeMap;
    }

    public constructor() {
    }
}

