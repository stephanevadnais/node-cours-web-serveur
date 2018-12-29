/*CustomEase.create("hop", "M0,0,C0.14,0,0.242,0.438,0.272,0.561,0.313,0.728,0.354,0.963,0.362,1,0.37,0.985,0.414,0.873,0.455,0.811,0.51,0.726,0.573,0.753,0.586,0.762,0.662,0.812,0.719,0.981,0.726,0.998,0.788,0.914,0.84,0.936,0.859,0.95,0.878,0.964,0.897,0.985,0.911,0.998,0.922,0.994,0.939,0.984,0.954,0.984,0.969,0.984,1,1,1,1");*/
CustomBounce.create("rebondissement", {strength: .5 ,squash:10, squashName:"rebondissement-squash"})
TweenLite.set(".st4, #cercle", {visibility:"visible"})


MorphSVGPlugin.convertToPath("circle")


var tl = new TimelineMax()
var t2 = new TimelineMax({repeat:2, repeatDelay:.25})
t2.staggerFrom(".st2", 2,{  opacity:0,  ease:Elastic. easeOut.config( 1, 0.3), transformOrigin:'50% 50%', rotation:20, opacity:0 ,x:-100}, .50);
t2.staggerFrom(".st8", 1,{ opacity:0 , y:-50, x:50}, 0.2);
t2.from(".st4", 1, {drawSVG:0, ease:Power1.easeInOut})

t2.set(".st4", {visibility:"hidden"})







/*tl.from( "#cercle", 2.5, {ease: "hop",y: -500})*/
tl.fromTo("#cercle",.25,{y:0},{y:-400})
tl.addLabel("SameTime", "+=0")
tl.to("#cercle",5, {delay:0.2, y:0, ease:"rebondissement"})
tl.to("#cercle",5 ,{delay:0.2,scaleX:1.5, scaleY:0.8, ease:"rebondissement-squash", transformOrigin:"bottom center"}, "SameTime")
.addLabel("start", "+=.25")
.addLabel("logoSpin", "+=4") 
.addLabel("ReverselogoSpin", "+=5.5")
.addLabel("Scalelogo", "+=8.5")
.to("#cercle", 1, {morphSVG:"#Logo",  ease:Back.easeOut}, "start")
.to("#cercle", 1, {ease:Elastic. easeInOut.config( 1, 0.5), rotation:90, transformOrigin:'50% 50%'}, "logoSpin")
.to("#cercle",1, {ease:Elastic. easeInOut.config( 1, 0.5), rotation:-90}, "ReverselogoSpin")
.to("#cercle", .5, { ease:Bounce. easeInOut, scale:1.20}, "Scalelogo")


   