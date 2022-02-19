import { combineReducers } from "redux";
import ui from './ui';
import newReleases from './newReleases';
import albums from './albums'
import artist from './artist';
import tracks from './tracks';
export default combineReducers({
    ui,
    newReleases,
    albums,
    artist,
    tracks
    
    
  });
  