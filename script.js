const click=document.querySelector(".categories");
      const drop_down=document.querySelector(".drop-down");
      
      click.addEventListener("mouseover",()=>{
       
        drop_down.classList.add("visible");
      });
      click.addEventListener("mouseleave",()=>{
       
        drop_down.classList.remove("visible");
      });

      drop_down.addEventListener("mouseover",()=>{
        drop_down.classList.add("visible");
      })
      
      const menu_button=document.querySelector(".menu-button");
      
      var menu_flag=0;
      
      

         menu_button.addEventListener("click",()=>{
        if(menu_flag===0){
          menu.style.height="50%";
          menu_button.classList.add("rotate-180");
        menu_flag=1;
        }else{
          menu.style.height="0%";
          menu_button.classList.remove("rotate-180");
        menu_flag=0;
        }
        }
        );