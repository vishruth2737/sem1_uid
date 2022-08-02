const rev = document.querySelectorAll('.rev');
const item = document.querySelectorAll('.item h2');
console.log(item)
let c=1;
const h = window.innerHeight;

document.addEventListener('scroll',()=>{

    rev.forEach((ele)=>{

        let l =ele.getBoundingClientRect().top;
        if(l>0 && l<=(3*h/4))
        ele.classList.add('active');
    });

    let followcon = document.querySelector('#followcon');

    const value = [72000,83000,86000,65000];
    const inc = [721,832,868,659];
    let l =followcon.getBoundingClientRect().top;
        if(l>0 && l<=(3*h/4) && c==1)
        {
            c=2;
            let s=[0,0,0,0];
            let x=0;
             let p = setInterval(() => {
                    console.log(s);
                    if(x>=100)
                    {
                    item[0].textContent =`${value[0]}+`;
                    item[1].textContent =`${value[1]}+`;
                    item[2].textContent =`${value[2]}+`;
                    item[3].textContent =`${value[3]}+`;
                        clearInterval(p);
                    }
                    item[0].textContent =`${s[0]}+`;
                    item[1].textContent =`${s[1]}+`;
                    item[2].textContent =`${s[2]}+`;
                    item[3].textContent =`${s[3]}+`;
                    s[0]=s[0]+inc[0];
                    s[1]=s[1]+inc[1];
                    s[2]=s[2]+inc[2];
                    s[3]=s[3]+inc[3];
                    x++;
                }, 15);
            
        }

});



const rat = document.querySelectorAll('.rat');

rat.forEach((ra, i) => {
    ra.addEventListener('click', () =>{
        ra.classList.add('active');
         rat.forEach((r, j) => {
           if(i!=j)
           r.classList.remove('active');
         })
    })
    
})

