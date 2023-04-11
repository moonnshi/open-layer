import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const map = new Map({
  view : new View({
    center : [0,0],
    zoom : 1
  }),
  layers : [
    new TileLayer({
      source : new OSM(),
    })
  ],
  target : 'git '
});
