// Home
$(function() {
  $('a[href=#home]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 0
        }, 1000);
        return false;
      }
    }
  });
});

// Our Service
$(function() {
  $('a[href=#our_services]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 5
        }, 1000);
        return false;
      }
    }
  });
});

// Popular Place
$(function() {
  $('a[href=#publictransport]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 50
        }, 1000);
        return false;
      }
    }
  });
});

// Travel Galery
$(function() {
  $('a[href=#galery]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 0
        }, 1000);
        return false;
      }
    }
  });
});

// Reviews
$(function() {
  $('a[href=#reviews]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 50
        }, 1000);
        return false;
      }
    }
  });
});

// Travel Stories
$(function() {
  $('a[href=#travel_strories]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 70
        }, 1000);
        return false;
      }
    }
  });
});

// Contact
$(function() {
  $('a[href=#contact]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top + 0
        }, 1000);
        return false;
      }
    }
  });
});


//MOUNTAIN 

var kanan = document.getElementById('kanan'), 
  count = 0;

kanan.onclick = function() {
  count -= 330;
  $('.imgM-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri').css('display', 'block');
    if (count == -990) {
       $('.pindah-kanan').css('display', 'none');
    } else {
      $('.pindah-kiri').css('display', 'block');
    }
};


kiri.onclick = function() {
  count += 330;
    console.log(count);
  $('.imgM-1').css('margin-left', count);
  if (count == 0) {
       $('.pindah-kiri').css('display', 'none');
    } else {
      $('.pindah-kanan').css('display', 'block');
    }
};

if ($(window).width() <= 320) {
  var kanan = document.getElementById('kanan'), 
  count = 0;

kanan.onclick = function() {
  count -= 220;
  $('.imgM-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri').css('display', 'block');
    if (count == -990) {
       $('.pindah-kanan').css('display', 'none');
    } else {
      $('.pindah-kiri').css('display', 'block');
    }
};


kiri.onclick = function() {
  count += 220;
    console.log(count);
  $('.imgM-1').css('margin-left', count);
  if (count == 0) {
       $('.pindah-kiri').css('display', 'none');
    } else {
      $('.pindah-kanan').css('display', 'block');
    }
};
}
// SEA

var kanan2 = document.getElementById('kanan2'), 
  count = 0;

kanan2.onclick = function() {
  count -= 330;
  $('.imgS-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri2').css('display', 'block');
    if (count == -990) {
       $('.pindah-kanan2').css('display', 'none');
    } else {
      $('.pindah-kiri2').css('display', 'block');
    }
};


kiri2.onclick = function() {
  count += 330;
    console.log(count);
  $('.imgS-1').css('margin-left', count);
  if (count == 0) {
       $('.pindah-kiri2').css('display', 'none');
    } else {
      $('.pindah-kanan2').css('display', 'block');
    }
};

// WATERFALL

var kanan3 = document.getElementById('kanan3'), 
  count = 0;

kanan3.onclick = function() {
  count -= 330;
  $('.imgW-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri3').css('display', 'block');
    if (count == -990) {
       $('.pindah-kanan3').css('display', 'none');
    } else {
      $('.pindah-kiri3').css('display', 'block');
    }
};


kiri3.onclick = function() {
  count += 330;
    console.log(count);
  $('.imgW-1').css('margin-left', count);
  if (count == 0) {
       $('.pindah-kiri3').css('display', 'none');
    } else {
      $('.pindah-kanan3').css('display', 'block');
    }
};

// HOTSPRING

var kanan4 = document.getElementById('kanan4'), 
  count = 0;

kanan4.onclick = function() {
  count -= 330;
  $('.imgH-1').css('margin-left', count);
  console.log(count);
  $('.pindah-kiri4').css('display', 'block');
    if (count == -990) {
       $('.pindah-kanan4').css('display', 'none');
    } else {
      $('.pindah-kiri4').css('display', 'block');
    }
};


kiri4.onclick = function() {
  count += 330;
    console.log(count);
  $('.imgH-1').css('margin-left', count);
  if (count == 0) {
       $('.pindah-kiri4').css('display', 'none');
    } else {
      $('.pindah-kanan4').css('display', 'block');
    }
};


$(document).ready(function(){
   $("#MenuIcon").click(function(){
        $("#MainMenu").css("left","0px");
        function showMenu(){
            $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#MenuIcon").animate({right:'-100'},300);
        }
        setTimeout(showMenu,100);
   });
    
    $("#close").click(function(){
            $("#MainMenu").css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
            function hideMenu(){
                    $("#MainMenu").css("left","-400px");
                $("#MenuIcon").animate({right:'25'},300);
            }
        setTimeout(hideMenu,300);
        
        function originalLayout(){
            $("#MainMenu").css("-webkit-clip-path","polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout,600);
    });
});


// Geser Testimoni
 // Geser 1 
  $('.kanan-1').click(function() {
    $('.testimoni-2').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
  });
  $('.kiri-1').click(function() {
    $('.testimoni-5').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
  });
 // Geser 2 
  $('.kanan-2').click(function() {
    $('.testimoni-3').addClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
  });
  $('.kiri-2').click(function() {
    $('.testimoni-1').addClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
  });
 // Geser 3 
  $('.kanan-3').click(function() {
    $('.testimoni-4').addClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
  });
  $('.kiri-3').click(function() {
    $('.testimoni-2').addClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
  });
 // Geser 4
  $('.kanan-4').click(function() {
    $('.testimoni-5').addClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
  });
  $('.kiri-4').click(function() {
    $('.testimoni-3').addClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
  }); 
 // Geser 5
  $('.kanan-5').click(function() {
    $('.testimoni-1').addClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  });
  $('.kiri-5').click(function() {
    $('.testimoni-4').addClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  }); 

// Geser bullet bawah
  $('.pilih-1').click(function() {
    $('.testimoni-1').addClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  });
  $('.pilih-2').click(function() {
    $('.testimoni-2').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  }); 
  $('.pilih-3').click(function() {
    $('.testimoni-3').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  }); 
  $('.pilih-4').click(function() {
    $('.testimoni-4').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
    $('.testimoni-5').removeClass('aktifkan');
  }); 
  $('.pilih-5').click(function() {
    $('.testimoni-5').addClass('aktifkan');
    $('.testimoni-1').removeClass('aktifkan');
    $('.testimoni-3').removeClass('aktifkan');
    $('.testimoni-4').removeClass('aktifkan');
    $('.testimoni-2').removeClass('aktifkan');
  });     

  // Transportation 
  $('.pilih-t-1').click(function() {
    $('.transport-1').addClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-1').addClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');
  });
  $('.pilih-t-2').click(function() {
    $('.transport-2').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-2').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');    
  }); 
  $('.pilih-t-3').click(function() {
    $('.transport-3').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-3').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');    
  }); 
  $('.pilih-t-4').click(function() {
    $('.transport-4').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-4').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');    
  }); 
  $('.pilih-t-5').click(function() {
    $('.transport-5').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-5').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');    
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
  });     

  // Geser Angkot Icon

  // Geser 1
  $('.kanan-angkot-1').click(function() {
    $('.transport-2').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-2').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');  
  });
  $('.kiri-angkot-1').click(function() {
    $('.transport-5').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-5').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');    
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar'); 
  });
  // Geser 2
  $('.kanan-angkot-2').click(function() {
    $('.transport-3').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-3').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar'); 
  });
  $('.kiri-angkot-2').click(function() {
    $('.transport-1').addClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-1').addClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar'); 
  });  
  // Geser 3
  $('.kanan-angkot-3').click(function() {
    $('.transport-4').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-4').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');     
  });
  $('.kiri-angkot-3').click(function() {
    $('.transport-2').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-2').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');    
  });
  // Geser 4
  $('.kanan-angkot-4').click(function() {
    $('.transport-5').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-5').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');    
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar'); 
  });
  $('.kiri-angkot-4').click(function() {
    $('.transport-3').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-3').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');  
  });  
  // Geser 5
  $('.kanan-angkot-5').click(function() {
    $('.transport-1').addClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-4').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-1').addClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-4').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');  
  });
  $('.kiri-angkot-5').click(function() {
    $('.transport-4').addClass('aktifkan');
    $('.transport-1').removeClass('aktifkan');
    $('.transport-3').removeClass('aktifkan');
    $('.transport-2').removeClass('aktifkan');
    $('.transport-5').removeClass('aktifkan');
    // Geser Gambar Angkot
    $('.gambar-angkot-4').addClass('aktif-gambar');
    $('.gambar-angkot-1').removeClass('aktif-gambar');
    $('.gambar-angkot-2').removeClass('aktif-gambar');
    $('.gambar-angkot-3').removeClass('aktif-gambar');
    $('.gambar-angkot-5').removeClass('aktif-gambar');    
  });     

// Event pada saat link di klik
$(document).ready(function(){

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  // Memunculkan 1 per 1 Gambar
  if ( wScroll > $('#gallery-1').offset().top - 300 ) {
    $('.img-thm').each(function(i) {
      setTimeout(function() {
        $('.img-thm').eq(i).addClass('muncul');
      }, 500 * (i+1) );
    });
  }
  
    // Memunculkan 1 per 1 FUTER
  if ( wScroll > $('.footer').offset().top - 300 ) {
    $('.isifuter').each(function(i) {
      setTimeout(function() {       
        $('.isifuter').eq(i).addClass('isifuterparallax');
      }, 300 * (i+1) );
    });

    $('.footer .judul').css({
      'padding-top': '100px',
      'opacity': '1',
    }); 

  }

  // FIXED NAVBAR
  var vid = document.getElementById("vidhead"); 
  if ( wScroll > $('.our_services').offset().top -150 ) {
    $('#MenuIcon').css({
      'background': '#262525',
      'border-radius': '50%',
      'box-shadow': '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }); 

    vid.pause(); 

  } else {
    $('#MenuIcon').css({
      'background': 'transparent',  
      'box-shadow': '0 0 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0)',

    });   
    
    vid.play(); 
  }

// PARRALAX

  // OUR SERVICE
if ( wScroll > $('.our_services').offset().top -150 ) {
    $('.item-kiri').css({
      'left': '12%',
      'opacity': '1',
    }); 

    $('.item-tengah').css({
      'margin-top': '25px',
      'opacity': '1',
    }); 

    $('.item-kanan').css({
      'right': '12%',
      'opacity': '1',
    });  

    $('p.kiri').css({
      'margin-top': '350px',
      'opacity': '1',
    });        

    $('p.tengah').css({
      'margin-top': '350px',
      'opacity': '1',
    });       

    $('p.kanan').css({
      'margin-top': '350px',
      'opacity': '1',
    });    

    $('p.penjelasan-kiri').css({
      'margin-top': '390px',
      'opacity': '1',
    });        

    $('p.penjelasan-tengah').css({
      'margin-top': '390px',
      'opacity': '1',
    });       

    $('p.penjelasan-kanan').css({
      'margin-top': '390px',
      'opacity': '1',
    });             

    $('.our_services .judul').css({
      'padding-top': '25px',
      'opacity': '1',
    });             

  } else {
    // 
  }

// TRANSPORTATION

if ( wScroll > $('.publictransport').offset().top -150 ) {
    
    $('.gambar-angkot-1').addClass('aktif-gambar');

    $('.geser-kiri-angkot').css({
      'left': '15%',
      'opacity': '1',
    }); 

    $('.geser-kanan-angkot').css({
      'right': '15%',
      'opacity': '1',
    });     

    $('.deskripsi-angkot').css({
      'left': '50%',
      'opacity': '1',
    });     

    $('.jalur-angkot').css({
      'left': '50%',
      'opacity': '1',
    });      

    $('.publictransport .judul').addClass('munculsiah');

    } else {
      // 
    }

  // TRAVEL GALERY
  if ( wScroll > $('.galery').offset().top -150 ) {

    // $('.foto').addClass('munculsiah');
   
    $('.galery .judul').css({
      'padding-top': '25px',
      'opacity': '1',
    });    

  } else {
    // 
  } 

  // REVIEWS
  if ( wScroll > $('.reviews').offset().top -150 ) {

    $('.foto').addClass('munculsiah');

    $('.testimoni h2').addClass('munculsiah');        

    $('.testimoni h3').addClass('munculsiah');   

    $('.testimoni p').addClass('munculsiah');     

    $('.testimoni .kiri').addClass('munculsiah');         

    $('.testimoni .kanan').addClass('munculsiah');         

    $('.testimoni .geser').addClass('munculsiah');  

    $('.reviews .judul').addClass('munculyah');            

  } else {
    // 
  } 

// TRAVEL STORIES

if ( wScroll > $('.travel_strories').offset().top -150 ) {

    $('.travel_strories .item-1').css({
      'margin-top': '-20px',
      'margin-left': '185px',
      'opacity': '1',
    }); 
   
    $('.travel_strories .item-2').css({
      'margin-top': '-20px',
      'margin-right': '185px',
      'opacity': '1',
    }); 

    $('.travel_strories .item-3').css({
      'margin-top': '65px',
      'margin-left': '185px',
      'opacity': '1',
    }); 

    $('.travel_strories .item-4').css({
      'margin-top': '65px',
      'margin-right': '185px',
      'opacity': '1',
    }); 

    $('.travel_strories .judul').addClass('munculyah');       


    } else {
      // 
    }


// PARRALAX OUR SERVICE
if ( wScroll > $('.our_services').offset().top -150 ) {

if ($(window).width() < 320) {
    
    $('.our_services .item-kiri').css({
      'margin-top': '50px',
      'left': '2%',
      'opacity': '1',
    }); 

    $('.our_services .item-tengah').css({
      'margin-top': '440px',
      'left': '2%',
      'opacity': '1',
    }); 

    $('.our_services .item-kanan').css({
      'margin-top': '830px',
      'right': '0%',
      'opacity': '1',
    });  

    $('.our_services p.kiri').css({
      'margin-top': '290px',
      'left': '30%',
      'opacity': '1',
    });        

    $('.our_services p.tengah').css({
      'margin-top': '680px',
      'left': '2%',
      'opacity': '1',
    });       

    $('.our_services p.kanan').css({
      'margin-top': '1070px',
      'right': '28%',
      'opacity': '1',
    });    

    $('.our_services p.penjelasan-kiri').css({
      'margin-top': '330px',
      'left': '-4%',
      'opacity': '1',
    });        

    $('.our_services p.penjelasan-tengah').css({
      'margin-top': '720px',
      'left': '-6%',
      'opacity': '1',
    });       

    $('.our_services p.penjelasan-kanan').css({
      'margin-top': '1110px',
      'right': '-7%',
      'opacity': '1',
    });             

    $('.our_services .judul').css({
      'padding-top': '5px',
      'opacity': '1',
    });             
}

else {
  // 
}

}



// PARRALAX TRAVEL STORIES
if ( wScroll > $('.travel_strories').offset().top -150 ) {

if ($(window).width() < 320) {

    $('.travel_strories .item-2').css({
      'margin-top': '-20px',
      'margin-right': '-55px',
      'opacity': '1',
    }); 

    $('.travel_strories .item-1').css({
      'margin-top': '180px',
      'margin-left': '-50px',
      'opacity': '1',
    }); 

    $('.travel_strories .item-4').css({
      'margin-top': '180px',
      'margin-right': '-55px',
      'opacity': '1',
    }); 

    $('.travel_strories .item-3').css({
      'margin-top': '380px',
      'margin-left': '-50px',
      'opacity': '1',
    }); 

    $('.travel_strories .judul').addClass('munculyah');       

}

else {
  // 
}


}


 });  
 });  



