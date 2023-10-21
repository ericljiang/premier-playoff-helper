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
import { TeamRoster } from '../models/TeamRoaster';
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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiValorantV1AccountNameTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1AccountNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1AccountNameTagGet
     */
    tag: string
    /**
     * Force data update
     * @type boolean
     * @memberof DefaultApivalorantV1AccountNameTagGet
     */
    force?: boolean
}

export interface DefaultApiValorantV1ByPuuidAccountPuuidGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1ByPuuidAccountPuuidGet
     */
    puuid: string
    /**
     * Force data update
     * @type boolean
     * @memberof DefaultApivalorantV1ByPuuidAccountPuuidGet
     */
    force?: boolean
}

export interface DefaultApiValorantV1ByPuuidLifetimeMatchesAffinityPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    affinity: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    puuid: string
    /**
     * 
     * @type ModesApi
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    mode?: ModesApi
    /**
     * 
     * @type Maps
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    map?: Maps
    /**
     * The page used in pagination (if this is used, the size query parameter also have to exist)
     * @type number
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    page?: number
    /**
     * The amount of returned matches
     * @type number
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMatchesAffinityPuuidGet
     */
    size?: number
}

export interface DefaultApiValorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet
     */
    region: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet
     */
    puuid: string
    /**
     * The page used in pagination (if this is used, the size query parameter also have to exist)
     * @type number
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet
     */
    page?: number
    /**
     * The amount of mmr changes
     * @type number
     * @memberof DefaultApivalorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet
     */
    size?: number
}

export interface DefaultApiValorantV1ByPuuidMmrAffinityPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1ByPuuidMmrAffinityPuuidGet
     */
    affinity: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV1ByPuuidMmrAffinityPuuidGet
     */
    puuid: string
}

export interface DefaultApiValorantV1ByPuuidMmrHistoryAffinityPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1ByPuuidMmrHistoryAffinityPuuidGet
     */
    affinity: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV1ByPuuidMmrHistoryAffinityPuuidGet
     */
    puuid: string
}

export interface DefaultApiValorantV1ContentGetRequest {
    /**
     * 
     * @type &#39;ar-AE&#39; | &#39;de-DE&#39; | &#39;en-GB&#39; | &#39;en-US&#39; | &#39;es-ES&#39; | &#39;es-MX&#39; | &#39;fr-FR&#39; | &#39;id-ID&#39; | &#39;it-IT&#39; | &#39;ja-JP&#39; | &#39;ko-KR&#39; | &#39;pl-PL&#39; | &#39;pt-BR&#39; | &#39;ru-RU&#39; | &#39;th-TH&#39; | &#39;tr-TR&#39; | &#39;vi-VN&#39; | &#39;zn-CN&#39; | &#39;zn-TW&#39;
     * @memberof DefaultApivalorantV1ContentGet
     */
    locale?: 'ar-AE' | 'de-DE' | 'en-GB' | 'en-US' | 'es-ES' | 'es-MX' | 'fr-FR' | 'id-ID' | 'it-IT' | 'ja-JP' | 'ko-KR' | 'pl-PL' | 'pt-BR' | 'ru-RU' | 'th-TH' | 'tr-TR' | 'vi-VN' | 'zn-CN' | 'zn-TW'
}

export interface DefaultApiValorantV1CrosshairGenerateGetRequest {
    /**
     * ID of the crosshair
     * @type string
     * @memberof DefaultApivalorantV1CrosshairGenerateGet
     */
    id?: string
}

export interface DefaultApiValorantV1EsportsScheduleGetRequest {
    /**
     * region of the game (multiple possible)
     * @type &#39;international&#39; | &#39;north america&#39; | &#39;emea&#39; | &#39;brazil&#39; | &#39;japan&#39; | &#39;korea&#39; | &#39;latin_america&#39; | &#39;latin_america_south&#39; | &#39;latin_america_north&#39; | &#39;southeast_asia&#39; | &#39;vietnam&#39; | &#39;oceania&#39;
     * @memberof DefaultApivalorantV1EsportsScheduleGet
     */
    region?: 'international' | 'north america' | 'emea' | 'brazil' | 'japan' | 'korea' | 'latin_america' | 'latin_america_south' | 'latin_america_north' | 'southeast_asia' | 'vietnam' | 'oceania'
    /**
     * league of the game (multiple possible, these also can be highly dynamic if riot announces new tournaments/leagues)
     * @type &#39;vct_americas&#39; | &#39;challengers_na&#39; | &#39;game_changers_na&#39; | &#39;vct_emea&#39; | &#39;vct_pacific&#39; | &#39;challengers_br&#39; | &#39;challengers_jpn&#39; | &#39;challengers_kr&#39; | &#39;challengers_latam&#39; | &#39;challengers_latam_n&#39; | &#39;challengers_latam_s&#39; | &#39;challengers_apac&#39; | &#39;challengers_sea_id&#39; | &#39;challengers_sea_ph&#39; | &#39;challengers_sea_sg_and_my&#39; | &#39;challengers_sea_th&#39; | &#39;challengers_sea_hk_and_tw&#39; | &#39;challengers_sea_vn&#39; | &#39;valorant_oceania_tour&#39; | &#39;challengers_south_asia&#39; | &#39;game_changers_sea&#39; | &#39;game_changers_series_brazil&#39; | &#39;game_changers_east_asia&#39; | &#39;game_changers_emea&#39; | &#39;game_changers_jpn&#39; | &#39;game_changers_kr&#39; | &#39;game_changers_latam&#39; | &#39;game_changers_championship&#39; | &#39;masters&#39; | &#39;last_chance_qualifier_apac&#39; | &#39;last_chance_qualifier_east_asia&#39; | &#39;last_chance_qualifier_emea&#39; | &#39;last_chance_qualifier_na&#39; | &#39;last_chance_qualifier_br_and_latam&#39; | &#39;vct_lock_in&#39; | &#39;champions&#39; | &#39;vrl_spain&#39; | &#39;vrl_northern_europe&#39; | &#39;vrl_dach&#39; | &#39;vrl_france&#39; | &#39;vrl_east&#39; | &#39;vrl_turkey&#39; | &#39;vrl_cis&#39; | &#39;mena_resilence&#39; | &#39;challengers_italy&#39; | &#39;challengers_portugal&#39;
     * @memberof DefaultApivalorantV1EsportsScheduleGet
     */
    league?: 'vct_americas' | 'challengers_na' | 'game_changers_na' | 'vct_emea' | 'vct_pacific' | 'challengers_br' | 'challengers_jpn' | 'challengers_kr' | 'challengers_latam' | 'challengers_latam_n' | 'challengers_latam_s' | 'challengers_apac' | 'challengers_sea_id' | 'challengers_sea_ph' | 'challengers_sea_sg_and_my' | 'challengers_sea_th' | 'challengers_sea_hk_and_tw' | 'challengers_sea_vn' | 'valorant_oceania_tour' | 'challengers_south_asia' | 'game_changers_sea' | 'game_changers_series_brazil' | 'game_changers_east_asia' | 'game_changers_emea' | 'game_changers_jpn' | 'game_changers_kr' | 'game_changers_latam' | 'game_changers_championship' | 'masters' | 'last_chance_qualifier_apac' | 'last_chance_qualifier_east_asia' | 'last_chance_qualifier_emea' | 'last_chance_qualifier_na' | 'last_chance_qualifier_br_and_latam' | 'vct_lock_in' | 'champions' | 'vrl_spain' | 'vrl_northern_europe' | 'vrl_dach' | 'vrl_france' | 'vrl_east' | 'vrl_turkey' | 'vrl_cis' | 'mena_resilence' | 'challengers_italy' | 'challengers_portugal'
}

export interface DefaultApiValorantV1LeaderboardAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1LeaderboardAffinityGet
     */
    affinity: Affinities
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV1LeaderboardAffinityGet
     */
    puuid?: string
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV1LeaderboardAffinityGet
     */
    name?: string
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV1LeaderboardAffinityGet
     */
    tag?: string
    /**
     * Returns the leaderboard for a specific season
     * @type Seasons
     * @memberof DefaultApivalorantV1LeaderboardAffinityGet
     */
    season?: Seasons
}

export interface DefaultApiValorantV1LifetimeMatchesAffinityNameTagGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    affinity: Affinities
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    tag: string
    /**
     * 
     * @type ModesApi
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    mode?: ModesApi
    /**
     * 
     * @type Maps
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    map?: Maps
    /**
     * The page used in pagination (if this is used, the size query parameter also have to exist)
     * @type number
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    page?: number
    /**
     * The amount of returned matches
     * @type number
     * @memberof DefaultApivalorantV1LifetimeMatchesAffinityNameTagGet
     */
    size?: number
}

export interface DefaultApiValorantV1LifetimeMmrHistoryAffinityNameTagGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1LifetimeMmrHistoryAffinityNameTagGet
     */
    affinity: Affinities
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1LifetimeMmrHistoryAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1LifetimeMmrHistoryAffinityNameTagGet
     */
    tag: string
    /**
     * The page used in pagination (if this is used, the size query parameter also have to exist)
     * @type number
     * @memberof DefaultApivalorantV1LifetimeMmrHistoryAffinityNameTagGet
     */
    page?: number
    /**
     * The amount of returned mmr changes
     * @type number
     * @memberof DefaultApivalorantV1LifetimeMmrHistoryAffinityNameTagGet
     */
    size?: number
}

export interface DefaultApiValorantV1MmrAffinityNameTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1MmrAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1MmrAffinityNameTagGet
     */
    tag: string
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV1MmrAffinityNameTagGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1MmrHistoryAffinityNameTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1MmrHistoryAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1MmrHistoryAffinityNameTagGet
     */
    tag: string
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1MmrHistoryAffinityNameTagGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1PremierConferencesGetRequest {
}

export interface DefaultApiValorantV1PremierLeaderboardAffinityConferenceDivisionGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityConferenceDivisionGet
     */
    affinity: Affinities
    /**
     * 
     * @type PremierConferences
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityConferenceDivisionGet
     */
    conference: PremierConferences
    /**
     * 
     * @type number
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityConferenceDivisionGet
     */
    division: number
}

export interface DefaultApiValorantV1PremierLeaderboardAffinityConferenceGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityConferenceGet
     */
    affinity: Affinities
    /**
     * 
     * @type PremierConferences
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityConferenceGet
     */
    conference: PremierConferences
}

export interface DefaultApiValorantV1PremierLeaderboardAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1PremierLeaderboardAffinityGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1PremierSearchGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierSearchGet
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierSearchGet
     */
    tag?: string
    /**
     * 
     * @type number
     * @memberof DefaultApivalorantV1PremierSearchGet
     */
    division?: number
    /**
     * 
     * @type PremierConferences
     * @memberof DefaultApivalorantV1PremierSearchGet
     */
    conference?: PremierConferences
}

export interface DefaultApiValorantV1PremierSeasonsAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1PremierSeasonsAffinityGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1PremierTeamIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamIdGet
     */
    teamId: string
}

export interface DefaultApiValorantV1PremierTeamIdHistoryGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamIdHistoryGet
     */
    teamId: string
}

export interface DefaultApiValorantV1PremierTeamNameTeamTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamNameTeamTagGet
     */
    teamName: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamNameTeamTagGet
     */
    teamTag: string
}

export interface DefaultApiValorantV1PremierTeamNameTeamTagHistoryGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamNameTeamTagHistoryGet
     */
    teamName: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV1PremierTeamNameTeamTagHistoryGet
     */
    teamTag: string
}

export interface DefaultApiValorantV1QueueStatusAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1QueueStatusAffinityGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1RawPostRequest {
    /**
     * Post body to receive data
     * @type ValorantV1RawPostRequest
     * @memberof DefaultApivalorantV1RawPost
     */
    valorantV1RawPostRequest: ValorantV1RawPostRequest
}

export interface DefaultApiValorantV1StatusAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1StatusAffinityGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1StoreFeaturedGetRequest {
}

export interface DefaultApiValorantV1StoreOffersGetRequest {
}

export interface DefaultApiValorantV1VersionAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV1VersionAffinityGet
     */
    affinity: Affinities
}

export interface DefaultApiValorantV1WebsiteCountryCodeGetRequest {
    /**
     * 
     * @type &#39;en-us&#39; | &#39;en-gb&#39; | &#39;de-de&#39; | &#39;es-es&#39; | &#39;es-mx&#39; | &#39;fr-fr&#39; | &#39;it-it&#39; | &#39;ja-jp&#39; | &#39;ko-kr&#39; | &#39;pt-br&#39; | &#39;ru-ru&#39; | &#39;tr-tr&#39; | &#39;vi-vn&#39;
     * @memberof DefaultApivalorantV1WebsiteCountryCodeGet
     */
    countryCode: 'en-us' | 'en-gb' | 'de-de' | 'es-es' | 'es-mx' | 'fr-fr' | 'it-it' | 'ja-jp' | 'ko-kr' | 'pt-br' | 'ru-ru' | 'tr-tr' | 'vi-vn'
}

export interface DefaultApiValorantV2ByPuuidMmrAffinityPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV2ByPuuidMmrAffinityPuuidGet
     */
    affinity: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV2ByPuuidMmrAffinityPuuidGet
     */
    puuid: string
    /**
     * Available for v2 MMR
     * @type Seasons
     * @memberof DefaultApivalorantV2ByPuuidMmrAffinityPuuidGet
     */
    season?: Seasons
}

export interface DefaultApiValorantV2LeaderboardAffinityGetRequest {
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV2LeaderboardAffinityGet
     */
    affinity: Affinities
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV2LeaderboardAffinityGet
     */
    puuid?: string
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV2LeaderboardAffinityGet
     */
    name?: string
    /**
     * Note that you can only filter by puuid or name and tag, both at the same time is logically not possible
     * @type string
     * @memberof DefaultApivalorantV2LeaderboardAffinityGet
     */
    tag?: string
    /**
     * Returns the leaderboard for a specific season
     * @type Seasons
     * @memberof DefaultApivalorantV2LeaderboardAffinityGet
     */
    season?: Seasons
}

export interface DefaultApiValorantV2MatchMatchIdGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV2MatchMatchIdGet
     */
    matchId: string
}

export interface DefaultApiValorantV2MmrAffinityNameTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV2MmrAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV2MmrAffinityNameTagGet
     */
    tag: string
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV2MmrAffinityNameTagGet
     */
    affinity: Affinities
    /**
     * Available for v2 mmr only
     * @type Seasons
     * @memberof DefaultApivalorantV2MmrAffinityNameTagGet
     */
    season?: Seasons
}

export interface DefaultApiValorantV2StoreFeaturedGetRequest {
}

export interface DefaultApiValorantV2StoreOffersGetRequest {
}

export interface DefaultApiValorantV3ByPuuidMatchesAffinityPuuidGetRequest {
    /**
     * Choose from ap, br, eu, kr, latam, na (br and latam will be internally converted to na)
     * @type Affinities
     * @memberof DefaultApivalorantV3ByPuuidMatchesAffinityPuuidGet
     */
    affinity: Affinities
    /**
     * PUUID of the user
     * @type string
     * @memberof DefaultApivalorantV3ByPuuidMatchesAffinityPuuidGet
     */
    puuid: string
    /**
     * 
     * @type ModesApi
     * @memberof DefaultApivalorantV3ByPuuidMatchesAffinityPuuidGet
     */
    mode?: ModesApi
    /**
     * Available for v3 matches
     * @type Maps
     * @memberof DefaultApivalorantV3ByPuuidMatchesAffinityPuuidGet
     */
    map?: Maps
    /**
     * Available for v3 matches (how many matches should be returned)
     * @type number
     * @memberof DefaultApivalorantV3ByPuuidMatchesAffinityPuuidGet
     */
    size?: number
}

export interface DefaultApiValorantV3MatchesAffinityNameTagGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV3MatchesAffinityNameTagGet
     */
    name: string
    /**
     * 
     * @type string
     * @memberof DefaultApivalorantV3MatchesAffinityNameTagGet
     */
    tag: string
    /**
     * 
     * @type Affinities
     * @memberof DefaultApivalorantV3MatchesAffinityNameTagGet
     */
    affinity: Affinities
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV1AccountNameTagGetWithHttpInfo(param: DefaultApiValorantV1AccountNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V1Account>> {
        return this.api.valorantV1AccountNameTagGetWithHttpInfo(param.name, param.tag, param.force,  options).toPromise();
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV1AccountNameTagGet(param: DefaultApiValorantV1AccountNameTagGetRequest, options?: Configuration): Promise<V1Account> {
        return this.api.valorantV1AccountNameTagGet(param.name, param.tag, param.force,  options).toPromise();
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV1ByPuuidAccountPuuidGetWithHttpInfo(param: DefaultApiValorantV1ByPuuidAccountPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V1Account>> {
        return this.api.valorantV1ByPuuidAccountPuuidGetWithHttpInfo(param.puuid, param.force,  options).toPromise();
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV1ByPuuidAccountPuuidGet(param: DefaultApiValorantV1ByPuuidAccountPuuidGetRequest, options?: Configuration): Promise<V1Account> {
        return this.api.valorantV1ByPuuidAccountPuuidGet(param.puuid, param.force,  options).toPromise();
    }

    /**
     * Get lifetime matches
     * @param param the request object
     */
    public valorantV1ByPuuidLifetimeMatchesAffinityPuuidGetWithHttpInfo(param: DefaultApiValorantV1ByPuuidLifetimeMatchesAffinityPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V1LifetimeMatches>> {
        return this.api.valorantV1ByPuuidLifetimeMatchesAffinityPuuidGetWithHttpInfo(param.affinity, param.puuid, param.mode, param.map, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime matches
     * @param param the request object
     */
    public valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet(param: DefaultApiValorantV1ByPuuidLifetimeMatchesAffinityPuuidGetRequest, options?: Configuration): Promise<V1LifetimeMatches> {
        return this.api.valorantV1ByPuuidLifetimeMatchesAffinityPuuidGet(param.affinity, param.puuid, param.mode, param.map, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime mmr history
     * @param param the request object
     */
    public valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetWithHttpInfo(param: DefaultApiValorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V1LifetimeMmrHistory>> {
        return this.api.valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetWithHttpInfo(param.region, param.puuid, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime mmr history
     * @param param the request object
     */
    public valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet(param: DefaultApiValorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGetRequest, options?: Configuration): Promise<V1LifetimeMmrHistory> {
        return this.api.valorantV1ByPuuidLifetimeMmrHistoryRegionPuuidGet(param.region, param.puuid, param.page, param.size,  options).toPromise();
    }

    /**
     * Get MMR Details
     * @param param the request object
     */
    public valorantV1ByPuuidMmrAffinityPuuidGetWithHttpInfo(param: DefaultApiValorantV1ByPuuidMmrAffinityPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V1mmr>> {
        return this.api.valorantV1ByPuuidMmrAffinityPuuidGetWithHttpInfo(param.affinity, param.puuid,  options).toPromise();
    }

    /**
     * Get MMR Details
     * @param param the request object
     */
    public valorantV1ByPuuidMmrAffinityPuuidGet(param: DefaultApiValorantV1ByPuuidMmrAffinityPuuidGetRequest, options?: Configuration): Promise<V1mmr> {
        return this.api.valorantV1ByPuuidMmrAffinityPuuidGet(param.affinity, param.puuid,  options).toPromise();
    }

    /**
     * Get mmr history
     * @param param the request object
     */
    public valorantV1ByPuuidMmrHistoryAffinityPuuidGetWithHttpInfo(param: DefaultApiValorantV1ByPuuidMmrHistoryAffinityPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V1mmrh>> {
        return this.api.valorantV1ByPuuidMmrHistoryAffinityPuuidGetWithHttpInfo(param.affinity, param.puuid,  options).toPromise();
    }

    /**
     * Get mmr history
     * @param param the request object
     */
    public valorantV1ByPuuidMmrHistoryAffinityPuuidGet(param: DefaultApiValorantV1ByPuuidMmrHistoryAffinityPuuidGetRequest, options?: Configuration): Promise<V1mmrh> {
        return this.api.valorantV1ByPuuidMmrHistoryAffinityPuuidGet(param.affinity, param.puuid,  options).toPromise();
    }

    /**
     * Get content
     * @param param the request object
     */
    public valorantV1ContentGetWithHttpInfo(param: DefaultApiValorantV1ContentGetRequest = {}, options?: Configuration): Promise<HttpInfo<ValorantV1ContentGet200Response>> {
        return this.api.valorantV1ContentGetWithHttpInfo(param.locale,  options).toPromise();
    }

    /**
     * Get content
     * @param param the request object
     */
    public valorantV1ContentGet(param: DefaultApiValorantV1ContentGetRequest = {}, options?: Configuration): Promise<ValorantV1ContentGet200Response> {
        return this.api.valorantV1ContentGet(param.locale,  options).toPromise();
    }

    /**
     * Outputs a 1024x1024 pixel image of the requested crosshair
     * @param param the request object
     */
    public valorantV1CrosshairGenerateGetWithHttpInfo(param: DefaultApiValorantV1CrosshairGenerateGetRequest = {}, options?: Configuration): Promise<HttpInfo<HttpFile>> {
        return this.api.valorantV1CrosshairGenerateGetWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Outputs a 1024x1024 pixel image of the requested crosshair
     * @param param the request object
     */
    public valorantV1CrosshairGenerateGet(param: DefaultApiValorantV1CrosshairGenerateGetRequest = {}, options?: Configuration): Promise<HttpFile> {
        return this.api.valorantV1CrosshairGenerateGet(param.id,  options).toPromise();
    }

    /**
     * Returns esports schedule data
     * @param param the request object
     */
    public valorantV1EsportsScheduleGetWithHttpInfo(param: DefaultApiValorantV1EsportsScheduleGetRequest = {}, options?: Configuration): Promise<HttpInfo<V1esportschedule>> {
        return this.api.valorantV1EsportsScheduleGetWithHttpInfo(param.region, param.league,  options).toPromise();
    }

    /**
     * Returns esports schedule data
     * @param param the request object
     */
    public valorantV1EsportsScheduleGet(param: DefaultApiValorantV1EsportsScheduleGetRequest = {}, options?: Configuration): Promise<V1esportschedule> {
        return this.api.valorantV1EsportsScheduleGet(param.region, param.league,  options).toPromise();
    }

    /**
     * Get Leaderboard
     * @param param the request object
     */
    public valorantV1LeaderboardAffinityGetWithHttpInfo(param: DefaultApiValorantV1LeaderboardAffinityGetRequest, options?: Configuration): Promise<HttpInfo<Array<LeaderboardInner>>> {
        return this.api.valorantV1LeaderboardAffinityGetWithHttpInfo(param.affinity, param.puuid, param.name, param.tag, param.season,  options).toPromise();
    }

    /**
     * Get Leaderboard
     * @param param the request object
     */
    public valorantV1LeaderboardAffinityGet(param: DefaultApiValorantV1LeaderboardAffinityGetRequest, options?: Configuration): Promise<Array<LeaderboardInner>> {
        return this.api.valorantV1LeaderboardAffinityGet(param.affinity, param.puuid, param.name, param.tag, param.season,  options).toPromise();
    }

    /**
     * Get lifetime matches
     * @param param the request object
     */
    public valorantV1LifetimeMatchesAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV1LifetimeMatchesAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V1LifetimeMatches>> {
        return this.api.valorantV1LifetimeMatchesAffinityNameTagGetWithHttpInfo(param.affinity, param.name, param.tag, param.mode, param.map, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime matches
     * @param param the request object
     */
    public valorantV1LifetimeMatchesAffinityNameTagGet(param: DefaultApiValorantV1LifetimeMatchesAffinityNameTagGetRequest, options?: Configuration): Promise<V1LifetimeMatches> {
        return this.api.valorantV1LifetimeMatchesAffinityNameTagGet(param.affinity, param.name, param.tag, param.mode, param.map, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime mmr changes
     * @param param the request object
     */
    public valorantV1LifetimeMmrHistoryAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV1LifetimeMmrHistoryAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V1LifetimeMmrHistory>> {
        return this.api.valorantV1LifetimeMmrHistoryAffinityNameTagGetWithHttpInfo(param.affinity, param.name, param.tag, param.page, param.size,  options).toPromise();
    }

    /**
     * Get lifetime mmr changes
     * @param param the request object
     */
    public valorantV1LifetimeMmrHistoryAffinityNameTagGet(param: DefaultApiValorantV1LifetimeMmrHistoryAffinityNameTagGetRequest, options?: Configuration): Promise<V1LifetimeMmrHistory> {
        return this.api.valorantV1LifetimeMmrHistoryAffinityNameTagGet(param.affinity, param.name, param.tag, param.page, param.size,  options).toPromise();
    }

    /**
     * Get mmr details
     * @param param the request object
     */
    public valorantV1MmrAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV1MmrAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V1mmr>> {
        return this.api.valorantV1MmrAffinityNameTagGetWithHttpInfo(param.name, param.tag, param.affinity,  options).toPromise();
    }

    /**
     * Get mmr details
     * @param param the request object
     */
    public valorantV1MmrAffinityNameTagGet(param: DefaultApiValorantV1MmrAffinityNameTagGetRequest, options?: Configuration): Promise<V1mmr> {
        return this.api.valorantV1MmrAffinityNameTagGet(param.name, param.tag, param.affinity,  options).toPromise();
    }

    /**
     * Get MMR History
     * @param param the request object
     */
    public valorantV1MmrHistoryAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV1MmrHistoryAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V1mmrh>> {
        return this.api.valorantV1MmrHistoryAffinityNameTagGetWithHttpInfo(param.name, param.tag, param.affinity,  options).toPromise();
    }

    /**
     * Get MMR History
     * @param param the request object
     */
    public valorantV1MmrHistoryAffinityNameTagGet(param: DefaultApiValorantV1MmrHistoryAffinityNameTagGetRequest, options?: Configuration): Promise<V1mmrh> {
        return this.api.valorantV1MmrHistoryAffinityNameTagGet(param.name, param.tag, param.affinity,  options).toPromise();
    }

    /**
     * Get a list of all premier conferences
     * @param param the request object
     */
    public valorantV1PremierConferencesGetWithHttpInfo(param: DefaultApiValorantV1PremierConferencesGetRequest = {}, options?: Configuration): Promise<HttpInfo<V1PremierConference>> {
        return this.api.valorantV1PremierConferencesGetWithHttpInfo( options).toPromise();
    }

    /**
     * Get a list of all premier conferences
     * @param param the request object
     */
    public valorantV1PremierConferencesGet(param: DefaultApiValorantV1PremierConferencesGetRequest = {}, options?: Configuration): Promise<V1PremierConference> {
        return this.api.valorantV1PremierConferencesGet( options).toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by ranking in that div
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityConferenceDivisionGetWithHttpInfo(param: DefaultApiValorantV1PremierLeaderboardAffinityConferenceDivisionGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        return this.api.valorantV1PremierLeaderboardAffinityConferenceDivisionGetWithHttpInfo(param.affinity, param.conference, param.division,  options).toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by ranking in that div
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityConferenceDivisionGet(param: DefaultApiValorantV1PremierLeaderboardAffinityConferenceDivisionGetRequest, options?: Configuration): Promise<V1PremierLeaderboard> {
        return this.api.valorantV1PremierLeaderboardAffinityConferenceDivisionGet(param.affinity, param.conference, param.division,  options).toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by div and ranking
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityConferenceGetWithHttpInfo(param: DefaultApiValorantV1PremierLeaderboardAffinityConferenceGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        return this.api.valorantV1PremierLeaderboardAffinityConferenceGetWithHttpInfo(param.affinity, param.conference,  options).toPromise();
    }

    /**
     * Get a combined leaderboard in the conference, sorted by div and ranking
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityConferenceGet(param: DefaultApiValorantV1PremierLeaderboardAffinityConferenceGetRequest, options?: Configuration): Promise<V1PremierLeaderboard> {
        return this.api.valorantV1PremierLeaderboardAffinityConferenceGet(param.affinity, param.conference,  options).toPromise();
    }

    /**
     * Get a combined leaderboard in the affinity, sorted by div and ranking
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityGetWithHttpInfo(param: DefaultApiValorantV1PremierLeaderboardAffinityGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierLeaderboard>> {
        return this.api.valorantV1PremierLeaderboardAffinityGetWithHttpInfo(param.affinity,  options).toPromise();
    }

    /**
     * Get a combined leaderboard in the affinity, sorted by div and ranking
     * @param param the request object
     */
    public valorantV1PremierLeaderboardAffinityGet(param: DefaultApiValorantV1PremierLeaderboardAffinityGetRequest, options?: Configuration): Promise<V1PremierLeaderboard> {
        return this.api.valorantV1PremierLeaderboardAffinityGet(param.affinity,  options).toPromise();
    }

    /**
     * Search for current active premier teams
     * @param param the request object
     */
    public valorantV1PremierSearchGetWithHttpInfo(param: DefaultApiValorantV1PremierSearchGetRequest = {}, options?: Configuration): Promise<HttpInfo<V1PremierSearch>> {
        return this.api.valorantV1PremierSearchGetWithHttpInfo(param.name, param.tag, param.division, param.conference,  options).toPromise();
    }

    /**
     * Search for current active premier teams
     * @param param the request object
     */
    public valorantV1PremierSearchGet(param: DefaultApiValorantV1PremierSearchGetRequest = {}, options?: Configuration): Promise<V1PremierSearch> {
        return this.api.valorantV1PremierSearchGet(param.name, param.tag, param.division, param.conference,  options).toPromise();
    }

    /**
     * Get a list of all premier seasons
     * @param param the request object
     */
    public valorantV1PremierSeasonsAffinityGetWithHttpInfo(param: DefaultApiValorantV1PremierSeasonsAffinityGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierSeason>> {
        return this.api.valorantV1PremierSeasonsAffinityGetWithHttpInfo(param.affinity,  options).toPromise();
    }

    /**
     * Get a list of all premier seasons
     * @param param the request object
     */
    public valorantV1PremierSeasonsAffinityGet(param: DefaultApiValorantV1PremierSeasonsAffinityGetRequest, options?: Configuration): Promise<V1PremierSeason> {
        return this.api.valorantV1PremierSeasonsAffinityGet(param.affinity,  options).toPromise();
    }

    /**
     * Get details about a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamIdGetWithHttpInfo(param: DefaultApiValorantV1PremierTeamIdGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierTeam>> {
        return this.api.valorantV1PremierTeamIdGetWithHttpInfo(param.teamId,  options).toPromise();
    }

    /**
     * Get details about a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamIdGet(param: DefaultApiValorantV1PremierTeamIdGetRequest, options?: Configuration): Promise<V1PremierTeam> {
        return this.api.valorantV1PremierTeamIdGet(param.teamId,  options).toPromise();
    }

    /**
     * Get match history of a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamIdHistoryGetWithHttpInfo(param: DefaultApiValorantV1PremierTeamIdHistoryGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierTeamHistory>> {
        return this.api.valorantV1PremierTeamIdHistoryGetWithHttpInfo(param.teamId,  options).toPromise();
    }

    /**
     * Get match history of a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamIdHistoryGet(param: DefaultApiValorantV1PremierTeamIdHistoryGetRequest, options?: Configuration): Promise<V1PremierTeamHistory> {
        return this.api.valorantV1PremierTeamIdHistoryGet(param.teamId,  options).toPromise();
    }

    /**
     * Get details about a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamNameTeamTagGetWithHttpInfo(param: DefaultApiValorantV1PremierTeamNameTeamTagGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierTeam>> {
        return this.api.valorantV1PremierTeamNameTeamTagGetWithHttpInfo(param.teamName, param.teamTag,  options).toPromise();
    }

    /**
     * Get details about a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamNameTeamTagGet(param: DefaultApiValorantV1PremierTeamNameTeamTagGetRequest, options?: Configuration): Promise<V1PremierTeam> {
        return this.api.valorantV1PremierTeamNameTeamTagGet(param.teamName, param.teamTag,  options).toPromise();
    }

    /**
     * Get match history of a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamNameTeamTagHistoryGetWithHttpInfo(param: DefaultApiValorantV1PremierTeamNameTeamTagHistoryGetRequest, options?: Configuration): Promise<HttpInfo<V1PremierTeamHistory>> {
        return this.api.valorantV1PremierTeamNameTeamTagHistoryGetWithHttpInfo(param.teamName, param.teamTag,  options).toPromise();
    }

    /**
     * Get match history of a premier team
     * @param param the request object
     */
    public valorantV1PremierTeamNameTeamTagHistoryGet(param: DefaultApiValorantV1PremierTeamNameTeamTagHistoryGetRequest, options?: Configuration): Promise<V1PremierTeamHistory> {
        return this.api.valorantV1PremierTeamNameTeamTagHistoryGet(param.teamName, param.teamTag,  options).toPromise();
    }

    /**
     * Get a list of all available queues and their metadata
     * @param param the request object
     */
    public valorantV1QueueStatusAffinityGetWithHttpInfo(param: DefaultApiValorantV1QueueStatusAffinityGetRequest, options?: Configuration): Promise<HttpInfo<V1QueueStatus>> {
        return this.api.valorantV1QueueStatusAffinityGetWithHttpInfo(param.affinity,  options).toPromise();
    }

    /**
     * Get a list of all available queues and their metadata
     * @param param the request object
     */
    public valorantV1QueueStatusAffinityGet(param: DefaultApiValorantV1QueueStatusAffinityGetRequest, options?: Configuration): Promise<V1QueueStatus> {
        return this.api.valorantV1QueueStatusAffinityGet(param.affinity,  options).toPromise();
    }

    /**
     * Get unchanged response from the valorant api
     * @param param the request object
     */
    public valorantV1RawPostWithHttpInfo(param: DefaultApiValorantV1RawPostRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.valorantV1RawPostWithHttpInfo(param.valorantV1RawPostRequest,  options).toPromise();
    }

    /**
     * Get unchanged response from the valorant api
     * @param param the request object
     */
    public valorantV1RawPost(param: DefaultApiValorantV1RawPostRequest, options?: Configuration): Promise<void> {
        return this.api.valorantV1RawPost(param.valorantV1RawPostRequest,  options).toPromise();
    }

    /**
     * Server status
     * @param param the request object
     */
    public valorantV1StatusAffinityGetWithHttpInfo(param: DefaultApiValorantV1StatusAffinityGetRequest, options?: Configuration): Promise<HttpInfo<ValorantV1StatusAffinityGet200Response>> {
        return this.api.valorantV1StatusAffinityGetWithHttpInfo(param.affinity,  options).toPromise();
    }

    /**
     * Server status
     * @param param the request object
     */
    public valorantV1StatusAffinityGet(param: DefaultApiValorantV1StatusAffinityGetRequest, options?: Configuration): Promise<ValorantV1StatusAffinityGet200Response> {
        return this.api.valorantV1StatusAffinityGet(param.affinity,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1StoreFeaturedGetWithHttpInfo(param: DefaultApiValorantV1StoreFeaturedGetRequest = {}, options?: Configuration): Promise<HttpInfo<V1storefeatured>> {
        return this.api.valorantV1StoreFeaturedGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1StoreFeaturedGet(param: DefaultApiValorantV1StoreFeaturedGetRequest = {}, options?: Configuration): Promise<V1storefeatured> {
        return this.api.valorantV1StoreFeaturedGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1StoreOffersGetWithHttpInfo(param: DefaultApiValorantV1StoreOffersGetRequest = {}, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.valorantV1StoreOffersGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1StoreOffersGet(param: DefaultApiValorantV1StoreOffersGetRequest = {}, options?: Configuration): Promise<any> {
        return this.api.valorantV1StoreOffersGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1VersionAffinityGetWithHttpInfo(param: DefaultApiValorantV1VersionAffinityGetRequest, options?: Configuration): Promise<HttpInfo<ValorantV1VersionAffinityGet200Response>> {
        return this.api.valorantV1VersionAffinityGetWithHttpInfo(param.affinity,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1VersionAffinityGet(param: DefaultApiValorantV1VersionAffinityGetRequest, options?: Configuration): Promise<ValorantV1VersionAffinityGet200Response> {
        return this.api.valorantV1VersionAffinityGet(param.affinity,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1WebsiteCountryCodeGetWithHttpInfo(param: DefaultApiValorantV1WebsiteCountryCodeGetRequest, options?: Configuration): Promise<HttpInfo<ValorantV1WebsiteCountryCodeGet200Response>> {
        return this.api.valorantV1WebsiteCountryCodeGetWithHttpInfo(param.countryCode,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV1WebsiteCountryCodeGet(param: DefaultApiValorantV1WebsiteCountryCodeGetRequest, options?: Configuration): Promise<ValorantV1WebsiteCountryCodeGet200Response> {
        return this.api.valorantV1WebsiteCountryCodeGet(param.countryCode,  options).toPromise();
    }

    /**
     * Get MMR Details
     * @param param the request object
     */
    public valorantV2ByPuuidMmrAffinityPuuidGetWithHttpInfo(param: DefaultApiValorantV2ByPuuidMmrAffinityPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V2mmr>> {
        return this.api.valorantV2ByPuuidMmrAffinityPuuidGetWithHttpInfo(param.affinity, param.puuid, param.season,  options).toPromise();
    }

    /**
     * Get MMR Details
     * @param param the request object
     */
    public valorantV2ByPuuidMmrAffinityPuuidGet(param: DefaultApiValorantV2ByPuuidMmrAffinityPuuidGetRequest, options?: Configuration): Promise<V2mmr> {
        return this.api.valorantV2ByPuuidMmrAffinityPuuidGet(param.affinity, param.puuid, param.season,  options).toPromise();
    }

    /**
     * Get Leaderboard
     * @param param the request object
     */
    public valorantV2LeaderboardAffinityGetWithHttpInfo(param: DefaultApiValorantV2LeaderboardAffinityGetRequest, options?: Configuration): Promise<HttpInfo<V2leaderboard>> {
        return this.api.valorantV2LeaderboardAffinityGetWithHttpInfo(param.affinity, param.puuid, param.name, param.tag, param.season,  options).toPromise();
    }

    /**
     * Get Leaderboard
     * @param param the request object
     */
    public valorantV2LeaderboardAffinityGet(param: DefaultApiValorantV2LeaderboardAffinityGetRequest, options?: Configuration): Promise<V2leaderboard> {
        return this.api.valorantV2LeaderboardAffinityGet(param.affinity, param.puuid, param.name, param.tag, param.season,  options).toPromise();
    }

    /**
     * Get Match Deatils
     * @param param the request object
     */
    public valorantV2MatchMatchIdGetWithHttpInfo(param: DefaultApiValorantV2MatchMatchIdGetRequest, options?: Configuration): Promise<HttpInfo<ValorantV2MatchMatchIdGet200Response>> {
        return this.api.valorantV2MatchMatchIdGetWithHttpInfo(param.matchId,  options).toPromise();
    }

    /**
     * Get Match Deatils
     * @param param the request object
     */
    public valorantV2MatchMatchIdGet(param: DefaultApiValorantV2MatchMatchIdGetRequest, options?: Configuration): Promise<ValorantV2MatchMatchIdGet200Response> {
        return this.api.valorantV2MatchMatchIdGet(param.matchId,  options).toPromise();
    }

    /**
     * Get mmr details
     * @param param the request object
     */
    public valorantV2MmrAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV2MmrAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<V2mmr>> {
        return this.api.valorantV2MmrAffinityNameTagGetWithHttpInfo(param.name, param.tag, param.affinity, param.season,  options).toPromise();
    }

    /**
     * Get mmr details
     * @param param the request object
     */
    public valorantV2MmrAffinityNameTagGet(param: DefaultApiValorantV2MmrAffinityNameTagGetRequest, options?: Configuration): Promise<V2mmr> {
        return this.api.valorantV2MmrAffinityNameTagGet(param.name, param.tag, param.affinity, param.season,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV2StoreFeaturedGetWithHttpInfo(param: DefaultApiValorantV2StoreFeaturedGetRequest = {}, options?: Configuration): Promise<HttpInfo<V2storefeatured>> {
        return this.api.valorantV2StoreFeaturedGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV2StoreFeaturedGet(param: DefaultApiValorantV2StoreFeaturedGetRequest = {}, options?: Configuration): Promise<V2storefeatured> {
        return this.api.valorantV2StoreFeaturedGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV2StoreOffersGetWithHttpInfo(param: DefaultApiValorantV2StoreOffersGetRequest = {}, options?: Configuration): Promise<HttpInfo<V2storeoffers>> {
        return this.api.valorantV2StoreOffersGetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public valorantV2StoreOffersGet(param: DefaultApiValorantV2StoreOffersGetRequest = {}, options?: Configuration): Promise<V2storeoffers> {
        return this.api.valorantV2StoreOffersGet( options).toPromise();
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV3ByPuuidMatchesAffinityPuuidGetWithHttpInfo(param: DefaultApiValorantV3ByPuuidMatchesAffinityPuuidGetRequest, options?: Configuration): Promise<HttpInfo<V3matches>> {
        return this.api.valorantV3ByPuuidMatchesAffinityPuuidGetWithHttpInfo(param.affinity, param.puuid, param.mode, param.map, param.size,  options).toPromise();
    }

    /**
     * Get account details
     * @param param the request object
     */
    public valorantV3ByPuuidMatchesAffinityPuuidGet(param: DefaultApiValorantV3ByPuuidMatchesAffinityPuuidGetRequest, options?: Configuration): Promise<V3matches> {
        return this.api.valorantV3ByPuuidMatchesAffinityPuuidGet(param.affinity, param.puuid, param.mode, param.map, param.size,  options).toPromise();
    }

    /**
     * Get Match History
     * @param param the request object
     */
    public valorantV3MatchesAffinityNameTagGetWithHttpInfo(param: DefaultApiValorantV3MatchesAffinityNameTagGetRequest, options?: Configuration): Promise<HttpInfo<ValorantV3MatchesAffinityNameTagGet200Response>> {
        return this.api.valorantV3MatchesAffinityNameTagGetWithHttpInfo(param.name, param.tag, param.affinity,  options).toPromise();
    }

    /**
     * Get Match History
     * @param param the request object
     */
    public valorantV3MatchesAffinityNameTagGet(param: DefaultApiValorantV3MatchesAffinityNameTagGetRequest, options?: Configuration): Promise<ValorantV3MatchesAffinityNameTagGet200Response> {
        return this.api.valorantV3MatchesAffinityNameTagGet(param.name, param.tag, param.affinity,  options).toPromise();
    }

}
