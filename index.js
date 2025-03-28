function openiframe() {
    const c = document.getElementsByClassName("show-classdemo")[0];
    console.log(c);
    switch(index){
        case 1:
            c.innerHTML = `<iframe src="w1/HW1.html"  frameborder="1"></iframe>`;
            break;
        case 2:
            c.innerHTML = `<iframe src="0314-main/card.html"  frameborder="1"></iframe>`;
            break;
        case 3:
            c.innerHTML = `<iframe src="0314-main/temp.html"  frameborder="1"></iframe>`;
            break;
        case 4:
            c.innerHTML = `<iframe src="class/t3-3.html"  frameborder="1"></iframe>`;
            break;
    }
    console.log(index);
}