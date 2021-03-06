MorphSVGPlugin.convertToPath("circle")
CustomBounce.create("rebondissement", {strength: 8 ,squash:1, squashName:"rebondissement-squash"})
var tl1 = new TimelineMax()
var tl2 = new TimelineMax()
var tl3 = new TimelineMax({repeat:2, repeatDelay:.5})
var tl4 = new TimelineMax({repeat:2, repeatDelay:.25})
var tl5 = new TimelineMax({repeat:2, repeatDelay:.75})
var tl6 = new TimelineMax({repeat:2, repeatDelay:1})
var tl7 = new TimelineMax()

tl1.staggerFrom(".montreal", 2,{   ease:Elastic. easeOut.config( 1, 0.3), transformOrigin:'50% 50%', rotation:180, opacity:0 ,x:-100}, .50)
tl1.from(".montreal", 1, {drawSVG:0, ease:Power1.easeInOut})
tl1.staggerFrom(".accent", 1,{ opacity:0 , y:-50, x:50}, 0.2)

tl2.addLabel("MemeTemp", "+=0")
tl2.set("#centre", {visibility:"visible"})
tl2.fromTo("#centre",0.5,{y:0},{y:-175})
tl2.to("#centre",5, {delay:.25, y:0, ease:"rebondissement"})
tl2.to("#centre",5,{delay:.25,scaleX:1.5, scaleY:0.8, ease:"rebondissement-squash", transformOrigin:"bottom center"}, "MemeTemp")
tl2.to("#centre", 1, { morphSVG: "#Logo", ease: Back.easeOut })
tl2.to("#rectangle", 3, { morphSVG: "#Logo", ease: Back.easeOut })

tl3.to("#v_vive_1", 1,{ rotation:-20,scale:1.25, visibility:"visible" ,transformOrigin:'50% 50%'}, 0.2)
tl4.to("#i_vive", 1,{ rotation:10,scale:1.25,  visibility:"visible" ,transformOrigin:'50% 50%'}, 0.2) 
tl4.to("#point_vive", 1,{x:15,y:10,scale:1.25,  visibility:"visible", transformOrigin:'50% 50%'}, 0.2)
tl5.to("#v_vive_2", 1,{  rotation:20,scale:1.25,  visibility:"visible" ,transformOrigin:'50% 50%'}, 0.2)
tl6.to("#e_vive", 1,{  rotation:-10,scale:1.25,  visibility:"visible" ,transformOrigin:'50% 50%'}, 0.2)

tl2.set(".chiffre",{visibility:"visible"})
tl2.staggerFromTo(".chiffre", 3,{x:200,rotation:20,transformOrigin:'50% 50%',opacity:0}, {x:0,rotation:0,opacity:1}, 0.5)
tl7.staggerFromTo(".Ligne_rouge", 5, {drawSVG:"0 5%"}, {drawSVG:"0% 100%"})