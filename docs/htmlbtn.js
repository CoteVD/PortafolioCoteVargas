smallCV = () => {
  container.innerHTML = `
  <div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
      <p class="titleName">Currículum</p>
      <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-3 col-12">
      <button type="button" class="btn btnProfile p-3 mb-2 ancho">Experiencia laboral</button>
  </div>
  <div class="col-xl-5 col-lg-6 col-md-6 col-sm-5 col-12">
      <p class="titleName m-0">Médico Veterinaria</p>
      <p class="normalLetter mb-0">Independiente 2014-2018 <br> Trabajo independiente en diversas clínicas.</p>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
      <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-3 col-12">
      <button type="button" class="btn btnProfile p-3 mb-2 ancho">Educación</button>
  </div>
  <div class="col-xl-5 col-lg-6 col-md-6 col-sm-5 col-12">    
      <p class="titleName m-0">Laboratoria</p>
      <p class="normalLetter">Front-End Developer<br>Generación 2018</p>
      <p class="titleName m-0">Universidad de Chile</p>
      <p class="normalLetter mb-0">Médico Veterinaria<br>Generación 2007-2014</p>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
      <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-6">
      <p class="mb-0 text-center"><i class="fas fa-laptop-code icon"></i></p>
      <p class="titleName text-center">Habilidades</p>
      <p class="normalLetter text-center mb-0">Inglés Avanzado</p>
      <p class="normalLetter text-center mb-0">JavaScript</p>
      <p class="normalLetter text-center mb-0">HTML</p>
      <p class="normalLetter text-center mb-0">CSS</p>
      <p class="normalLetter text-center mb-0">Angular</p>
      <p class="normalLetter text-center mb-0">Node.js</p>
  </div>
  <div class="col-xl-2 col-lg-2 col-md-3 col-sm-2 col-6">
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

smallPro = () => {
  container.innerHTML = `
  <div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
  <p class="titleName">Proyectos</p>
  <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-3 col-12">
      <img class="img-fluid imgProfile" src="./img/ChaoBullying.png" alt="Foto">
  </div>
  <div class="col-xl-5 col-lg-6 col-md-6 col-sm-5 col-12">
      <p class="titleName m-0 margin">¡Chao Bullying!</p>
      <p class="normalLetter">Trabajo en el que se creó una red social. Para hacer la página se utilizó Angular 6 y para la base de datos, Firebase. Se pueden postear, editar y borrar los mensajes.</p>
      <div class="row justify-content-center animated fadeIn">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnProjects p-3 mb-2 ancho" onclick="location.href='https://redsocialangular-93d26.firebaseapp.com/login'">Demo</button>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnContact p-3 mb-2 ancho" onclick="location.href='https://github.com/CoteVD/TrabajoRedSocialAngular'">GitHub</button>
          </div>
      </div>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
      <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-3 col-12">
      <img class="img-fluid imgProfile" src="./img/cifrado.png" alt="Foto">
  </div>
  <div class="col-xl-5 col-lg-6 col-md-6 col-sm-5 col-12">        
      <p class="titleName m-0 margin">Cifrado Cesar</p>
      <p class="normalLetter">Aplicación en la que se pueden codificar y decodificar textos utilizando el cifrado Cesar. Para hacer la aplicación utilicé JavaScript y para el diseño Bootstrap 4.</p>
      <div class="row justify-content-center animated fadeIn">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnProjects p-3 mb-2 ancho" onclick="location.href='https://cotevd.github.io/TrabajoCifradoCesar/'">Demo</button>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnContact p-3 mb-2 ancho" onclick="location.href='https://github.com/CoteVD/TrabajoCifradoCesar'">GitHub</button>
          </div>
      </div>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-8 col-lg-10 col-md-10 col-sm-8 col-12">
      <hr>
  </div>
</div>
<div class="row justify-content-center animated fadeIn">
  <div class="col-xl-3 col-lg-4 col-md-4 col-sm-3 col-12">
      <img class="img-fluid imgProfile" src="./img/TransLab.png" alt="Foto">
  </div>
  <div class="col-xl-5 col-lg-6 col-md-6 col-sm-5 col-12">        
      <p class="titleName m-0 margin">TransLab</p>
      <p class="normalLetter">Aplicación que permite revisar el saldo que tiene la tarjeta BIP ingresada. Permite también calcular el saldo, con respecto a los distintos precios de los pasajes. Está hecha con JavaScript.</p>
      <div class="row justify-content-center animated fadeIn">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnProjects p-3 mb-2 ancho linea" onclick="location.href='https://cotevd.github.io/TrabajoTransLab2.0/'">Demo</button>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <button type="button" class="btn btnContact p-3 mb-2 ancho linea" onclick="location.href='https://github.com/CoteVD/TrabajoTransLab2.0'">Github</button>
          </div>
      </div>
  </div>
</div>
    `;
};
