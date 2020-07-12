    function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: { 
          lat: -6.9174638999999996, 
          lng: 107.61912280000001},
          // mapTypeId: google.maps.MapTypeId.ROADMAP
        });


      // Marker 
      // var contentString = '<div id="content">'+
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<div id="bodyContent">'+
      // '<p>Jalan Sekitar 30 Menit ke Jl. Cihampelas </p>' +
      // '</div>'+
      // '</div>';

      // var contentLOL = '<div id="content">'+
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<div id="bodyContent">'+
      // '<p>Naik Angkot Cicaheum - Ledeng ke Jl. Mustofa Sekitar 3.1 Kilometer</p>' +
      // '</div>'+
      // '</div>';

      // Angkot 1 Alun - Ciater
      var textJA = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<p>Jalan Menuju wisma karya sekitar 200 Meter</p>' +
      '</div>'+
      '</div>';

      var textA1AC = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<p>Naik Angkot Subang Kota - Jalan Cagak ke Tugu Nanas sekitar 15 Kilometer</p>' +
      '</div>'+
      '</div>';
       // Angkot 2 Alun - Ciater
       var textA2AC = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Jalan Cagak - Ciater ke Ciater, Subang Regency, Jawa Barat, Indonesia sekitar 12 Kilometer</p>' +
       '</div>'+
       '</div>';
       // Angkot 1 Terminal - Pondok bali
       var textA1TP = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju ke Jl. Darmodiharjo ( Depan Dapur Tutug) sekitar 2 Kilometer</p>' +
       '</div>'+
       '</div>';
       // Angkot 2 Terminal - Pondok Bali
       var textA2TP = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Elf pagaden - Mayangan Menuju ke Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien sekitar 40 Kilometer</p>' +
       '</div>'+
       '</div>';
       // Angkot 1 Wesel - Ciater  
       var textA1WC = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju Wisma Karya Subang sekitar 5 Kilometer</p>' +
       '</div>'+
       '</div>';

       // Jalan 1 Wesel - Ciater  
       var textJ1WC = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Jalan Menuju Perempatan Wesel sekitar 200 meter</p>' +
       '</div>'+
       '</div>';

       // Angkot 1 Wesel - Pondok Bali
       var textA1WP = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Subang Kota - pagaden Menuju Pertigaan Dapur Tutug sekitar 2 Kilometer</p>' +
       '</div>'+
       '</div>';
       // Angkot 1 Terminal - Ciater
       var textA1TC = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju Wisma Karya Subang sekitar 5 Kilometer</p>' +
       '</div>'+
       '</div>';

       var textJTM = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Jalan Menuju Jl. Darmodiharjo sekitar 100 Meter</p>' +
       '</div>'+
       '</div>';
       // Angkot 1 Alun alun - Pondok Bali 
       var textA1AP = '<div id="content">'+
       '<div id="siteNotice">'+
       '</div>'+
       '<div id="bodyContent">'+
       '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju Pertigaan Dapur Tutug sekitar 5 Kilometer</p>' +
       '</div>'+
       '</div>';
        // Angkot 1 Alun - Alun Cileat
        var textA1ACI = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Angkot Subang Kota - Jalan Cagak Menuju Jl. Tambak Mekar Sekitar 10 Kilometer</p>' +
        '</div>'+
        '</div>';
        // Angkot 2 Alun - Alun Cileat
        var textA2ACI = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Angkot Kasomalang - Cisalak Menuju Curug Cileat Sekitar 20 Kilometer</p>' +
        '</div>'+
        '</div>';
        // Angkot 2 Terminal - Cileat
        var textA2TCI = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Angkot Kasomalang - Cisalak Menuju Curug Cileat Sekitar 20 Kilometer</p>' +
        '</div>'+
        '</div>';

        var textA1BCI = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju Wisma Karya Sekitar 2 Kilometer</p>' +
        '</div>'+
        '</div>';


        var textA1PB1 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Angkot Subang Kota - Pujasera - Sompi Menuju pertigaan Dapur tutug sekitar 4 KM</p>' +
        '</div>'+
        '</div>';

        var textA1TKP = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p>Naik Elp Menuju Wisata Gunung Tangkuban Perahu Sekitar 22 KM</p>' +
        '</div>'+
        '</div>';

        var textJTKP = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p> Jalan Ke Pusat Objek Wisata Gunung Tangkuban Perahu sekitar 1 KM </p>' +
        '</div>'+
        '</div>';

        // Alun - Pamoyanan
        var textA1P = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p> Naik Angkot Kasomalang - Cisalak Menuju Curug Cileat Sekitar 15 Kilometer </p>' +
        '</div>'+
        '</div>';

        var JalanP = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<div id="bodyContent">'+
        '<p> Jalan Menuju Objek Wisata Bukit Pamoyanan sekitar 1 KM </p>' +
        '</div>'+
        '</div>';


      // Info Window (Label Marker)

      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // });

      // var infowindow2 = new google.maps.InfoWindow({
      //   content: contentLOL
      // });

      // Angkot 1 Alun - Ciater
      var infotextJA = new google.maps.InfoWindow({
        content: textJA
      });
      var infotextA1AC = new google.maps.InfoWindow({
        content: textA1AC
      });  
       // Angkot 2 Alun - Ciater
       var infotextA2AC = new google.maps.InfoWindow({
        content: textA2AC
      }); 
      // Angkot 1 Terminal - Pondok bali
      var infotextA1TP = new google.maps.InfoWindow({
        content: textA1TP
      });      
      // Angkot 2 Terminal - Pondok Bali
      var infotextA2TP = new google.maps.InfoWindow({
        content: textA2TP
      });  

     // var infotextA2TP = new google.maps.InfoWindow({
     //    content: textA2TP
     //  }); 

      // Angkot 1 Wesel - Ciater 
      
      var infotextA1WC = new google.maps.InfoWindow({
        content: textA1WC
      });  
         // Angkot 1 Wesel - Pondok Bali
         var infotextA1WP = new google.maps.InfoWindow({
          content: textA1WP
        });     
        // Angkot 1 Terminal - Ciater

        var infotextA1TC = new google.maps.InfoWindow({
          content: textA1TC
        });  

        var infotextJTM = new google.maps.InfoWindow({
          content: textJTM
        });  
        // Angkot 1 Alun alun - Pondok Bali 
        var infotextA1AP = new google.maps.InfoWindow({
          content: textA1AP
        });
        // Angkot 1 Alun alun - Cileat
        var infotextA1ACI = new google.maps.InfoWindow({
          content: textA1ACI
        });
       // Angkot 2 Alun alun - Cileat
       var infotextA2ACI = new google.maps.InfoWindow({
        content: textA2ACI
      }); 
         // Angkot 2 Alun alun - Cileat
         var infotextJ1WC = new google.maps.InfoWindow({
          content: textJ1WC
        }); 
        // Angkot 2 Terminal - Cileat
        var infotextA2TCI = new google.maps.InfoWindow({
          content: textA2TCI
        });   

      // Angkot 1 Brigjen - Cileat
      var infotextA1BCI = new google.maps.InfoWindow({
        content: textA1BCI
      });

      // Angkot 1 Brigjen - Pondok bali
      var infotextA1PB1 = new google.maps.InfoWindow({
        content: textA1PB1
      }); 

      var infotextA1TKP = new google.maps.InfoWindow({
        content: textA1TKP
      });   

      var infotextJTKP = new google.maps.InfoWindow({
        content: textJTKP
      });  

      // Pamoyanan
      var infotextA1P = new google.maps.InfoWindow({
        content: textA1P
      });  

      var infoJalanP= new google.maps.InfoWindow({
       content: JalanP
     });  




      // Icon Marker
      var AB = '../Hor/assets/imgs/angkot/Biru1.png';
      var AHB = '../Hor/assets/imgs/angkot/HijauBiru1.png';
      var AHO = '../Hor/assets/imgs/angkot/HijauOren1.png';
      var AH = '../Hor/assets/imgs/angkot/Hijau1.png';
      var AW = '../Hor/assets/imgs/angkot/walking1.png';
      var AE = '../Hor/assets/imgs/angkot/Elp1.png';


      // Penempatan Marker
      var lokasiKita = new google.maps.Marker({
        position: {lat: -6.9174638999999996, lng: 107.61912280000001},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AW
      });

      // var beachMarker = new google.maps.Marker({
      //   position: {lat: -6.39093695, lng: 107.76673944},
      //   animation: google.maps.Animation.DROP,
      //   map: map,
      //   icon: AB
      // });

      // var lolMarker = new google.maps.Marker({
      //   position: {lat: -6.4529985, lng: 107.8019497},
      //   animation: google.maps.Animation.DROP,
      //   map: map,
      //   icon: AB
      // });

      // Angkot 1 Alun alun - Ciater
      JA = new google.maps.Marker({
        position: {lat: -6.570759808566919, lng: 107.76114893425438},
        animation: google.maps.Animation.DROP,
        map: map,
        icon:AW
      });

      angkot1 = new google.maps.Marker({
        position: {lat: -6.57221003, lng: 107.75855915},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AB
      });
        // Angkot 2 Alun alun - Ciater
        angkot2 = new google.maps.Marker({
          position: {lat: -6.6783474, lng: 107.6890689},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AB
        });
        // Angkot 1 Terminal - Pondok Bali
        angkot1TP = new google.maps.Marker({
          position: {lat: -6.55062515, lng: 107.76910657},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AHB
        });
        // Angkot 2 Terminal - Pondok Bali
        angkot2TP = new google.maps.Marker({
          position: {lat: -6.55022778, lng: 107.7757989},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AE
        });
        // Angkot 1 Wesel - Ciater
        angkot1WC = new google.maps.Marker({
          position: {lat: -6.55922291, lng: 107.77090043},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AB
        });
        // Angkot 1 Wesel - Pondok Bali
        angkot1WP = new google.maps.Marker({
          position: {lat: -6.55918194, lng: 107.77091015},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AB
        });
        // Angkot 1 Terminal - Ciater
        angkotA1TC = new google.maps.Marker({
          position: {lat: -6.55063647, lng: 107.7687893},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AHO
        });

        angkotJTM = new google.maps.Marker({
          position: {lat: -6.547858017236702, lng: 107.77010983527612},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AW
        });
         // Angkot 1 Alun alun - Pondok Bali
         angkotA1AP = new google.maps.Marker({
          position: {lat: -6.57072962, lng: 107.76115066},
          animation: google.maps.Animation.DROP,
          map: map,
          icon: AHB
        });
          // Angkot 1 Alun alun - Cileat
          angkotA1ACI = new google.maps.Marker({
            position: {lat: -6.57181534, lng: 107.75918498},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: AB
          });
          // Angkot 2 Alun alun - Cileat
          angkotA2ACI = new google.maps.Marker({
            position: {lat: -6.65305287, lng: 107.71861434},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: AB
          });
          // Jalan dari makam wesel - Wesel
          JalanJ1WC = new google.maps.Marker({
            position: {lat: -6.55869851, lng: 107.76802399},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: AW
          });
          // Angkot 2 dari terminal - Cilea
          angkotA2TCI = new google.maps.Marker({
            position: {lat: -6.57134097, lng: 107.75841474},
            animation: google.maps.Animation.DROP,
            map: map,
            icon: AB
          });

      // Angkot 1 dari Brigjen - Cilea
      angkotA1BCI = new google.maps.Marker({
        position: {lat: -6.55794098, lng: 107.7433638},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AHO
      });

      angkotA1PB1 = new google.maps.Marker({
        position: {lat: -6.55795528, lng: 107.74337359},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AHB
      });

      angkotA1TKP = new google.maps.Marker({
        position: {lat: -6.6783474, lng: 107.6890689},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AE
      });

      JalanTKP = new google.maps.Marker({
        position: {lat: -6.6783474, lng: 107.6890689},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AW
      });

      angkotA2P = new google.maps.Marker({
        position: {lat: -6.7437767, lng: 107.79912135},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AW
      });


      angkotA1P = new google.maps.Marker({
        position: {lat: -6.65305287, lng: 107.71861434},
        animation: google.maps.Animation.DROP,
        map: map,
        icon: AB
      });

      // Event Ketika Icon di Click
      JA.addListener('click', function() {
        infotextJA.open(map, JA);
      });
      angkot1.addListener('click', function() {
        infotextA1AC.open(map, angkot1);
      });
      angkot2.addListener('click', function() {
        infotextA2AC.open(map, angkot2);
      });

      angkot1TP.addListener('click', function() {
        infotextA1TP.open(map, angkot1TP);
      });


      angkot2TP.addListener('click', function() {
        infotextA2TP.open(map, angkot2TP);
      });


      angkot1WC.addListener('click', function() {
        infotextA1WC.open(map, angkot1WC);
      });

      
      angkot1WP.addListener('click', function() {
        infotextA1WP.open(map, angkot1WP);
      });

      angkotA1TC.addListener('click', function() {
        infotextA1TC.open(map, angkotA1TC);
      });

      angkotJTM .addListener('click', function() {
        infotextJTM.open(map, angkotJTM);
      });

      angkotA1AP.addListener('click', function() {
        infotextA1AP.open(map, angkotA1AP);
      });

      angkotA1ACI.addListener('click', function() {
        infotextA1ACI.open(map, angkotA1ACI);
      });

      angkotA2ACI.addListener('click', function() {
        infotextA2ACI.open(map, angkotA2ACI);
      });

      JalanJ1WC.addListener('click', function() {
        infotextJ1WC.open(map, JalanJ1WC);
      });

      angkotA2TCI.addListener('click', function() {
        infotextA2TCI.open(map, AngkotA2TCI);
      });

      angkotA1BCI.addListener('click', function() {
        infotextA1BCI.open(map, angkotA1BCI);
      });

      angkotA1PB1.addListener('click', function() {
        infotextA1PB1.open(map, angkotA1PB1);
      });


      angkotA1TKP.addListener('click', function() {
        infotextA1TKP.open(map, angkotA1TKP);
      });

      JalanTKP.addListener('click', function() {
        infotextJTKP.open(map, JalanTKP);
      });

      angkotA2P.addListener('click', function() {
        infoJalanP.open(map, angkotA2P);
      });

      angkotA1P.addListener('click', function() {
        infotextA1P.open(map, angkotA1P);
      });

           // Visible icon 
           JA.setVisible(false)
           angkot1.setVisible(false);   
           angkot2.setVisible(false);
           angkot1TP.setVisible(false);
           angkot2TP.setVisible(false);
           angkot1WC.setVisible(false);
           angkot1WP.setVisible(false);
           angkotA1TC.setVisible(false);
           angkotA1AP.setVisible(false);
           angkotA1ACI.setVisible(false);
           angkotA2ACI.setVisible(false);
           JalanJ1WC.setVisible(false);
           angkotA2TCI.setVisible(false); 
           angkotA1BCI.setVisible(false);
           angkotA1PB1.setVisible(false);
           angkotJTM.setVisible(false);
           angkotA1TKP.setVisible(false);
           JalanTKP.setVisible(false);
           angkotA1P.setVisible(false);
           angkotA2P.setVisible(false);

           directionsDisplay.setMap(map);
           var onChangeHandler = function() {
            calculateAndDisplayRoute(directionsService, directionsDisplay);
          };
          document.getElementById('start').addEventListener('change', onChangeHandler);
          document.getElementById('end').addEventListener('change', onChangeHandler);
        }
    // Cek JALUR 
    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
      directionsService.route({
        origin: document.getElementById('start').value,
        destination: document.getElementById('end').value,
        travelMode: 'DRIVING',
      }, function(response, status) {
        if (status === 'OK' && document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
          directionsDisplay.setDirections(response);
          angkot1.setVisible(true);
          angkot2.setVisible(true); 
          JA.setVisible(true);
          
          // False 
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        }else if (status === 'OK' && document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          angkotA1AP.setVisible(true);
          angkot2TP.setVisible(true); 
          // False
          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          JA.setVisible(true); 
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);

          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false); 
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
          directionsDisplay.setDirections(response);

          JA.setVisible(true)
          angkotA1TKP.setVisible(true); 
          angkot1.setVisible(true);  
          

          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);

        } else if (status === 'OK' && document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
          directionsDisplay.setDirections(response);

          JA.setVisible(true)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(true);
          angkotA2P.setVisible(true);

        } else if (status === 'OK' && document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
          directionsDisplay.setDirections(response);
          JalanJ1WC.setVisible(true); 
          angkot1WC.setVisible(true); 
          angkot2.setVisible(true);
          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          JalanJ1WC.setVisible(true); 
          angkot2TP.setVisible(true);
          angkot1WP.setVisible(true);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          JalanJ1WC.setVisible(true); 
          angkot1WC.setVisible(true);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
          directionsDisplay.setDirections(response);
          JalanJ1WC.setVisible(true);
          angkot1WC.setVisible(true);
          angkot1.setVisible(true);
          angkotA1TKP.setVisible(true); 

          JA.setVisible(false)
          angkot2.setVisible(false);  
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);

        } else if (status === 'OK' && document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
          directionsDisplay.setDirections(response);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(true);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);
          JalanJ1WC.setVisible(true);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(true);
          angkotA2P.setVisible(true);

        } else if (status === 'OK' && document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
          directionsDisplay.setDirections(response);
          angkotJTM.setVisible(true);
          angkotA1TC.setVisible(true);
          angkot1.setVisible(true);
          angkot2.setVisible(true); 

          JA.setVisible(false)
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          angkotJTM.setVisible(true);
          angkot1TP.setVisible(true);
          angkot2TP.setVisible(true);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          angkotJTM.setVisible(true);
          angkotA1TC.setVisible(true);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1AP.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
          directionsDisplay.setDirections(response);
          angkotA2TCI.setVisible(false); 
          angkotJTM.setVisible(true);
          angkot1.setVisible(true);
          angkotA1TKP.setVisible(true); 

          JA.setVisible(false) 
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(true);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
          directionsDisplay.setDirections(response);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(true);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(true);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(true);
          angkotA2P.setVisible(true);

        } else if (status === 'OK' && document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
          directionsDisplay.setDirections(response);
          angkotA1BCI.setVisible(true);
          angkot1.setVisible(true);
          angkot2.setVisible(true); 

          JA.setVisible(false)
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          angkotA1PB1.setVisible(true);
          angkot2TP.setVisible(true);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else if (status === 'OK' && document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
          directionsDisplay.setDirections(response);
          angkotA1BCI.setVisible(true);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true); 

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        }  else if (status === 'OK' && document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
          directionsDisplay.setDirections(response);

          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(true);
          angkotA2ACI.setVisible(true);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(true);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(true);
          angkotA2P.setVisible(true);

        } else if (status === 'OK' && document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
          directionsDisplay.setDirections(response);

          angkot1.setVisible(true);
          angkotA1TKP.setVisible(true); 
          angkotA1BCI.setVisible(true);

          JA.setVisible(false)   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          JalanTKP.setVisible(false)
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        } else {
          JA.setVisible(false)
          angkot1.setVisible(false);   
          angkot2.setVisible(false);
          angkot1TP.setVisible(false);
          angkot2TP.setVisible(false);
          angkot1WC.setVisible(false);
          angkot1WP.setVisible(false);
          angkotA1TC.setVisible(false);
          angkotA1AP.setVisible(false);
          angkotA1ACI.setVisible(false);
          angkotA2ACI.setVisible(false);
          JalanJ1WC.setVisible(false);
          angkotA2TCI.setVisible(false); 
          angkotA1BCI.setVisible(false);
          angkotA1PB1.setVisible(false);
          angkotJTM.setVisible(false);
          angkotA1TKP.setVisible(false);
          JalanTKP.setVisible(false);
          angkotA1P.setVisible(false);
          angkotA2P.setVisible(false);
        }
      });

      // KONDISI DIMANA RUTE A KE B
      if (document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').addClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');

        $('.wadah-total-1').addClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');

      } 
      else if (document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
       $('.petunjukBGJ-TP').removeClass('munculkan');
       $('.petunjukBGJ-CC').removeClass('munculkan');
       $('.petunjukBGJ-PB').removeClass('munculkan');
       $('.petunjukBGJ-CTR').removeClass('munculkan');
       $('.petunjukTML-TP').removeClass('munculkan');
       $('.petunjukTML-CC').removeClass('munculkan');
       $('.petunjukTML-PB').removeClass('munculkan');
       $('.petunjukTML-CTR').removeClass('munculkan');
       $('.petunjukWSL-TP').removeClass('munculkan');
       $('.petunjukWSL-CC').removeClass('munculkan');
       $('.petunjukWSL-PB').removeClass('munculkan');
       $('.petunjukWSL-CTR').removeClass('munculkan');
       $('.petunjukALN-TP').removeClass('munculkan');
       $('.petunjukALN-CC').removeClass('munculkan');
       $('.petunjukALN-PB').addClass('munculkan');
       $('.petunjukALN-CTR').removeClass('munculkan');
       $('.petunjukALN-PM').removeClass('munculkan');
       $('.petunjukWSL-PM').removeClass('munculkan');
       $('.petunjukTML-PM').removeClass('munculkan');
       $('.petunjukBGJ-PM').removeClass('munculkan');

       $('.wadah-total-1').removeClass('munculkan');
       $('.wadah-total-2').addClass('munculkan');
       $('.wadah-total-3').removeClass('munculkan');
       $('.wadah-total-4').removeClass('munculkan');
       $('.wadah-total-5').removeClass('munculkan');
       $('.wadah-total-6').removeClass('munculkan');
       $('.wadah-total-7').removeClass('munculkan');
       $('.wadah-total-8').removeClass('munculkan');
       $('.wadah-total-9').removeClass('munculkan');
       $('.wadah-total-10').removeClass('munculkan');
       $('.wadah-total-11').removeClass('munculkan');
       $('.wadah-total-12').removeClass('munculkan');
       $('.wadah-total-13').removeClass('munculkan');
       $('.wadah-total-14').removeClass('munculkan');
       $('.wadah-total-15').removeClass('munculkan');
       $('.wadah-total-16').removeClass('munculkan');
       $('.wadah-total-17').removeClass('munculkan');
       $('.wadah-total-18').removeClass('munculkan');
       $('.wadah-total-19').removeClass('munculkan');
       $('.wadah-total-20').removeClass('munculkan');
     }
     else if (document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').addClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');

      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').addClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    } 
    else if (document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {

      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').addClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');

      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').addClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }
    else if (document.getElementById('start').value == 'Alun Alun Kabupaten Subang, Jalan RA Wangsa Ghofrana, Karanganyar, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {

      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').addClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');

      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').addClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }


      // Dari Wesel
      else if (document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').addClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');

        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').addClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
      } 
      else if (document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {

        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').addClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');
        

        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').addClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
      }
      else if (document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {

        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').addClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');
        

        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').addClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');   
      } 
      else if (document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').addClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');


        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').addClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
      }
      else if (document.getElementById('start').value == 'Makam Wesel, Karanganyar, Subang, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').addClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');


        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').addClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
      }
      // Dari Terminal
      else if (document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').addClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');
        

        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').addClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
      } 
      else if (document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {
       $('.petunjukBGJ-TP').removeClass('munculkan');
       $('.petunjukBGJ-CC').removeClass('munculkan');
       $('.petunjukBGJ-PB').removeClass('munculkan');
       $('.petunjukBGJ-CTR').removeClass('munculkan');
       $('.petunjukTML-TP').removeClass('munculkan');
       $('.petunjukTML-CC').removeClass('munculkan');
       $('.petunjukTML-PB').addClass('munculkan');
       $('.petunjukTML-CTR').removeClass('munculkan');
       $('.petunjukWSL-TP').removeClass('munculkan');
       $('.petunjukWSL-CC').removeClass('munculkan');
       $('.petunjukWSL-PB').removeClass('munculkan');
       $('.petunjukWSL-CTR').removeClass('munculkan');
       $('.petunjukALN-TP').removeClass('munculkan');
       $('.petunjukALN-CC').removeClass('munculkan');
       $('.petunjukALN-PB').removeClass('munculkan');
       $('.petunjukALN-CTR').removeClass('munculkan'); 
       $('.petunjukALN-PM').removeClass('munculkan');
       $('.petunjukWSL-PM').removeClass('munculkan');
       $('.petunjukTML-PM').removeClass('munculkan');
       $('.petunjukBGJ-PM').removeClass('munculkan');


       $('.wadah-total-1').removeClass('munculkan');
       $('.wadah-total-2').removeClass('munculkan');
       $('.wadah-total-3').removeClass('munculkan');
       $('.wadah-total-4').removeClass('munculkan');
       $('.wadah-total-5').removeClass('munculkan');
       $('.wadah-total-6').removeClass('munculkan');
       $('.wadah-total-7').removeClass('munculkan');
       $('.wadah-total-8').addClass('munculkan');
       $('.wadah-total-9').removeClass('munculkan');
       $('.wadah-total-10').removeClass('munculkan');
       $('.wadah-total-11').removeClass('munculkan');
       $('.wadah-total-12').removeClass('munculkan');
       $('.wadah-total-13').removeClass('munculkan');
       $('.wadah-total-14').removeClass('munculkan');
       $('.wadah-total-15').removeClass('munculkan');
       $('.wadah-total-16').removeClass('munculkan');
       $('.wadah-total-17').removeClass('munculkan');
       $('.wadah-total-18').removeClass('munculkan');
       $('.wadah-total-19').removeClass('munculkan');
       $('.wadah-total-20').removeClass('munculkan'); 
     }
     else if (document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
       $('.petunjukBGJ-TP').removeClass('munculkan');
       $('.petunjukBGJ-CC').removeClass('munculkan');
       $('.petunjukBGJ-PB').removeClass('munculkan');
       $('.petunjukBGJ-CTR').removeClass('munculkan');
       $('.petunjukTML-TP').removeClass('munculkan');
       $('.petunjukTML-CC').addClass('munculkan');
       $('.petunjukTML-PB').removeClass('munculkan');
       $('.petunjukTML-CTR').removeClass('munculkan');
       $('.petunjukWSL-TP').removeClass('munculkan');
       $('.petunjukWSL-CC').removeClass('munculkan');
       $('.petunjukWSL-PB').removeClass('munculkan');
       $('.petunjukWSL-CTR').removeClass('munculkan');
       $('.petunjukALN-TP').removeClass('munculkan');
       $('.petunjukALN-CC').removeClass('munculkan');
       $('.petunjukALN-PB').removeClass('munculkan');
       $('.petunjukALN-CTR').removeClass('munculkan');
       $('.petunjukALN-PM').removeClass('munculkan');
       $('.petunjukWSL-PM').removeClass('munculkan');
       $('.petunjukTML-PM').removeClass('munculkan');
       $('.petunjukBGJ-PM').removeClass('munculkan');


       $('.wadah-total-1').removeClass('munculkan');
       $('.wadah-total-2').removeClass('munculkan');
       $('.wadah-total-3').removeClass('munculkan');
       $('.wadah-total-4').removeClass('munculkan');
       $('.wadah-total-5').removeClass('munculkan');
       $('.wadah-total-6').removeClass('munculkan');
       $('.wadah-total-7').removeClass('munculkan');
       $('.wadah-total-8').removeClass('munculkan');
       $('.wadah-total-9').addClass('munculkan');
       $('.wadah-total-10').removeClass('munculkan');
       $('.wadah-total-11').removeClass('munculkan');
       $('.wadah-total-12').removeClass('munculkan');
       $('.wadah-total-13').removeClass('munculkan');
       $('.wadah-total-14').removeClass('munculkan');
       $('.wadah-total-15').removeClass('munculkan');
       $('.wadah-total-16').removeClass('munculkan');
       $('.wadah-total-17').removeClass('munculkan');
       $('.wadah-total-18').removeClass('munculkan');
       $('.wadah-total-19').removeClass('munculkan');
       $('.wadah-total-20').removeClass('munculkan');
     } 
     else if (document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').addClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').addClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }
    else if (document.getElementById('start').value == 'Terminal Subang, Sukamelang, Subang Regency, Jawa Barat, Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').addClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').addClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }
      // Dari Brigjen    
      else if (document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Sari Ater Hot spring water, Ciater, Subang Regency, West Java, Indonesia') {
       $('.petunjukBGJ-TP').removeClass('munculkan');
       $('.petunjukBGJ-CC').removeClass('munculkan');
       $('.petunjukBGJ-PB').removeClass('munculkan');
       $('.petunjukBGJ-CTR').addClass('munculkan');
       $('.petunjukTML-TP').removeClass('munculkan');
       $('.petunjukTML-CC').removeClass('munculkan');
       $('.petunjukTML-PB').removeClass('munculkan');
       $('.petunjukTML-CTR').removeClass('munculkan');
       $('.petunjukWSL-TP').removeClass('munculkan');
       $('.petunjukWSL-CC').removeClass('munculkan');
       $('.petunjukWSL-PB').removeClass('munculkan');
       $('.petunjukWSL-CTR').removeClass('munculkan');
       $('.petunjukALN-TP').removeClass('munculkan');
       $('.petunjukALN-CC').removeClass('munculkan');
       $('.petunjukALN-PB').removeClass('munculkan');
       $('.petunjukALN-CTR').removeClass('munculkan');
       $('.petunjukALN-PM').removeClass('munculkan');
       $('.petunjukWSL-PM').removeClass('munculkan');
       $('.petunjukTML-PM').removeClass('munculkan');
       $('.petunjukBGJ-PM').removeClass('munculkan');


       $('.wadah-total-1').removeClass('munculkan');
       $('.wadah-total-2').removeClass('munculkan');
       $('.wadah-total-3').removeClass('munculkan');
       $('.wadah-total-4').removeClass('munculkan');
       $('.wadah-total-5').removeClass('munculkan');
       $('.wadah-total-6').removeClass('munculkan');
       $('.wadah-total-7').removeClass('munculkan');
       $('.wadah-total-8').removeClass('munculkan');
       $('.wadah-total-9').removeClass('munculkan');
       $('.wadah-total-10').addClass('munculkan');
       $('.wadah-total-11').removeClass('munculkan');
       $('.wadah-total-12').removeClass('munculkan');
       $('.wadah-total-13').removeClass('munculkan');
       $('.wadah-total-14').removeClass('munculkan');
       $('.wadah-total-15').removeClass('munculkan');
       $('.wadah-total-16').removeClass('munculkan');
       $('.wadah-total-17').removeClass('munculkan');
       $('.wadah-total-18').removeClass('munculkan');
       $('.wadah-total-19').removeClass('munculkan');
       $('.wadah-total-20').removeClass('munculkan');
     } 
     else if (document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Pondok Bali, Mayangan, Subang Regency, Jawa Barat, Indonesien') {

      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').addClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').addClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }
    else if (document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Curug Cileat, Capunagara, Subang Regency, Jawa Barat, Indonesien') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').addClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').addClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    } 
    else if (document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Gerbang G.Tangkuban Perahu') {
      $('.petunjukBGJ-TP').addClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').addClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }
    else if (document.getElementById('start').value == 'Jl. Brigjen Katamso No.37, Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat , Indonesien' && document.getElementById('end').value == 'Bukit Pamoyanan') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').addClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').addClass('munculkan');
    }  
    else if (document.getElementById('start').value == '' && document.getElementById('end').value == '') {
      $('.petunjukBGJ-TP').removeClass('munculkan');
      $('.petunjukBGJ-CC').removeClass('munculkan');
      $('.petunjukBGJ-PB').removeClass('munculkan');
      $('.petunjukBGJ-CTR').removeClass('munculkan');
      $('.petunjukTML-TP').removeClass('munculkan');
      $('.petunjukTML-CC').removeClass('munculkan');
      $('.petunjukTML-PB').removeClass('munculkan');
      $('.petunjukTML-CTR').removeClass('munculkan');
      $('.petunjukWSL-TP').removeClass('munculkan');
      $('.petunjukWSL-CC').removeClass('munculkan');
      $('.petunjukWSL-PB').removeClass('munculkan');
      $('.petunjukWSL-CTR').removeClass('munculkan');
      $('.petunjukALN-TP').removeClass('munculkan');
      $('.petunjukALN-CC').removeClass('munculkan');
      $('.petunjukALN-PB').removeClass('munculkan');
      $('.petunjukALN-CTR').removeClass('munculkan');
      $('.petunjukALN-PM').removeClass('munculkan');
      $('.petunjukWSL-PM').removeClass('munculkan');
      $('.petunjukTML-PM').removeClass('munculkan');
      $('.petunjukBGJ-PM').removeClass('munculkan');


      $('.wadah-total-1').removeClass('munculkan');
      $('.wadah-total-2').removeClass('munculkan');
      $('.wadah-total-3').removeClass('munculkan');
      $('.wadah-total-4').removeClass('munculkan');
      $('.wadah-total-5').removeClass('munculkan');
      $('.wadah-total-6').removeClass('munculkan');
      $('.wadah-total-7').removeClass('munculkan');
      $('.wadah-total-8').removeClass('munculkan');
      $('.wadah-total-9').removeClass('munculkan');
      $('.wadah-total-10').removeClass('munculkan');
      $('.wadah-total-11').removeClass('munculkan');
      $('.wadah-total-12').removeClass('munculkan');
      $('.wadah-total-13').removeClass('munculkan');
      $('.wadah-total-14').removeClass('munculkan');
      $('.wadah-total-15').removeClass('munculkan');
      $('.wadah-total-16').removeClass('munculkan');
      $('.wadah-total-17').removeClass('munculkan');
      $('.wadah-total-18').removeClass('munculkan');
      $('.wadah-total-19').removeClass('munculkan');
      $('.wadah-total-20').removeClass('munculkan');
    }  else {
        $('.petunjukBGJ-TP').removeClass('munculkan');
        $('.petunjukBGJ-CC').removeClass('munculkan');
        $('.petunjukBGJ-PB').removeClass('munculkan');
        $('.petunjukBGJ-CTR').removeClass('munculkan');
        $('.petunjukTML-TP').removeClass('munculkan');
        $('.petunjukTML-CC').removeClass('munculkan');
        $('.petunjukTML-PB').removeClass('munculkan');
        $('.petunjukTML-CTR').removeClass('munculkan');
        $('.petunjukWSL-TP').removeClass('munculkan');
        $('.petunjukWSL-CC').removeClass('munculkan');
        $('.petunjukWSL-PB').removeClass('munculkan');
        $('.petunjukWSL-CTR').removeClass('munculkan');
        $('.petunjukALN-TP').removeClass('munculkan');
        $('.petunjukALN-CC').removeClass('munculkan');
        $('.petunjukALN-PB').removeClass('munculkan');
        $('.petunjukALN-CTR').removeClass('munculkan');
        $('.petunjukALN-PM').removeClass('munculkan');
        $('.petunjukWSL-PM').removeClass('munculkan');
        $('.petunjukTML-PM').removeClass('munculkan');
        $('.petunjukBGJ-PM').removeClass('munculkan');

        $('.wadah-total-1').removeClass('munculkan');
        $('.wadah-total-2').removeClass('munculkan');
        $('.wadah-total-3').removeClass('munculkan');
        $('.wadah-total-4').removeClass('munculkan');
        $('.wadah-total-5').removeClass('munculkan');
        $('.wadah-total-6').removeClass('munculkan');
        $('.wadah-total-7').removeClass('munculkan');
        $('.wadah-total-8').removeClass('munculkan');
        $('.wadah-total-9').removeClass('munculkan');
        $('.wadah-total-10').removeClass('munculkan');
        $('.wadah-total-11').removeClass('munculkan');
        $('.wadah-total-12').removeClass('munculkan');
        $('.wadah-total-13').removeClass('munculkan');
        $('.wadah-total-14').removeClass('munculkan');
        $('.wadah-total-15').removeClass('munculkan');
        $('.wadah-total-16').removeClass('munculkan');
        $('.wadah-total-17').removeClass('munculkan');
        $('.wadah-total-18').removeClass('munculkan');
        $('.wadah-total-19').removeClass('munculkan');
        $('.wadah-total-20').removeClass('munculkan');
    }
  }



