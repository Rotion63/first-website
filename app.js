

previews.forEach(preview) => {
    preview.addEventListener("click",() =>{
        modal.classList.add("open");
        original.classList.add("open");
        Const originalSrc = preview.getAttribute("data-original");
        original.src="./full/${originalSrd}"
        const altText=preview.alt;
        caption.textContent=altText;
    });
});
modal.addEventListener("click",(e) =>{
    if (e.target.classList.contains("modal")){
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})