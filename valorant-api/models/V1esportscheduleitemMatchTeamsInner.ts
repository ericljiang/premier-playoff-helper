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

import { V1esportscheduleitemMatchTeamsInnerRecord } from '../models/V1esportscheduleitemMatchTeamsInnerRecord';
import { HttpFile } from '../http/http';

export class V1esportscheduleitemMatchTeamsInner {
    'name'?: string;
    'code'?: string;
    'icon'?: string;
    'hasWon'?: boolean;
    'gameWins'?: number;
    'record'?: V1esportscheduleitemMatchTeamsInnerRecord;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasWon",
            "baseName": "has_won",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "gameWins",
            "baseName": "game_wins",
            "type": "number",
            "format": ""
        },
        {
            "name": "record",
            "baseName": "record",
            "type": "V1esportscheduleitemMatchTeamsInnerRecord",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1esportscheduleitemMatchTeamsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

