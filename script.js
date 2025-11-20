let panels = document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removClassList();
       panel.classList.add("active");
    });
});
function removClassList() {
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}

