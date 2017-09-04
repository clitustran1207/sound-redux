import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
import fetchSongIfNeeded from '../actions/SongActions';
import Song from '../components/Song';
import { getId, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getComments, getPlaylist, getSong, getTimed } from '../selectors/SongSelectors';

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => {
  const { authed, player, playlists } = state;

  return {
    authed,
    comments: getComments(state),
    id: getId(state),
    player,
    playingSongId: getPlayingSongId(state),
    playlist: getPlaylist(state),
    playlists,
    sidebarHeight: getSidebarHeight(state),
    song: getSong(state),
    timed: getTimed(state),
  };
};

export default connect(mapStateToProps, {
  fetchSongIfNeeded,
  navigateTo,
  playSong,
})(SongContainer);