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

import { V1LifetimeMatchesItemMeta } from '../models/V1LifetimeMatchesItemMeta';
import { V1LifetimeMatchesItemStats } from '../models/V1LifetimeMatchesItemStats';
import { V1LifetimeMatchesItemTeams } from '../models/V1LifetimeMatchesItemTeams';
import { HttpFile } from '../http/http';

export class V1LifetimeMatchesItem {
    'meta'?: V1LifetimeMatchesItemMeta;
    'stats'?: V1LifetimeMatchesItemStats;
    'teams'?: V1LifetimeMatchesItemTeams;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "meta",
            "baseName": "meta",
            "type": "V1LifetimeMatchesItemMeta",
            "format": ""
        },
        {
            "name": "stats",
            "baseName": "stats",
            "type": "V1LifetimeMatchesItemStats",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "V1LifetimeMatchesItemTeams",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifetimeMatchesItem.attributeTypeMap;
    }

    public constructor() {
    }
}

