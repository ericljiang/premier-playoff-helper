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

export class V1PremierTeamHistoryDataLeagueMatchesInner {
    'id'?: string;
    'pointsBefore'?: number;
    'pointsAfter'?: number;
    'startedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "pointsBefore",
            "baseName": "points_before",
            "type": "number",
            "format": ""
        },
        {
            "name": "pointsAfter",
            "baseName": "points_after",
            "type": "number",
            "format": ""
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return V1PremierTeamHistoryDataLeagueMatchesInner.attributeTypeMap;
    }

    public constructor() {
    }
}

