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

import { V1PremierTeamHistoryDataLeagueMatchesInner } from '../models/V1PremierTeamHistoryDataLeagueMatchesInner';
import { HttpFile } from '../http/http';

export class V1PremierTeamHistoryData {
    'leagueMatches'?: Array<V1PremierTeamHistoryDataLeagueMatchesInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "leagueMatches",
            "baseName": "league_matches",
            "type": "Array<V1PremierTeamHistoryDataLeagueMatchesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PremierTeamHistoryData.attributeTypeMap;
    }

    public constructor() {
    }
}

