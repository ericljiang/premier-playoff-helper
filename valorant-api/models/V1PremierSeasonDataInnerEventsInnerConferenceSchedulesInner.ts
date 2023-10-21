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

import { PremierConferences } from '../models/PremierConferences';
import { HttpFile } from '../http/http';

export class V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner {
    'conference'?: PremierConferences;
    'startsAt'?: Date;
    'endsAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "conference",
            "baseName": "conference",
            "type": "PremierConferences",
            "format": ""
        },
        {
            "name": "startsAt",
            "baseName": "starts_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endsAt",
            "baseName": "ends_at",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner.attributeTypeMap;
    }

    public constructor() {
    }
}



