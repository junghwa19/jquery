/*
시각 효과 메서드
-문서 객체를 사라지게 하거나 나타나게 하는 것을 의미

show()  좌측상단 기준으로 요소를 나타나게 하는 메서드
hide() 좌측상단 기준으로 요소를 사라지게 하는 메서드
toggle() show와 hide 메서드를 번갈아가며 실행하는 메서드
slideDown() 상단 기준으로 요소를 나타나게 하는 메서드
slideUp()  상단 기준으로 요소를 사라지게 하는 메서드
slideToggle() slideDown과 slideUp 메서드를 번갈아가며 실행하는 메서드
fadein() 투명도 기준으로 요소를 나타나게 하는 메서드
fadeOut() 투명도 기준으로 요소를 사라지게 하는 메서드
fadeToggle() fadeIn과 fadeOut 메서드를 번갈아가며 실행하는 메서드

시각효과 메서드 매개변수
-show(시간, 콜백함수)
시간 매개변수는 생략, fast, slow, 밀리초단위가 올 수 있다.
-콜백함수는 시각효과 메서드가 실행된 후 주고 싶은 명령을 작성한다.
*/
$(document).ready(function(){
    $('button').eq(0).click(function(){
        $('p').hide();
    });
    $('button').eq(1).click(function(){
        $('p').show();
    });
    $('.btn1').click(function(){
        $(this).next().toggle('show');
    });
    $('.btn2').click(function(){
        $(this).next().slideToggle('show');
    });
    $('.btn3').click(function(){
        $(this).next().fadeToggle('show');
    });

    $('.btn4').click(function(){
        $(this).next().toggle('show',function(){
            $(this).css('background-color','lightblue');
        });
    });

    $('.btn5').click(function(){
        $(this).next().slideToggle('show',function(){
            $(this).css('background-color','lightblue');
        });
    });

    $('.btn6').click(function(){
        $(this).next().fadeToggle('show',function(){
            $(this).css('background-color','lightblue');
        });
    });
});
