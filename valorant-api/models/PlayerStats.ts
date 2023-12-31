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

export class PlayerStats {
    'score'?: number;
    'kills'?: number;
    'deaths'?: number;
    'assists'?: number;
    'bodyshots'?: number;
    'headshots'?: number;
    'legshots'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "score",
            "baseName": "score",
            "type": "number",
            "format": ""
        },
        {
            "name": "kills",
            "baseName": "kills",
            "type": "number",
            "format": ""
        },
        {
            "name": "deaths",
            "baseName": "deaths",
            "type": "number",
            "format": ""
        },
        {
            "name": "assists",
            "baseName": "assists",
            "type": "number",
            "format": ""
        },
        {
            "name": "bodyshots",
            "baseName": "bodyshots",
            "type": "number",
            "format": ""
        },
        {
            "name": "headshots",
            "baseName": "headshots",
            "type": "number",
            "format": ""
        },
        {
            "name": "legshots",
            "baseName": "legshots",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerStats.attributeTypeMap;
    }

    public constructor() {
    }
}

