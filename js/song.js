SC.initialize({
       client_id: '340f063c670272fac27cfa67bffcafc4'
});

//kanave kanave
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/73473040&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
$(document).ready(function () {
       SC.stream('/tracks/73473040', function (sound) {
              $('#start-a1').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a1').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Aanantha yaalai
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/107812013&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/107812013', function (sound) {
              $('#start-a2').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a2').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //kalyana vayasu
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/446222148&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/446222148', function (sound) {
              $('#start-a3').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a3').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //udhunkada sanku
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/164726329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/164726329', function (sound) {
              $('#start-a4').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a4').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       // Why this kolaveri
       // <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/44996642&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe> 
       SC.stream('/tracks/44996642', function (sound) {
              $('#start-a5').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a5').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       // kaththi theme
       // <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/193700602&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/193700602', function (sound) {
              $('#start-a6').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-a6').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });



});
