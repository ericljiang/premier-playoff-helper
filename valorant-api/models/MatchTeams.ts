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

import { Team } from '../models/Team';
import { HttpFile } from '../http/http';

export class MatchTeams {
    'red'?: Team;
    'blue'?: Team;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "red",
            "baseName": "red",
            "type": "Team",
            "format": ""
        },
        {
            "name": "blue",
            "baseName": "blue",
            "type": "Team",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchTeams.attributeTypeMap;
    }

    public constructor() {
    }
}

