(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","children":["this.MainViewer"],"propagateClick":false,"start":"this.init()","id":"rootPlayer","class":"Player","data":{"defaultLocale":"tr","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"displayTooltipInTouchScreens":true,"name":"Player480","locales":{"tr":"locale/tr.txt"},"history":{}},"backgroundColor":["#FFFFFF"],"gap":10,"backgroundColorRatios":[0],"hash": "e396730c6d7d398741ae10f38d1af28b4b4157dc41f9e14f1039cdaeec453677", "definitions": [{"initialSequence":"this.sequence_38BAD495_33BD_522A_41C6_80E35F5E91A6","enterPointingToHorizon":true,"id":"panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"initialSequence":"this.sequence_38BAF495_33BD_522A_41C1_9D269E0F1F54","enterPointingToHorizon":true,"id":"panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"id":"mainPlayList","items":[{"camera":"this.panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A_camera","media":"this.panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem"},{"camera":"this.panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_camera","media":"this.panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem"},{"camera":"this.panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F_camera","media":"this.panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem"},{"camera":"this.panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300_camera","media":"this.panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_21C72AFF_33C5_37D7_41C6_6B5AE6B0C12F"},"distance":1.79,"yaw":23.51,"panorama":"this.panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F","backwardYaw":-179.2,"class":"AdjacentPanorama","select":"this.overlay_21C72AFF_33C5_37D7_41C6_6B5AE6B0C12F.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300","vfov":180,"class":"Panorama","overlays":["this.overlay_21C72AFF_33C5_37D7_41C6_6B5AE6B0C12F"],"data":{"label":"55"},"thumbnailUrl":"media/panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300_t.webp","hfovMin":"150%","hfovMax":130,"label":trans('panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":512,"url":"media/panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300_0/{face}/0/{row}_{column}.webp","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300_t.webp","class":"CubicPanoramaFrame"}]},{"initialSequence":"this.sequence_38BAB495_33BD_522A_41A9_FDFCBEE55030","enterPointingToHorizon":true,"id":"panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_22EBEA1D_33C4_F65A_41C7_41F129790A18"},"distance":1.19,"yaw":-99.38,"panorama":"this.panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40","backwardYaw":-88.63,"class":"AdjacentPanorama","select":"this.overlay_22EBEA1D_33C4_F65A_41C7_41F129790A18.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A","vfov":180,"class":"Panorama","overlays":["this.overlay_22EBEA1D_33C4_F65A_41C7_41F129790A18"],"data":{"label":"56"},"thumbnailUrl":"media/panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A_t.webp","hfovMin":"150%","hfovMax":130,"label":trans('panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":512,"url":"media/panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A_0/{face}/0/{row}_{column}.webp","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A_t.webp","class":"CubicPanoramaFrame"}]},{"initialSequence":"this.sequence_38BE5494_33BD_522A_41C4_B8B82676FABB","enterPointingToHorizon":true,"id":"panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F_camera","class":"PanoramaCamera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0}},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_22D2A1EC_33C7_75F9_41BD_99DE88B6E92E"},"distance":1.43,"yaw":-88.63,"panorama":"this.panorama_395761B0_33BD_526A_4194_3ADAAD3AD51A","backwardYaw":-99.38,"class":"AdjacentPanorama","select":"this.overlay_22D2A1EC_33C7_75F9_41BD_99DE88B6E92E.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_21D4170B_33C7_3E3E_41C8_759C5ADDFF3E"},"distance":1.31,"yaw":98.72,"panorama":"this.panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F","backwardYaw":-73.11,"class":"AdjacentPanorama","select":"this.overlay_21D4170B_33C7_3E3E_41C8_759C5ADDFF3E.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40","vfov":180,"class":"Panorama","overlays":["this.overlay_22D2A1EC_33C7_75F9_41BD_99DE88B6E92E","this.overlay_21D4170B_33C7_3E3E_41C8_759C5ADDFF3E"],"data":{"label":"23"},"thumbnailUrl":"media/panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_t.webp","hfovMin":"150%","hfovMax":130,"label":trans('panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":1024,"url":"media/panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_0/{face}/0/{row}_{column}.webp","rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_0/{face}/1/{row}_{column}.webp","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40_t.webp","class":"CubicPanoramaFrame"}]},{"keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"class":"PanoramaPlayer"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_21BAD190_33C7_3229_41C2_43CB89249D1A"},"distance":1.59,"yaw":-179.2,"panorama":"this.panorama_39569EE6_33BD_4FF7_41C5_EBCA049BD300","backwardYaw":23.51,"class":"AdjacentPanorama","select":"this.overlay_21BAD190_33C7_3229_41C2_43CB89249D1A.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_2185A98E_33C7_F239_41A1_8061CD639652"},"distance":1.23,"yaw":-73.11,"panorama":"this.panorama_394BFB3F_33BD_3656_41BC_5CDFAE89FF40","backwardYaw":98.72,"class":"AdjacentPanorama","select":"this.overlay_2185A98E_33C7_F239_41A1_8061CD639652.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F","vfov":180,"class":"Panorama","overlays":["this.overlay_2185A98E_33C7_F239_41A1_8061CD639652","this.overlay_21BAD190_33C7_3229_41C2_43CB89249D1A"],"data":{"label":"02"},"thumbnailUrl":"media/panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F_t.webp","hfovMin":"150%","hfovMax":130,"label":trans('panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F.label'),"frames":[{"cube":{"class":"ImageResource","levels":[{"height":512,"url":"media/panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F_0/{face}/0/{row}_{column}.webp","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_3EFA01A5_33BD_3275_41BA_840B0D4DA19F_t.webp","class":"CubicPanoramaFrame"}]},{"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","firstTransitionDuration":0,"progressBorderColor":"#000000","toolTipPaddingLeft":6,"progressBarBackgroundColor":["#3399FF"],"playbackBarLeft":0,"toolTipTextShadowColor":"#000000","playbackBarHeadHeight":15,"progressBackgroundColor":["#000000"],"vrPointerColor":"#FFFFFF","progressBottom":10,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"subtitlesBottom":50,"vrThumbstickRotationStep":20,"progressBorderSize":0,"progressHeight":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderRadius":2,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowHorizontalLength":0,"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"progressBorderRadius":2,"toolTipPaddingRight":6,"playbackBarHeight":10,"toolTipPaddingTop":4,"playbackBarHeadWidth":6,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColorDirection":"vertical","vrPointerSelectionTime":2000,"progressLeft":"33%","playbackBarRight":0,"toolTipShadowColor":"#333138","toolTipFontFamily":"Arial","propagateClick":false,"playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"playbackBarProgressBorderRadius":0,"id":"MainViewer","playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","surfaceReticleColor":"#FFFFFF","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","minHeight":50,"surfaceReticleSelectionColor":"#FFFFFF","minWidth":100,"playbackBarBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTop":0,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","playbackBarBorderSize":0,"progressOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","height":"100%","width":"100%","progressBarBackgroundColorRatios":[0]},{"id":"sequence_38BAD495_33BD_522A_41C6_80E35F5E91A6","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_38BAF495_33BD_522A_41C1_9D269E0F1F54","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-43.44,"distance":100,"vfov":22.76,"yaw":23.51,"scaleMode":"fit_inside","data":{"label":"Arrow 04c"},"hfov":33.81,"image":"this.AnimatedImageResource_21B68801_33FC_D22A_41C6_2C53CA30C902","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_21F79B1B_33C5_365F_41BF_7003405AC757"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_21C72AFF_33C5_37D7_41C6_6B5AE6B0C12F","maps":[]},{"id":"sequence_38BAB495_33BD_522A_41A9_FDFCBEE55030","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-54.95,"distance":100,"vfov":20.47,"yaw":-99.38,"scaleMode":"fit_inside","data":{"label":"Arrow 04c"},"hfov":53.7,"image":"this.AnimatedImageResource_21B79800_33FC_D22A_41C2_E4E676A10FF0","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_228A6A30_33C4_F669_41B5_4ADEB57C0FBC"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_22EBEA1D_33C4_F65A_41C7_41F129790A18","maps":[]},{"id":"sequence_38BE5494_33BD_522A_41C4_B8B82676FABB","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"FlatHotspotPanoramaOverlay","items":[{"pitch":-49.84,"offsetX":126.07,"yaw":-88.63,"offsetY":77.24,"height":154.48,"scaleMode":"fit_inside","width":252.14,"data":{"label":"Arrow 04c"},"image":"this.AnimatedImageResource_21B7A800_33FC_D22A_41AC_D3391BA901C0","class":"FlatHotspotPanoramaOverlayImage"}],"areas":["this.FlatHotspotPanoramaOverlayArea_22D371ED_33C7_75FB_41BA_8A36CC0274FB"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_22D2A1EC_33C7_75F9_41BD_99DE88B6E92E","maps":[]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-52.37,"distance":100,"vfov":23.52,"yaw":98.72,"scaleMode":"fit_inside","data":{"label":"Arrow 04c"},"hfov":29.93,"image":"this.AnimatedImageResource_21B74800_33FC_D22A_41C9_D275ECBBA500","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_21F86735_33C7_3E6A_41B4_6CC453E0D7E7"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_21D4170B_33C7_3E3E_41C8_759C5ADDFF3E","maps":[]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-54.14,"distance":100,"vfov":15.62,"yaw":-73.11,"scaleMode":"fit_inside","data":{"label":"Arrow 04c"},"hfov":29.11,"image":"this.AnimatedImageResource_21B70800_33FC_D22A_41AE_828DFFE4AF60","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_21B1C9B1_33C7_F26A_41BC_4AFD2958682C"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_2185A98E_33C7_F239_41A1_8061CD639652","maps":[]},{"data":{"hasPanoramaAction":true,"label":"Arrow 04c"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-46.83,"distance":100,"vfov":19.89,"yaw":-179.2,"scaleMode":"fit_inside","data":{"label":"Arrow 04c"},"hfov":28.94,"image":"this.AnimatedImageResource_21B72800_33FC_D22A_41C1_B46AAD1B3658","class":"HotspotPanoramaOverlayImage"}],"areas":["this.HotspotPanoramaOverlayArea_21B121B8_33C7_325A_41B5_54EDDABA8452"],"enabledInVR":true,"useHandCursor":true,"id":"overlay_21BAD190_33C7_3229_41C2_43CB89249D1A","maps":[]},{"id":"AnimatedImageResource_21B68801_33FC_D22A_41C6_2C53CA30C902","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_21F79B1B_33C5_365F_41BF_7003405AC757","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_21B79800_33FC_D22A_41C2_E4E676A10FF0","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_228A6A30_33C4_F669_41B5_4ADEB57C0FBC","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_21B7A800_33FC_D22A_41AC_D3391BA901C0","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"id":"FlatHotspotPanoramaOverlayArea_22D371ED_33C7_75FB_41BA_8A36CC0274FB","class":"FlatHotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_21B74800_33FC_D22A_41C9_D275ECBBA500","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_21F86735_33C7_3E6A_41B4_6CC453E0D7E7","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_21B70800_33FC_D22A_41AE_828DFFE4AF60","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_21B1C9B1_33C7_F26A_41BC_4AFD2958682C","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_21B72800_33FC_D22A_41C1_B46AAD1B3658","frameCount":21,"finalFrame":"first","class":"AnimatedImageResource","colCount":4,"rowCount":6,"levels":[{"height":300,"url":"media/res_23D07058_33C4_D2D9_41B8_42F10AA2B144_0.webp","class":"ImageResourceLevel","width":480}],"frameDuration":41},{"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_21B121B8_33C7_325A_41B5_54EDDABA8452","class":"HotspotPanoramaOverlayArea"}],"minHeight":0,"xrPanelsEnabled":true,"layout":"absolute","minWidth":0,"width":"100%","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scrollBarMargin":2,"scripts":{"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"clone":TDV.Tour.Script.clone,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setValue":TDV.Tour.Script.setValue,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"unloadViewer":TDV.Tour.Script.unloadViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"openLink":TDV.Tour.Script.openLink,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeJS":TDV.Tour.Script.executeJS,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showWindow":TDV.Tour.Script.showWindow,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPixels":TDV.Tour.Script.getPixels,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"existsKey":TDV.Tour.Script.existsKey,"playAudioList":TDV.Tour.Script.playAudioList,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindowBase":TDV.Tour.Script.showWindowBase,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"init":TDV.Tour.Script.init,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"setMapLocation":TDV.Tour.Script.setMapLocation,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"enableVR":TDV.Tour.Script.enableVR,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"createTween":TDV.Tour.Script.createTween,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"mixObject":TDV.Tour.Script.mixObject,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"registerKey":TDV.Tour.Script.registerKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"downloadFile":TDV.Tour.Script.downloadFile,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getOverlays":TDV.Tour.Script.getOverlays,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"showPopupImage":TDV.Tour.Script.showPopupImage,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"translate":TDV.Tour.Script.translate,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"isPanorama":TDV.Tour.Script.isPanorama,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getKey":TDV.Tour.Script.getKey,"disableVR":TDV.Tour.Script.disableVR,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.0, Mon Aug 24 2026