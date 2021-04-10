document.addEventListener("DOMContentLoaded", ready);document.addEventListener("DOMContentLoaded", ready);

function ready(){
   img =  document.querySelectorAll('img');

   img.forEach(element => {
       element.addEventListener('click', ()=>{
           if(element.id==0)
           {
               img[2].classList.add('hide');
           }
           else if(element.id==1)
           {
            img[0].classList.add('hide');
           }
           else{
            img[0].classList.add('hide');
            img[1].classList.add('hide');
           }
       })
   });
}