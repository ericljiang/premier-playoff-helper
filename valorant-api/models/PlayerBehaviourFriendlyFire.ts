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

export class PlayerBehaviourFriendlyFire {
    'incoming'?: number;
    'outgoing'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "incoming",
            "baseName": "incoming",
            "type": "number",
            "format": ""
        },
        {
            "name": "outgoing",
            "baseName": "outgoing",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerBehaviourFriendlyFire.attributeTypeMap;
    }

    public constructor() {
    }
}

