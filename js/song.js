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

       //Unnale en jeevan
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/268572226&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/268572226', function (sound) {
              $('#start-g1').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g1').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Hey Baby
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/106315362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/106315362', function (sound) {
              $('#start-g2').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g2').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //Love theme Polladavan
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96802530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/96802530', function (sound) {
              $('#start-g3').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g3').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //Oru Pathi Kathavu
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/58465747&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/58465747', function (sound) {
              $('#start-g4').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g4').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Pirai Thedum Iravile
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/38529221&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/38529221', function (sound) {
              $('#start-g5').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g5').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Asuran Blood Path
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/721444456&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/721444456', function (sound) {
              $('#start-g6').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-g6').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Singappenney
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/652012811&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/652012811', function (sound) {
              $('#start-ar1').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar1').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Munpe Va En Anpe Va
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345946410&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/345946410', function (sound) {
              $('#start-ar2').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar2').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //Porale Ponnuthaye
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/804489598&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/804489598', function (sound) {
              $('#start-ar3').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar3').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


       //En Vettu Thoddathil
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/348359524&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/348359524', function (sound) {
              $('#start-ar4').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar4').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Nee Thane Nee Thane
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340155138&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/340155138', function (sound) {
              $('#start-ar5').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar5').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });

       //Nenjikulla Uma Mudinjirukke
       //<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/66061745&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
       SC.stream('/tracks/66061745', function (sound) {
              $('#start-ar6').click(function (e) {
                     e.preventDefault();
                     sound.start();
              });
              $('#stop-ar6').click(function (e) {
                     e.preventDefault();
                     sound.stop();
              });
       });


});
