import React from "react";
import "./AboutUs.css";
import AboutCarts from "../../Components/AboutCarts/AboutCarts";
import imageHome from "../../Assets/imagenes/adoptionsThree.png";
import MainImage from "../../Components/MainImage/MainImage";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div>
        <MainImage ruta={imageHome} textoPrincipal={"Nosotros"} subtitulo={"Receta secreta de la felicidad: una pizca de ternura, ronroneos, cuatro patitas suaves y un tierno maullo."}
        />
      </div>
      <h1>¿Quienes somos?</h1>
      <h3>
        Nos dedicamos a<samp> resdcatar y resguardar </samp>gatitos abandonados.
        Nuestra meta es encontrarles hogares seguros y darles una nueva vida.
      </h3>

      <div>
        <h1>Mision</h1>
        <h3>
          Lorem ipsm dolor sit amet, consectert adipisciang elit, sed do eiusmod
          tempor incididunt
        </h3>
      </div>
      <div>
        <h1>Vision</h1>
        <h3>
          Lorem ipsm dolor sit amet, consectert adipisciang elit, sed do eiusmod
          tempor incididunt
        </h3>
      </div>

      <div>
      <h1>Sandra N</h1>
      <h2>Fundadora</h2>
      <img src="" alt="" />
      <h3>
        it is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layaut, The ponit of
        using Lorem ipsumn is that is has a more-or-les norm distribution of
        letters.
      </h3>
      </div>
          <div>
            <h1>Maullido al rescate</h1>
            <h3>Rescatar a un gatito requiere ternura, compromiso y unos simples pasos para transformar vida.</h3>
            <AboutCarts image={imageHome} title={"1. Observar y analizar"}  conten={"¿Está en la calle, atrapado en un lugar peligroso, o simplemente perdido?"}  order = {1}/>
            <AboutCarts image={imageHome} title={"2.- Gánate su confianza"}  conten={"No ir directo a atraprlo porque se espantará. Hable de maneta calmada y tranquila."}  order = {1}/>
            <AboutCarts image={imageHome} title={"3.- Use una transportyadora"}  conten={"Una vez capturado el gato, colóque en una caja de trasporte para gatos."}  order = {1}/>
            <AboutCarts image={imageHome} title={"4.- Revise el estado de salud del gato"}  conten={"Lleva al gato a un veterinario para una revisión completa."}  order = {1}/>
            <AboutCarts image={imageHome} title={"5.- Refugio o adopción"}  conten={"Lo llevaremos al refigio de confianza donde lo recibimos con amor."}  order = {1}/>

          </div>
          <h1><span>¡Mision Cumplida!</span> Ya sea en un refugio con una familia, tiene una segunda oportunidad.</h1>
    </div>
  );
};

export default AboutUs;
