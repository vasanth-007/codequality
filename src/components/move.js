window.onload = function(){
    const list_items = document.querySelectorAll('.card');
    const lists = document.querySelectorAll('.child');
    let draggedItem = null;
    for (let i = 0; i < list_items.length; i++) {
        const item = list_items[i];
        item.addEventListener('dragstart', ()=> {
            draggedItem = item;
            setTimeout(function () {
                item.style.display = 'none';
            }, 0)
        });
        item.addEventListener('dragend',()=> {
            setTimeout(function () {
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        })
        for (let j = 0; j < lists.length; j ++) {
            const child = lists[j];
    
            child.addEventListener('dragover', function (e) {
                e.preventDefault();
            });
            child.addEventListener('dragenter', function (e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            });
            child.addEventListener('dragleave', function (e) {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });   
            child.addEventListener('drop', function (e) {
                console.log('drop');
                this.append(draggedItem);
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });
        }
    }
}