let allLi = document.querySelectorAll('ul > li');
allLi.forEach(function(li) {
    li.addEventListener('mouseover',function(){
        let listElement = this.querySelector('ul');
        listElement != null&& (listElement.style.display = 'block');
    })
});
allLi.forEach(function(li) {
    li.addEventListener('mouseout',function(){
        let listElement = this.querySelector('ul');
        listElement != null&& (listElement.style.display = 'none');
    })
});