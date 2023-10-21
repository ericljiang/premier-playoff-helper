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
import { Observer } from '../models/Observer';
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
import { StatusInner } from '../models/StatusInner';
import { StatusInnerTitlesInner } from '../models/StatusInnerTitlesInner';
import { StatusInnerUpdatesInner } from '../models/StatusInnerUpdatesInner';
import { StatusInnerUpdatesInnerTranslationsInner } from '../models/StatusInnerUpdatesInnerTranslationsInner';
import { Team } from '../models/Team';
import { TeamRoster } from '../models/TeamRoaster';
import { TeamRoasterCustomization } from '../models/TeamRoasterCustomization';
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

export * from '../models/Affinities';
export * from '../models/BundleParsed';
export * from '../models/BundleParsedItemsInner';
export * from '../models/BundleRaw';
export * from '../models/BundleRawItemsInner';
export * from '../models/BundleRawItemsInnerItem';
export * from '../models/BySeason';
export * from '../models/BySeasonActRankWinsInner';
export * from '../models/Coach';
export * from '../models/ContentInner';
export * from '../models/LeaderboardInner';
export * from '../models/Maps';
export * from '../models/Match';
export * from '../models/MatchMetadata';
export * from '../models/MatchMetadataPremierInfo';
export * from '../models/MatchPlayers';
export * from '../models/MatchRoundsInner';
export * from '../models/MatchRoundsInnerDefuseEvents';
export * from '../models/MatchRoundsInnerPlantEvents';
export * from '../models/MatchRoundsInnerPlantEventsPlantLocation';
export * from '../models/MatchRoundsInnerPlantEventsPlantedBy';
export * from '../models/MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner';
export * from '../models/MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInnerLocation';
export * from '../models/MatchRoundsInnerPlayerStatsInner';
export * from '../models/MatchRoundsInnerPlayerStatsInnerAbilityCasts';
export * from '../models/MatchRoundsInnerPlayerStatsInnerDamageEventsInner';
export * from '../models/MatchRoundsInnerPlayerStatsInnerEconomy';
export * from '../models/MatchRoundsInnerPlayerStatsInnerEconomyArmor';
export * from '../models/MatchRoundsInnerPlayerStatsInnerEconomyArmorAssets';
export * from '../models/MatchRoundsInnerPlayerStatsInnerEconomyWeapon';
export * from '../models/MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets';
export * from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInner';
export * from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerAssistantsInner';
export * from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerDamageWeaponAssets';
export * from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInnerVictimDeathLocation';
export * from '../models/MatchTeams';
export * from '../models/ModeIds';
export * from '../models/Modes';
export * from '../models/ModesApi';
export * from '../models/Observer';
export * from '../models/Platforms';
export * from '../models/Player';
export * from '../models/PlayerAbilityCasts';
export * from '../models/PlayerAssets';
export * from '../models/PlayerAssetsAgent';
export * from '../models/PlayerAssetsCard';
export * from '../models/PlayerBehaviour';
export * from '../models/PlayerBehaviourFriendlyFire';
export * from '../models/PlayerEconomy';
export * from '../models/PlayerEconomyLoadoutValue';
export * from '../models/PlayerEconomySpent';
export * from '../models/PlayerPlatform';
export * from '../models/PlayerPlatformOs';
export * from '../models/PlayerSessionPlaytime';
export * from '../models/PlayerStats';
export * from '../models/PremierConferences';
export * from '../models/PremierSeasonsEventMapSelectionTypes';
export * from '../models/PremierSeasonsEventTypes';
export * from '../models/Regions';
export * from '../models/Seasons';
export * from '../models/StatusInner';
export * from '../models/StatusInnerTitlesInner';
export * from '../models/StatusInnerUpdatesInner';
export * from '../models/StatusInnerUpdatesInnerTranslationsInner';
export * from '../models/Team';
export * from '../models/TeamRoaster';
export * from '../models/TeamRoasterCustomization';
export * from '../models/Tiers';
export * from '../models/TiersOld';
export * from '../models/V1Account';
export * from '../models/V1AccountData';
export * from '../models/V1AccountDataCard';
export * from '../models/V1LifetimeMatches';
export * from '../models/V1LifetimeMatchesItem';
export * from '../models/V1LifetimeMatchesItemMeta';
export * from '../models/V1LifetimeMatchesItemMetaMap';
export * from '../models/V1LifetimeMatchesItemMetaSeason';
export * from '../models/V1LifetimeMatchesItemStats';
export * from '../models/V1LifetimeMatchesItemStatsDamage';
export * from '../models/V1LifetimeMatchesItemStatsShots';
export * from '../models/V1LifetimeMatchesItemTeams';
export * from '../models/V1LifetimeMatchesResults';
export * from '../models/V1LifetimeMmrHistory';
export * from '../models/V1LifetimeMmrHistoryItem';
export * from '../models/V1LifetimeMmrHistoryItemSeason';
export * from '../models/V1PartialPremierTeam';
export * from '../models/V1PremierConference';
export * from '../models/V1PremierConferenceDataInner';
export * from '../models/V1PremierConferenceDataInnerPodsInner';
export * from '../models/V1PremierLeaderboard';
export * from '../models/V1PremierSearch';
export * from '../models/V1PremierSeason';
export * from '../models/V1PremierSeasonDataInner';
export * from '../models/V1PremierSeasonDataInnerEventsInner';
export * from '../models/V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner';
export * from '../models/V1PremierSeasonDataInnerEventsInnerMapSelection';
export * from '../models/V1PremierSeasonDataInnerEventsInnerMapSelectionMapsInner';
export * from '../models/V1PremierTeam';
export * from '../models/V1PremierTeamData';
export * from '../models/V1PremierTeamDataMemberInner';
export * from '../models/V1PremierTeamDataPlacement';
export * from '../models/V1PremierTeamDataStats';
export * from '../models/V1PremierTeamHistory';
export * from '../models/V1PremierTeamHistoryData';
export * from '../models/V1PremierTeamHistoryDataLeagueMatchesInner';
export * from '../models/V1QueueStatus';
export * from '../models/V1QueueStatusDataInner';
export * from '../models/V1QueueStatusDataInnerGameRules';
export * from '../models/V1QueueStatusDataInnerHighSkill';
export * from '../models/V1QueueStatusDataInnerMapsInner';
export * from '../models/V1QueueStatusDataInnerMapsInnerMap';
export * from '../models/V1QueueStatusDataInnerPartySize';
export * from '../models/V1QueueStatusDataInnerSkillDisparityInner';
export * from '../models/V1QueueStatusDataInnerSkillDisparityInnerMaxTier';
export * from '../models/V1esportschedule';
export * from '../models/V1esportscheduleitem';
export * from '../models/V1esportscheduleitemLeague';
export * from '../models/V1esportscheduleitemMatch';
export * from '../models/V1esportscheduleitemMatchGameType';
export * from '../models/V1esportscheduleitemMatchTeamsInner';
export * from '../models/V1esportscheduleitemMatchTeamsInnerRecord';
export * from '../models/V1esportscheduleitemTournament';
export * from '../models/V1mmr';
export * from '../models/V1mmrData';
export * from '../models/V1mmrDataImages';
export * from '../models/V1mmrh';
export * from '../models/V1mmrhDataInner';
export * from '../models/V1mmrhDataInnerImages';
export * from '../models/V1mmrhDataInnerMap';
export * from '../models/V1storefeatured';
export * from '../models/V1storefeaturedData';
export * from '../models/V1storefeaturedDataFeaturedBundle';
export * from '../models/V2leaderboard';
export * from '../models/V2mmr';
export * from '../models/V2mmrData';
export * from '../models/V2mmrDataBySeason';
export * from '../models/V2mmrDataCurrentData';
export * from '../models/V2mmrDataHighestRank';
export * from '../models/V2storefeatured';
export * from '../models/V2storeoffer';
export * from '../models/V2storeofferContentTier';
export * from '../models/V2storeoffers';
export * from '../models/V2storeoffersData';
export * from '../models/V3matches';
export * from '../models/ValorantV1AccountNameTagGet400Response';
export * from '../models/ValorantV1AccountNameTagGet400ResponseErrorsInner';
export * from '../models/ValorantV1AccountNameTagGet403Response';
export * from '../models/ValorantV1AccountNameTagGet404Response';
export * from '../models/ValorantV1AccountNameTagGet408Response';
export * from '../models/ValorantV1AccountNameTagGet429Response';
export * from '../models/ValorantV1AccountNameTagGet503Response';
export * from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response';
export * from '../models/ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response';
export * from '../models/ValorantV1ContentGet200Response';
export * from '../models/ValorantV1ContentGet200ResponseActsInner';
export * from '../models/ValorantV1ContentGet200ResponseActsInnerLocalizedNamesInner';
export * from '../models/ValorantV1ContentGet500Response';
export * from '../models/ValorantV1RawPostRequest';
export * from '../models/ValorantV1StatusAffinityGet200Response';
export * from '../models/ValorantV1StatusAffinityGet200ResponseData';
export * from '../models/ValorantV1VersionAffinityGet200Response';
export * from '../models/ValorantV1VersionAffinityGet200ResponseData';
export * from '../models/ValorantV1WebsiteCountryCodeGet200Response';
export * from '../models/ValorantV1WebsiteCountryCodeGet200ResponseDataInner';
export * from '../models/ValorantV2MatchMatchIdGet200Response';
export * from '../models/ValorantV3MatchesAffinityNameTagGet200Response';

/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];

const supportedMediaTypes: { [mediaType: string]: number; } = {
    "application/json": Infinity,
    "application/json-patch+json": 1,
    "application/merge-patch+json": 1,
    "application/strategic-merge-patch+json": 1,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};


let enumsMap: Set<string> = new Set<string>([
    "Affinities",
    "Maps",
    "ModeIds",
    "Modes",
    "ModesApi",
    "Platforms",
    "PremierConferences",
    "PremierSeasonsEventMapSelectionTypes",
    "PremierSeasonsEventTypes",
    "Regions",
    "Seasons",
    "Tiers",
    "TiersOld",
    "V1esportscheduleitemMatchGameTypeTypeEnum",
    "V2storeofferTypeEnum",
]);

let typeMap: { [index: string]: any; } = {
    "BundleParsed": BundleParsed,
    "BundleParsedItemsInner": BundleParsedItemsInner,
    "BundleRaw": BundleRaw,
    "BundleRawItemsInner": BundleRawItemsInner,
    "BundleRawItemsInnerItem": BundleRawItemsInnerItem,
    "BySeason": BySeason,
    "BySeasonActRankWinsInner": BySeasonActRankWinsInner,
    "Coach": Coach,
    "ContentInner": ContentInner,
    "LeaderboardInner": LeaderboardInner,
    "Match": Match,
    "MatchMetadata": MatchMetadata,
    "MatchMetadataPremierInfo": MatchMetadataPremierInfo,
    "MatchPlayers": MatchPlayers,
    "MatchRoundsInner": MatchRoundsInner,
    "MatchRoundsInnerDefuseEvents": MatchRoundsInnerDefuseEvents,
    "MatchRoundsInnerPlantEvents": MatchRoundsInnerPlantEvents,
    "MatchRoundsInnerPlantEventsPlantLocation": MatchRoundsInnerPlantEventsPlantLocation,
    "MatchRoundsInnerPlantEventsPlantedBy": MatchRoundsInnerPlantEventsPlantedBy,
    "MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner": MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner,
    "MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInnerLocation": MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInnerLocation,
    "MatchRoundsInnerPlayerStatsInner": MatchRoundsInnerPlayerStatsInner,
    "MatchRoundsInnerPlayerStatsInnerAbilityCasts": MatchRoundsInnerPlayerStatsInnerAbilityCasts,
    "MatchRoundsInnerPlayerStatsInnerDamageEventsInner": MatchRoundsInnerPlayerStatsInnerDamageEventsInner,
    "MatchRoundsInnerPlayerStatsInnerEconomy": MatchRoundsInnerPlayerStatsInnerEconomy,
    "MatchRoundsInnerPlayerStatsInnerEconomyArmor": MatchRoundsInnerPlayerStatsInnerEconomyArmor,
    "MatchRoundsInnerPlayerStatsInnerEconomyArmorAssets": MatchRoundsInnerPlayerStatsInnerEconomyArmorAssets,
    "MatchRoundsInnerPlayerStatsInnerEconomyWeapon": MatchRoundsInnerPlayerStatsInnerEconomyWeapon,
    "MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets": MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets,
    "MatchRoundsInnerPlayerStatsInnerKillEventsInner": MatchRoundsInnerPlayerStatsInnerKillEventsInner,
    "MatchRoundsInnerPlayerStatsInnerKillEventsInnerAssistantsInner": MatchRoundsInnerPlayerStatsInnerKillEventsInnerAssistantsInner,
    "MatchRoundsInnerPlayerStatsInnerKillEventsInnerDamageWeaponAssets": MatchRoundsInnerPlayerStatsInnerKillEventsInnerDamageWeaponAssets,
    "MatchRoundsInnerPlayerStatsInnerKillEventsInnerVictimDeathLocation": MatchRoundsInnerPlayerStatsInnerKillEventsInnerVictimDeathLocation,
    "MatchTeams": MatchTeams,
    "Observer": Observer,
    "Player": Player,
    "PlayerAbilityCasts": PlayerAbilityCasts,
    "PlayerAssets": PlayerAssets,
    "PlayerAssetsAgent": PlayerAssetsAgent,
    "PlayerAssetsCard": PlayerAssetsCard,
    "PlayerBehaviour": PlayerBehaviour,
    "PlayerBehaviourFriendlyFire": PlayerBehaviourFriendlyFire,
    "PlayerEconomy": PlayerEconomy,
    "PlayerEconomyLoadoutValue": PlayerEconomyLoadoutValue,
    "PlayerEconomySpent": PlayerEconomySpent,
    "PlayerPlatform": PlayerPlatform,
    "PlayerPlatformOs": PlayerPlatformOs,
    "PlayerSessionPlaytime": PlayerSessionPlaytime,
    "PlayerStats": PlayerStats,
    "StatusInner": StatusInner,
    "StatusInnerTitlesInner": StatusInnerTitlesInner,
    "StatusInnerUpdatesInner": StatusInnerUpdatesInner,
    "StatusInnerUpdatesInnerTranslationsInner": StatusInnerUpdatesInnerTranslationsInner,
    "Team": Team,
    "TeamRoaster": TeamRoster,
    "TeamRoasterCustomization": TeamRoasterCustomization,
    "V1Account": V1Account,
    "V1AccountData": V1AccountData,
    "V1AccountDataCard": V1AccountDataCard,
    "V1LifetimeMatches": V1LifetimeMatches,
    "V1LifetimeMatchesItem": V1LifetimeMatchesItem,
    "V1LifetimeMatchesItemMeta": V1LifetimeMatchesItemMeta,
    "V1LifetimeMatchesItemMetaMap": V1LifetimeMatchesItemMetaMap,
    "V1LifetimeMatchesItemMetaSeason": V1LifetimeMatchesItemMetaSeason,
    "V1LifetimeMatchesItemStats": V1LifetimeMatchesItemStats,
    "V1LifetimeMatchesItemStatsDamage": V1LifetimeMatchesItemStatsDamage,
    "V1LifetimeMatchesItemStatsShots": V1LifetimeMatchesItemStatsShots,
    "V1LifetimeMatchesItemTeams": V1LifetimeMatchesItemTeams,
    "V1LifetimeMatchesResults": V1LifetimeMatchesResults,
    "V1LifetimeMmrHistory": V1LifetimeMmrHistory,
    "V1LifetimeMmrHistoryItem": V1LifetimeMmrHistoryItem,
    "V1LifetimeMmrHistoryItemSeason": V1LifetimeMmrHistoryItemSeason,
    "V1PartialPremierTeam": V1PartialPremierTeam,
    "V1PremierConference": V1PremierConference,
    "V1PremierConferenceDataInner": V1PremierConferenceDataInner,
    "V1PremierConferenceDataInnerPodsInner": V1PremierConferenceDataInnerPodsInner,
    "V1PremierLeaderboard": V1PremierLeaderboard,
    "V1PremierSearch": V1PremierSearch,
    "V1PremierSeason": V1PremierSeason,
    "V1PremierSeasonDataInner": V1PremierSeasonDataInner,
    "V1PremierSeasonDataInnerEventsInner": V1PremierSeasonDataInnerEventsInner,
    "V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner": V1PremierSeasonDataInnerEventsInnerConferenceSchedulesInner,
    "V1PremierSeasonDataInnerEventsInnerMapSelection": V1PremierSeasonDataInnerEventsInnerMapSelection,
    "V1PremierSeasonDataInnerEventsInnerMapSelectionMapsInner": V1PremierSeasonDataInnerEventsInnerMapSelectionMapsInner,
    "V1PremierTeam": V1PremierTeam,
    "V1PremierTeamData": V1PremierTeamData,
    "V1PremierTeamDataMemberInner": V1PremierTeamDataMemberInner,
    "V1PremierTeamDataPlacement": V1PremierTeamDataPlacement,
    "V1PremierTeamDataStats": V1PremierTeamDataStats,
    "V1PremierTeamHistory": V1PremierTeamHistory,
    "V1PremierTeamHistoryData": V1PremierTeamHistoryData,
    "V1PremierTeamHistoryDataLeagueMatchesInner": V1PremierTeamHistoryDataLeagueMatchesInner,
    "V1QueueStatus": V1QueueStatus,
    "V1QueueStatusDataInner": V1QueueStatusDataInner,
    "V1QueueStatusDataInnerGameRules": V1QueueStatusDataInnerGameRules,
    "V1QueueStatusDataInnerHighSkill": V1QueueStatusDataInnerHighSkill,
    "V1QueueStatusDataInnerMapsInner": V1QueueStatusDataInnerMapsInner,
    "V1QueueStatusDataInnerMapsInnerMap": V1QueueStatusDataInnerMapsInnerMap,
    "V1QueueStatusDataInnerPartySize": V1QueueStatusDataInnerPartySize,
    "V1QueueStatusDataInnerSkillDisparityInner": V1QueueStatusDataInnerSkillDisparityInner,
    "V1QueueStatusDataInnerSkillDisparityInnerMaxTier": V1QueueStatusDataInnerSkillDisparityInnerMaxTier,
    "V1esportschedule": V1esportschedule,
    "V1esportscheduleitem": V1esportscheduleitem,
    "V1esportscheduleitemLeague": V1esportscheduleitemLeague,
    "V1esportscheduleitemMatch": V1esportscheduleitemMatch,
    "V1esportscheduleitemMatchGameType": V1esportscheduleitemMatchGameType,
    "V1esportscheduleitemMatchTeamsInner": V1esportscheduleitemMatchTeamsInner,
    "V1esportscheduleitemMatchTeamsInnerRecord": V1esportscheduleitemMatchTeamsInnerRecord,
    "V1esportscheduleitemTournament": V1esportscheduleitemTournament,
    "V1mmr": V1mmr,
    "V1mmrData": V1mmrData,
    "V1mmrDataImages": V1mmrDataImages,
    "V1mmrh": V1mmrh,
    "V1mmrhDataInner": V1mmrhDataInner,
    "V1mmrhDataInnerImages": V1mmrhDataInnerImages,
    "V1mmrhDataInnerMap": V1mmrhDataInnerMap,
    "V1storefeatured": V1storefeatured,
    "V1storefeaturedData": V1storefeaturedData,
    "V1storefeaturedDataFeaturedBundle": V1storefeaturedDataFeaturedBundle,
    "V2leaderboard": V2leaderboard,
    "V2mmr": V2mmr,
    "V2mmrData": V2mmrData,
    "V2mmrDataBySeason": V2mmrDataBySeason,
    "V2mmrDataCurrentData": V2mmrDataCurrentData,
    "V2mmrDataHighestRank": V2mmrDataHighestRank,
    "V2storefeatured": V2storefeatured,
    "V2storeoffer": V2storeoffer,
    "V2storeofferContentTier": V2storeofferContentTier,
    "V2storeoffers": V2storeoffers,
    "V2storeoffersData": V2storeoffersData,
    "V3matches": V3matches,
    "ValorantV1AccountNameTagGet400Response": ValorantV1AccountNameTagGet400Response,
    "ValorantV1AccountNameTagGet400ResponseErrorsInner": ValorantV1AccountNameTagGet400ResponseErrorsInner,
    "ValorantV1AccountNameTagGet403Response": ValorantV1AccountNameTagGet403Response,
    "ValorantV1AccountNameTagGet404Response": ValorantV1AccountNameTagGet404Response,
    "ValorantV1AccountNameTagGet408Response": ValorantV1AccountNameTagGet408Response,
    "ValorantV1AccountNameTagGet429Response": ValorantV1AccountNameTagGet429Response,
    "ValorantV1AccountNameTagGet503Response": ValorantV1AccountNameTagGet503Response,
    "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response": ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet410Response,
    "ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response": ValorantV1ByPuuidLifetimeMatchesAffinityPuuidGet501Response,
    "ValorantV1ContentGet200Response": ValorantV1ContentGet200Response,
    "ValorantV1ContentGet200ResponseActsInner": ValorantV1ContentGet200ResponseActsInner,
    "ValorantV1ContentGet200ResponseActsInnerLocalizedNamesInner": ValorantV1ContentGet200ResponseActsInnerLocalizedNamesInner,
    "ValorantV1ContentGet500Response": ValorantV1ContentGet500Response,
    "ValorantV1RawPostRequest": ValorantV1RawPostRequest,
    "ValorantV1StatusAffinityGet200Response": ValorantV1StatusAffinityGet200Response,
    "ValorantV1StatusAffinityGet200ResponseData": ValorantV1StatusAffinityGet200ResponseData,
    "ValorantV1VersionAffinityGet200Response": ValorantV1VersionAffinityGet200Response,
    "ValorantV1VersionAffinityGet200ResponseData": ValorantV1VersionAffinityGet200ResponseData,
    "ValorantV1WebsiteCountryCodeGet200Response": ValorantV1WebsiteCountryCodeGet200Response,
    "ValorantV1WebsiteCountryCodeGet200ResponseDataInner": ValorantV1WebsiteCountryCodeGet200ResponseDataInner,
    "ValorantV2MatchMatchIdGet200Response": ValorantV2MatchMatchIdGet200Response,
    "ValorantV3MatchesAffinityNameTagGet200Response": ValorantV3MatchesAffinityNameTagGet200Response,
};

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: { [index: string]: any; } = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
