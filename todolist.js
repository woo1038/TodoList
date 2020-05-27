const $input_text = document.getElementById('input_text');
const $input_btn = document.getElementById('input_btn');
const $li_listUl = document.getElementById('save_text');
const $li_list = document.getElementById('save_text').getElementsByTagName('Li');


// 기존 li태그에 close button 추가
for(let i=0; i<$li_list.length; i++) {
    const $closeBtn = document.createElement('button');
    const $closeText = document.createTextNode('x');
    $closeBtn.className = "close";
    $closeBtn.appendChild($closeText);
    $li_list[i].appendChild($closeBtn);
}


$input_btn.addEventListener('click', addClick);


// Add 클릭 이벤트
function addClick() {
    if($input_text.value != "") {
        // 내용이 있다면
        arr_add();
        $input_text.value = "";
        $input_text.focus();
    }
    else {
        // 내용이 없다면
        alert('내용을 입력해주시길 바랍니다.');
        $input_text.focus();
    }
}



// text 내용 추가
function arr_add() {
    const $li_listadd = document.createElement('li');
    const $li_listtext = document.createTextNode($input_text.value);
    $li_listadd.appendChild($li_listtext);
    arr_removeBtn($li_listadd);
    


    const $li_listul = document.getElementById('save_text');
    $li_listul.appendChild($li_listadd);
    $input_text.value = "";
}



// li태그에 button 추가 함수
function arr_removeBtn(obj) {
    const $closeBtn = document.createElement('button');
    const $closeText = document.createTextNode('x');
    $closeBtn.className = 'close';
    $closeBtn.appendChild($closeText);
    obj.appendChild($closeBtn);
}





// 배열 내용 확인 log
function arrlist() {
    // 배열 내용
    for(let i=0; i<$li_list.length; i++){
        console.log($li_list[i]);
    }
}


const $close_btn = document.querySelectorAll('.close');
for(let i=0; i<$close_btn.length; i++) {
    $close_btn[i].addEventListener('click', removeClick);
}


// 내용 삭제 기능
function removeClick() {
    const a = document.getElementById('save_text');
const b = document.getElementById('save_text').getElementsByTagName('Li');
a.remove(b);
}




