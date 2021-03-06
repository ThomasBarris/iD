import serviceKeepRight from './keepRight';
import serviceMapillary from './mapillary';
import serviceMapRules from './maprules';
import serviceNominatim from './nominatim';
import serviceOpenstreetcam from './openstreetcam';
import serviceOsm from './osm';
import serviceOsmWikibase from './osm_wikibase';
import serviceStreetside from './streetside';
import serviceTaginfo from './taginfo';
import serviceVectorTile from './vector_tile';
import serviceWikidata from './wikidata';
import serviceWikipedia from './wikipedia';


export var services = {
    geocoder: serviceNominatim,
    keepRight: serviceKeepRight,
    mapillary: serviceMapillary,
    openstreetcam: serviceOpenstreetcam,
    osm: serviceOsm,
    osmWikibase: serviceOsmWikibase,
    maprules: serviceMapRules,
    streetside: serviceStreetside,
    taginfo: serviceTaginfo,
    vectorTile: serviceVectorTile,
    wikidata: serviceWikidata,
    wikipedia: serviceWikipedia
};

export {
    serviceKeepRight,
    serviceMapillary,
    serviceMapRules,
    serviceNominatim,
    serviceOpenstreetcam,
    serviceOsm,
    serviceOsmWikibase,
    serviceStreetside,
    serviceTaginfo,
    serviceVectorTile,
    serviceWikidata,
    serviceWikipedia
};
