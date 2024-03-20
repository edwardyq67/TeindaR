// GET
const contenidoMain = document.querySelector(".contenidoMain");
axios
  .get("https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion")
  .then((res) => {
    for (let i = res.data.length - 1; i >= 0; i--) {
      const carta = document.createElement("div");
      carta.classList.add(
        
        "bg-white",
        "border",
        "border-gray-200",
        "rounded-lg",
        "shadow",
        "dark:bg-gray-800",
        "dark:border-gray-700"
      );
      carta.innerHTML = `
      <div class="flex flex-row-reverse ">
       <i onclick="basura(${res.data[i].id})" class="text-1xl p-2  cursor-pointer dark:text-white text-dark fa-solid fa-trash-can hover:text-red-500 transition duration-200" style="cursor:pointer"></i>

      </div>

     
        <a href="#">
          <img class="h-[20vh] mx-auto " src="${res.data[i].url}" alt="">
           </a>
          
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${res.data[i].title}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${res.data[i].contend}</p>
          <div onclick="updateId(${res.data[i].id})">
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">
          editar
          <i class="w-auto dark:text-white text-dark ml-2 fa-solid fa-pen-to-square"></i>
          </a>
          </div>
          
        </div>`;
      contenidoMain.appendChild(carta);
    }
  })
  .catch((error) => {
    console.error("Error al realizar la solicitud:", error);
  });
// POST

// const dropzonefile = document.getElementById("dropzonefile");
// const label = document.querySelector(".label");

// dropzonefile.addEventListener("change", () => {
//   const reader = new FileReader();
//   reader.readAsDataURL(dropzonefile.files[0]);
//   reader.addEventListener("load", (e) => {
//     const mostrar = `<div class="imagen">
//             <img id="imagen" class="h-[20vh] mx-auto pt-5" src=${e.currentTarget.result} alt="">
//         </div>`;
//     label.innerHTML = mostrar;
//   });
// });

// const botonEnviar = document.getElementById("botonEnviar");
// const formData = new FormData();
// const textarea = document.getElementById("textarea");
// const titulo = document.getElementById("titulo");

// botonEnviar.addEventListener("click", async () => {
//   formData.append("image", dropzonefile.files[0]);
//     try {
//       const respuesta = await axios.post(
//               "https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionImg",
//               formData
//             );
//          await axios.post("https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion", {
//         title: titulo.value,
//         contend: textarea.value,
//         url: respuesta.data.url,
//       });
//       location.reload();
//     } catch (error) {
//         console.log(error);
//     }
// });

const startTime = performance.now();

// Tu código JavaScript aquí
const urlImg=document.getElementById("urlImagen")
const butonURL=document.getElementById("butonURL")

butonURL.addEventListener("click",()=>{
  console.log(urlImg.value)
  const mostrar = `<div class="imagen mb:pt-1 sm:pt-2 pt-3 ">
            <img id="imagen" class="h-[18vh] mx-auto" src=${urlImg.value} alt="">
        </div>`;
  document.querySelector(".contenedor").innerHTML=mostrar
})
const botonEnviar = document.getElementById("botonEnviar");

const textarea = document.getElementById("textarea");
const titulo = document.getElementById("titulo");

botonEnviar.addEventListener("click",async()=>{
  try {
    await axios.post("https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion",{
      title: titulo.value,
        contend: textarea.value,
        url: urlImg.value,
    })
    location.reload();
  } catch (error) {
    
  }
})

// Medir el tiempo justo después de la ejecución del código
const endTime = performance.now();

// Calcular la diferencia para obtener el tiempo total de carga
const totalTime = endTime - startTime;
console.log(`El tiempo total de carga es de ${totalTime} milisegundos.`);
// DELETE 
const basura=async(id)=>{
  try {
    await axios.delete(`https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion/${id}`)
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
// UPDATE
const update = document.querySelector(".update");
const body=document.querySelector(".body")

const updateId = async (id) => {
  try {
    update.classList.add("show");
    body.classList.add("overflow-hidden")
    const res = await axios.get(`https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion/${id}`);

    update.innerHTML = `
      <form>
        <div class="relative flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-[100%] dark:border-gray-700 dark:bg-gray-800 py-3">
          <i onclick="cerrar()" class="hover:text-gray-400 transition duration-200 absolute top-0 right-0 text-gray-50 fa-solid fa-xmark p-2" style="cursor:pointer;font-size: 1.5em;"></i>
          <div for="dropzonefile" class="relative  h-[15em] sm:w-[20em] w-[15em] px-2 sm:col-span-4 col-span-6 row-span-3 label bg-transparent mb-3">
          <div class="contenedorUP row-span-2 h-[19vh] w-[100%] ">
              <div class="imagen pt-2 ">
            <img id="imagen" class="h-[11em] mx-auto" src=${res.data.url} alt="">
        </div>
          </div>
          <div class="input grid grid-cols-6 absolute inset-x-1 bottom-1   ">
              <label id="butonURLUP"  for="" class="cursor-pointer rounded-l-lg col-span-1 self-center text-center text-white bg-gray-700 h-[100%] pt-2"> URL </label>
              <input  id="urlImagenUP" autocomplete="off" type="text" class="rounded-r-lg col-span-5 bg-gray-500 border-2 border-gray-700 outline-0 p-2 dark:text-white" placeholder="https://.example.com">
          </div>
      </div>
          <div class="flex flex-col justify-between px-4 leading-normal w-full">
            <div class="relative h-11 w-full min-w-[200px]">
              <input placeholder="Standard"
                     id="tituloID"
                     value="${res.data.title}"
                     class="border-b dark:border-gray-700 bg-transparent font-sans text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 text-black dark:text-white" />
            </div>
            <textarea class="text-[12px] mb-3 text-black dark:text-white outline-0 bg-transparent border-2 dark:border-gray-700 p-2 rounded min-h-24 min-w-64 border-black"
                      style="resize: both"
                      name=""
                      id="textareaID"
                      autocomplete="off">${res.data.contend}</textarea>
                      <div>
            <button id="botonEnviar" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">GUARDAR</button>
            <button id="botonEnviar"onclick="cerrar()" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-900 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700">CANCELAR</button>
          </div></div>
        </div>
      </form>`;
  
      const tituloID = document.getElementById('tituloID');
      const textareaID = document.getElementById('textareaID');
      const urlImagenUP=document.getElementById('urlImagenUP')
      const formData = new FormData();
      const botonEnviar = update.querySelector("#botonEnviar");
      const butonURLUP=document.getElementById("butonURLUP")

      butonURLUP.addEventListener("click",()=>{

        const mostrar = `<div class="imagen mb:pt-1 sm:pt-2 pt-3 ">
            <img id="imagen" class="h-[18vh] mx-auto" src=${urlImagenUP.value} alt="">
        </div>`;
  document.querySelector(".contenedorUP").innerHTML=mostrar
      })
      botonEnviar.addEventListener("click", async () => {
        // let selectedImage = null;
      
        // if (imagenInput.files.length > 0) {
        //   selectedImage = imagenInput.files[0];
        // } else {
        //   // Si no se selecciona un archivo nuevo, usar la URL de la imagen de imagenPreview
        //   const imageUrl = imagenPreview.src;
        //   const response = await fetch(imageUrl);
        //   const blob = await response.blob();
        //   selectedImage = new File([blob], 'imagenPreview.jpg', { type: 'image/jpeg' });
        // }
      
        // formData.append("image", selectedImage);
      
        try {
          // const respuesta = await axios.post(
          //   "https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionImg",
          //   formData
          // );
      
          await axios.put(`https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacion/${id}`, {
            title: tituloID.value,
            contend: textareaID.value,
            url: urlImagenUP.value || res.data.url,
          });
      
          location.reload();
        } catch (error) {
          console.error(error);
        }
      });
    
    // Manejar la selección de la imagen
    // const imagenInput = update.querySelector("#imagenInput");
    // imagenInput.addEventListener("change", handleImageSelection);
  } catch (error) {
    console.error(error);
  }
};
  const cerrar=()=>{
      update.classList.remove("show");
    body.classList.remove("overflow-hidden")
    }


// const handleImageSelection = (event) => {
//   const imagenPreview = update.querySelector("#imagenPreview");
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function () {
//     imagenPreview.src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// };
