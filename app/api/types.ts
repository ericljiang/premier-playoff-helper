export type ErrorResponseBody = {
  error: string;
};

type Player = {
  puuid: string;
  gameName: string;
  tagLine: string;
  character: string;
};

export type Team = "red" | "blue";

type Location = {
  x: number;
  y: number;
};

export type Match = {
  map: string;
  teams: {
    red: {
      won: boolean;
      roundsWon: number;
      roundsLost: number;
      premierTeamId?: string;
    };
    blue: {
      won: boolean;
      roundsWon: number;
      roundsLost: number;
      premierTeamId?: string;
    };
  };
  rounds: Array<{
    winningTeam: Team;
    playerStats: Array<{
      puuid: string;
      kills: Array<{
        timeSinceRoundStartMillis: number;
        victimPuuid: string;
        victimTeam: Team;
        victimLocation: Location;
        playerLocations: Array<{
          // TODO add view radians
          puuid: string;
          team: Team;
          location: Location;
        }>;
      }>;
    }>;
  }>;
  players: {
    red: Player[];
    blue: Player[];
  };
};
