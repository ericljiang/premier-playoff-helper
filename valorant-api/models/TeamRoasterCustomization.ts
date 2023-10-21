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

export class TeamRoasterCustomization {
    'icon'?: string;
    'image'?: string;
    'primary'?: string;
    'secondary'?: string;
    'tertiary'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "primary",
            "baseName": "primary",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondary",
            "baseName": "secondary",
            "type": "string",
            "format": ""
        },
        {
            "name": "tertiary",
            "baseName": "tertiary",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamRoasterCustomization.attributeTypeMap;
    }

    public constructor() {
    }
}

