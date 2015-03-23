/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var fs = "http://192.168.1.124/mobilestreamingtv/public_html/";
    var fs = "https://cdn.rawgit.com/nontontv2013/mobile-nonton-tv-net-project/master/public_html/";
    
    function VIDEOJS(id,file,title){
        /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
            var c = '<video controls autoplay preload="auto" width="100%" height="100%" poster="'+fs+'image/player-area-image-2.jpg" >'+
                        '<source src="'+file+'">'+
                    '</video>';
            $('#myPlayer').empty().append(c);
        } else {*/
        $('#myPlayer').empty().append('<div id="'+id+'"></div>');
            jwplayer(id).setup({
                file : file,
                image: '',
                title: title,
                width: '100%',
                height: '100%',
                autostart: 'true',
                repeat: 'true',
                stretching: "exactfit",
                abouttext:"",
                aboutlink: ""
            });
            
       // }
    };
    
    function CHANNEL(){
        var c = 
        {
            "id" :  {
                "nm"    : "Indonesia",
                "cnl"   :
                    [
                        {   
                            "id"   : "net",
                            "name" : "NET",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/nettv_all/playlist.m3u8",
                            "logo" : "image/Net-TV-dan-KPI-1-480x300.png",
                            "desc" : "NET. (singkatan dari News and Entertainment Television) adalah sebuah stasiun televisi berjaringan di Indonesia yang resmi diluncurkan pada 26 Mei 2013. NET. menggantikan siaran terestrial Spacetoon Indonesia yang sebagian sahamnya telah diambil alih oleh Indika Group. Berbeda dengan Spacetoon yang acaranya ditujukan untuk anak-anak, program-program NET. ditujukan kepada keluarga dan pemirsa muda.\nSelain melalui jaringan terestrial, NET. juga menyiarkan kontennya melalui saluran komunikasi lain seperti jejaring sosial dan YouTube.\nProgram Grand Launching NET. ditayangkan secara langsung pada tanggal 26 Mei 2013 pukul 19.00 WIB dan disiarkan secara streaming melalui Youtube dan website resmi NET., dan acara Grand Launching ini menampilkan penyanyi internasional seperti Carly Rae Jepsen, Taio Cruz dan juga didukung oleh beberapa artis dalam negeri seperti Agnes Monica, Maudy Ayunda, Cherrybelle, Sm*sh, Noah, Raisa, Kahitna, Dewa 19, Andien, Ungu, Reza Rahardian, Andi Rianto dan banyak lagi\nPada tanggal 18 Mei 2014 NET. merayakan ulang tahun pertamanya yang bertajuk NET. ONE (Indonesian Choice Awards 2014)."
                        },
                        {   
                            "id"   : "tvonejkt",
                            "name" : "TV One",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/tvone2_all/playlist.m3u8",
                            "logo" : "image/TvOne_Logo28201129.png",
                            "desc" : "tvOne (sebelumnya bernama Lativi) adalah sebuah stasiun televisi swasta Indonesia. Berawal dari penggunaan nama Lativi, stasiun televisi ini didirikan pada tanggal 30 Juli 2002 oleh Abdul Latief dan dimiliki oleh ALatief Corporation. Pada saat itu, konsep penyusunan acaranya adalah banyak menonjolkan masalah yang berbau klenik, erotisme, berita kriminalitas dan beberapa hiburan ringan lainnya. Sejak tahun 2006, sebagian sahamnya juga dimiliki oleh Grup Bakrie yang juga memiliki stasiun televisi antv. Pada tanggal 14 Februari 2008, Lativi secara resmi berganti nama menjadi tvOne, dengan komposisi 70 persen berita, sisanya gabungan program olahraga dan hiburan. Abdul Latief tidak lagi berada dalam kepemilikan saham tvOne. Komposisi kepemilikan saham tvOne terdiri dari PT Visi Media Asia Tbk sebesar 49%, PT Redal Semesta 31%, Good Response Ltd 10%, dan Promise Result Ltd 10%. Direktur Utama tvOne saat ini adalah Ardiansyah Bakrie.[1]"
                        },
                        {   
                            "id"   : "rcti",
                            "name" : "RCTI",        
                            "url"  : "http://cdnjkt.mivo.tv:1935/mivotvjkt/rcti2_240p/player.m3u8",
                            "logo" : "image/rcti.png",
                            "desc" : "RCTI adalah stasiun televisi swasta Indonesia pertama. RCTI pertama mengudara pada 13 November 1988 dan diresmikan 24 Agustus 1989 dan pada waktu itu, siaran RCTI hanya dapat ditangkap oleh pelanggan yang memiliki dekoder dan membayar iuran setiap bulannya. RCTI melepas dekodernya pada akhir 1989. Pemerintah mengizinkan RCTI melakukan siaran bebas secara nasional sejak tahun 1990 tapi baru terwujud pada akhir 1991 setelah membuat RCTI Bandung pada 1 Mei 1991. Pada 2004 RCTI termasuk stasiun televisi yang besar di Indonesia. Sejak Oktober 2003, RCTI dimiliki oleh Media Nusantara Citra, kelompok perusahaan media yang juga memiliki Global TV dan MNCTV. RCTI telah memiliki hak siar atas ajang sepak bola bergengsi Eropa, Euro 2008 bersama Global TV dan MNCTV.\nPada tahun 2011, RCTI memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama MNCTV dan Global TV."
                        },
                        {   
                            "id"   : "mnc",
                            "name" : "MNC TV",        
                            "url"  : "http://cdnjkt.mivo.tv:1935/mivotvjkt/mnctv2_240p/playlist.m3u8",
                            "logo" : "image/MNCTV_MNC-Group.png",
                            "desc" : "MNCTV (sebelumnya bernama TPI) adalah stasiun televisi swasta Indonesia yang mengudara secara terestrial dari Jakarta. Namanya yang sekarang dipergunakan sejak 20 Oktober 2010.\nMNCTV merupakan stasiun televisi swasta ketiga di Indonesia setelah RCTI dan SCTV. MNCTV didirikan oleh Mbak Tutut dan dulu sebagian besar sahamnya dimiliki oleh PT Cipta Lamtoro Gung Persada.\nPada tahun 2009 sampai dengan tahun 2010, MNCTV tidak menyiarkan acara olahraga. Tetapi, mulai tahun 2010 hingga 2013, MNCTV kembali menyiarkan acara olahraga yaitu Liga Utama Inggris.\nPada tahun 2011, MNCTV juga memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama RCTI dan Global TV."
                        },        
                        {   
                            "id"   : "transtv",
                            "name" : "Trans TV",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/transtv2_all/playlist.m3u8",
                            "logo" : "image/Logo_Trans_TV.png",
                            "desc" : "Trans TV adalah sebuah stasiun televisi swasta di Indonesia mulai secara terrestrial area di Jakarta, yang dimiliki oleh konglomerat Chairul Tanjung. Dengan moto \"Milik Kita Bersama\", konsep tayang stasiun ini tidak banyak berbeda dengan stasiun swasta lainnya. Trans TV adalah anak perusahaan PT Trans Corporation. Kantor Pusat stasiun ini berada di Gedung Trans TV, Jalan Kapten Pierre Tendean, Jakarta Selatan. Direktur Utama Trans TV saat ini adalah Atiek Nur Wahyuni yang juga merupakan Direktur Utama Trans7."
                        },
                        {   
                            "id"   : "trans7",
                            "name" : "Trans 7",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/trans72_all/playlist.m3u8",
                            "logo" : "image/Logo_Trans7.png",
                            "desc" : "Trans7 (sebelumnya bernama TV7) adalah sebuah stasiun televisi swasta nasional di Indonesia. Trans7 yang pada awalnya menggunakan nama TV7, melakukan siaran perdananya secara terestrial di Jakarta pada 25 November 2001 dan pada saat itulah mayoritas sahamnya dimiliki oleh Kompas Gramedia. Pada tanggal 4 Agustus 2006, PT Trans Corporation mengakuisisi mayoritas saham TV7. Meski sejak itulah TV7 dan Trans TV resmi bergabung, namun ternyata TV7 masih dimiliki oleh Kompas Gramedia, sampai TV7 akhirnya melakukan re-launch (peluncuran ulang) pada 15 Desember 2006 dan menggunakan nama baru, yaitu Trans7."
                        },
                        {   
                            "id"   : "sctv",
                            "name" : "SCTV",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/sctv2_all/playlist.m3u8",
                            "logo" : "image/20110218143118!SCTV_Logo.png",
                            "desc" : "SCTV (singkatan dari Surya Citra Televisi) adalah sebuah stasiun televisi swasta nasional di Indonesia. SCTV merupakan stasiun televisi swasta kedua di Indonesia setelah RCTI. SCTV lahir pada tanggal 24 Agustus 1990 sebagai stasiun televisi lokal di Surabaya yang berpusat di Jl. Darmo Permai, Surabaya, Jawa Timur, di mana SCTV pada awalnya didirikan untuk menayangkan acara-acara RCTI untuk wilayah Surabaya. Meski tanggal itu ditetapkan sebagai tanggal lahir SCTV, namun baru tanggal 1 Januari 1993, SCTV mendapatkan izin sebagai stasiun televisi nasional di Jakarta. Kantor operasional SCTV pun secara bertahap dipindahkan dari Surabaya ke Jakarta, namun studio SCTV tetap berada di Surabaya. Awalnya, mayoritas saham SCTV dimiliki oleh PT Bimantara Citra, Tbk, melalui anak usahanya, PT Sindo Citra Media (kini menjadi PT Surya Citra Media).\nMeski berkali-kali berpindah kantor, SCTV selalu mengudara setiap hari. Pada tahun 1993 misalnya, SCTV berpindah kantor ke Wisma AKR, Jakarta Barat yang letaknya berdekatan dengan kantor RCTI. Lalu pada tahun 1996, SCTV berpindah kantor lagi ke Wisma Indovision. Menginjak usia ke-11, pada tahun 2001, SCTV kemudian memusatkan kegiatan operasionalnya di Gedung Graha SCTV, Jalan Gatot Subroto, Jakarta Selatan. Dan pada tahun 2007, kegiatan operasional SCTV berpusat di Senayan City. Namun, stasiun pemancar dan studio tetap dipusatkan di Kebon Jeruk.\nSejak tahun 1999, mayoritas saham SCTV diakuisisi oleh PT Surya Citra Media, Tbk. Pada awal Mei 2013, SCTV dan Indosiar resmi bergabung."
                        },
                        {   
                            "id"   : "metrotv",
                            "name" : "Metro TV",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/metrotv2_all/playlist.m3u8",
                            "logo" : "image/metrotv.png",
                            "desc" : "MetroTV adalah sebuah stasiun televisi swasta berita yang berkedudukan di Indonesia. MetroTV didirikan oleh PT Media Televisi Indonesia, resmi mengudara sejak 25 November 2000 di Jakarta. Metro TV dimiliki Media Group pimpinan Surya Paloh yang juga memiliki harian Media Indonesia dan Lampung Post."
                        },
                        {   
                            "id"   : "globaltv",
                            "name" : "Global TV",        
                            "url"  : "",
                            "logo" : "image/Logo_Global_TV_2012.png",
                            "desc" : "Global TV adalah salah satu stasiun televisi swasta nasional di Indonesia yang mengudara secara terestrial dari Jakarta. Berawal dari sebuah stasiun televisi swasta lokal di Jakarta, Global TV belakangan meluaskan siaran ke 5 kota besar lainnya. Global TV memiliki hak siar atas liga balap paling bergengsi di dunia, Formula 1 setelah sebelumnya hak siar Formula 1 dikuasai MNCTV, dan kejuaraan dunia balap antar negara, A1. Kedua ajang ini disiarkan Global TV sendirian. Global TV juga memiliki hak siar dalam ajang sepak bola Euro 2008, bersama RCTI dan MNCTV. Direktur Utama Global TV saat ini adalah David Fernando Audy yang menggantikan Daniel Tatang Hartono. Global TV juga pernah menayangkan Piala Dunia 2010 dan untuk tahun ini, Global TV dan MNCTV menayangkan Liga Utama Inggris. Pada tahun 2011, Global TV juga memiliki hak siar dalam ajang sepak bola Liga Prima Indonesia, bersama RCTI dan MNCTV."
                        },
                        {   
                            "id"   : "indosiar",
                            "name" : "INDOSIAR",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/indosiar2_all/playlist.m3u8",
                            "logo" : "image/INDOSIAR_Logo.png",
                            "desc" : "Indosiar adalah salah satu stasiun televisi swasta nasional di Indonesia. Stasiun televisi ini beroperasi dari Daan Mogot, Jakarta Barat. Indosiar awalnya didirikan dan dikuasai oleh Salim Group. Pada tahun 2004, Indosiar merupakan bagian dari PT. Indosiar Karya Media Tbk. (sebelumnya PT. Indovisual Citra Persada) yang tercatat di Bursa Efek Indonesia (dahulu Bursa Efek Jakarta). Pada 13 Mei 2011, mayoritas saham PT. Indosiar Karya Media Tbk. dibeli oleh PT. Elang Mahkota Teknologi Tbk., pemilik SCTV (melalui SCM sebelum bergabung dengan IDKM) dan O Channel, menjadikan ketiga stasiun televisi berada dalam satu pengendalian. Kini, stasiun televisi ini resmi dikuasai oleh SCM pasca bergabung dengan IDKM dan \"bersaudara\" dengan SCTV."
                        },
                        {   
                            "id"   : "antv",
                            "name" : "ANTV",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/antv2_all/playlist.m3u8",
                            "logo" : "image/antv.png",
                            "desc" : "antv (singkatan dari Andalas Televisi) adalah sebuah stasiun televisi swasta nasional Indonesia. Stasiun televisi ini awalnya disiarkan pada 1 Januari 1993 di kota Lampung dan sekitarnya. Bermula dari sebuah izin siaran lokal di Lampung, antv mengudara selama 5 jam sehari. Satu tahun kemudian, tepatnya tanggal 1 Maret 1994, antv secara resmi disiarkan ke seluruh Indonesia dari Jakarta.\nantv dimiliki oleh konglomerat muda Anindya Bakrie dan sekarang dikelola oleh yaitu Erick Thohir, yang menjadi Presiden Direktur dari stasiun televisi ini sekaligus Wakil Komisaris Utama VIVA. Konglomerat media asal Amerika Serikat, Rupert Murdoch, membeli sekitar 20% saham antv pada 30 April 2006 melalui perusahaannya di Hong Kong, STAR TV. Pangsa pasar antv saat ini adalah sekitar 5% dari 180 juta penonton. antv telah memiliki hak siar atas ajang sepak bola bergengsi Dunia, Piala Dunia FIFA 2014 bersama tvOne."
                        },
                        {   
                            "id"   : "rtv",
                            "name" : "Rajawali TV",        
                            "url"  : "http://103.18.239.130/kqcsmbqna6yg/rajawalitv.stream_all/kqcsmbqna6yg/rajawalitv.stream_192p/chunks.m3u8",
                            "logo" : "image/rajawalitv.png",
                            "desc" : "Rajawali Televisi (disingkat RTV, sebelumnya bernama B-Channel) adalah sebuah stasiun televisi swasta terestrial nasional asal Jakarta, Indonesia yang dimilik perusahaan oleh Rajawali Corpora. RTV resmi mengudara pada tanggal 1 November 2009 di Jakarta dengan nama B-Channel. Saat ini, program RTV sendiri lebih difokuskan pada acara hiburan, soft news dan variety show untuk keluarga. Pada tanggal 3 Mei 2014, B-Channel berganti nama menjadi \"RTV (Rajawali Televisi)\" pada saat acara Grand Launching Langit Rajawali."
                        },
                        {   
                            "id"   : "brtstNews",
                            "name" : "Berita Satu News",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/beritasatu_all/playlist.m3u8",
                            "logo" : "image/beritasatu.jpg",
                            "desc" : "BeritaSatu (sebelumnya bernama QTV dan Q Channel) adalah saluran televisi berita yang mengudara sejak tahun 1996. Saluran ini juga berguna sebagai saluran khusus untuk mengenai soal-soal keuangan dan informasi. Saluran ini hanya bisa disaksikan melalui satelit dan kabel dan juga siaran digital terestrial DVB-T2 yang bisa disaksikan via Set Top Box DVB-T2 atau Nexmedia. Target pemirsanya adalah kalangan menengah ke atas. Pemilik dan pendirinya adalah Peter F. Gontha."
                        },
                        {   
                            "id"   : "kompastv",
                            "name" : "Kompas TV",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/kompastv_all/playlist.m3u8",
                            "logo" : "image/kompastv.png",
                            "desc" : "Kompas TV merupakan stasiun televisi swasta terestrial berjaringan di Indonesia. Kompas TV dimiliki oleh Kompas Gramedia. Stasiun televisi ini hadir menggantikan stasiun televisi yang pernah dimiliki oleh Kompas Gramedia, yaitu TV7. Sejak saham TV7 dibeli oleh pihak Trans Corp yang berdiri di bawah kepemimpinan Chairul Tanjung pada tahun 2006 dan nama TV7 diganti menjadi Trans7, maka saham Kompas Gramedia terhadap Trans7 menurun menjadi hampir setengah dari Trans Corp. Pada tanggal 11 September 2011, Kompas TV mengubah logonya yaitu dengan menghilangkan tulisan TV pada logo tersebut, dan tulisan TV tersebut kembali digunakan mulai 5 Oktober 2012 hingga sekarang."
                        },
                        {   
                            "id"   : "sindotv",
                            "name" : "Sindo TV",        
                            "url"  : "",
                            "logo" : "image/sindotv.jpg",
                            "desc" : "SINDOtv (sebelumnya bernama SUN TV) adalah stasiun televisi swasta berjaringan di Indonesia. SINDOtv didirikan oleh kelompok perusahaan Media Nusantara Citra."
                        },
                        {   
                            "id"   : "tvri",
                            "name" : "TVRI",        
                            "url"  : "http://edge.nim.mivo.tv/kqcsmbqna6yg/tvrinasional_all/playlist.m3u8",
                            "logo" : "image/LogoLPP-TVRI.png",
                            "desc" : "Televisi Republik Indonesia (TVRI) adalah stasiun televisi pertama di Indonesia yang mengudara pada tanggal 24 Agustus 1962. Siaran perdananya menayangkan Upacara Peringatan Hari Kemerdekaan Republik Indonesia ke-17 dari Istana Negara Jakarta. Siarannya ini masih berupa hitam putih. TVRI kemudian meliput Asian Games yang diselenggarakan di Jakarta.\nDahulu TVRI pernah menayangkan iklan dalam satu tayangan khusus yang dengan judul acara Mana Suka Siaran Niaga (sehari dua kali). Sejak April tahun 1981 hingga akhir 90-an TVRI tidak diperbolehkan menayangkan iklan, dan akhirnya TVRI kembali menayangkan iklan. Status TVRI saat ini adalah Lembaga Penyiaran Publik. Sebagian biaya operasional TVRI masih ditanggung oleh negara.\nTVRI memonopoli siaran televisi di Indonesia sebelum tahun 1989 ketika didirikan televisi swasta pertama RCTI di Jakarta, dan SCTV pada tahun 1990 di Surabaya."
                        }
                    ]
            },
            "my" : {
            "nm"    : "Malaysia",
            "cnl"   :
                [
                    {
                        "id"   : "astroawani",
                        "name" : "Astro Awani",        
                        "url"  : "",
                        "logo" : "image/astroawani.png",
                        "desc" : "Astro Awani is the in-house rolling television news and current affairs channel providing 24-hour news coverage including news in Malay. With its slogan and motto tagline names Our Gateway to The World (Malaysian language: Gerbang Dunia Kita), Astro Awani presents news and informative programs including current affairs, lifestyle, documentaries, interview programs and a local and international magazine. Astro Awani started broadcasting on 6 September 2007 as part of the revamp of Astro's news division. The station is targeted at Malaysia, Brunei and Indonesia. Currently, the channel has numerous bases each with their own correspondents, and can also call upon a wide range of resources and global bureaux provided by the Malaysian government such as reporters from Bernama. It will be available on mio TV Service from SingTel soon."
                    },
                    {
                        "id"   : "malaytv1",
                        "name" : "TV1",        
                        "url"  : "http://202.73.9.10:1935/mylive/smil:tv1_all.smil/playlist.m3u8",
                        "logo" : "image/tv1malay.png",
                        "desc" : "TV1 is a Malaysian public television channel owned and operated by Radio Televisyen Malaysia. Launched on 28 December 1963, TV1 is the first and oldest TV station in Malaysia. Currently, TV1 broadcasts 24 hours a day from 21 August 2012 onwards.\nBetween 1972 and 1994, TV1 shared time with TV Pendidikan (Education TV) in the daytime on weekdays, this was cancelled after TV1 introduced daytime transmissions in 1994. TV2 continued the TV Pendidikan until 1999.\nTV1 broadcasts on VHF channel 5 and UHF channel 46 in Kuala Lumpur, but only the UHF signal could receive in the suburbs."
                    },
                    {
                        "id"   : "malaytv2",
                        "name" : "TV2",        
                        "url"  : "http://202.73.9.10:1935/mylive/smil:tv2_all.smil/playlist.m3u8",
                        "logo" : "image/tv2malay.png",
                        "desc" : "TV2 is a television station in Malaysia owned and operated by the Radio Television Malaysia, a division of the Malaysian Government. TV2 is now broadcasting 24 hours a day since 3 April 2006."
                    },
                    {
                        "id"   : "malaytv3",
                        "name" : "TV3",        
                        "url"  : "",
                        "logo" : "image/tv3malay.png",
                        "desc" : "TV3 is a Malaysian private television station owned and operated by the Media Prima Berhad, a Malaysian conglomerate. It began broadcasting on 1 June 1984. Now it broadcasts 24 hours a day, though, in September 2014, this channel broadcasts between 6:30 a.m. until 2:30 a.m. due to low audience ratings outside this time.\nIn 2013, TV3 remained the most watched television station in Malaysia, despite the declining viewership of free-to-air television, due to the high penetration of Pay TV and the further roll-out of free-to-air digital television.\nSimilar to most television stations in Southeast Asia, TV3 is known for its soap operas."
                    },
                    {
                        "id"   : "malaytvi",
                        "name" : "TVi",        
                        "url"  : "http://d2gi9ohf9965ej.cloudfront.net/live/ngrp:rtm-ch005.stream_all/playlist.m3u8",
                        "logo" : "image/tvimalay.png",
                        "desc" : "RTM TVi, also known as TVi is a digital television station in Malaysia owned and operated by the Radio Television Malaysia, a division of the Malaysian Government. It is part of the RTM Digital Television services, along with Muzik Aktif, Pelangi, Sinergi and Panggung.\nTVi broadcasts for 24 hours a day since its re-launch in April 2011. TVi, specifically meant for Sabah and Sarawak, is an initiative by the Federal Government and the governments of the two states to bring about a deeper understanding of the people in them. This would also help further promote the 1Malaysia concept among Malaysians, especially in the peninsular.\nTVi focusing programmes that highlight life in Sabah and Sarawak, culture and songs of the various ethnic groups in them, documentaries, history and plans in store for these two states. The channel is currently available on Astro\u2019s Channel 180, which previously broadcast RTM Muzik Aktif."
                    },
                    {
                        "id"   : "tv7malay",
                        "name" : "NTV 7",        
                        "url"  : "",
                        "logo" : "image/tv7malay.png",
                        "desc" : "Natseven TV Sdn Bhd, better known as ntv7, is a terrestrial television channel in Malaysia based in Petaling Jaya, Selangor. It began broadcasting nationwide on 7 April 1998. Its mission is to promote a happier and more enlightened Malaysia. Believing strongly in the provision of wholesome entertainment, good family and community values, good corporate citizenship, and the promotion of national integration, the station works on an appointment-based programming concept reflecting its philosophy of being \"Saluran Ceria Anda\"."
                    },
                    {
                        "id"   : "tv8malay",
                        "name" : "8TV",        
                        "url"  : "",
                        "logo" : "image/tv8malay.png",
                        "desc" : "8TV (Chinese: \u516b\u5ea6\u7a7a\u95f4; pinyin: B\u0101d\u00f9 K\u014dngji\u0101n; literal: 8th dimension) is a free-to-air private television station in Malaysia. The television channel targets urban youth and Chinese audiences with high quality foreign programmes and unique local content in mainly English and Chinese language. 8TV's line up consists of dramas, sitcoms, and reality shows, most of which are produced in Malaysia or imported from other countries. 8TV broadcasts with the concept of \"one station, two channels\" in two languages shifts as in English being called as 8TV and in Chinese being called as \u516b\u5ea6\u7a7a\u95f4 (pinyin: B\u0101d\u00f9 K\u014dngji\u0101n) or 8TV Chinese.\n8TV are also available on Astro channel 708, but through channel 108 on ABNXcess and HyppTV."
                    },
                    {
                        "id"   : "tv9malay",
                        "name" : "TV 9",        
                        "url"  : "",
                        "logo" : "image/tv9malay.png",
                        "desc" : "TV9 is a free-to-air private television station in Malaysia. TV9 began broadcasting on 22 April 2006, as a subsidiary of Media Prima Berhad. It formerly existed as Channel 9, which began airing on 9 September 2003 and ceased transmission on 1 February 2005 due to financial difficulties faced by the operator.\nTV9 broadcasts programmes that are marketed mostly to Muslim Malays in Malaysia. Its program line-up are religious shows, Indonesian dramas and Nickelodeon cartoon shows."
                    },
                    {
                        "id"   : "selangortv",
                        "name" : "Selangor TV",        
                        "url"  : "",
                        "logo" : "image/tvselangor.png",
                        "desc" : "TVSelangor is a TV Channel owned by the State Government of Selangor, Malaysia. It began operation in 2008. TVSelangor was formed by the State Government because the Federal Government would not allow them to use Federal Government TV channels to deliver information or news about the state government of Selangor to the people.\nBecause the channel does not have a license from the Federal government to broadcast terrestrial or satellite TV, TVSelangor is currently only available via the internet at Selangorku website. The main broadcast language is Bahasa Melayu and the channel features a variety of programme's including talkshows, short dramas, news, and documentaries. It is viewable 24 hours a day.\nOfficial Facebook for TVselangor is TVSelangor2009 & Official Twitter is TVSNews."
                    },
                    {
                        "id"   : "Muzikaktiftv",
                        "name" : "Muzik Aktif TV",        
                        "url"  : "http://d2gi9ohf9965ej.cloudfront.net/live/ngrp:rtm-ch006.stream_all/playlist.m3u8",
                        "logo" : "image/muzikaktiftv.png",
                        "desc" : "RTM Muzik Aktif (Malay: Active Music) is a music channel in Malaysia. It is the first Malaysian music channel, and one of the first Malaysian digital channels. It launched on the Astro platform in 16 March 2009. It is now a satellite channel, following the reportedly deferral and abandonment of the digital terrestrial television project by RTM.\nOn 10 April 2011, Muzik Aktif is replaced with the new RTM channel focusing on East Malaysian viewers, TVi, but it still broadcasts via internet and DVB-T to those in Klang Valley."
                    },
                    {
                        "id"   : "maratv",
                        "name" : "Mara TV",        
                        "url"  : "http://stream2.1malaysiaiptv.com/mylive/smil:maratv_all.smil/playlist.m3u8",
                        "logo" : "image/maratv.png",
                        "desc" : "The Majlis Amanah Rakyat (Malay for Indigenous People's Trust Council, commonly abbreviated as MARA), is a Malaysian government agency. It was formed to aid, train, and guide Bumiputra (Malays and other indigenous Malaysians) in the areas of business and industry. MARA was formed on March 1, 1966 under the Rural and National Development Ministry."
                    },
                    {
                        "id"   : "1hijautv",
                        "name" : "1Hijau TV",        
                        "url"  : "",
                        "logo" : "image/1hijautv.png",
                        "desc" : "Mixing the right formula has never been more important in today's ever changing climate. Fusing high end broadband technology and the passion for environmental protection in the country, 1 Hijau.TV was an instinctive progress to merge technology and environment to send an urgent message across to all Malaysians - the need to start a green movement to protect the very soil that gave life to all 26 million of us here. 1Hijau.TV aims to set precedence on the creation of a well-exposed society to all environmental issues - whether locally or globally. Featuring a plethora of local and international green programmes, 1Hijau.TV aspires to be the country's first green reference internet television site. Whether you are a student, a concerned housewife, a professional corporate player or an academic, 1Hijau.TV is the country's one-stop channel for everything green."
                    },
                    {
                        "id"   : "bernamatv",
                        "name" : "BERNAMA",        
                        "url"  : "http://d22b8vh21p20bg.cloudfront.net/mylive/smil:bernama2_all.smil/playlist.m3u8",
                        "logo" : "image/bernamatv.png",
                        "desc" : "Bernama TV is a 24-hour international news and current affairs television network in Malaysia. It is owned by Bernama, a government news agency. This channel airs news programmes that are related to local and international business, lifestyle, sports and entertainment. It is broadcast on the Astro satellite television platform via Channel 502, HyppTV via Channel 410 (previously channel 120, prior to April 2013) and the Fine TV IPTV-based network via Channel 12. Bernama TV's slogan is Baru & Benar (Malay for \"Right & Now\").\nBernama's news bulletins were initially aired on Astro Ria, Astro Prima, Astro AEC, Astro Wah Lai Toi and Astro Vaanavil, but they have since been integrated to this network. The news content on this channel is primarily broadcast in Malay, which is the official language of Malaysia. However, there are news programmes in English, Mandarin, Cantonese, Teochew and Tamil as well, in line with the News@Bernama, Xin Wen@Bernama, Sen Men@Bernama and Seithigal@Bernama segments respectively. Other shows that are broadcast on Bernama TV include STAR TV Biz@The Star, Sports@The Star and \"Helo Malaysia\" is a talk show hosted by Sherkawi Jirim."
                    },
                    {
                        "id"   : "rtmparlimen",
                        "name" : "RTM Parlimen",        
                        "url"  : "http://d22b8vh21p20bg.cloudfront.net/mylive/parlimen_600k/playlist.m3u8",
                        "logo" : "image/rtmparlimen.png",
                        "desc" : "RTM started broadcasting radio on 1 April 1946, and television on 28 December 1963. The first two radio stations are Radio Malaya (in Malay) and The Blue Network (in English). The transmitters were located first in Singapore and later in Kuala Lumpur (opened in 1950). With the independence of Malaya on 31 August 1957 Radio Malaya was split into two separate stations; the original studios in Singapore was taken over by a new station called Radio Singapura and Radio Malaya moved to Kuala Lumpur going on air from the new location on 1 January 1959. It would be later renamed Radio Malaysia on 16 September 1963 with the transmissions beginning with its trademark words Inilah Radio Malaysia (This is Radio Malaysia) on the day the Malaysia of today was born. Television services under the name Malaysia Televisyen or Malaysia Television (Malaysia TV) started on 28 December 1963 in time for the national New Year celebrations in Kuala Lumpur and regional telecasts in the Klang Valley in Selangor state, with its first studios being located in Jalan Ampang. The then 10-month-old Television Singapura (launched on 16 February 1963) became part of Malaysia Televisyen as its state station for Singapore viewers, a role served until 1965, when Singapore became independent. Radio and TV operations merged in 1968 as the new Angkasapuri headquarters was inaugurated. Thus Radio Malaysia and Televisyen Malaysia's identities merged to become Radio Televisyen Malaysia (Radio Television Malaysia, RTM) in 1969. A second TV station opened also in the same year as its rebranding, and in 1971 Radio Malaysia became the first radio station to broadcast 24 hours a day, nationwide, thus becoming Rangkaian Nasional (National Network) in the process. RTM began broadcasting in color since 1978 in Peninsular Malaysia and 1980 in Sabah and Sarawak. Between 1972 and 1999, RTM shared time with TV Pendidikan, the national education channel, in the daytime. TV1 introduced daytime transmissions in 1994 thus resulting to TV Pendidikan ceased broadcasting on TV1, while TV2 introduced daytime transmissions in 2000. TV1 broadcast overnight many times since the early 1990s, but daily 24-hour transmissions did not come until 2003, which was later cancelled. Permanent 24-hour broadcasting was introduced in 2006 on TV2, and 2012 on TV1."
                    },
                    {
                        "id"   : "majlisbeliamalay",
                        "name" : "Majlis Belia Malaysia",        
                        "url"  : "http://110.74.142.77:1935/eramaplaylist/mp4:ERR_DISABLE.mp4/playlist.m3u8",
                        "logo" : "image/majlisbeliatv.png",
                        "desc" : "Majlis Belia Malaysia (MBM) merupakan badan induk yang menyelaras pertubuhan belia dan pelajar di Malaysia. Ia ditubuhkan pada 23 Julai 1948 di Victoria Institution (VI), Kuala Lumpur dengan nama Majlis Belia Malaya. Pada 23 Julai 1948, pertemuan seramai 75 orang wakil-wakil pertubuhan di Victoria Institution telah membuka laluan kepada penubuhan Majlis Belia Malaya. Ekoran dari penubuhan Jawatankuasa Khas Sementara Belia ini, Abdul Razak Hussein (Tun) dan Tengku Jaafar telah mewakili Tanah Melayu di Persidangan Perhimpunan Belia Sedunia (WAY) di Brunei. Bermula dari itulah WAY telah mengiktiraf MBM (sementara) sebagai Jawatankuasa Kebangsaan baginya di Tanah Melayu. Perwakilan belia yang bersidang pada Julai 1948 telah membincang dan berusaha menubuhkan Majlis Belia Negeri dan Petempatan. Majlis Belia Negeri Pulau Pinang dan Province Wellesly telah ditubuhkan pada 17 November 1948 dan merupakan Majlis Belia Negeri yang pertama di Tanah Melayu. Majlis Belia Malaya telah diiktiraf secara rasmi pada 9 September 1950 di Pulau Pinang setelah perlembangaannya diterimapakai. Mesyuarat Agung pertama telah diadakan dengan kehadiran badan-badan gabungan iaitu Majlis Belia Negeri. Pada tahun 1951, Kerajaan telah mengiktiraf Majlis Belia Malaya sebagai Majlis Belia Kebangsaan bagi pertubuhan belia di negara ini."
                    },
                    {
                        "id"   : "putratv",
                        "name" : "Putra TV",        
                        "url"  : "http://110.74.142.77:1935/eramaplaylist/mp4:ERR_NOT_FOUND.mp4/playlist.m3u8",
                        "logo" : "image/iconcopy400.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "rcomalay",
                        "name" : "RCO TV",        
                        "url"  : "http://stream2.1malaysiaiptv.com/mylive/acotv_600k/playlist.m3u8",
                        "logo" : "image/iconcopy400.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "angkasatv",
                        "name" : "Angkasa TV",        
                        "url"  : "http://stream2.1malaysiaiptv.com/mylive/angkasa_600k/playlist.m3u8",
                        "logo" : "image/iconcopy400.png",
                        "desc" : "Welcome to ANGKASA.TV Live Stream Channel, This channel is all about Angkatan Koperasi Kebangsaan Malaysia Bhd. We hope you enjoy and get some info about ANGKASA services. Thank You For Watching."
                    },
                    {
                        "id"   : "booktvmalay",
                        "name" : "Book TV",        
                        "url"  : "http://stream2.1malaysiaiptv.com/mylive/booktv_600k/playlist.m3u8",
                        "logo" : "image/iconcopy400.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "kctvmalay",
                        "name" : "KC TV",        
                        "url"  : "http://stream2.1malaysiaiptv.com/mylive/smil:kctv_all.smil/playlist.m3u8",
                        "logo" : "image/iconcopy400.png",
                        "desc" : ""
                    }
                ]
            },

    "sport" : {
            "nm"    : "Sport",
            "cnl"   :
                [
                    {
                        "id"   : "cctv5",
                        "name" : "CCTV 5",        
                        "url"  : "",
                        "logo" : "image/cctv5.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "foxsport1",
                        "name" : "Fox Sport 1",        
                        "url"  : "",
                        "logo" : "image/foxsport.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "beinsport1",
                        "name" : "Bein Sport 1",        
                        "url"  : "http://65.111.174.111:1935/iptv/beinsports2.stream/playlist.m3u8",
                        "logo" : "image/beinsport1.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "beinsport2",
                        "name" : "Bein Sport 2",        
                        "url"  : "",
                        "logo" : "image/beinsport2.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "beinsport3",
                        "name" : "Bein Sport 3",        
                        "url"  : "",
                        "logo" : "image/beinsport3.png",
                        "desc" : ""
                    },
                    {
                        "id"   : "dubaisport",
                        "name" : "Dubai Sport",        
                        "url"  : "http://cdnehlsdubaisports3.endavomedia.com/smil:dmilivedubaisports3.smil/playlist.m3u8",
                        "logo" : "image/dubaisport.png",
                        "desc" : ""
                    }
                ]
            }
        };
        return c;
    };
    
    var jALL = CHANNEL();
    
    function LOADTABCONTENT(){
        var i = 0;
        for (var y in jALL){
            if (i == 0) var a = 'active'; else var a = '';
            i++;
            
            if (y === 'id' || y === 'my' || y === 'sport')
                var s = $('#myTabLoad').replaceWith('<li class="'+y+'tv '+a+'" data-xyz="0"><a href="#'+y+'tv" data-toggle="tab">'+jALL[y]['nm']+'</a></li><a id="myTabLoad"></a>');
            else
                var s = $('#dropdownMoreCnl').append('<li class="'+y+'tv"><a href="#'+y+'tv" data-toggle="tab">'+jALL[y]['nm']+'</a></li>');
            var t = $('#myTabContentChannel').append(
                        '<div class="tab-pane '+a+'" id="'+y+'tv">'+
                            '<h5>Channel List '+jALL[y]['nm']+'</h5>'+
                            '<div class="channel-col">'+
                                '<div class="channel-list cl-'+y+'">'+
                                    '<div id="channel-list" class="cl-'+y+'"></div>'+
                                '</div>'+
                            '</div>'+
                        '</div>');
            if (s && t){
                var cALL = jALL[y]['cnl'];
                CNLL(cALL,y);
            }
        }
        $('#myTabLoad').remove();
    };
    LOADTABCONTENT();
    
    function CNLL(o,ct){
        var c = '';
        
        for (var i=0; i<o.length; i++)
        {
            if (o[i]['url'] !== ''){
            c += '<div class="channel-list-box cnl-item-'+ct+'-'+i+'">'+
                    '<div class="channel-icon">'+
                        '<img src="'+fs+o[i]['logo']+'"/>'+
                    '</div>'+
                    '<p>'+o[i]['name']+'</p>'+
                '</div>';
                CLICKNCLITEM(ct,i,o[i]['id'],o[i]['url'],o[i]['name']);
            }
        }
        $('.cl-'+ct).empty().append(c);
    };
    
    function CLICKNCLITEM(ct,i,id,file,title){
        $.ajax({
            success: function(){
                $('.cnl-item-'+ct+'-'+i).click(function(){
                    VIDEOJS(id,file,title);
                });
            }
        });
    };
    
});


