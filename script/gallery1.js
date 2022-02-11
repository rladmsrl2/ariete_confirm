$(document).on('ready', function() {

      $(".slider").slick({
		//autoplay:true,자동 갤러리 구문(삭제시 수동으로 변함.)
		//autoplaySpeed:2000,자동 갤러리가 넘어가는 시간
    autoplay:true,
    autoplaySpeed:1000,
        dots: false,
        infinite: true,
        slidesToShow: 3,//보여지는 갤러리 수
        slidesToScroll: 1,//넘어가는 갤러리 수
		speed: 2000,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
		pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
    responsive: [
      {
        breakpoint: 1320,/*창너비*/
        settings: {
          slidesToShow:3/*보여지는갯수*/
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow:2
        }

      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow:1
        }

      }
    ]
      });

      $(".slider2").slick({
        //autoplay:true,자동 갤러리 구문(삭제시 수동으로 변함.)
        //autoplaySpeed:2000,자동 갤러리가 넘어가는 시간
        autoplay:true,
        autoplaySpeed:1500,
            dots: true,
            infinite: true,
            slidesToShow: 1,//보여지는 갤러리 수
            slidesToScroll: 1,//넘어가는 갤러리 수
        speed: 2000,//다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
        pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */ 
          });
    });