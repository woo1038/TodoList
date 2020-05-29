const $input_text = document.getElementById('input_text');
const $input_btn = document.getElementById('input_btn');
const $remove_btn = document.getElementById('remove_btn');
const $li_listUl = document.getElementById('save_text');
const $li_listLi = document.getElementById('save_text').getElementsByTagName('Li');



//================실행================//


// 기존에 있던 li태그에 close버튼 추가
for(let i=0; i<$li_listLi.length; i++) {
    arr_removeBtn($li_listLi[i]);
}

// 기존에 li 태그가 있다면 x 버튼 활성화
remove();


// 새로 추가 되는 li태그
$input_btn.addEventListener('click', addClick);
$remove_btn.addEventListener('click', removeClick);
eventClick();




// ===============이벤트==============//

// Add 클릭 이벤트
function addClick() {
    if($input_text.value != "") {
        // 내용이 있다면
        arr_add();
        remove();
        eventClick()
        $input_text.focus();
        console.log($li_listLi);
        
    }
    else {
        // 내용이 없다면
        alert('내용을 입력해주시길 바랍니다.');
        $input_text.focus();
    }
}


// li click시에 이벤트
function eventClick() {
    for (let i = 0; i < $li_listLi.length; i++) {
        let ox = true;
        const $check_i = document.createElement('i');
        // li list 클릭시에 toggle 이벤트
        $li_listLi[i].onclick = function () {        
            if (ox == true){
                $check_i.className = 'checked';
                this.appendChild($check_i);
                this.style.textDecoration = "line-through";
                this.style.background = "#a3a3a3";
                ox = false;
            }else {
                $check_i.className = '';
                this.appendChild($check_i);
                this.style.textDecoration = "none";
                if($li_listLi[i%2] == $li_listLi[0]) {
                    this.style.background = "#d3d3d3";
                }else {
                    this.style.background = "#fff";
                }
                ox = true;
            }
        }
    }
}


function removeClick() {
    for(let i=0; i<$li_listLi.length; i++) {
        const a = document.querySelectorAll('.checked');
        console.log(b);
    }
}




// ============함수============ //

// text 내용 추가
function arr_add() {
    const $li_listLiadd = document.createElement('li');
    const $li_listLitext = document.createTextNode($input_text.value);
    $li_listLiadd.appendChild($li_listLitext);
    arr_removeBtn($li_listLiadd);
    
    const $li_listLiul = document.getElementById('save_text');
    $li_listLiul.appendChild($li_listLiadd);
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


// close 버튼 클릭시 li 삭제 기능
function remove() {
    let $close = document.querySelectorAll(".close");
    for (let i = 0; i < $close.length; i++) {
        $close[i].onclick = function () {
            let $closeLi = this.parentElement;
            $closeLi.style.display = "none";
        }
    }
}


