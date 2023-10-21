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

import { TeamRoasterCustomization } from '../models/TeamRoasterCustomization';
import { HttpFile } from '../http/http';

export class TeamRoster {
    'id'?: string;
    'members'?: Array<string>;
    'name'?: string;
    'tag'?: string;
    'customization'?: TeamRoasterCustomization;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "customization",
            "baseName": "customization",
            "type": "TeamRoasterCustomization",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamRoster.attributeTypeMap;
    }

    public constructor() {
    }
}
