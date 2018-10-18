profile = () => {
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
  container.innerHTML = `
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
        <img class="fotoProfile img-fluid" src="./img/photoProfile.png" alt="Foto">
    </div>
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
        <p class="titleName">Hola,</p>
        <p class="normalLetter">un poco acerca de mi:</p>
        <span class="text-center"><button type="button" class="btn btnResume m-1" onclick="smallCV()">Currículum</button><button type="button" class="btn btnProjects m-1" onclick="smallPro()">Proyectos</button><button
                type="button" class="btn btnContact m-1" onclick="smallCon()">Contáctame</button></span>
        <p class="normalLetter">Me llamo María José Vargas Donoso, tengo 32 años y vivo en Chile.</p>
        <p class="normalLetter">Soy una mujer apasionada por el mundo tecnológico desde pequeña. Estudié
            Medicina Veterinaria pero
            me dí cuenta que no era mi rumbo, así que decidí dar el paso y buscar mi destino en el mundo de la
            programación. Lejos, una excelente decisión.</p>
        <p class="normalLetter">Busco lugares que aporten a mi desarrollo personal y profesional. Me encanta lo
            que hago y soy muy autodidacta. Me encanta aprender y desafiarme constantemente.</p>
    </div>
</div>   
    `;
};

resume = () => {
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
  container.innerHTML = `
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
    <p class="titleName">Currículum</p>
    <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <button type="button" class="btn btnResume p-3 mb-2 ancho">Experiencia laboral</button>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
        <p class="titleName m-0">Médico Veterinaria</p>
        <p class="normalLetter mb-0">Independiente 2014-2018 <br> Trabajo independiente en diversas clínicas.</p>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <button type="button" class="btn btnResume p-3 mb-2 ancho">Educación</button>
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">    
        <p class="titleName m-0">Laboratoria</p>
        <p class="normalLetter">Front-End Developer<br>Generación 2018</p>
        <p class="titleName m-0">Universidad de Chile</p>
        <p class="normalLetter mb-0">Médico Veterinaria<br>Generación 2007-2014</p>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6">
        <p class="mb-0 text-center"><i class="fas fa-laptop-code icon"></i></p>
        <p class="titleName text-center">Habilidades</p>
        <p class="normalLetter text-center mb-0">Inglés Avanzado</p>
        <p class="normalLetter text-center mb-0">JavaScript</p>
        <p class="normalLetter text-center mb-0">HTML</p>
        <p class="normalLetter text-center mb-0">CSS</p>
        <p class="normalLetter text-center mb-0">Angular</p>
        <p class="normalLetter text-center mb-0">Node.js</p>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6">
        <p class="mb-0 text-center"><i class="far fa-grin-hearts icon"></i></p>
        <p class="titleName text-center">Intereses</p>
        <p class="normalLetter text-center mb-0">Aprender idiomas</p>
        <p class="normalLetter text-center mb-0">Hobbies:</p>
        <p class="normalLetter text-center mb-0">+ Juegos de ROL</p>
        <p class="normalLetter text-center mb-0">+ Juegos online/consola</p>
    </div>
</div>
    
    `;
};

projects = () => {
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
  container.innerHTML = `
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
    <p class="titleName">Proyectos</p>
    <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <img class="img-fluid imgProfile" src="./img/ChaoBullying.png" alt="Foto">
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
        <button type="button" class="btn btnProjects p-3 mb-2 ancho margin" onclick="location.href='https://redsocialangular-93d26.firebaseapp.com/login'">Chao Bullying</button>
        <p class="titleName m-0">¡Chao Bullying!</p>
        <p class="normalLetter mb-0">Descripción corta del proyecto</p>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <img class="img-fluid imgProfile" src="./img/FoodMap.png" alt="Foto">
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
        <button type="button" class="btn btnProjects p-3 mb-2 ancho margin" onclick="location.href='https://cotevd.github.io/TrabajoFoodMap/'">FoodMap</button>
        <p class="titleName m-0">FoodMap</p>
        <p class="normalLetter mb-0">Descripción corta del proyecto</p>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
        <hr>
    </div>
</div>
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12">
        <img class="img-fluid imgProfile" src="./img/TransLab.png" alt="Foto">
    </div>
    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
        <button type="button" class="btn btnProjects p-3 mb-2 ancho margin" onclick="location.href='https://cotevd.github.io/TrabajoTransLab2.0/'">TransLab</button>
        <p class="titleName m-0">TransLab</p>
        <p class="normalLetter mb-0">Descripción corta del proyecto</p>
    </div>
</div>
    `;
};

contact = () => {
  $(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
  });
  container.innerHTML = `
<div class="row justify-content-center animated fadeIn">
    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
    <p class="titleName">Contáctame a través de </p>
    <hr>
    </div>
</div>
    `;
};
