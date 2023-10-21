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

import { HttpFile } from '../http/http';

export class V1QueueStatusDataInnerPartySize {
    'max'?: number;
    'min'?: number;
    'invalid'?: Array<number>;
    'fullPartyBypass'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "max",
            "baseName": "max",
            "type": "number",
            "format": ""
        },
        {
            "name": "min",
            "baseName": "min",
            "type": "number",
            "format": ""
        },
        {
            "name": "invalid",
            "baseName": "invalid",
            "type": "Array<number>",
            "format": ""
        },
        {
            "name": "fullPartyBypass",
            "baseName": "full_party_bypass",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1QueueStatusDataInnerPartySize.attributeTypeMap;
    }

    public constructor() {
    }
}

