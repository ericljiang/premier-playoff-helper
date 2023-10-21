import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Affinities } from '../models/Affinities';
import { BundleParsed } from '../models/BundleParsed';
import { BundleParsedItemsInner } from '../models/BundleParsedItemsInner';
import { BundleRaw } from '../models/BundleRaw';
import { BundleRawItemsInner } from '../models/BundleRawItemsInner';
import { BundleRawItemsInnerItem } from '../models/BundleRawItemsInnerItem';
import { BySeason } from '../models/BySeason';
import { BySeasonActRankWinsInner } from '../models/BySeasonActRankWinsInner';
import { Coach } from '../models/Coach';
import { ContentInner } from '../models/ContentInner';
import { LeaderboardInner } from '../models/LeaderboardInner';
import { Maps } from '../models/Maps';
import { Match } from '../models/Match';
import { MatchMetadata } from '../models/MatchMetadata';
import { MatchMetadataPremierInfo } from '../models/MatchMetadataPremierInfo';
import { MatchPlayers } from '../models/MatchPlayers';
import { MatchRoundsInner } from '../models/MatchRoundsInner';
import { MatchRoundsInnerDefuseEvents } from '../models/MatchRoundsInnerDefuseEvents';
import { MatchRoundsInnerPlantEvents } from '../models/MatchRoundsInnerPlantEvents';
import { MatchRoundsInnerPlantEventsPlantLocation } from '../models/MatchRoundsInnerPlantEventsPlantLocation';
import { MatchRoundsInnerPlantEventsPlantedBy } from '../models/MatchRoundsInnerPlantEventsPlantedBy';
import { MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner } from '../models/MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner';
import { MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInnerLocation } from '../models/MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInnerLocation';
import { MatchRoundsInnerPlayerStatsInner } from '../models/MatchRoundsInnerPlayerStatsInner';
import { MatchRoundsInnerPlayerStatsInnerAbilityCasts } from '../models/MatchRoundsInnerPlayerStatsInnerAbilityCasts';
import { MatchRoundsInnerPlayerStatsInnerDamageEventsInner } from '../models/MatchRoundsInnerPlayerStatsInnerDamageEventsInner';
import { MatchRoundsInnerPlayerStatsInnerEconomy } from '../models/MatchRoundsInnerPlayerStatsInnerEconomy';
import { MatchRoundsInnerPlayerStatsInnerEconomyArmor } from '../models/MatchRoundsInnerPlayerStatsInnerEconomyArmor';
import { MatchRoundsInnerPlayerStatsInnerEconomyArmorAssets } from '../models/MatchRoundsInnerPlayerStatsInnerEconomyArmorAssets';
import { MatchRoundsInnerPlayerStatsInnerEconomyWeapon } from '../models/MatchRoundsInnerPlayerStatsInnerEconomyWeapon';
import { MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets } from '../models/MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets';
import { MatchRoundsInnerPlayerStatsInnerKillEventsInner } from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInner';
import { MatchRoundsInnerPlayerStatsInnerKillEventsInnerAssistantsInner } from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerAssistantsInner';
import { MatchRoundsInnerPlayerStatsInnerKillEventsInnerDamageWeaponAssets } from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerDamageWeaponAssets';
import { MatchRoundsInnerPlayerStatsInnerKillEventsInnerVictimDeathLocation } from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerVictimDeathLocation';
import { MatchTeams } from '../models/MatchTeams';
import { ModeIds } from '../models/ModeIds';
import { Modes } from '../models/Modes';
import { ModesApi } from '../models/ModesApi';
import { Observer } from '../models/Observer';
import { Platforms } from '../models/Platforms';
import { Player } from '../models/Player';
import { PlayerAbilityCasts } from '../models/PlayerAbilityCasts';
import { PlayerAssets } from '../models/PlayerAssets';
import { PlayerAssetsAgent } from '../models/PlayerAssetsAgent';
import { PlayerAssetsCard } from '../models/PlayerAssetsCard';
import { PlayerBehaviour } from '../models/PlayerBehaviour';
import { PlayerBehaviourFriendlyFire } from '../models/PlayerBehaviourFriendlyFire';
import { PlayerEconomy } from '../models/PlayerEconomy';
import { PlayerEconomyLoadoutValue } from '../models/PlayerEconomyLoadoutValue';
import { PlayerEconomySpent } from '../models/PlayerEconomySpent';
import { PlayerPlatform } from '../models/PlayerPlatform';
import { PlayerPlatformOs } from '../models/PlayerPlatformOs';
import { PlayerSessionPlaytime } from '../models/PlayerSessionPlaytime';
import { PlayerStats } from '../models/PlayerStats';
import { PremierConferences } from '../models/PremierConferences';
import { PremierSeasonsEventMapSelectionTypes } from '../models/PremierSeasonsEventMapSelectionTypes';
import { PremierSeasonsEventTypes } from '../models/PremierSeasonsEventTypes';
import { Regions } from '../models/Regions';
import { Seasons } from '../models/Seasons';
import { StatusInner } from '../models/StatusInner';
import { StatusInnerTitlesInner } from '../models/StatusInnerTitlesInner';
import { StatusInnerUpdatesInner } from '../models/StatusInnerUpdatesInner';
import { StatusInnerUpdatesInnerTranslationsInner } from '../models/StatusInnerUpdatesInnerTranslationsInner';
import { Team } from '../models/Team';
import { TeamRoaster } from '../models/TeamRoaster';
import { TeamRoasterCustomization } from '../models/TeamRoasterCustomization';
import { Tiers } from '../models/Tiers';
import { TiersOld } from '../models/TiersOld';
import { V1Account } from '../models/V1Account';
import { V1AccountData } from '../models/V1AccountData';
import { V1AccountDataCard } from '../models/V1AccountDataCard';
import { V1LifetimeMatches } from '../models/V1LifetimeMatches';
import { V1LifetimeMatchesItem } from '../models/V1LifetimeMatchesItem';
import { V1LifetimeMatchesItemMeta } from '../models/V1LifetimeMatchesItemMeta';
import { V1LifetimeMatchesItemMetaMap } from '../models/V1LifetimeMatchesItemMetaMap';
import { V1LifetimeMatchesItemMetaSeason } from '../models/V1LifetimeMatchesItemMetaSeason';
import { V1LifetimeMatchesItemStats } from '../models/V1LifetimeMatchesItemStats';
import { V1LifetimeMatchesItemStatsDamage } from '../models/V1LifetimeMatchesItemStatsDamage';
import { V1LifetimeMatchesItemStatsShots } from '../models/V1LifetimeMatchesItemStatsShots';
import { V1LifetimeMatchesItemTeams } from '../models/V1LifetimeMatchesItemTeams';
import { V1LifetimeMatchesResults } from '../models/V1LifetimeMatchesResults';
import { V1LifetimeMmrHistory } from '../models/V1LifetimeMmrHistory';
import { V1LifetimeMmrHistoryItem } from '../models/V1LifetimeMmrHistoryItem';
import { V1LifetimeMmrHistoryItemSeason } from '../models/V1LifetimeMmrHistoryItemSeason';
import { V1PartialPremierTeam } from '../models/V1PartialPremierTeam';
import { V1PremierConference } from '../models/V1PremierConference';
import { V1PremierConferenceDataInner } from '../models/V1PremierConferenceDataInner';
import { V1PremierConferenceDataInnerPodsInner } from '../models/V1PremierConferenceDataInnerPodsInner';
import { V1PremierLeaderboard } from '../models/V1PremierLeaderboard';
import { V1PremierSearch } from '../models/V1PremierSearch';
import { V1PremierSeason } from '../models/V1PremierSeason';
import { V1PremierSeasonDataInner } from '../models/V1PremierSeasonDataInner';
import { V1PremierSeasonDataInnerEventsInner } from '../models/V1PremierSeasonDataInnerEventsInner';
import { V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner } from '../models/V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner';
import { V1PremierSeasonDataInnerEventsInnerMapSelection } from '../models/V1PremierSeasonDataInnerEventsInnerMapSelection';
import { V1PremierSeasonDataInnerEventsInnerMapSelectionMapsInner } from '../models/V1PremierSeasonDataInnerEventsInnerMapSelectionMapsInner';
import { V1PremierTeam } from '../models/V1PremierTeam';
import { V1PremierTeamData } from '../models/V1PremierTeamData';
import { V1PremierTeamDataMemberInner } from '../models/V1PremierTeamDataMemberInner';
import { V1PremierTeamDataPlacement } from '../models/V1PremierTeamDataPlacement';
import { V1PremierTeamDataStats } from '../models/V1PremierTeamDataStats';
import { V1PremierTeamHistory } from '../models/V1PremierTeamHistory';
import { V1PremierTeamHistoryData } from '../models/V1PremierTeamHistoryData';
import { V1PremierTeamHistoryDataLeagueMatchesInner } from '../models/V1PremierTeamHistoryDataLeagueMatchesInner';
import { V1QueueStatus } from '../models/V1QueueStatus';
import { V1QueueStatusDataInner } from '../models/V1QueueStatusDataInner';
import { V1QueueStatusDataInnerGameRules } from '../models/V1QueueStatusDataInnerGameRules';
import { V1QueueStatusDataInnerHighSkill } from '../models/V1QueueStatusDataInnerHighSkill';
import { V1QueueStatusDataInnerMapsInner } from '../models/V1QueueStatusDataInnerMapsInner';
import { V1QueueStatusDataInnerMapsInnerMap } from '../models/V1QueueStatusDataInnerMapsInnerMap';
import { V1QueueStatusDataInnerPartySize } from '../models/V1QueueStatusDataInnerPartySize';
import { V1QueueStatusDataInnerSkillDisparityInner } from '../models/V1QueueStatusDataInnerSkillDisparityInner';
import { V1QueueStatusDataInnerSkillDisparityInnerMaxTier } from '../models/V1QueueStatusDataInnerSkillDisparityInnerMaxTier';
import { V1esportschedule } from '../models/V1esportschedule';
import { V1esportscheduleitem } from '../models/V1esportscheduleitem';
import { V1esportscheduleitemLeague } from '../models/V1esportscheduleitemLeague';
import { V1esportscheduleitemMatch } from '../models/V1esportscheduleitemMatch';
import { V1esportscheduleitemMatchGameType } from '../models/V1esportscheduleitemMatchGameType';
import { V1esportscheduleitemMatchTeamsInner } from '../models/V1esportscheduleitemMatchTeamsInner';
import { V1esportscheduleitemMatchTeamsInnerRecord } from '../models/V1esportscheduleitemMatchTeamsInnerRecord';
import { V1esportscheduleitemTournament } from '../models/V1esportscheduleitemTournament';
import { V1mmr } from '../models/V1mmr';
import { V1mmrData } from '../models/V1mmrData';
import { V1mmrDataImages } from '../models/V1mmrDataImages';
import { V1mmrh } from '../models/V1mmrh';
import { V1mmrhDataInner } from '../models/V1mmrhDataInner';
import { V1mmrhDataInnerImages } from '../models/V1mmrhDataInnerImages';
import { V1mmrhDataInnerMap } from '../models/V1mmrhDataInnerMap';
import { V1storefeatured } from '../models/V1storefeatured';
import { V1storefeaturedData } from '../models/V1storefeaturedData';
import { V1storefeaturedDataFeaturedBundle } from '../models/V1storefeaturedDataFeaturedBundle';
import { V2leaderboard } from '../models/V2leaderboard';
import { V2mmr } from '../models/V2mmr';
import { V2mmrData } from '../models/V2mmrData';
import { V2mmrDataBySeason } from '../models/V2mmrDataBySeason';
import { V2mmrDataCurrentData } from '../models/V2mmrDataCurrentData';
import { V2mmrDataHighestRank } from '../models/V2mmrDataHighestRank';
import { V2storefeatured } from '../models/V2storefeatured';
import { V2storeoffer } from '../models/V2storeoffer';
import { V2storeofferContentTier } from '../models/V2storeofferContentTier';
import { V2storeoffers } from '../models/V2storeoffers';
import { V2storeoffersData } from '../models/V2storeoffersData';
import { V3matches } from '../models/V3matches';
import { ValorantV1AccountNameTagGet400Response } from '../models/ValorantV1AccountNameTagGet400Response';
import { ValorantV1AccountNameTagGet400ResponseErrorsInner } from '../models/ValorantV1AccountNameTagGet400ResponseErrorsInner';
import { ValorantV1AccountNameTagGet403Response } from '../models/ValorantV1AccountNameTagGet403Response';
import { ValorantV1AccountNameTagGet404Response } from '../models/ValorantV1AccountNameTagGet404Response';
import { ValorantV1AccountNameTagGet408Response } from '../models/ValorantV1AccountNameTagGet408Response';
import { ValorantV1AccountNameTagGet429Response } from '../models/ValorantV1AccountNameTagGet429Response';
import { ValorantV1AccountNameTagGet503Response } from '../models/ValorantV1AccountNameTagGet503Response';
import { ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response } from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response';
import { ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response } from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response';
import { ValorantV1ContentGet200Response } from '../models/ValorantV1ContentGet200Response';
import { ValorantV1ContentGet200ResponseActsInner } from '../models/ValorantV1ContentGet200ResponseActsInner';
import { ValorantV1ContentGet200ResponseActsInnerLocalizedNamesInner } from '../models/ValorantV1ContentGet200ResponseActsInnerLocalizedNamesInner';
import { ValorantV1ContentGet500Response } from '../models/ValorantV1ContentGet500Response';
import { ValorantV1RawPostRequest } from '../models/ValorantV1RawPostRequest';
import { ValorantV1StatusAffinityGet200Response } from '../models/ValorantV1StatusAffinityGet200Response';
import { ValorantV1StatusAffinityGet200ResponseData } from '../models/ValorantV1StatusAffinityGet200ResponseData';
import { ValorantV1VersionAffinityGet200Response } from '../models/ValorantV1VersionAffinityGet200Response';
import { ValorantV1VersionAffinityGet200ResponseData } from '../models/ValorantV1VersionAffinityGet200ResponseData';
import { ValorantV1WebsiteCountryCodeGet200Response } from '../models/ValorantV1WebsiteCountryCodeGet200Response';
import { ValorantV1WebsiteCountryCodeGet200ResponseDataInner } from '../models/ValorantV1WebsiteCountryCodeGet200ResponseDataInner';
import { ValorantV2MatchMatchIdGet200Response } from '../models/ValorantV2MatchMatchIdGet200Response';
import { ValorantV3MatchesAffinityNameTagGet200Response } from '../models/ValorantV3MatchesAffinityNameTagGet200Response';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get account details
     * @param name 
     * @param tag 
     * @param force Force data update
     */
    public valorantV1AccountNameTagGetWithHttpInfo(name: string, tag: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<V1Account>> {
        const result = this.api.valorantV1AccountNameTagGetWithHttpInfo(name, tag, force, _options);
        return result.toPromise();
    }

    /**
     * Get account details
     * @param name 
     * @param tag 
     * @param force Force data update
     */
    public valorantV1AccountNameTagGet(name: string, tag: string, force?: boolean, _options?: Configuration): Promise<V1Account> {
        const result = this.api.valorantV1AccountNameTagGet(name, tag, force, _options);
        return result.toPromise();
    }

    /**
     * Get account details
     * @param puuid 
     * @param force Force data update
     */
    public valorantV1ByPuuidAccountPuuidGetWithHttpInfo(puuid: string, force?: boolean, _options?: Configuration): Promise<HttpInfo<V1Account>> {
        const result = this.api.valorantV1ByPuuidAccountPuuidGetWithHttpInfo(puuid, force, _options);
        return result.toPromise();
    }

    /**
     * Get account details
     * @param puuid 
     * @param force Force data update
     */
    public valorantV1ByPuuidAccountPuuidGet(puuid: string, force?: boolean, _options?: Configuration): Promise<V1Account> {
        const result = this.api.valorantV1ByPuuidAccountPuuidGet(puuid, force, _options);
        return result.toPromise();
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
    public valorantV1ByPuuidLifetimeMatchesAffinityPuuidGetWithHttpInfo(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<V1LifetimeMatches>> {
        const result = this.api.valorantV1ByPuuidLifetimeMatchesAffinityPuuidGetWithHttpInfo(affinity, puuid, mode, map, page, size, _options);
        return result.toPromise();
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
    public valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<V1LifetimeMatches> {
        const result = this.api.valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet(affinity, puuid, mode, map, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get lifetime mmr history
     * @param region Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of mmr changes
     */
    public valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetWithHttpInfo(region: Affinities, puuid: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<V1LifetimeMmrHistory>> {
        const result = this.api.valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetWithHttpInfo(region, puuid, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get lifetime mmr history
     * @param region Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of mmr changes
     */
    public valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet(region: Affinities, puuid: string, page?: number, size?: number, _options?: Configuration): Promise<V1LifetimeMmrHistory> {
        const result = this.api.valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet(region, puuid, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public valorantV1ByPuuidMmrAffinityPuuidGetWithHttpInfo(affinity: Affinities, puuid: string, _options?: Configuration): Promise<HttpInfo<V1mmr>> {
        const result = this.api.valorantV1ByPuuidMmrAffinityPuuidGetWithHttpInfo(affinity, puuid, _options);
        return result.toPromise();
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public valorantV1ByPuuidMmrAffinityPuuidGet(affinity: Affinities, puuid: string, _options?: Configuration): Promise<V1mmr> {
        const result = this.api.valorantV1ByPuuidMmrAffinityPuuidGet(affinity, puuid, _options);
        return result.toPromise();
    }

    /**
     * Get mmr history
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public valorantV1ByPuuidMmrHistoryAffinityPuuidGetWithHttpInfo(affinity: Affinities, puuid: string, _options?: Configuration): Promise<HttpInfo<V1mmrh>> {
        const result = this.api.valorantV1ByPuuidMmrHistoryAffinityPuuidGetWithHttpInfo(affinity, puuid, _options);
        return result.toPromise();
    }

    /**
     * Get mmr history
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     */
    public valorantV1ByPuuidMmrHistoryAffinityPuuidGet(affinity: Affinities, puuid: string, _options?: Configuration): Promise<V1mmrh> {
        const result = this.api.valorantV1ByPuuidMmrHistoryAffinityPuuidGet(affinity, puuid, _options);
        return result.toPromise();
    }

    /**
     * Get content
     * @param locale 
     */
    public valorantV1ContentGetWithHttpInfo(locale?: 'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW', _options?: Configuration): Promise<HttpInfo<ValorantV1ContentGet200Response>> {
        const result = this.api.valorantV1ContentGetWithHttpInfo(locale, _options);
        return result.toPromise();
    }

    /**
     * Get content
     * @param locale 
     */
    public valorantV1ContentGet(locale?: 'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW', _options?: Configuration): Promise<ValorantV1ContentGet200Response> {
        const result = this.api.valorantV1ContentGet(locale, _options);
        return result.toPromise();
    }

    /**
     * Outputs a 1024x1024 pixel image of the requested crosshair
     * @param id ID of the crosshair
     */
    public valorantV1CrosshairGenerateGetWithHttpInfo(id?: string, _options?: Configuration): Promise<HttpInfo<HttpFile>> {
        const result = this.api.valorantV1CrosshairGenerateGetWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Outputs a 1024x1024 pixel image of the requested crosshair
     * @param id ID of the crosshair
     */
    public valorantV1CrosshairGenerateGet(id?: string, _options?: Configuration): Promise<HttpFile> {
        const result = this.api.valorantV1CrosshairGenerateGet(id, _options);
        return result.toPromise();
    }

    /**
     * Returns esports schedule data
     * @param region region of the game (multiple possible)
     * @param league league of the game (multiple possible, these also can be highly dynamic if riot announces new tournaments/leagues)
     */
    public valorantV1EsportsScheduleGetWithHttpInfo(region?: 'international' | 'north america' | 'emea' | 'brazil' | 'japan' | 'korea' | 'latin_america' | 'latin_america_south' | 'latin_america_north' | 'southeast_asia' | 'vietnam' | 'oceania', league?: 'vct_americas' | 'challengers_na' | 'game_changers_na' | 'vct_emea' | 'vct_pacific' | 'challengers_br' | 'challengers_jpn' | 'challengers_kr' | 'challengers_latam' | 'challengers_latam_n' | 'challengers_latam_s' | 'challengers_apac' | 'challengers_sea_id' | 'challengers_sea_ph' | 'challengers_sea_sg_and_my' | 'challengers_sea_th' | 'challengers_sea_hk_and_tw' | 'challengers_sea_vn' | 'valorant_oceania_tour' | 'challengers_south_asia' | 'game_changers_sea' | 'game_changers_series_brazil' | 'game_changers_east_asia' | 'game_changers_emea' | 'game_changers_jpn' | 'game_changers_kr' | 'game_changers_latam' | 'game_changers_championship' | 'masters' | 'last_chance_qualifier_apac' | 'last_chance_qualifier_east_asia' | 'last_chance_qualifier_emea' | 'last_chance_qualifier_na' | 'last_chance_qualifier_br_and_latam' | 'vct_lock_in' | 'champions' | 'vrl_spain' | 'vrl_northern_europe' | 'vrl_dach' | 'vrl_france' | 'vrl_east' | 'vrl_turkey' | 'vrl_cis' | 'mena_resilence' | 'challengers_italy' | 'challengers_portugal', _options?: Configuration): Promise<HttpInfo<V1esportschedule>> {
        const result = this.api.valorantV1EsportsScheduleGetWithHttpInfo(region, league, _options);
        return result.toPromise();
    }

    /**
     * Returns esports schedule data
     * @param region region of the game (multiple possible)
     * @param league league of the game (multiple possible, these also can be highly dynamic if riot announces new tournaments/leagues)
     */
    public valorantV1EsportsScheduleGet(region?: 'international' | 'north america' | 'emea' | 'brazil' | 'japan' | 'korea' | 'latin_america' | 'latin_america_south' | 'latin_america_north' | 'southeast_asia' | 'vietnam' | 'oceania', league?: 'vct_americas' | 'challengers_na' | 'game_changers_na' | 'vct_emea' | 'vct_pacific' | 'challengers_br' | 'challengers_jpn' | 'challengers_kr' | 'challengers_latam' | 'challengers_latam_n' | 'challengers_latam_s' | 'challengers_apac' | 'challengers_sea_id' | 'challengers_sea_ph' | 'challengers_sea_sg_and_my' | 'challengers_sea_th' | 'challengers_sea_hk_and_tw' | 'challengers_sea_vn' | 'valorant_oceania_tour' | 'challengers_south_asia' | 'game_changers_sea' | 'game_changers_series_brazil' | 'game_changers_east_asia' | 'game_changers_emea' | 'game_changers_jpn' | 'game_changers_kr' | 'game_changers_latam' | 'game_changers_championship' | 'masters' | 'last_chance_qualifier_apac' | 'last_chance_qualifier_east_asia' | 'last_chance_qualifier_emea' | 'last_chance_qualifier_na' | 'last_chance_qualifier_br_and_latam' | 'vct_lock_in' | 'champions' | 'vrl_spain' | 'vrl_northern_europe' | 'vrl_dach' | 'vrl_france' | 'vrl_east' | 'vrl_turkey' | 'vrl_cis' | 'mena_resilence' | 'challengers_italy' | 'challengers_portugal', _options?: Configuration): Promise<V1esportschedule> {
        const result = this.api.valorantV1EsportsScheduleGet(region, league, _options);
        return result.toPromise();
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public valorantV1LeaderboardAffinityGetWithHttpInfo(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<HttpInfo<Array<LeaderboardInner>>> {
        const result = this.api.valorantV1LeaderboardAffinityGetWithHttpInfo(affinity, puuid, name, tag, season, _options);
        return result.toPromise();
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public valorantV1LeaderboardAffinityGet(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<Array<LeaderboardInner>> {
        const result = this.api.valorantV1LeaderboardAffinityGet(affinity, puuid, name, tag, season, _options);
        return result.toPromise();
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
    public valorantV1LifetimeMatchesAffinityNameTagGetWithHttpInfo(affinity: Affinities, name: string, tag: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<V1LifetimeMatches>> {
        const result = this.api.valorantV1LifetimeMatchesAffinityNameTagGetWithHttpInfo(affinity, name, tag, mode, map, page, size, _options);
        return result.toPromise();
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
    public valorantV1LifetimeMatchesAffinityNameTagGet(affinity: Affinities, name: string, tag: string, mode?: ModesApi, map?: Maps, page?: number, size?: number, _options?: Configuration): Promise<V1LifetimeMatches> {
        const result = this.api.valorantV1LifetimeMatchesAffinityNameTagGet(affinity, name, tag, mode, map, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get lifetime mmr changes
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param name 
     * @param tag 
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of returned mmr changes
     */
    public valorantV1LifetimeMmrHistoryAffinityNameTagGetWithHttpInfo(affinity: Affinities, name: string, tag: string, page?: number, size?: number, _options?: Configuration): Promise<HttpInfo<V1LifetimeMmrHistory>> {
        const result = this.api.valorantV1LifetimeMmrHistoryAffinityNameTagGetWithHttpInfo(affinity, name, tag, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get lifetime mmr changes
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param name 
     * @param tag 
     * @param page The page used in pagination (if this is used, the size query parameter also have to exist)
     * @param size The amount of returned mmr changes
     */
    public valorantV1LifetimeMmrHistoryAffinityNameTagGet(affinity: Affinities, name: string, tag: string, page?: number, size?: number, _options?: Configuration): Promise<V1LifetimeMmrHistory> {
        const result = this.api.valorantV1LifetimeMmrHistoryAffinityNameTagGet(affinity, name, tag, page, size, _options);
        return result.toPromise();
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     */
    public valorantV1MmrAffinityNameTagGetWithHttpInfo(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<HttpInfo<V1mmr>> {
        const result = this.api.valorantV1MmrAffinityNameTagGetWithHttpInfo(name, tag, affinity, _options);
        return result.toPromise();
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     */
    public valorantV1MmrAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<V1mmr> {
        const result = this.api.valorantV1MmrAffinityNameTagGet(name, tag, affinity, _options);
        return result.toPromise();
    }

    /**
     * Get MMR History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public valorantV1MmrHistoryAffinityNameTagGetWithHttpInfo(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<HttpInfo<V1mmrh>> {
        const result = this.api.valorantV1MmrHistoryAffinityNameTagGetWithHttpInfo(name, tag, affinity, _options);
        return result.toPromise();
    }

    /**
     * Get MMR History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public valorantV1MmrHistoryAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<V1mmrh> {
        const result = this.api.valorantV1MmrHistoryAffinityNameTagGet(name, tag, affinity, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all premier conferences
     */
    public valorantV1PremierConferencesGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<V1PremierConference>> {
        const result = this.api.valorantV1PremierConferencesGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get a list of all premier conferences
     */
    public valorantV1PremierConferencesGet(_options?: Configuration): Promise<V1PremierConference> {
        const result = this.api.valorantV1PremierConferencesGet(_options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by ranking in that div
     * @param affinity 
     * @param conference 
     * @param division 
     */
    public valorantV1PremierLeaderboardAffinityConferenceDivisionGetWithHttpInfo(affinity: Affinities, conference: PremierConferences, division: number, _options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        const result = this.api.valorantV1PremierLeaderboardAffinityConferenceDivisionGetWithHttpInfo(affinity, conference, division, _options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by ranking in that div
     * @param affinity 
     * @param conference 
     * @param division 
     */
    public valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity: Affinities, conference: PremierConferences, division: number, _options?: Configuration): Promise<V1PremierLeaderboard> {
        const result = this.api.valorantV1PremierLeaderboardAffinityConferenceDivisionGet(affinity, conference, division, _options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by div and ranking
     * @param affinity 
     * @param conference 
     */
    public valorantV1PremierLeaderboardAffinityConferenceGetWithHttpInfo(affinity: Affinities, conference: PremierConferences, _options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        const result = this.api.valorantV1PremierLeaderboardAffinityConferenceGetWithHttpInfo(affinity, conference, _options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by div and ranking
     * @param affinity 
     * @param conference 
     */
    public valorantV1PremierLeaderboardAffinityConferenceGet(affinity: Affinities, conference: PremierConferences, _options?: Configuration): Promise<V1PremierLeaderboard> {
        const result = this.api.valorantV1PremierLeaderboardAffinityConferenceGet(affinity, conference, _options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the affinity, sorted by div and ranking
     * @param affinity 
     */
    public valorantV1PremierLeaderboardAffinityGetWithHttpInfo(affinity: Affinities, _options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        const result = this.api.valorantV1PremierLeaderboardAffinityGetWithHttpInfo(affinity, _options);
        return result.toPromise();
    }

    /**
     * Get a combined leaderboard in the affinity, sorted by div and ranking
     * @param affinity 
     */
    public valorantV1PremierLeaderboardAffinityGet(affinity: Affinities, _options?: Configuration): Promise<V1PremierLeaderboard> {
        const result = this.api.valorantV1PremierLeaderboardAffinityGet(affinity, _options);
        return result.toPromise();
    }

    /**
     * Search for current active premier teams
     * @param name 
     * @param tag 
     * @param division 
     * @param conference 
     */
    public valorantV1PremierSearchGetWithHttpInfo(name?: string, tag?: string, division?: number, conference?: PremierConferences, _options?: Configuration): Promise<HttpInfo<V1PremierSearch>> {
        const result = this.api.valorantV1PremierSearchGetWithHttpInfo(name, tag, division, conference, _options);
        return result.toPromise();
    }

    /**
     * Search for current active premier teams
     * @param name 
     * @param tag 
     * @param division 
     * @param conference 
     */
    public valorantV1PremierSearchGet(name?: string, tag?: string, division?: number, conference?: PremierConferences, _options?: Configuration): Promise<V1PremierSearch> {
        const result = this.api.valorantV1PremierSearchGet(name, tag, division, conference, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all premier seasons
     * @param affinity 
     */
    public valorantV1PremierSeasonsAffinityGetWithHttpInfo(affinity: Affinities, _options?: Configuration): Promise<HttpInfo<V1PremierSeason>> {
        const result = this.api.valorantV1PremierSeasonsAffinityGetWithHttpInfo(affinity, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all premier seasons
     * @param affinity 
     */
    public valorantV1PremierSeasonsAffinityGet(affinity: Affinities, _options?: Configuration): Promise<V1PremierSeason> {
        const result = this.api.valorantV1PremierSeasonsAffinityGet(affinity, _options);
        return result.toPromise();
    }

    /**
     * Get details about a premier team
     * @param teamId 
     */
    public valorantV1PremierTeamIdGetWithHttpInfo(teamId: string, _options?: Configuration): Promise<HttpInfo<V1PremierTeam>> {
        const result = this.api.valorantV1PremierTeamIdGetWithHttpInfo(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get details about a premier team
     * @param teamId 
     */
    public valorantV1PremierTeamIdGet(teamId: string, _options?: Configuration): Promise<V1PremierTeam> {
        const result = this.api.valorantV1PremierTeamIdGet(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get match history of a premier team
     * @param teamId 
     */
    public valorantV1PremierTeamIdHistoryGetWithHttpInfo(teamId: string, _options?: Configuration): Promise<HttpInfo<V1PremierTeamHistory>> {
        const result = this.api.valorantV1PremierTeamIdHistoryGetWithHttpInfo(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get match history of a premier team
     * @param teamId 
     */
    public valorantV1PremierTeamIdHistoryGet(teamId: string, _options?: Configuration): Promise<V1PremierTeamHistory> {
        const result = this.api.valorantV1PremierTeamIdHistoryGet(teamId, _options);
        return result.toPromise();
    }

    /**
     * Get details about a premier team
     * @param teamName 
     * @param teamTag 
     */
    public valorantV1PremierTeamNameTeamTagGetWithHttpInfo(teamName: string, teamTag: string, _options?: Configuration): Promise<HttpInfo<V1PremierTeam>> {
        const result = this.api.valorantV1PremierTeamNameTeamTagGetWithHttpInfo(teamName, teamTag, _options);
        return result.toPromise();
    }

    /**
     * Get details about a premier team
     * @param teamName 
     * @param teamTag 
     */
    public valorantV1PremierTeamNameTeamTagGet(teamName: string, teamTag: string, _options?: Configuration): Promise<V1PremierTeam> {
        const result = this.api.valorantV1PremierTeamNameTeamTagGet(teamName, teamTag, _options);
        return result.toPromise();
    }

    /**
     * Get match history of a premier team
     * @param teamName 
     * @param teamTag 
     */
    public valorantV1PremierTeamNameTeamTagHistoryGetWithHttpInfo(teamName: string, teamTag: string, _options?: Configuration): Promise<HttpInfo<V1PremierTeamHistory>> {
        const result = this.api.valorantV1PremierTeamNameTeamTagHistoryGetWithHttpInfo(teamName, teamTag, _options);
        return result.toPromise();
    }

    /**
     * Get match history of a premier team
     * @param teamName 
     * @param teamTag 
     */
    public valorantV1PremierTeamNameTeamTagHistoryGet(teamName: string, teamTag: string, _options?: Configuration): Promise<V1PremierTeamHistory> {
        const result = this.api.valorantV1PremierTeamNameTeamTagHistoryGet(teamName, teamTag, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all available queues and their metadata
     * @param affinity 
     */
    public valorantV1QueueStatusAffinityGetWithHttpInfo(affinity: Affinities, _options?: Configuration): Promise<HttpInfo<V1QueueStatus>> {
        const result = this.api.valorantV1QueueStatusAffinityGetWithHttpInfo(affinity, _options);
        return result.toPromise();
    }

    /**
     * Get a list of all available queues and their metadata
     * @param affinity 
     */
    public valorantV1QueueStatusAffinityGet(affinity: Affinities, _options?: Configuration): Promise<V1QueueStatus> {
        const result = this.api.valorantV1QueueStatusAffinityGet(affinity, _options);
        return result.toPromise();
    }

    /**
     * Get unchanged response from the valorant api
     * @param valorantV1RawPostRequest Post body to receive data
     */
    public valorantV1RawPostWithHttpInfo(valorantV1RawPostRequest: ValorantV1RawPostRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.valorantV1RawPostWithHttpInfo(valorantV1RawPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Get unchanged response from the valorant api
     * @param valorantV1RawPostRequest Post body to receive data
     */
    public valorantV1RawPost(valorantV1RawPostRequest: ValorantV1RawPostRequest, _options?: Configuration): Promise<void> {
        const result = this.api.valorantV1RawPost(valorantV1RawPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Server status
     * @param affinity 
     */
    public valorantV1StatusAffinityGetWithHttpInfo(affinity: Affinities, _options?: Configuration): Promise<HttpInfo<ValorantV1StatusAffinityGet200Response>> {
        const result = this.api.valorantV1StatusAffinityGetWithHttpInfo(affinity, _options);
        return result.toPromise();
    }

    /**
     * Server status
     * @param affinity 
     */
    public valorantV1StatusAffinityGet(affinity: Affinities, _options?: Configuration): Promise<ValorantV1StatusAffinityGet200Response> {
        const result = this.api.valorantV1StatusAffinityGet(affinity, _options);
        return result.toPromise();
    }

    /**
     */
    public valorantV1StoreFeaturedGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<V1storefeatured>> {
        const result = this.api.valorantV1StoreFeaturedGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV1StoreFeaturedGet(_options?: Configuration): Promise<V1storefeatured> {
        const result = this.api.valorantV1StoreFeaturedGet(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV1StoreOffersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.valorantV1StoreOffersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV1StoreOffersGet(_options?: Configuration): Promise<any> {
        const result = this.api.valorantV1StoreOffersGet(_options);
        return result.toPromise();
    }

    /**
     * @param affinity 
     */
    public valorantV1VersionAffinityGetWithHttpInfo(affinity: Affinities, _options?: Configuration): Promise<HttpInfo<ValorantV1VersionAffinityGet200Response>> {
        const result = this.api.valorantV1VersionAffinityGetWithHttpInfo(affinity, _options);
        return result.toPromise();
    }

    /**
     * @param affinity 
     */
    public valorantV1VersionAffinityGet(affinity: Affinities, _options?: Configuration): Promise<ValorantV1VersionAffinityGet200Response> {
        const result = this.api.valorantV1VersionAffinityGet(affinity, _options);
        return result.toPromise();
    }

    /**
     * @param countryCode 
     */
    public valorantV1WebsiteCountryCodeGetWithHttpInfo(countryCode: 'en-us' | 'en-gb' | 'de-de' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn', _options?: Configuration): Promise<HttpInfo<ValorantV1WebsiteCountryCodeGet200Response>> {
        const result = this.api.valorantV1WebsiteCountryCodeGetWithHttpInfo(countryCode, _options);
        return result.toPromise();
    }

    /**
     * @param countryCode 
     */
    public valorantV1WebsiteCountryCodeGet(countryCode: 'en-us' | 'en-gb' | 'de-de' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn', _options?: Configuration): Promise<ValorantV1WebsiteCountryCodeGet200Response> {
        const result = this.api.valorantV1WebsiteCountryCodeGet(countryCode, _options);
        return result.toPromise();
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param season Available for v2 MMR
     */
    public valorantV2ByPuuidMmrAffinityPuuidGetWithHttpInfo(affinity: Affinities, puuid: string, season?: Seasons, _options?: Configuration): Promise<HttpInfo<V2mmr>> {
        const result = this.api.valorantV2ByPuuidMmrAffinityPuuidGetWithHttpInfo(affinity, puuid, season, _options);
        return result.toPromise();
    }

    /**
     * Get MMR Details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param season Available for v2 MMR
     */
    public valorantV2ByPuuidMmrAffinityPuuidGet(affinity: Affinities, puuid: string, season?: Seasons, _options?: Configuration): Promise<V2mmr> {
        const result = this.api.valorantV2ByPuuidMmrAffinityPuuidGet(affinity, puuid, season, _options);
        return result.toPromise();
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public valorantV2LeaderboardAffinityGetWithHttpInfo(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<HttpInfo<V2leaderboard>> {
        const result = this.api.valorantV2LeaderboardAffinityGetWithHttpInfo(affinity, puuid, name, tag, season, _options);
        return result.toPromise();
    }

    /**
     * Get Leaderboard
     * @param affinity 
     * @param puuid Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param name Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param tag Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @param season Returns the leaderboard for a specific season
     */
    public valorantV2LeaderboardAffinityGet(affinity: Affinities, puuid?: string, name?: string, tag?: string, season?: Seasons, _options?: Configuration): Promise<V2leaderboard> {
        const result = this.api.valorantV2LeaderboardAffinityGet(affinity, puuid, name, tag, season, _options);
        return result.toPromise();
    }

    /**
     * Get Match Deatils
     * @param matchId 
     */
    public valorantV2MatchMatchIdGetWithHttpInfo(matchId: string, _options?: Configuration): Promise<HttpInfo<ValorantV2MatchMatchIdGet200Response>> {
        const result = this.api.valorantV2MatchMatchIdGetWithHttpInfo(matchId, _options);
        return result.toPromise();
    }

    /**
     * Get Match Deatils
     * @param matchId 
     */
    public valorantV2MatchMatchIdGet(matchId: string, _options?: Configuration): Promise<ValorantV2MatchMatchIdGet200Response> {
        const result = this.api.valorantV2MatchMatchIdGet(matchId, _options);
        return result.toPromise();
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param season Available for v2 mmr only
     */
    public valorantV2MmrAffinityNameTagGetWithHttpInfo(name: string, tag: string, affinity: Affinities, season?: Seasons, _options?: Configuration): Promise<HttpInfo<V2mmr>> {
        const result = this.api.valorantV2MmrAffinityNameTagGetWithHttpInfo(name, tag, affinity, season, _options);
        return result.toPromise();
    }

    /**
     * Get mmr details
     * @param name 
     * @param tag 
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param season Available for v2 mmr only
     */
    public valorantV2MmrAffinityNameTagGet(name: string, tag: string, affinity: Affinities, season?: Seasons, _options?: Configuration): Promise<V2mmr> {
        const result = this.api.valorantV2MmrAffinityNameTagGet(name, tag, affinity, season, _options);
        return result.toPromise();
    }

    /**
     */
    public valorantV2StoreFeaturedGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<V2storefeatured>> {
        const result = this.api.valorantV2StoreFeaturedGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV2StoreFeaturedGet(_options?: Configuration): Promise<V2storefeatured> {
        const result = this.api.valorantV2StoreFeaturedGet(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV2StoreOffersGetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<V2storeoffers>> {
        const result = this.api.valorantV2StoreOffersGetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public valorantV2StoreOffersGet(_options?: Configuration): Promise<V2storeoffers> {
        const result = this.api.valorantV2StoreOffersGet(_options);
        return result.toPromise();
    }

    /**
     * Get account details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param mode 
     * @param map Available for v3 matches
     * @param size Available for v3 matches (how many matches should be returned)
     */
    public valorantV3ByPuuidMatchesAffinityPuuidGetWithHttpInfo(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, size?: number, _options?: Configuration): Promise<HttpInfo<V3matches>> {
        const result = this.api.valorantV3ByPuuidMatchesAffinityPuuidGetWithHttpInfo(affinity, puuid, mode, map, size, _options);
        return result.toPromise();
    }

    /**
     * Get account details
     * @param affinity Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @param puuid PUUID of the user
     * @param mode 
     * @param map Available for v3 matches
     * @param size Available for v3 matches (how many matches should be returned)
     */
    public valorantV3ByPuuidMatchesAffinityPuuidGet(affinity: Affinities, puuid: string, mode?: ModesApi, map?: Maps, size?: number, _options?: Configuration): Promise<V3matches> {
        const result = this.api.valorantV3ByPuuidMatchesAffinityPuuidGet(affinity, puuid, mode, map, size, _options);
        return result.toPromise();
    }

    /**
     * Get Match History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public valorantV3MatchesAffinityNameTagGetWithHttpInfo(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<HttpInfo<ValorantV3MatchesAffinityNameTagGet200Response>> {
        const result = this.api.valorantV3MatchesAffinityNameTagGetWithHttpInfo(name, tag, affinity, _options);
        return result.toPromise();
    }

    /**
     * Get Match History
     * @param name 
     * @param tag 
     * @param affinity 
     */
    public valorantV3MatchesAffinityNameTagGet(name: string, tag: string, affinity: Affinities, _options?: Configuration): Promise<ValorantV3MatchesAffinityNameTagGet200Response> {
        const result = this.api.valorantV3MatchesAffinityNameTagGet(name, tag, affinity, _options);
        return result.toPromise();
    }


}



