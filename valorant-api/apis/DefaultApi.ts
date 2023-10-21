// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { Affinities } from '../models/Affinities';
import { LeaderboardInner } from '../models/LeaderboardInner';
import { Maps } from '../models/Maps';
import { ModesApi } from '../models/ModesApi';
import { PremierConferences } from '../models/PremierConferences';
import { Seasons } from '../models/Seasons';
import { V1Account } from '../models/V1Account';
import { V1LifetimeMatches } from '../models/V1LifetimeMatches';
import { V1LifetimeMmrHistory } from '../models/V1LifetimeMmrHistory';
import { V1PremierConference } from '../models/V1PremierConference';
import { V1PremierLeaderboard } from '../models/V1PremierLeaderboard';
import { V1PremierSearch } from '../models/V1PremierSearch';
import { V1PremierSeason } from '../models/V1PremierSeason';
import { V1PremierTeam } from '../models/V1PremierTeam';
import { V1PremierTeamHistory } from '../models/V1PremierTeamHistory';
import { V1QueueStatus } from '../models/V1QueueStatus';
import { V1esportschedule } from '../models/V1esportschedule';
import { V1mmr } from '../models/V1mmr';
import { V1mmrh } from '../models/V1mmrh';
import { V1storefeatured } from '../models/V1storefeatured';
import { V2leaderboard } from '../models/V2leaderboard';
import { V2mmr } from '../models/V2mmr';
import { V2storefeatured } from '../models/V2storefeatured';
import { V2storeoffers } from '../models/V2storeoffers';
import { V3matches } from '../models/V3matches';
import { ValorantV1AccountNameTagGet400Response } from '../models/ValorantV1AccountNameTagGet400Response';
import { ValorantV1AccountNameTagGet403Response } from '../models/ValorantV1AccountNameTagGet403Response';
import { ValorantV1AccountNameTagGet404Response } from '../models/ValorantV1AccountNameTagGet404Response';
import { ValorantV1AccountNameTagGet408Response } from '../models/ValorantV1AccountNameTagGet408Response';
import { ValorantV1AccountNameTagGet429Response } from '../models/ValorantV1AccountNameTagGet429Response';
import { ValorantV1AccountNameTagGet503Response } from '../models/ValorantV1AccountNameTagGet503Response';
import { ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response } from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response';
import { ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response } from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response';
import { ValorantV1ContentGet200Response } from '../models/ValorantV1ContentGet200Response';
import { ValorantV1ContentGet500Response } from '../models/ValorantV1ContentGet500Response';
import { ValorantV1RawPostRequest } from '../models/ValorantV1RawPostRequest';
import { ValorantV1StatusAffinityGet200Response } from '../models/ValorantV1StatusAffinityGet200Response';
import { ValorantV1VersionAffinityGet200Response } from '../models/ValorantV1VersionAffinityGet200Response';
import { ValorantV1WebsiteCountryCodeGet200Response } from '../models/ValorantV1WebsiteCountryCodeGet200Response';
import { ValorantV2MatchMatchIdGet200Response } from '../models/ValorantV2MatchMatchIdGet200Response';
import { ValorantV3MatchesAffinityNameTagGet200Response } from '../models/ValorantV3MatchesAffinityNameTagGet200Response';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get account details
     * @param name 
     * @param tag 
     * @param force Force data update
     */
    public async valorantV1AccountNameTagGet(name: string, tag: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1AccountNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1AccountNameTagGet", "tag");
        }



        // Path Params
        const localVarPath = '/valorant/v1/account/{name}/{tag}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get account details
     * @param puuid 
     * @param force Force data update
     */
    public async valorantV1ByPuuidAccountPuuidGet(puuid: string, force?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidAccountPuuidGet", "puuid");
        }



        // Path Params
        const localVarPath = '/valorant/v1/by-puuid/account/{puuid}'
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
            requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "boolean", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get lifetime matches
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param mode 
     * @param map 
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of returned matches
     */
    public async valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet", "affinity");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet", "puuid");
        }






        // Path Params
        const localVarPath = '/valorant/v1/by-puuid/lifetime/matches/{affinity}/{puuid}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mode !== undefined) {
            requestContext.setQueryParam("mode", ObjectSerializer.serialize(mode, "ModesApi", ""));
        }

        // Query Params
        if (map !== undefined) {
            requestContext.setQueryParam("map", ObjectSerializer.serialize(map, "Maps", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get lifetime mmr history
     * @param region Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of mmr changes
     */
    public async valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet(region: Affinities, puuid: string, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'region' is not null or undefined
        if (region === null || region === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet", "region");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet", "puuid");
        }




        // Path Params
        const localVarPath = '/valorant/v1/by-puuid/lifetime/mmr-history/{region}/{puuid}'
            .replace('{' + 'region' + '}', encodeURIComponent(String(region)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public async valorantV1ByPuuidMmrAffinityPuuidGet(affinity: Affinities, puuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidMmrAffinityPuuidGet", "affinity");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidMmrAffinityPuuidGet", "puuid");
        }


        // Path Params
        const localVarPath = '/valorant/v1/by-puuid/mmr/{affinity}/{puuid}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get mmr history
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public async valorantV1ByPuuidMmrHistoryAffinityPuuidGet(affinity: Affinities, puuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidMmrHistoryAffinityPuuidGet", "affinity");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1ByPuuidMmrHistoryAffinityPuuidGet", "puuid");
        }


        // Path Params
        const localVarPath = '/valorant/v1/by-puuid/mmr-history/{affinity}/{puuid}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get content
     * @param locale 
     */
    public async valorantV1ContentGet(locale?: 'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/valorant/v1/content';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (locale !== undefined) {
            requestContext.setQueryParam("locale", ObjectSerializer.serialize(locale, "'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Outputs a 1024x1024 pixel image of the requested crosshair
     * @param id ID of the crosshair
     */
    public async valorantV1CrosshairGenerateGet(id?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;


        // Path Params
        const localVarPath = '/valorant/v1/crosshair/generate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns esports schedule data
     * @param region region of the game (multiple possible)
     * @param league league of the game (multiple possible, these also can be highly dynamic if riot announces new tournaments/leagues)
     */
    public async valorantV1EsportsScheduleGet(region?: 'international' | 'north america' | 'emea' | 'brazil' | 'japan' | 'korea' | 'latin_america' | 'latin_america_south' | 'latin_america_north' | 'southeast_asia' | 'vietnam' | 'oceania', league?: 'vct_americas' | 'challengers_na' | 'game_changers_na' | 'vct_emea' | 'vct_pacific' | 'challengers_br' | 'challengers_jpn' | 'challengers_kr' | 'challengers_latam' | 'challengers_latam_n' | 'challengers_latam_s' | 'challengers_apac' | 'challengers_sea_id' | 'challengers_sea_ph' | 'challengers_sea_sg_and_my' | 'challengers_sea_th' | 'challengers_sea_hk_and_tw' | 'challengers_sea_vn' | 'valorant_oceania_tour' | 'challengers_south_asia' | 'game_changers_sea' | 'game_changers_series_brazil' | 'game_changers_east_asia' | 'game_changers_emea' | 'game_changers_jpn' | 'game_changers_kr' | 'game_changers_latam' | 'game_changers_championship' | 'masters' | 'last_chance_qualifier_apac' | 'last_chance_qualifier_east_asia' | 'last_chance_qualifier_emea' | 'last_chance_qualifier_na' | 'last_chance_qualifier_br_and_latam' | 'vct_lock_in' | 'champions' | 'vrl_spain' | 'vrl_northern_europe' | 'vrl_dach' | 'vrl_france' | 'vrl_east' | 'vrl_turkey' | 'vrl_cis' | 'mena_resilence' | 'challengers_italy' | 'challengers_portugal', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/valorant/v1/esports/schedule';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (region !== undefined) {
            requestContext.setQueryParam("region", ObjectSerializer.serialize(region, "'international' | 'north america' | 'emea' | 'brazil' | 'japan' | 'korea' | 'latin_america' | 'latin_america_south' | 'latin_america_north' | 'southeast_asia' | 'vietnam' | 'oceania'", ""));
        }

        // Query Params
        if (league !== undefined) {
            requestContext.setQueryParam("league", ObjectSerializer.serialize(league, "'vct_americas' | 'challengers_na' | 'game_changers_na' | 'vct_emea' | 'vct_pacific' | 'challengers_br' | 'challengers_jpn' | 'challengers_kr' | 'challengers_latam' | 'challengers_latam_n' | 'challengers_latam_s' | 'challengers_apac' | 'challengers_sea_id' | 'challengers_sea_ph' | 'challengers_sea_sg_and_my' | 'challengers_sea_th' | 'challengers_sea_hk_and_tw' | 'challengers_sea_vn' | 'valorant_oceania_tour' | 'challengers_south_asia' | 'game_changers_sea' | 'game_changers_series_brazil' | 'game_changers_east_asia' | 'game_changers_emea' | 'game_changers_jpn' | 'game_changers_kr' | 'game_changers_latam' | 'game_changers_championship' | 'masters' | 'last_chance_qualifier_apac' | 'last_chance_qualifier_east_asia' | 'last_chance_qualifier_emea' | 'last_chance_qualifier_na' | 'last_chance_qualifier_br_and_latam' | 'vct_lock_in' | 'champions' | 'vrl_spain' | 'vrl_northern_europe' | 'vrl_dach' | 'vrl_france' | 'vrl_east' | 'vrl_turkey' | 'vrl_cis' | 'mena_resilence' | 'challengers_italy' | 'challengers_portugal'", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public async valorantV1LeaderboardAffinityGet(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LeaderboardAffinityGet", "affinity");
        }






        // Path Params
        const localVarPath = '/valorant/v1/leaderboard/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (puuid !== undefined) {
            requestContext.setQueryParam("puuid", ObjectSerializer.serialize(puuid, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam("tag", ObjectSerializer.serialize(tag, "string", ""));
        }

        // Query Params
        if (season !== undefined) {
            requestContext.setQueryParam("season", ObjectSerializer.serialize(season, "Seasons", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get lifetime matches
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param name 
     * @param tag 
     * @param mode 
     * @param map 
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of returned matches
     */
    public async valorantV1LifetimeMatchesAffinityNameTagGet(affinity: Affinities, name: string, tag: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMatchesAffinityNameTagGet", "affinity");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMatchesAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMatchesAffinityNameTagGet", "tag");
        }






        // Path Params
        const localVarPath = '/valorant/v1/lifetime/matches/{affinity}/{name}/{tag}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mode !== undefined) {
            requestContext.setQueryParam("mode", ObjectSerializer.serialize(mode, "ModesApi", ""));
        }

        // Query Params
        if (map !== undefined) {
            requestContext.setQueryParam("map", ObjectSerializer.serialize(map, "Maps", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get lifetime mmr changes
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param name 
     * @param tag 
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of returned mmr changes
     */
    public async valorantV1LifetimeMmrHistoryAffinityNameTagGet(affinity: Affinities, name: string, tag: string, page?: number, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMmrHistoryAffinityNameTagGet", "affinity");
        }


        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMmrHistoryAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1LifetimeMmrHistoryAffinityNameTagGet", "tag");
        }




        // Path Params
        const localVarPath = '/valorant/v1/lifetime/mmr-history/{affinity}/{name}/{tag}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     */
    public async valorantV1MmrAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrAffinityNameTagGet", "tag");
        }


        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrAffinityNameTagGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/mmr/{affinity}/{name}/{tag}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)))
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get MMR History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public async valorantV1MmrHistoryAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrHistoryAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrHistoryAffinityNameTagGet", "tag");
        }


        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1MmrHistoryAffinityNameTagGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/mmr-history/{affinity}/{name}/{tag}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)))
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of all premier conferences
     */
    public async valorantV1PremierConferencesGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/valorant/v1/premier/conferences';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a combined leaderboard in the conference, sorted by ranking in that div
     * @param affinity 
     * @param conference 
     * @param division 
     */
    public async valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity: Affinities, conference: PremierConferences, division: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityConferenceDivisionGet", "affinity");
        }


        // verify required parameter 'conference' is not null or undefined
        if (conference === null || conference === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityConferenceDivisionGet", "conference");
        }


        // verify required parameter 'division' is not null or undefined
        if (division === null || division === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityConferenceDivisionGet", "division");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/leaderboard/{affinity}/{conference}/{division}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'conference' + '}', encodeURIComponent(String(conference)))
            .replace('{' + 'division' + '}', encodeURIComponent(String(division)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a combined leaderboard in the conference, sorted by div and ranking
     * @param affinity 
     * @param conference 
     */
    public async valorantV1PremierLeaderboardAffinityConferenceGet(affinity: Affinities, conference: PremierConferences, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityConferenceGet", "affinity");
        }


        // verify required parameter 'conference' is not null or undefined
        if (conference === null || conference === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityConferenceGet", "conference");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/leaderboard/{affinity}/{conference}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'conference' + '}', encodeURIComponent(String(conference)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a combined leaderboard in the affinity, sorted by div and ranking
     * @param affinity 
     */
    public async valorantV1PremierLeaderboardAffinityGet(affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierLeaderboardAffinityGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/leaderboard/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search for current active premier teams
     * @param name 
     * @param tag 
     * @param division 
     * @param conference 
     */
    public async valorantV1PremierSearchGet(name?: string, tag?: string, division?: number, conference?: PremierConferences, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/valorant/v1/premier/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam("tag", ObjectSerializer.serialize(tag, "string", ""));
        }

        // Query Params
        if (division !== undefined) {
            requestContext.setQueryParam("division", ObjectSerializer.serialize(division, "number", ""));
        }

        // Query Params
        if (conference !== undefined) {
            requestContext.setQueryParam("conference", ObjectSerializer.serialize(conference, "PremierConferences", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of all premier seasons
     * @param affinity 
     */
    public async valorantV1PremierSeasonsAffinityGet(affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierSeasonsAffinityGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/seasons/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get details about a premier team
     * @param teamId 
     */
    public async valorantV1PremierTeamIdGet(teamId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamIdGet", "teamId");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/{team_id}'
            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get match history of a premier team
     * @param teamId 
     */
    public async valorantV1PremierTeamIdHistoryGet(teamId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamIdHistoryGet", "teamId");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/{team_id}/history'
            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get details about a premier team
     * @param teamName 
     * @param teamTag 
     */
    public async valorantV1PremierTeamNameTeamTagGet(teamName: string, teamTag: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamName' is not null or undefined
        if (teamName === null || teamName === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamNameTeamTagGet", "teamName");
        }


        // verify required parameter 'teamTag' is not null or undefined
        if (teamTag === null || teamTag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamNameTeamTagGet", "teamTag");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/{team_name}/{team_tag}'
            .replace('{' + 'team_name' + '}', encodeURIComponent(String(teamName)))
            .replace('{' + 'team_tag' + '}', encodeURIComponent(String(teamTag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get match history of a premier team
     * @param teamName 
     * @param teamTag 
     */
    public async valorantV1PremierTeamNameTeamTagHistoryGet(teamName: string, teamTag: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'teamName' is not null or undefined
        if (teamName === null || teamName === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamNameTeamTagHistoryGet", "teamName");
        }


        // verify required parameter 'teamTag' is not null or undefined
        if (teamTag === null || teamTag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1PremierTeamNameTeamTagHistoryGet", "teamTag");
        }


        // Path Params
        const localVarPath = '/valorant/v1/premier/{team_name}/{team_tag}/history'
            .replace('{' + 'team_name' + '}', encodeURIComponent(String(teamName)))
            .replace('{' + 'team_tag' + '}', encodeURIComponent(String(teamTag)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a list of all available queues and their metadata
     * @param affinity 
     */
    public async valorantV1QueueStatusAffinityGet(affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1QueueStatusAffinityGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/queue-status/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get unchanged response from the valorant api
     * @param valorantV1RawPostRequest Post body to receive data
     */
    public async valorantV1RawPost(valorantV1RawPostRequest: ValorantV1RawPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'valorantV1RawPostRequest' is not null or undefined
        if (valorantV1RawPostRequest === null || valorantV1RawPostRequest === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1RawPost", "valorantV1RawPostRequest");
        }


        // Path Params
        const localVarPath = '/valorant/v1/raw';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(valorantV1RawPostRequest, "ValorantV1RawPostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Server status
     * @param affinity 
     */
    public async valorantV1StatusAffinityGet(affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1StatusAffinityGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/status/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async valorantV1StoreFeaturedGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/valorant/v1/store-featured';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async valorantV1StoreOffersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/valorant/v1/store-offers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param affinity 
     */
    public async valorantV1VersionAffinityGet(affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1VersionAffinityGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v1/version/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param countryCode 
     */
    public async valorantV1WebsiteCountryCodeGet(countryCode: 'en-us' | 'en-gb' | 'de-de' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("DefaultApi", "valorantV1WebsiteCountryCodeGet", "countryCode");
        }


        // Path Params
        const localVarPath = '/valorant/v1/website/{countryCode}'
            .replace('{' + 'countryCode' + '}', encodeURIComponent(String(countryCode)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param season Available for v2 MMR
     */
    public async valorantV2ByPuuidMmrAffinityPuuidGet(affinity: Affinities, puuid: string, season?: Seasons, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2ByPuuidMmrAffinityPuuidGet", "affinity");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2ByPuuidMmrAffinityPuuidGet", "puuid");
        }



        // Path Params
        const localVarPath = '/valorant/v2/by-puuid/mmr/{affinity}/{puuid}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (season !== undefined) {
            requestContext.setQueryParam("season", ObjectSerializer.serialize(season, "Seasons", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public async valorantV2LeaderboardAffinityGet(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2LeaderboardAffinityGet", "affinity");
        }






        // Path Params
        const localVarPath = '/valorant/v2/leaderboard/{affinity}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (puuid !== undefined) {
            requestContext.setQueryParam("puuid", ObjectSerializer.serialize(puuid, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam("tag", ObjectSerializer.serialize(tag, "string", ""));
        }

        // Query Params
        if (season !== undefined) {
            requestContext.setQueryParam("season", ObjectSerializer.serialize(season, "Seasons", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Match Deatils
     * @param matchId 
     */
    public async valorantV2MatchMatchIdGet(matchId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'matchId' is not null or undefined
        if (matchId === null || matchId === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2MatchMatchIdGet", "matchId");
        }


        // Path Params
        const localVarPath = '/valorant/v2/match/{matchId}'
            .replace('{' + 'matchId' + '}', encodeURIComponent(String(matchId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param season Available for v2 mmr only
     */
    public async valorantV2MmrAffinityNameTagGet(name: string, tag: string, affinity: Affinities, season?: Seasons, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2MmrAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2MmrAffinityNameTagGet", "tag");
        }


        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV2MmrAffinityNameTagGet", "affinity");
        }



        // Path Params
        const localVarPath = '/valorant/v2/mmr/{affinity}/{name}/{tag}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)))
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (season !== undefined) {
            requestContext.setQueryParam("season", ObjectSerializer.serialize(season, "Seasons", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async valorantV2StoreFeaturedGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/valorant/v2/store-featured';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async valorantV2StoreOffersGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/valorant/v2/store-offers';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get account details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param mode 
     * @param map Available for v3 matches
     * @param size Available for v3 matches (how many matches should be returned)
     */
    public async valorantV3ByPuuidMatchesAffinityPuuidGet(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, size?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV3ByPuuidMatchesAffinityPuuidGet", "affinity");
        }


        // verify required parameter 'puuid' is not null or undefined
        if (puuid === null || puuid === undefined) {
            throw new RequiredError("DefaultApi", "valorantV3ByPuuidMatchesAffinityPuuidGet", "puuid");
        }





        // Path Params
        const localVarPath = '/valorant/v3/by-puuid/matches/{affinity}/{puuid}'
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)))
            .replace('{' + 'puuid' + '}', encodeURIComponent(String(puuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (mode !== undefined) {
            requestContext.setQueryParam("mode", ObjectSerializer.serialize(mode, "ModesApi", ""));
        }

        // Query Params
        if (map !== undefined) {
            requestContext.setQueryParam("map", ObjectSerializer.serialize(map, "Maps", ""));
        }

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Match History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public async valorantV3MatchesAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError("DefaultApi", "valorantV3MatchesAffinityNameTagGet", "name");
        }


        // verify required parameter 'tag' is not null or undefined
        if (tag === null || tag === undefined) {
            throw new RequiredError("DefaultApi", "valorantV3MatchesAffinityNameTagGet", "tag");
        }


        // verify required parameter 'affinity' is not null or undefined
        if (affinity === null || affinity === undefined) {
            throw new RequiredError("DefaultApi", "valorantV3MatchesAffinityNameTagGet", "affinity");
        }


        // Path Params
        const localVarPath = '/valorant/v3/matches/{affinity}/{name}/{tag}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)))
            .replace('{' + 'tag' + '}', encodeURIComponent(String(tag)))
            .replace('{' + 'affinity' + '}', encodeURIComponent(String(affinity)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1AccountNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1AccountNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Account >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Account", ""
            ) as V1Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Account", ""
            ) as V1Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ByPuuidAccountPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ByPuuidAccountPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1Account >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Account", ""
            ) as V1Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1Account = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1Account", ""
            ) as V1Account;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ByPuuidLifetimeMatchesAffinityPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1LifetimeMatches >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1LifetimeMatches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMatches", ""
            ) as V1LifetimeMatches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1LifetimeMatches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMatches", ""
            ) as V1LifetimeMatches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1LifetimeMmrHistory >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1LifetimeMmrHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMmrHistory", ""
            ) as V1LifetimeMmrHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1LifetimeMmrHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMmrHistory", ""
            ) as V1LifetimeMmrHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ByPuuidMmrAffinityPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ByPuuidMmrAffinityPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1mmr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmr", ""
            ) as V1mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmr", ""
            ) as V1mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ByPuuidMmrHistoryAffinityPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ByPuuidMmrHistoryAffinityPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1mmrh >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1mmrh = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmrh", ""
            ) as V1mmrh;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1mmrh = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmrh", ""
            ) as V1mmrh;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1ContentGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1ContentGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV1ContentGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ValorantV1ContentGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ContentGet500Response", ""
            ) as ValorantV1ContentGet500Response;
            throw new ApiException<ValorantV1ContentGet500Response>(response.httpStatusCode, "Internal Error (error is logged, will be reviewed asap)", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV1ContentGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ContentGet200Response", ""
            ) as ValorantV1ContentGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV1ContentGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ContentGet200Response", ""
            ) as ValorantV1ContentGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1CrosshairGenerateGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1CrosshairGenerateGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<HttpFile >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", "binary"
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", "binary"
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", "binary"
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", "binary"
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", "binary"
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", "binary"
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1EsportsScheduleGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1EsportsScheduleGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1esportschedule >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1esportschedule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1esportschedule", ""
            ) as V1esportschedule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1esportschedule = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1esportschedule", ""
            ) as V1esportschedule;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1LeaderboardAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1LeaderboardAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<LeaderboardInner> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ValorantV1ContentGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ContentGet500Response", ""
            ) as ValorantV1ContentGet500Response;
            throw new ApiException<ValorantV1ContentGet500Response>(response.httpStatusCode, "Internal Error (error is logged, will be reviewed asap)", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LeaderboardInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeaderboardInner>", ""
            ) as Array<LeaderboardInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LeaderboardInner> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LeaderboardInner>", ""
            ) as Array<LeaderboardInner>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1LifetimeMatchesAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1LifetimeMatchesAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1LifetimeMatches >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1LifetimeMatches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMatches", ""
            ) as V1LifetimeMatches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1LifetimeMatches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMatches", ""
            ) as V1LifetimeMatches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1LifetimeMmrHistoryAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1LifetimeMmrHistoryAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1LifetimeMmrHistory >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1LifetimeMmrHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMmrHistory", ""
            ) as V1LifetimeMmrHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1LifetimeMmrHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1LifetimeMmrHistory", ""
            ) as V1LifetimeMmrHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1MmrAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1MmrAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1mmr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmr", ""
            ) as V1mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmr", ""
            ) as V1mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1MmrHistoryAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1MmrHistoryAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1mmrh >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1mmrh = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmrh", ""
            ) as V1mmrh;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1mmrh = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1mmrh", ""
            ) as V1mmrh;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierConferencesGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierConferencesGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierConference >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierConference = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierConference", ""
            ) as V1PremierConference;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierConference = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierConference", ""
            ) as V1PremierConference;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierLeaderboardAffinityConferenceDivisionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierLeaderboardAffinityConferenceDivisionGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierLeaderboard >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierLeaderboardAffinityConferenceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierLeaderboardAffinityConferenceGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierLeaderboard >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierLeaderboardAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierLeaderboardAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierLeaderboard >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierLeaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierLeaderboard", ""
            ) as V1PremierLeaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierSearchGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierSearchGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierSearch >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierSearch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierSearch", ""
            ) as V1PremierSearch;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierSearch = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierSearch", ""
            ) as V1PremierSearch;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierSeasonsAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierSeasonsAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierSeason >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierSeason = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierSeason", ""
            ) as V1PremierSeason;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierSeason = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierSeason", ""
            ) as V1PremierSeason;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierTeamIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierTeamIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierTeam >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierTeam = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeam", ""
            ) as V1PremierTeam;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierTeam = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeam", ""
            ) as V1PremierTeam;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierTeamIdHistoryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierTeamIdHistoryGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierTeamHistory >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierTeamHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeamHistory", ""
            ) as V1PremierTeamHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierTeamHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeamHistory", ""
            ) as V1PremierTeamHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierTeamNameTeamTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierTeamNameTeamTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierTeam >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierTeam = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeam", ""
            ) as V1PremierTeam;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierTeam = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeam", ""
            ) as V1PremierTeam;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1PremierTeamNameTeamTagHistoryGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1PremierTeamNameTeamTagHistoryGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1PremierTeamHistory >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1PremierTeamHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeamHistory", ""
            ) as V1PremierTeamHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1PremierTeamHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1PremierTeamHistory", ""
            ) as V1PremierTeamHistory;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1QueueStatusAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1QueueStatusAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1QueueStatus >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1QueueStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1QueueStatus", ""
            ) as V1QueueStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1QueueStatus = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1QueueStatus", ""
            ) as V1QueueStatus;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1RawPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1RawPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1StatusAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1StatusAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV1StatusAffinityGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV1StatusAffinityGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1StatusAffinityGet200Response", ""
            ) as ValorantV1StatusAffinityGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV1StatusAffinityGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1StatusAffinityGet200Response", ""
            ) as ValorantV1StatusAffinityGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1StoreFeaturedGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1StoreFeaturedGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V1storefeatured >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V1storefeatured = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1storefeatured", ""
            ) as V1storefeatured;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V1storefeatured = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V1storefeatured", ""
            ) as V1storefeatured;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1StoreOffersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1StoreOffersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<any >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1VersionAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1VersionAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV1VersionAffinityGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV1VersionAffinityGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1VersionAffinityGet200Response", ""
            ) as ValorantV1VersionAffinityGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV1VersionAffinityGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1VersionAffinityGet200Response", ""
            ) as ValorantV1VersionAffinityGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV1WebsiteCountryCodeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV1WebsiteCountryCodeGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV1WebsiteCountryCodeGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV1WebsiteCountryCodeGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1WebsiteCountryCodeGet200Response", ""
            ) as ValorantV1WebsiteCountryCodeGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV1WebsiteCountryCodeGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1WebsiteCountryCodeGet200Response", ""
            ) as ValorantV1WebsiteCountryCodeGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2ByPuuidMmrAffinityPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2ByPuuidMmrAffinityPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V2mmr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2mmr", ""
            ) as V2mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2mmr", ""
            ) as V2mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2LeaderboardAffinityGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2LeaderboardAffinityGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V2leaderboard >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: ValorantV1ContentGet500Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ContentGet500Response", ""
            ) as ValorantV1ContentGet500Response;
            throw new ApiException<ValorantV1ContentGet500Response>(response.httpStatusCode, "Internal Error (error is logged, will be reviewed asap)", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2leaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2leaderboard", ""
            ) as V2leaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2leaderboard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2leaderboard", ""
            ) as V2leaderboard;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2MatchMatchIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2MatchMatchIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV2MatchMatchIdGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV2MatchMatchIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV2MatchMatchIdGet200Response", ""
            ) as ValorantV2MatchMatchIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV2MatchMatchIdGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV2MatchMatchIdGet200Response", ""
            ) as ValorantV2MatchMatchIdGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2MmrAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2MmrAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V2mmr >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2mmr", ""
            ) as V2mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2mmr = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2mmr", ""
            ) as V2mmr;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2StoreFeaturedGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2StoreFeaturedGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V2storefeatured >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2storefeatured = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2storefeatured", ""
            ) as V2storefeatured;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2storefeatured = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2storefeatured", ""
            ) as V2storefeatured;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV2StoreOffersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV2StoreOffersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V2storeoffers >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "", undefined, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V2storeoffers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2storeoffers", ""
            ) as V2storeoffers;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V2storeoffers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V2storeoffers", ""
            ) as V2storeoffers;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV3ByPuuidMatchesAffinityPuuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV3ByPuuidMatchesAffinityPuuidGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<V3matches >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("410", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response>(response.httpStatusCode, "Endpoint is deprecated", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: V3matches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3matches", ""
            ) as V3matches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: V3matches = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "V3matches", ""
            ) as V3matches;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to valorantV3MatchesAffinityNameTagGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async valorantV3MatchesAffinityNameTagGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ValorantV3MatchesAffinityNameTagGet200Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet400Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet400Response", ""
            ) as ValorantV1AccountNameTagGet400Response;
            throw new ApiException<ValorantV1AccountNameTagGet400Response>(response.httpStatusCode, "Request error by the client (missing query for example)", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet403Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet403Response", ""
            ) as ValorantV1AccountNameTagGet403Response;
            throw new ApiException<ValorantV1AccountNameTagGet403Response>(response.httpStatusCode, "Forbidden to connect to the Riot API (mainly maintenance reasons on riot side like patches) or to the HenrikDev API itself because of bot prevention for example", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet404Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet404Response", ""
            ) as ValorantV1AccountNameTagGet404Response;
            throw new ApiException<ValorantV1AccountNameTagGet404Response>(response.httpStatusCode, "The entity was not found (player/match/general data)", body, response.headers);
        }
        if (isCodeInRange("408", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet408Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet408Response", ""
            ) as ValorantV1AccountNameTagGet408Response;
            throw new ApiException<ValorantV1AccountNameTagGet408Response>(response.httpStatusCode, "Timeout while fetching riot data", body, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet429Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet429Response", ""
            ) as ValorantV1AccountNameTagGet429Response;
            throw new ApiException<ValorantV1AccountNameTagGet429Response>(response.httpStatusCode, "Rate limit reached (can be global API limit which affects all users or just you, when the \&quot;x-ratelimit-remaining\&quot; header is 0 then it\&#39;s a personal limit)", body, response.headers);
        }
        if (isCodeInRange("501", response.httpStatusCode)) {
            const body: ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response", ""
            ) as ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response;
            throw new ApiException<ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response>(response.httpStatusCode, "API Version not implemented, check the requested endpoint url", body, response.headers);
        }
        if (isCodeInRange("503", response.httpStatusCode)) {
            const body: ValorantV1AccountNameTagGet503Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV1AccountNameTagGet503Response", ""
            ) as ValorantV1AccountNameTagGet503Response;
            throw new ApiException<ValorantV1AccountNameTagGet503Response>(response.httpStatusCode, "Riot API seems to be down, API unable to connect", body, response.headers);
        }
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ValorantV3MatchesAffinityNameTagGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV3MatchesAffinityNameTagGet200Response", ""
            ) as ValorantV3MatchesAffinityNameTagGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ValorantV3MatchesAffinityNameTagGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ValorantV3MatchesAffinityNameTagGet200Response", ""
            ) as ValorantV3MatchesAffinityNameTagGet200Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
