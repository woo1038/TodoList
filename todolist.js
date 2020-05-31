/* x 버튼 생성 */
const $close_li = document.getElementById('save_text').getElementsByTagName('li');
for(let i=0; i<$close_li.length; i++){
    close_btn($close_li[i]);
}


/* x 버튼 이벤트 */
const $close = document.querySelectorAll('.close');
close_event($close);


/* li click 이벤트 */
const $list = document.getElementById('save_text');
$list.addEventListener('click', function(li) {
        if(li.target.tagName === 'LI') {
            li.target.classList.toggle('checked');
        }
});


/* Add click 이벤트 */
const $input_text = document.getElementById('input_text');
const $input_btn = document.getElementById('input_btn');
$input_btn.addEventListener('click', function() {
    text_plus();
});


/* enter 이벤트 */
function pressEnter() {
    if (event.keyCode == 13) {
        text_plus();
    }
}


// check remove 이벤트
const $remove_btn = document.getElementById('remove_btn');
const $remove_li = document.getElementById('save_text').getElementsByTagName('li');
$remove_btn.addEventListener('click', function() {
    for(let i=0; i<$remove_li.length; i++) {
        if($remove_li[i].classList == 'checked') {
            $remove_li[i].style.display = 'none';
        }
    }
});





/* ========= 함수 ========= */

// x버튼 함수
function close_btn(btn) {
    const $close_btn = document.createElement("button");
    const $close_text = document.createTextNode("x");
    $close_btn.className = "close";
    $close_btn.appendChild($close_text);
    btn.appendChild($close_btn);
}


// x버튼 이벤트 함수
function close_event(event) {
    for(let i=0; i<event.length; i++){
        event[i].onclick = function() {
            const $this_li = this.parentElement;
            $this_li.style.display = 'none';
        }
    }
}


// li 추가 이벤트 함수
function text_plus() {
    if($input_text.value == '') {
        alert('입력하시오');
    }else {
        const $create_li = document.createElement('li');
        const $create_text = document.createTextNode($input_text.value);
        $create_li.appendChild($create_text);
        $list.appendChild($create_li);
        
        $input_text.value = '';
        $input_text.focus();
        close_btn($create_li);
        
        const $close_Btnall = document.querySelectorAll('.close');
        close_event($close_Btnall);
    }
}