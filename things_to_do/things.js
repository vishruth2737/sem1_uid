const con = document.querySelectorAll('.con');
const btn = document.querySelectorAll('button');


btn.forEach((bn, i)=>{

    bn.addEventListener('click', () => {
        con[i].classList.add('active');
    })
});


window.addEventListener('click', (e) => {
    con.forEach((co, i)=>{
    if(e.target==co)
    co.classList.remove('active');
    })
});