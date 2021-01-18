import { useEffect, useRef } from 'react'

const jQuery = window.$
function Slider() {
     const ref = useRef()
     let revapi1174;
     const initSlider = () => {
          jQuery(document).ready(function () {
               if (jQuery("#rev_slider_1174_1").revolution === undefined) {
                    // revslider_showDoubleJqueryError("#rev_slider_1174_1");
                    console.error('Error initializing rev slider')
               } else {
                    revapi1174 = jQuery("#rev_slider_1174_1").show().revolution({
                         sliderType: "hero",
                         jsFileLocation: "revolution/js/",
                         sliderLayout: "fullscreen",
                         dottedOverlay: "none",
                         delay: 9000,
                         navigation: {
                         },
                         responsiveLevels: [1240, 1024, 778, 480],
                         visibilityLevels: [1240, 1024, 778, 480],
                         gridWidth: [1240, 1024, 778, 480],
                         gridHeight: [868, 768, 960, 720],
                         lazyType: "none",
                         parallax: {
                              type: "scroll",
                              origo: "sliderCenter",
                              speed: 400,
                              levels: [10, 15, 20, 25, 30, 35, 40, -10, -15, -20, -25, -30, -35, -40, -45, 55],
                              type: "scroll",
                         },
                         shadow: 0,
                         spinner: "off",
                         autoHeight: "off",
                         fullScreenAutoWidth: "off",
                         fullScreenAlignForce: "off",
                         fullScreenOffsetContainer: "",
                         fullScreenOffset: "60px",
                         disableProgressBar: "on",
                         hideThumbsOnMobile: "off",
                         hideSliderAtLimit: 0,
                         hideCaptionAtLimit: 0,
                         hideAllCaptionAtLilmit: 0,
                         debugMode: false,
                         fallbacks: {
                              simplifyAll: "off",
                              disableFocusListener: false,
                         }
                    });
               }
          });
     }
     useEffect(() => {
          initSlider()
     }, [ref])
     return (
          <div id="slider">
               <div id="rev_slider_1174_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="inspiration-header" data-source="gallery" style={{ backgroundColor: 'transparent', padding:0 }}>
                    <div id="rev_slider_1174_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                         <ul>
                              <li data-index="rs-3238" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="500" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                                   <img src="img/transparent.png" data-bgcolor="#f9f9f9" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                                   <div className="tp-caption tp-resizeme rs-parallaxlevel-8"
                                        id="slide-3238-layer-4"
                                        data-x="['left','left','left','left']" data-hoffset="['-264','-264','-371','-416']"
                                        data-y="['top','top','top','top']" data-voffset="['-135','-135','-180','-203']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"x:left;rZ:-90deg;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 5, borderWidth:0 }}><img src="img/header_penpot.png" alt="" data-ww="['650px','650px','650px','650px']" data-hh="['500px','500px','500px','500px']" width="650" height="500" data-no-retina /> </div>
                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-9"
                                        id="slide-3238-layer-5"
                                        data-x="['right','right','right','right']" data-hoffset="['30','30','-70','-144']"
                                        data-y="['top','top','top','top']" data-voffset="['-204','-204','-233','-261']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"x:right;y:-500px;rZ:90deg;","speed":2500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 6, borderWidth: '0px' }}><img src="img/header_flowerpot.png" alt="" data-ww="['700px','700px','700px','700px']" data-hh="['600px','600px','600px','600px']" width="700" height="600" data-no-retina /> </div>
                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-10"
                                        id="slide-3238-layer-6"
                                        data-x="['left','left','left','left']" data-hoffset="['-372','-372','-540','-638']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-484','-484','-520','-522']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"x:left;rZ:45deg;","speed":2500,"to":"o:1;","delay":650,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 7, borderWidth:0 }}><img src="img/header_papers.png" alt="" data-ww="['900px','900px','900px','900px']" data-hh="['1000px','1000px','1000px','1000px']" width="900" height="1000" data-no-retina /> </div>
                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-12"
                                        id="slide-3238-layer-9"
                                        data-x="['left','left','left','left']" data-hoffset="['134','134','-2','-57']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['67','67','50','6']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"y:bottom;rZ:90deg;","speed":1500,"to":"o:1;","delay":1050,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 8, borderWidth:0 }}><img src="img/header_marker.png" alt="" data-ww="['200px','200px','200px','200px']" data-hh="['300px','300px','300px','300px']" width="200" height="300" data-no-retina /> </div>
                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-11"
                                        id="slide-3238-layer-10"
                                        data-x="['left','left','left','left']" data-hoffset="['181','181','30','-39']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-170','-170','-190','-212']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"y:bottom;rZ:-90deg;","speed":1500,"to":"o:1;","delay":1250,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        style={{ zIndex: 9, borderWidth:0 }}><img src="img/header_edding.png" alt="" data-ww="['300px','300px','300px','300px']" data-hh="['400px','400px','400px','400px']" width="300" height="400" data-no-retina /> </div>
                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-12"
                                        id="slide-3238-layer-11"
                                        data-x="['left','left','left','left']" data-hoffset="['393','393','201','81']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['218','218','183','191']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"y:bottom;rZ:-90deg;","speed":1500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 10, borderWidth:0 }}><img src="img/header_paperclip.png" alt="" data-ww="['50px','50px','50px','50px']" data-hh="['100px','100px','100px','100px']" width="50" height="100" data-no-retina /> </div>

                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-11"
                                        id="slide-3238-layer-12"
                                        data-x="['left','left','left','left']" data-hoffset="['346','346','165','36']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['255','255','237','231']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"y:bottom;rZ:90deg;","speed":2000,"to":"o:1;rZ:310;","delay":550,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 11, borderWidth: 0 }}><img src="img/header_paperclip.png" alt="" data-ww="['50px','50px','50px','50px']" data-hh="['100px','100px','100px','100px']" width="50" height="100" data-no-retina /> </div>

                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-9"
                                        id="slide-3238-layer-7"
                                        data-x="['right','right','right','right']" data-hoffset="['-364','-364','-479','-553']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['-155','-155','-180','-202']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"x:right;rZ:-65deg;","speed":1500,"to":"o:1;","delay":700,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 12, borderWidth:0 }}><img src="img/header_tablet.png" alt="" data-ww="['730px','730px','730px','730px']" data-hh="['520px','520px','520px','520px']" width="730" height="520" data-no-retina /> </div>

                                   <div className="tp-caption   tp-resizeme rs-parallaxlevel-11"
                                        id="slide-3238-layer-8"
                                        data-x="['right','right','right','right']" data-hoffset="['222','222','105','8']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['8','8','-17','-10']"
                                        data-width="none"
                                        data-height="none"
                                        data-whitespace="nowrap"

                                        data-type="image"
                                        data-basealign="slide"
                                        data-responsive_offset="on"

                                        data-frames='[{"from":"x:right;rZ:90deg;","speed":1500,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{zIndex: 13, bordWidth: 0}}><img src="img/header_pen.png" alt="" data-ww="['300px','300px','300px','300px']" data-hh="['500px','500px','500px','500px']" width="300" height="500" data-no-retina /> </div>

                                   <div className="tp-caption heading tp-resizeme rs-parallaxlevel-2"
                                        id="slide-3238-layer-1"
                                        data-x="['center','center','center','center']"
                                        data-y="['top','top','top','top']"
                                        data-hoffset="['0','0','0','0']"
                                        data-type="text"
                                        data-frames='[{"from":"y:-50px;rX:-45deg;sX:2;sY:2;opacity:0;","speed":1500,"to":"o:1;","delay":510,"ease":"Power4.easeOut"},{"delay":640,"speed":600,"to":"y:30px;rX:45deg;sX:0.8;sY:0.8;opacity:0;","ease":"Power2.easeInOut"}]'>Think <span>Big.</span> </div>

                                   <div className="tp-caption heading tp-resizeme rs-parallaxlevel-2"
                                        id="slide-3238-layer-15"
                                        data-x="['center','center','center','center']"
                                        data-y="['top','top','top','top']"
                                        data-hoffset="['0','0','0','0']"
                                        data-type="text"
                                        data-frames='[{"from":"y:-50px;rX:-45deg;sX:2;sY:2;opacity:0;","speed":1500,"to":"o:1;","delay":2940,"ease":"Power4.easeOut"},{"delay":660,"speed":600,"to":"y:30px;rX:45deg;sX:0.8;sY:0.8;opacity:0;","ease":"Power2.easeInOut"}]'>Do <span>Creative.</span> </div>

                                   <div className="tp-caption heading tp-resizeme rs-parallaxlevel-2"
                                        id="slide-3238-layer-16"
                                        data-x="['center','center','center','center']"
                                        data-y="['top','top','top','top']"
                                        data-hoffset="['0','0','0','0']"

                                        data-type="text"

                                        data-frames='[{"from":"y:-50px;rX:-45deg;sX:2;sY:2;opacity:0;","speed":1500,"to":"o:1;","delay":5390,"ease":"Power4.easeOut"},{"delay":"wait","speed":600,"to":"y:30px;rX:45deg;sX:0.8;sY:0.8;opacity:0;","ease":"Power2.easeInOut"}]'>Grow <span>Business </span> </div>

                                   <div className="tp-caption content tp-resizeme rs-parallaxlevel-2"
                                        id="slide-3238-layer-2"
                                        data-x="['center','center','center','center']" data-hoffset="['-8','-8','-8','-8']"
                                        data-type="text"
                                        data-frames='[{"from":"y:50px;rX:45deg;sX:2;sY:2;opacity:0;","speed":1500,"to":"o:1;","delay":600,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>

                                   <div className="tp-caption buttons rev-btn rs-parallaxlevel-3"
                                        id="slide-3238-layer-3"
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"

                                        data-type="button"

                                        data-frames='[{"from":"y:100px;rX:90deg;opacity:0;","speed":1500,"to":"o:1;","delay":700,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"},{"frame":"hover","speed":"150","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bg:rgba(32, 85, 199, 1.00);bs:solid;"}]'><a className="view_more" href="(0)" title="View More">View More </a> <a className="view_more" href="contact-us-1.html" title="Contact US">Contact Us </a> </div>

                                   <div className="tp-caption rev-scroll-btn revs-dark  rs-parallaxlevel-5"
                                        id="slide-3238-layer-13"
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['50','50','50','50']"
                                        data-width="35"
                                        data-height="55"
                                        data-whitespace="nowrap"

                                        data-type="button"
                                        data-actions='[{"event":"click","action":"scrollbelow","offset":"px","delay":""}]'
                                        data-basealign="slide"
                                        data-responsive_offset="on"
                                        data-responsive="off"
                                        data-frames='[{"from":"y:-50px;opacity:0;","speed":1500,"to":"o:1;","delay":800,"ease":"Power4.easeOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]'
                                        data-textalign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"

                                        style={{ zIndex: 19, minWidth: '35px', maxWidth: '55px', whiteSpace: 'nowrap', fontWeight: 400, borderColor:'rgba(51, 51, 51, 1.00)', borderStyle:'solid', borderWidth:'3px', borderRadius: '23px 23px 23px 23px', boxSizing: 'border-box', cursor: 'pointer'}}> <span> </span> </div>
                              </li>
                         </ul>
                         <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }}></div>
                    </div>
               </div>
          </div>
     );
}

export default Slider;
