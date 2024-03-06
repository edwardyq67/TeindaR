const contenidomain=document.querySelector(".contenidomain")

try {
    axios.get("http://localhost:5230/informacion")
    .then(res=>{
        for (let i = res.data.length - 1; i >= 0; i--) {
            cart=` <div class="relative group overflow-hidden">
            <img class="h-auto max-w-full rounded-lg mx-auto" src="${res.data[i].url}" alt="">
            <div class="ver absolute w-[100%] h-[100%] top-0 bg-gradient-to-b from-transparent to-black transition-transform duration-20 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <div class="contenido absolute inset-x-0 bg-transparent bottom-0 p-3 h-[auto]">
                <h3 class="text-xl dark:text-white text-dark font-medium">${res.data[i].title}</h3>
                <p class="overflow-y-auto h-[80%] leading-[1.3rem] dark:text-white text-dark text-[.8em]">${res.data[i].contend}</p>
              </div>
            </div>
          </div>`
          contenidomain.innerHTML+=cart
        }
    })
} catch (error) {
    
}