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

import { BundleRaw } from '../models/BundleRaw';
import { HttpFile } from '../http/http';

export class V1storefeaturedDataFeaturedBundle {
    'bundle'?: BundleRaw;
    'bundles'?: Array<BundleRaw>;
    'bundleRemainingDurationInSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bundle",
            "baseName": "Bundle",
            "type": "BundleRaw",
            "format": ""
        },
        {
            "name": "bundles",
            "baseName": "Bundles",
            "type": "Array<BundleRaw>",
            "format": ""
        },
        {
            "name": "bundleRemainingDurationInSeconds",
            "baseName": "BundleRemainingDurationInSeconds",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1storefeaturedDataFeaturedBundle.attributeTypeMap;
    }

    public constructor() {
    }
}

