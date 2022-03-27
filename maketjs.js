 let burger = document.querySelector('.menu_icon');
 let menuBody = document.querySelector('.menu_body');

    burger.addEventListener('click', () => {
        toggle('_active', menuBody);
    })

    function toggle(cl, el){

       el.classList.toggle(cl )

         

         

       
          


    }