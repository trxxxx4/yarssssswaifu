function revealFunction(){
    window.sr = ScrollReveal({
        duration: 1350, 
    });
    sr.reveal('#a__header__links', {origin: 'top', distance: '250px', reset: true});
    sr.reveal('#logo', {reset:true, duration: 1000, origin:"top", distance: '250px'});
    sr.reveal('#character__text__container', { reset: true, origin: 'left', distance: '500px'});
    sr.reveal('#character__image', {origin:"right" , distance: '100px'});
    sr.reveal('#footer__links__container', {reset: true, distance: "250px", duration: 1000, origin: 'left'});
    sr.reveal('#anime__watch__link', {reset: true, distance: "200px", duration: 1000, origin: 'bottom'});
    sr.reveal('#anime__title__container', {reset:true, distance: '400px', duration:1000, origin: 'left'});
}









window.addEventListener('load', () =>{
    revealFunction();
})