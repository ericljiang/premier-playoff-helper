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

import { Affinities } from '../models/Affinities';
import { PremierConferences } from '../models/PremierConferences';
import { Regions } from '../models/Regions';
import { V1PremierConferenceDataInnerPodsInner } from '../models/V1PremierConferenceDataInnerPodsInner';
import { HttpFile } from '../http/http';

export class V1PremierConferenceDataInner {
    'id'?: string;
    'affinity'?: Affinities;
    'pods'?: Array<V1PremierConferenceDataInnerPodsInner>;
    'region'?: Regions;
    'timezone'?: string;
    'name'?: PremierConferences;
    'icon'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "Affinities",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "Array<V1PremierConferenceDataInnerPodsInner>",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "Regions",
            "format": ""
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "PremierConferences",
            "format": ""
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PremierConferenceDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}



