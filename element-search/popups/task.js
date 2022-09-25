const popupMain = document.getElementById('modal_main');
const closeClass = document.querySelectorAll('.modal__close');
const popupSuccess = document.getElementById('modal_success');
const show = document.querySelector('.show-success');





popupMain.className = 'modal modal_active';
closeClass[0].onclick = function(){
    popupMain.className = 'modal';
    };

show.onclick = function() {
    popupMain.className = "modal";
    popupSuccess.className = "modal modal_active";
};



closeClass[2].onclick = function() {
    popupMain.className = 'modal';
    popupSuccess.className = 'modal';
 };




