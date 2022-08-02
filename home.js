const room=document.querySelector('#roomscon');
const h=window.innerHeight;

document.addEventListener('scroll',() => {
    
    const l=room.getBoundingClientRect().top;
    if(l>0 && l<h)
    room.classList.add('active');
})

const subcon = document.querySelector('#subcon');
const subbtn = document.querySelector('#subbtn');
const subsub = document.querySelector('#sub > input');
const email = document.querySelector('#subcon #emailin input');

setTimeout(() => {
    subcon.classList.add('active');
},7000)

subbtn.addEventListener('click', ()=>{
    subcon.classList.remove('active');
})
subsub.addEventListener('click', ()=>{
    if(email.value !='')
    {
        if(email.value.includes('@'))
        subcon.classList.remove('active');
        else
        window.alert('Please enter a valid email ID');
    }
    else
    window.alert('Please enter email ID');
})

subcon.addEventListener('click', (e)=>{
    if(e.target == subcon)
    subcon.classList.remove('active');
})
