import { createAction } from 'redux-act';
import { ETimeRange } from 'types/general';
import { Event } from 'types/songkick';

export const spotifyActions = {
  getUserDetailsStart: createAction('GET_USER_DETAILS_START'),
  getUserDetailsSuccess: createAction<SpotifyApi.UserObjectPrivate>('GET_USER_DETAILS_SUCCESS'),
  getUserDetailsFail: createAction<Error>('GET_USER_DETAILS_FAIL'),

  getTopArtistsStart: createAction<ETimeRange>('GET_TOP_ARTISTS_START'),
  getTopArtistsSuccess: createAction<{
    timeRange: ETimeRange;
    value: SpotifyApi.ArtistObjectFull[];
  }>('GET_TOP_ARTISTS_SUCCESS'),
  getTopArtistsFail: createAction<{ timeRange: ETimeRange; error: Error }>('GET_TOP_ARTISTS_FAIL'),

  createPlaylistStart: createAction<SpotifyApi.ArtistObjectFull[]>('CREATE_PLAYLIST_START'),
  createPlaylistSuccess: createAction<SpotifyApi.CreatePlaylistResponse>('CREATE_PLAYLIST_SUCCESS'),
  createPlaylistFail: createAction<Error>('CREATE_PLAYLIST_FAIL'),
};

export const songkickActions = {
  getConcertsStart: createAction('GET_CONCERTS_START'),
  getConcertsSuccess: createAction<{ [name: string]: Event[] }>('GET_CONCERTS_SUCCESS'),
  getConcertsFail: createAction<Error>('GET_CONCERTS_FAIL'),
};
