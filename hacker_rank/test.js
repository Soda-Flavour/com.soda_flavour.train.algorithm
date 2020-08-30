let popUpHtml = '';
popUpHtml += '<div id="popup-section" class="cover">';
popUpHtml += '<div class="dimmed"></div>';
popUpHtml += '<div class="wrapper">';
popUpHtml += '<div class="modal">';
popUpHtml += '<p>삭제하시겠습니까?</p>';
popUpHtml += '<footer>';
popUpHtml +=
  '<a id="pop-up-confirm" href="javascript:deleteConfirm()">확인</a>';
popUpHtml += '<a id="pop-up-cancle" href="javascript:dismissPopup();">취소</a>';
popUpHtml += '</footer>';
popUpHtml += '</div>';
popUpHtml += '</div>';
popUpHtml += '</div>';

// let popUpSection = document.getElementById("popup-section");
let body = document.getElementsByTagName('body')[0];

function deleteConfirm() {
  alert(del_id);
}

function secDelete(del_id) {
  body.innerHTML += popUpHtml;
  let popUpSection = document.getElementById('popup-section');
  popUpSection.popUpSection.style.display = 'block';
  body.classList.add('dis-scroll');
}

function dismissPopup() {
  let popUpSection = document.getElementById('popup-section');
  while (popUpSection.firstChild) {
    console.log('동작');
    popUpSection.removeChild(popUpSection.firstChild);
  }

  // popUpSection.style.display = 'none';
  body.classList.remove('dis-scroll');
}

// document.getElementById("pop-up-cancle").onclick = function() {
//     popUpSection.style.display = 'none';
//     body.classList.remove("dis-scroll");
// };

// document.addEventListener("DOMContentLoaded", function(){
//     function secDelete(){
//         alert("하이");
//     }

//     document.getElementById("btn-sec-delete").onclick = function() {
//         popUpSection.style.display = 'block';
//         body.classList.add("dis-scroll");
//     };
//     document.getElementById("pop-up-cancle").onclick = function() {
//         popUpSection.style.display = 'none';
//         body.classList.remove("dis-scroll");
//     };

// });





/* Add your css styles here */

.dis-scroll{
    overflow: hidden;
}

.cover {
    /* dimmed 처리와 모달창을 정중앙에 띄우기 위한 배경입니다. css를 추가하세요. */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
}

.cover .dimmed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: black;
    opacity: .5;

}

.cover .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}


.modal > footer {
    display: inline-block;
    padding-bottom: 12px;
}

.modal > footer > a {
    color: black;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 2px;
    padding: 4px;
}




