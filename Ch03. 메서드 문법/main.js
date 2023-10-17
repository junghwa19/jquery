// 메서드 문법


$(document).ready(function(){
    //매개변수가 없는 유형
    let text = $('h1').html(); //게터
    console.log(text);

    //매개변수가 한개인 유형
    $('h1').html('title tag'); //세터

    //매개변수가 두개인 유형
    $('h1').css('color','red');

    //매개변수가 함수인 유형
    $('h1').html(function(index,text){
        text = '제목태그';
        return text + (index + 1);
    });

    //매개변수가 객체인 유형
    $('h1').css({
        backgroundColor: 'red' ,
        color: 'yellow' ,
    });
    
    //메서드 체이닝 let text = $('h1').html().css().css().css();
    $('h1').first().css('background-color','black');
});
