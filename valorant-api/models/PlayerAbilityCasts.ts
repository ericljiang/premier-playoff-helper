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

export class PlayerAbilityCasts {
    'cCast'?: number | null;
    'qCast'?: number | null;
    'eCast'?: number | null;
    'xCast'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cCast",
            "baseName": "c_cast",
            "type": "number",
            "format": ""
        },
        {
            "name": "qCast",
            "baseName": "q_cast",
            "type": "number",
            "format": ""
        },
        {
            "name": "eCast",
            "baseName": "e_cast",
            "type": "number",
            "format": ""
        },
        {
            "name": "xCast",
            "baseName": "x_cast",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerAbilityCasts.attributeTypeMap;
    }

    public constructor() {
    }
}

