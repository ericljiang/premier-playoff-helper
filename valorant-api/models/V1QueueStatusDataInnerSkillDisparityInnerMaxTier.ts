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

import { Tiers } from '../models/Tiers';
import { HttpFile } from '../http/http';

export class V1QueueStatusDataInnerSkillDisparityInnerMaxTier {
    'id'?: number;
    'name'?: Tiers;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Tiers",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1QueueStatusDataInnerSkillDisparityInnerMaxTier.attributeTypeMap;
    }

    public constructor() {
    }
}



