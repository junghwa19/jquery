// Elemnet관련 선택자
// *            : $('*')- 모든 문서객체를 선택
// element      : $('h') - 특정 태그를 모두 선택
// #id          : $('#text') - 작성된 아이디값을 갖는 문서객체를 선택
// .class       : $('.text') - 작성된 클래스값을 갖는 문서객체를 선택
// [속성='값']  : $('input[type=text]') - 해당 요소의 태그속성명과 속성값이 갖는 문서객체를 선택
// A  >  B      : $('div > ul') - 앞에 작성된 요소의 자식인 요소를 선택
// A B          : $('div ul') - 앞에 작성된 요소의 후손인 요소를 선택
// A + B        : $('h1  +  h2') - 앞에 작성된 요소의 바로 뒤에 있는 동위선택자를 선택
// A ~ B        :$('h1 ~ h2')  - 앞에 작성된 요소 뒤에 있는 모든 동위선택자를 선택
// :not()       :$('h1:not(.text)')
// :nth-child(n)   :$('div:nth-child(n)')
// :first-child    :$('div:first-child')
// :last-child     :$('div:last-child')
// :nth-child(odd) : $('div:nth-child(odd)')
// :nth-child(even) : $('div:nth-child(even)')

// 배열 선택자라서 순번이  0부터 시작
// :eq(0) - nth-child(n)와 같다
// :first - first-child와 같다
// :last - last-child와 같다
// :odd - nth-child(odd) 와 같다
// :even - nth-child(even) 와 같다
// :gt(n) - $('div:gt(n)')      -해당요소 중 배열번호가 n 보다 큰요소를 선택
// :lt(n) - $('div:lt(n)')      -해당요소 중 배열번호가 n 보다 작은요소를 선택



// input 선택자
// :input           :$(*:input) - 모든 input 요소를 선택자
// :text            :$('input:text') - input 태그 중 type 값이  text인 요소를 선택
// :password        :$('input:password')
// :radio           :$('input:radio')
// checkbox         :$('input:checkbox')  
// submit           :$('input:submit')  
// reset            :$('input:reset')
// button           :$('input:button')
// file             :$('input:file')
// enabled          :$('input:enabled')
// disabled         :$('input:disabled')
// selected         :$('input:selected')
// checked          :$('input:checked')



$(document).ready(function(){
    $('*').css("font-size,20");
    
    $("h3").css("text-decoration", "underline");
    
    $("#text01").css("color","red");
    
    $('.odd').css("color","pink");
    $('.even').css("color","lightblue");
    

    $("p[name=name1]").css("color","blue");
    $("p[name=name2]").css("color","green");
    

    $('.list>li').css("font-weight","bold");
    
    $('body .listA').css("font-style","italic");
    $('.listA + li').css("color","red");
    $(".listA ~ li").css("text-decoration","underline");
    $(".list > li:not(.listA)").css("list-style","none");


    // $("div:nth-child(1)").css("background","red");
    $("div:eq(0)").css("background","red");
    $("div:eq(1)").css("background","orange");
    $("div:eq(2)").css("background","yellow");
    $("div:eq(3)").css("background","green");
    $("div:eq(4)").css("background","blue");
    $("div:eq(5)").css("background","navy");
    $("div:eq(6)").css("background","purple");


    $('div:first').css('border-radius',"10px 0 0 10px");
    $('div:last').css('border-radius',"0 10px 10px 0");

    $('div:odd').css('color','white');
    $('div:even').css('color','black');

    $('div:gt(3)').css('text-decoration','underline');
    $('div:lt(3)').css('font-style','italic');
    

    $('input:text').css("border","1px solid red");
    $('input:password').css("border","1px solid blue");
    
});

// input 선택자
// :input           :$(*:input) - 모든 input 요소를 선택자
// :text            :$('input:text') - input 태그 중 type 값이  text인 요소를 선택
// :password        :$('input:password')
// :radio           :$('input:radio')
// checkbox         :$('input:checkbox')  
// submit           :$('input:submit')  
// reset            :$('input:reset')
// button           :$('input:button')
// file             :$('input:file')
// enabled          :$('input:enabled')
// disabled         :$('input:disabled')
// selected         :$('input:selected')
// checked          :$('input:checked')


