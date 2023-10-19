/*
HTML 요소 관련 메서드
-text(), html() : 문서객체 안의 내용을 가져오거나 추가할 때 사용하는 메서드
-attr(), prop() : 문서객체 속성의 값을 가져오거나 속성을 추가하는 메서드


*/

$(document).ready(function(){
    let text1 = $('.text1').text();
    let text2 = $('.text2').html();

    console.log(text1);
    console.log(text2);

    //매개변수가 한개인 경우(세터)
    $('.text3').text('<a href="#">링크태그</a>');
    $('.text4').html('<a href="#">링크태그</a>');

    //매개변수가 함수인 경우(세터)
    $('.box1 h1').text(function(index){
        return 'title tag' + (index +1);
    });

    $('.box2 p').html(function(index){
        return 'paragraph tag' + (index +1);
    });

    //attr(), prop()
    //매개변수가 한개인 경우(게터)
    let src1 = $("img").attr("src");
    let src2 = $("img").prop("src");

    $('.img1').html(src1);
    $('.img2').html(src2);


    //매개변수가 두개인 경우(세터)
    $('#chk1').attr("checked", "checked");
    $('#chk2').prop("checked", "checked");

    //매개변수가 객체인 경우(세터)
    // $('img').attr({   //prop을 사용해도 되지만 보통 attr메서드를 더 많이 사용한다.
    //     width: 800,
    //     height: 500,
    // });
    
    //매개변수가 함수인 경우(세터)
    $('.cat').attr('width', function(index){
        return (index + 1)*100;    
    });

    //속성 삭제 메서드
    $('img').first().removeAttr("width");

});