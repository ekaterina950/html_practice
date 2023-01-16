const elem = document.querySelectorAll('.main-item .item')
for(i=0;elem.length;i++){
    elem[i].onclick = funcShow;
}
function funcShow(){
    this.classList.toggle('item-show');
}
