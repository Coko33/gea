import "./Home.css"
import { useState, useEffect, useRef } from "react"
import Boton from "../Layout/Boton"
import Flecha from "../svg/Flecha.js"

export default function Home({scrollToSection}){
    const [seccionSelected, setSeccionSelected] = useState("")
    const [seccionPressed, setSeccionPressed] = useState("")
    const handleClick = (seccion) => {
        setSeccionSelected(seccion);
        setSeccionPressed(seccion)
        setTimeout(()=>{setSeccionPressed("");}, 200)
    } 


    const [showFlecha, setShowFlecha] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const halfScreen = screenHeight / 2;
  
        // Actualiza el estado para mostrar u ocultar el elemento fijo
        setShowFlecha(scrollPosition > halfScreen);
      };
  
      // Suscríbete al evento de desplazamiento
      window.addEventListener('scroll', handleScroll);
  
      // Limpia el evento al desmontar el componente para evitar pérdidas de rendimiento
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // El segundo parámetro de useEffect es un array de dependencias, en este caso, vacío para que solo se ejecute una vez al montar el componente
  
    return(
        <>
            <div id="seccion1" className="Presentacion__header__container">
                <div className="Presentacion__header__caja">
                    <div className="Presentacion__headerText__container">
                        <h2 className="Presentacion__headerText textTitulo"><span>GEA</span><br></br>GESTIÓN SOSTENIBLE<br></br>PARA LAS INDUSTRIAS<br></br>CULTURALES</h2>
                    </div>
                </div>
            </div>
            <div className="Presentacion__cuerpo__container">
                <div className="Presentacion__cuerpo__caja">
                    <div className="Presentacion__textos__container">
                        <p className="textNormal">Nuestros modos de relación con el planeta están en crisis. Cambiar nuestros hábitos transforma nuestra relación con la naturaleza, con nuestros productos y también con los demás. Cada vez son más las organizaciones que adoptan criterios de sostenibilidad, y nosotros queremos formar parte de ese cambio. </p>
                        <br></br>
                        <p className="textNormal">Nuestras producciones culturales también generan impacto en el ambiente, emitiendo gases y contaminación. Es deseable entonces, como en otras actividades económicas, que las producciones incorporen acciones y procedimientos que hagan más sostenible su desempeño.</p>
                        <br></br>
                        <p className="textNormal">Por otro lado, aparece con mayor nitidez una demanda de los consumidores una expectativa al compromiso de las marcas con el ambiente. Las empresas que desarrollan programas de sostenibilidad en su actividad mejoran su imagen. son cada vez mejor valoradas, y aportan nuevos atributos a la marca.</p>
                        <br></br>
                        <p className="textNormal">La sostenibilidad implica no solo la disminución de los impactos ambientales como resultado de su accionar, sino que también imponen la incorporación de acciones que tiendan a mejorar las cuestiones sociales, económicas y de gobernanza de la comunidad donde se realizan tales acciones.</p>
                        <br></br>
                        <p className="textNormal">Y a la vez tienen una gran capacidad para comunicar la toma de conciencia, expresar nuevos vínculos con la naturaleza y empujar cambios de hábito. Por eso, ofrecemos una serie de servicios asociados a las producciones culturales, que aporten mayor valor a las marcas, y menos emisiones al ambiente.</p>
                        <br className="brAlto"></br>
                        <p className="textDestacado textoVerde">Iniciar el camino de la sostenibilidad trae algunos beneficios.</p>
                        <br></br>
                        <p className="textDestacado textoVerde">_ Disminuir los impactos ambientales e identificar potenciales de
ahorroa partir del uso eficiente de los recursos</p>
                        <p className="textDestacado textoVerde">_ Fortalecer las relaciones con grupos de interés y la comunidad
en general</p>
                        <p className="textDestacado textoVerde">_ Atraer a potenciales nuevos clientes y socios
Sortear requisitos normativos crecientes.</p>
                        <p className="textDestacado textoVerde">_ Identificar Fortalezas, debilidades, riesgos y oportunidades
del negocio.</p>
                        <p className="textDestacado textoVerde">_ Motivar a los empleados y a la participación transversal de
todas las áreas y niveles de la organización.</p>
                        <p className="textDestacado textoVerde">_ Posicionar a la compañía en reputación, transparencia y
rendición de cuentas.</p>
                        <p className="textDestacado textoVerde">_ Fortalecer los sistemas de gestión y la mejora continua.</p>
                        <p className="textDestacado textoVerde">_ Comunicar lo que se viene trabajando y sus mejoras en temas
económicos, ambientales, sociales y de gobernanza.</p>
                        <p className="textDestacado textoVerde">_ Brindar mayor transparencia de información para la toma de
decisiones.</p>
                        <p className="textDestacado textoVerde">_ Acceder a nuevo financiamiento.</p>
                        <br></br>
                    </div>
                </div>
            </div>
            <div id="seccion2" className="QueProponemos__header__container">
                <div className="QueProponemos__headerText__container">
                    <h2 className="Presentacion__headerText textTitulo">QUÉ PROPONEMOS</h2>
                    <p className="textDestacado">Proponemos abordar las producciones culturales desde una<br></br>
perspectiva integral que incorpore en su diseño, producción y<br></br>
gestión el cuidado y la protección del ambiente para la<br></br>
generación de más y mejor empleo verde.</p>
                </div>
                <div className="QueProponemos__botones__container">
                    <Boton pressed={seccionPressed === "seccion1"} selected={seccionSelected === "seccion1"} onClick={() => handleClick("seccion1")} textHtml={"<p>Medicion de impacto</p><p>Diagnostico de</p><p>sostenibilidad.</p><p>Reportes</p>"}></Boton>
                    <Boton pressed={seccionPressed === "seccion2"} selected={seccionSelected === "seccion2"} onClick={() => handleClick("seccion2")} textHtml={"<p>Gestión sostenible</p><p>de producciones</p>"}></Boton>
                    <Boton pressed={seccionPressed === "seccion3"} selected={seccionSelected === "seccion3"} onClick={() => handleClick("seccion3")} textHtml={"<p>Acción de</p><p>compensación</p>"}></Boton>
                    <Boton pressed={seccionPressed === "seccion4"} selected={seccionSelected === "seccion4"} onClick={() => handleClick("seccion4")} textHtml={"<p>Activaciones</p><p>ambientales</p>"}></Boton>
                    <Boton pressed={seccionPressed === "seccion5"} selected={seccionSelected === "seccion5"} onClick={() => handleClick("seccion5")} textHtml={"<p>Capacitaciones</p><p>y formación</p>"}></Boton>
                </div>
            </div>
            <div className="Seccion1">
                <div className="Seccion1__header__container">
                    <div className="Seccion1__header__caja">
                        <div className="Seccion1__headerText__container">
                            <h2 className="Seccion1__headerText textTitulo">MEDICIÓN DE IMPACTO.<br></br>DIAGNOSTICO DE<br></br>SOSTENIBILIDAD. REPORTES.</h2>
                        </div>
                    </div>
                </div>
                <div className="Seccion1__cuerpo__container">
                    <div className="Seccion1__cuerpo__caja">
                        <div className="Seccion1__textos__container">
                            <p className="textNormal">Los festivales, fiestas, ferias o activaciones son valiosos para generar encuentros y
celebraciones, pero generan un impacto ambiental considerable.</p>
                            <br></br>
                            <p className="textNormal">Para poder generar diagnósticos, medimos la huella de carbono de un festival, un venue o un
film; Esta medición nos dará información valiosa que nos permitirá identificar áreas críticas y
diseñar procesos de gestión eficientes de nuestros eventos, espectáculos o producciones.</p>
                            <br></br>
                            <p className="textNormal">El reporte de sostenibilidad es una herramienta de gestión y comunicación organizacional que
transparenta el desempeño de la empresa en áreas económicas, ambientales y sociales,
permitiendo dar a conocer los impactos producidos así como las medidas de mejora,
compensación y restauración realizadas a los grupos de interés.</p>
                            <br></br>
                            <p className="textNormal">Los reportes son requeridos generalmente por:</p>
                            <br></br>
                            <p className="textNormal">_ convicción de mejorar el impacto social y ambiental de las actividades</p>
                            <p className="textNormal">_ presión de clientes, el mercado o la competencia</p>
                            <p className="textNormal">_ regulaciones del negocio</p>
                            <p className="textNormal">_ Por identificar y mitigar riesgos o aprovechar oportunidades</p>
                            <p className="textNormal">_ satisfacer las expectativas de los grupos de interés</p>
                            <p className="textNormal">_ Reputación</p>
                            <br></br>
                            <p className="textNormal">Sin embargo existen motivos mucho más importantes en relación a la consecución de los
objetivos de la empresa para reportar como:</p>
                            <br></br>
                            <h3 className="textDestacado2 celeste">1. Aclarar la estrategia de la empresa</h3>
                            <p className="textNormal">Al elaborar un reporte de sostenibilidad haces el ejercicio de medir el impacto de tus
operaciones, darlas a conocer y visualizar qué mantener o reorientar de la estrategia actual de
la empresa para avanzar a un desarrollo más sostenible.</p>
                            <br></br>
                            <h3 className="textDestacado2 celeste">2. Mejorar la comunicación con grupos de interés</h3>
                            <p className="textNormal">Desde hace algunos años las empresas han encontrado en los reportes de sostenibilidad un
aliado para difundir toda su gestión a los respectivos grupos de interés, generando confianza,
interacción más personalizada, oportunidades de crecimiento y desarrollo.
De hecho, a través de esta herramienta han logrado vincularse de manera transparente con
colaboradores, vecinos, proveedores, instituciones públicas, ONGs y con los clientes.</p>
                            <br></br>
                            <h3 className="textDestacado2 celeste">3. Lograr rentabilidad a largo plazo</h3>
                            <p className="textNormal">Las empresas que reportan sus prácticas ambientales, sociales y de gobernanza tienen
operaciones más sustentables y, generan mayor rentabilidad y mejoras en su valor de mercado
a lo largo del tiempo.
Además, tienen a su favor que las dimensiones ambientales, sociales y de gobernanza se han
transformado en factores muy valorados por inversionistas y repercuten directamente en la
futura salud financiera de la organización.</p>
                            <br></br>
                            <h3 className="textDestacado2 celeste">4. Gestionas riesgos de manera más eficiente</h3>
                            <p className="textNormal">Si reportas tus iniciativas de sostenibilidad haces el trabajo interno de identificar y ordenar
todos los procesos de tu negocio, lo que te permite prevenir y administrar de la mejor manera
posible los factores de riesgo que se relacionan con la sostenibilidad.
Por otra parte, reportando se identifican nuevas oportunidades de negocio, se consolidan
ventajas competitivas y se adquiere una poderosa herramienta de gestión.</p>
<br></br>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`Flecha__contenedor ${showFlecha ? 'visible' : ''}`} onClick={() => scrollToSection('seccion0')}>
                <Flecha></Flecha>
            </div>
        </>
    )
}