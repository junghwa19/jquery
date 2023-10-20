/*
이벤트 관련 메서드

 - 웹페이지에서 발생하는 모든 작업을 이벤트라고 한다.
 -자바스크립트에선 이벤트 속성을 부여했지만 jQuery에선 이벤트 속성 자체를 메서드로 사용할 수 있다.

 이벤트 속성
마우스 관련 : click, dvlckick, mouseenter, mouseleave
키보드 관련 : keyup, keydown, keypress
폼태그 관련 : submit, change, focus, blur
윈도우 관련 : load, resize, scroll, error

이벤트 메서드
on() : 문서객체에 이벤트를 연결
off() : 문서객체에 이벤트를 제거
one() : 문서객체에 이벤트를 한번만 연결
hover() : 문서객체에 마우스를 올렸을 때와 나올 때 이벤트 발생
trigger() : 문서객체에 이벤트를 강제적으로 발생

*/ 

$(document).ready(function(){
    //on()
    //이벤트를 한개 연결하는 경우
    ${'h2'}.on('click',function(){
        $(this).toggleClass('active');
    });

    //이벤트를 여러개 연결하는 경우
    $('a').on('focus mouseenter', function(){
        $(this).addClass('active');
    });    

    $('a').on('blur mouseenter', function(){
        $(this).removeClass('active');

    });

    //여러개 이벤트를 각각 연결하는 경우
    $('h3').on({
        mouseenter: function(){
            $(this).addClass('active');
        },
        mouseleave: function(){
            $(this).removeClass('active');
        }
    });

    //off()
    //위 $('h2').on() 메서드 안에 넣으면 클릭이 한번만 동작한다.
    $('h2').off('click');

    //이벤크 한번만 연결
    //one()
    $('h2').one('click', function () {
        alert('클릭이 한번만 적용됨');
    });
    
    //이벤트 타입 메서드
    $('button').dblclick(function (){
        alert('더블클릭');
    });

    //hover()
    $('p').hover(function(){
        $(this).css('font-size', 50);
    },
     function(){
        $(this).css('font-size', 20);
     }
    );

    //trigger
    $('span').click(function(){
        $(this).html(function (index,text){
            return text +"★";
        });
        // $(this).append("★")
    });

    //setInterval() - 몇 초마다 실행
    //setTimeout() - 몇 포 후에 실행
    setInterval(function(){
        $('span').last().trigger('click');
    },1000);

});