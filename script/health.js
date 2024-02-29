(function($){
    
   class Gym{
    init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.footer();
        this.popup();
    }

    header(){

        $('.main-btn').on({
            mouseenter(){
                $('.sub').stop().hide();
                $(this).next().stop().show();
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            },
            focus(){
                $('.sub').stop().hide();
                $(this).next().stop().show();
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            }
        })
        $('.column').on({
            mouseleave(){
                $('.sub').stop().hide();
                $('.main-btn').removeClass('on');
            },
        })

        $('.subFinal').on({
            focusout(){
                $('.sub').stop().hide();
                $('.main-btn').removeClass('on');
            }
        })
        
        

    }

    section1(){
        
        let count = 0;

        function mainSlide(){
        $('.slide-wrap').stop().animate({top:`${-count * 100}%`}, 500, function(){
            if(count > 2) count = 0;
            $('.slide-wrap').stop().animate({top:`${-count * 100}%`}, 0)
        })
        }
     
        function nextCount(){
            count++;
            mainSlide();
        }
        
        function autoTimer(){
            setInterval(nextCount, 3000);
        }

        autoTimer();

    }   

    section2(){

    }

    section3(){

    }

    footer(){

        $('#family').on({
            change(){
                var Url = $(this).val();
                if(Url !== ''){
                    window.open(Url, '_blank');
                }
            }
        })

    }

    popup(){

        $('.notice-first').on({
            click(){
                $('.popup').removeClass('off');
                $('.popup').addClass('on');
            }
        })

        $('.close-btn').on({
            click(){
                $('.popup').removeClass('on');
                $('.popup').addClass('off');
            }
        })

    }
   }

   const gym = new Gym();
   gym.init();

})(jQuery)