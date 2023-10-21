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

import { MatchRoundsInnerDefuseEvents } from '../models/MatchRoundsInnerDefuseEvents';
import { MatchRoundsInnerPlantEvents } from '../models/MatchRoundsInnerPlantEvents';
import { MatchRoundsInnerPlayerStatsInner } from '../models/MatchRoundsInnerPlayerStatsInner';
import { HttpFile } from '../http/http';

export class MatchRoundsInner {
    'winningTeam'?: string;
    'endType'?: string;
    'bombPlanted'?: boolean | null;
    'bombDefused'?: boolean | null;
    'plantEvents'?: MatchRoundsInnerPlantEvents | null;
    'defuseEvents'?: MatchRoundsInnerDefuseEvents | null;
    'playerStats'?: Array<MatchRoundsInnerPlayerStatsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "winningTeam",
            "baseName": "winning_team",
            "type": "string",
            "format": ""
        },
        {
            "name": "endType",
            "baseName": "end_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "bombPlanted",
            "baseName": "bomb_planted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "bombDefused",
            "baseName": "bomb_defused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "plantEvents",
            "baseName": "plant_events",
            "type": "MatchRoundsInnerPlantEvents",
            "format": ""
        },
        {
            "name": "defuseEvents",
            "baseName": "defuse_events",
            "type": "MatchRoundsInnerDefuseEvents",
            "format": ""
        },
        {
            "name": "playerStats",
            "baseName": "player_stats",
            "type": "Array<MatchRoundsInnerPlayerStatsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchRoundsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

