function openiframe(index) {
    const iframe = document.querySelector(".show-classdemo iframe");

    if (!iframe) {
        console.error("找不到 iframe 元素！");
        return;
    }

    let src = "";

    switch (index) {
        case 1:
            src = "w1/HW1.html";
            break;
        case 2:
            src = '0314-main/card.html';
            break;
        case 3:
            src = "0314-main/temp.html";
            break;
        case 4:
            src = "classdemo/t3_3.html";
            break;
        default:
            console.warn("未知的索引值:", index);
            return;
    }

    iframe.src = src;
    console.log(`已更改 iframe src 為: ${src}`);
}
