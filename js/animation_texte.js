var contenue = $("#animation_texte"),
    _phraseFinExpression = /(\.|\?|!)$/g; //Expression régulière de fin de phrase

function machineGun(text) {
  var mots = text.split(" "),
      tl = new TimelineMax({ delay:0.06, onComplete:diffuserEvenement}),
      conteurMots = mots.length,
      time = 0,
      mot, element, duration, phraseFinExpression, i;
function diffuserEvenement (){
    console.log("Fin animation MACHINE_GUN");
    contenuInteractif = document.getElementById("contenuInteractif");
    diffusion = new Event("MACHINE_GUN", {bubbles: true});
    contenuInteractif.dispatchEvent(diffusion);

}

  for(i = 0; i < conteurMots; i++){
    mot = mots[i];
    phraseFinExpression = _phraseFinExpression.test(mot);
    element = $("<h3>" + mot + "</h3>").appendTo(contenue);
    duration = Math.max(0.5, mot.length * 0.08); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
    if (phraseFinExpression) {
      duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
    }
    //set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
    TweenLite.set(element, {autoAlpha:0, scale:0, z:0.01});
    //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See https://www.greensock.com/v12/#slowmo and https://api.greensock.com/js/com/greensock/easing/SlowMo.html
    tl.to(element, duration, {scale:1.2,  ease:SlowMo.ease.config(0.25, 0.9)}, time)
      //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end. 
		 	.to(element, duration, {autoAlpha:1, ease:SlowMo.ease.config(0.25, 0.9, true)}, time);
    time += duration - 0.05;
    if (phraseFinExpression) {
      time += 0.9; //at the end of a sentence, add a pause for dramatic effect.
    }
  }
}

machineGun("Voici Votre Chance De Faire Partis Du Groupe De Loterie.");


/* learn more about the GreenSock Animation Platfrom (GSAP) for JS

https://www.greensock.com/gsap-js/

watch a quick video on how TimelineLite allows you to sequence animations like a pro
https://www.greensock.com/sequence-video/

*/

//Check out this enhanced version that intelligently groups words together: https://codepen.io/GreenSock/pen/sxdfe