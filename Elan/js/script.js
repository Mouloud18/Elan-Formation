window.addEventListener("DOMContentLoaded", () =>{



    const notreequipe = document.querySelector(".notreequipe")
    const groupe = document.querySelectorAll(".groupe")
    const figure = document.querySelectorAll("figure")
    const figEquipes = document.querySelectorAll(".figEquipe")
    const titrecaption = document.querySelectorAll(".titrecaption")
 

    
    figEquipes.forEach(groupe => {
       
        groupe.addEventListener("click", function() {
            groupe.classList.toggle("active")
            console.log("kkkk")
    
            // if(!carre.classList.contains("active")){
            //     body.style.backgroundColor = "rgb(192, 192, 192)"
            // } else {
            //     body.style.backgroundColor = "white"
            // }
        })
    })
    //})
    
    })
    
    
    