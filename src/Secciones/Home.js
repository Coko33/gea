import "./Home.css"
import { useState, useEffect, useRef } from "react"
import Boton from "../Layout/Boton"
import FlechaVerde from "../svg/FlechaVerde.js"
import FlechaCeleste from "../svg/FlechaCeleste.js"

export default function Home({scrollToSection}){
    const [seccionSelected, setSeccionSelected] = useState("seccion1")
    const [seccionPressed, setSeccionPressed] = useState("")

    const handleClick = (section) => {
        
        setSeccionSelected(section);
        setSeccionPressed(section)
        setTimeout(()=>{
            setSeccionPressed("");
            scrollToSection('subsecciones')
        }, 200)
    } 

    const [showFlecha1, setShowFlecha1] = useState(false);
    const [showFlecha2, setShowFlecha2] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const screenHeight = window.innerHeight;
        const halfScreen = screenHeight / 2;
        const spawnerPos1 = spawner1ref.current.getBoundingClientRect().top;
        const spawnerPos2 = spawner2ref.current.getBoundingClientRect().top;

        /* setShowFlecha1(scrollPosition > halfScreen); */
        setShowFlecha1(spawnerPos1 < 0 && spawnerPos2 >= 0);
        setShowFlecha2(spawnerPos2 < 0);
      };

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

    const spawner1ref = useRef(null);
    const spawner2ref = useRef(null);
    const subseccionesRef = useRef(null);
  
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
                    <div ref={spawner1ref} className="Presentacion__textos__container">
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
            <div ref={spawner2ref} id="seccion2" className="QueProponemos__header__container">
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
            <div id="subsecciones" className="Subsecciones__container">
                <div className={`Subseccion SubSeccion1 ${seccionSelected === "seccion1" ? "aparecer" : "desaparecer"}`}>
                    <div className="SubSeccion__header__container SubSeccion__header1">
                        <div className="SubSeccion__header__caja">
                            <div className="SubSeccion__headerText__container">
                                <h2 className="SubSeccion__headerText textTitulo">MEDICIÓN DE IMPACTO.<br></br>DIAGNOSTICO DE<br></br>SOSTENIBILIDAD. REPORTES.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="SubSeccion__cuerpo__container">
                        <div className="SubSeccion__cuerpo__caja">
                            <div className="SubSeccion__textos__container">
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
    <br></br>
    <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`Subseccion SubSeccion2 ${seccionSelected === "seccion2" ? "aparecer" : "desaparecer"}`}>
                    <div className="SubSeccion__header__container  SubSeccion__header2">
                        <div className="SubSeccion__header__caja">
                            <div className="SubSeccion__headerText__container">
                                <h2 className="SubSeccion__headerText textTitulo">GESTIÓN SOSTENIBLE<br></br>DE PRODUCCIONES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="SubSeccion__cuerpo__container">
                        <div className="SubSeccion__cuerpo__caja">
                            <div className="SubSeccion__textos__container">
                                <p className="textNormal">El segundo eje de acciones nos involucra en el proceso de trabajo de las producciones con las
que trabajamos.</p>
                                <br></br>
                                <p className="textNormal">Abordamos las siguientes áreas:</p>
                                <br></br>
                                <h3 className="textDestacado2 celeste">A.Gestión de Residuos.</h3>
                                <p className="textNormal">Buscamos reducir al máximo posible los deshechos, privilegiar la utilización de materiales
reciclables, desarrollar políticas efectivas de separación de residuos, minimizar el impacto
local y conectar los materiales utilizados con cooperativas de reciclado.</p>
                                <br></br>
                                <h3 className="textDestacado2 celeste">B.Eficiencia de recursos.</h3>
                                <p className="textNormal">Generamos alternativas para el uso eficiente de los recursos (energía, agua y materiales).
Diseñamos e implementamos el uso responsable de las materias primas y energías
renovables, en producciones y proyectos. Desarrollamos planes para eficientizar el uso del
transporte.</p>
                                <br></br>
                                <h3 className="textDestacado2 celeste">C.Adecuación y actualización normativa de las producciones.</h3>
                                <br></br>
                                <h3 className="textDestacado2 celeste">D.Desarrollo de narrativas ambientales y estrategias de marketing</h3>
                                <p className="textNormal">Buscan “enverdecer” el proceso de trabajo exhibiendo los procesos de cambio con diversas
estrategias de posicionamiento, activaciones, difusión e interacción.</p>
    <br></br>
                                <p className="textNormal">Trabajamos con las organizaciones buscando mitigar el impacto de sus producciones a través
del seguimiento de sus procesos de trabajo e identificando áreas críticas, y diversos aspectos
que pueden ser abordados en el corto, mediano o largo plazo.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`Subseccion SubSeccion3 ${seccionSelected === "seccion3" ? "aparecer" : "desaparecer"}`}>
                    <div className="SubSeccion__header__container  SubSeccion__header3">
                        <div className="SubSeccion__header__caja">
                            <div className="SubSeccion__headerText__container">
                                <h2 className="SubSeccion__headerText textTitulo">ACCIONES DE RESTAURACIÓN<br></br>Y COMPENSACIÓN</h2>
                            </div>
                        </div>
                    </div>
                    <div className="SubSeccion__cuerpo__container">
                        <div className="SubSeccion__cuerpo__caja">
                            <div className="SubSeccion__textos__container">
                                <p className="textNormal">Muchas veces no alcanza con ser eficiente en el uso de los recursos y es necesario restaurar los ecosistemas o compensar los impactos generados en ellos por las actividades humanas,  a través de acciones específicas con el fin de compensar el déficit.</p>
                                <br></br>
                                <p className="textNormal">Para ello desarrollamos acciones de restauración y compensación ambiental a partir de la implementación de proyectos con impacto en comunidades locales a través de la compra de Bonos o donaciones destinadas a la preservación de la Biodiversidad.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`Subseccion SubSeccion4 ${seccionSelected === "seccion4" ? "aparecer" : "desaparecer"}`}>
                    <div className="SubSeccion__header__container  SubSeccion__header4">
                        <div className="SubSeccion__header__caja">
                            <div className="SubSeccion__headerText__container">
                                <h2 className="SubSeccion__headerText textTitulo">ACTIVACIONES AMBIENTALES</h2>
                            </div>
                        </div>
                    </div>
                    <div className="SubSeccion__cuerpo__container">
                        <div className="SubSeccion__cuerpo__caja">
                            <div className="SubSeccion__textos__container">
                                <p className="textNormal">Desarrollamos diferentes formatos de comunicación, participación e interacción en eventos, festivales o producciones, en contacto con el público o el sector, a fin de sensibilizar sobre la temática.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`Subseccion SubSeccion5 ${seccionSelected === "seccion5" ? "aparecer" : "desaparecer"}`}>
                <div className="SubSeccion__header__container  SubSeccion__header5">
                        <div className="SubSeccion__header__caja">
                            <div className="SubSeccion__headerText__container">
                                <h2 className="SubSeccion__headerText textTitulo">CAPACITACIONES Y FORMACIÓN</h2>
                            </div>
                        </div>
                    </div>
                    <div className="SubSeccion__cuerpo__container">
                        <div className="SubSeccion__cuerpo__caja">
                            <div className="SubSeccion__textos__container">
                                <p className="textNormal">Capacitamos a los equipos de trabajo para el buen funcionamiento del management ambiental en cada producción o espectáculo, identificando con el equipo obstáculos, tareas y roles en el desarrollo de una gestión eficiente. Trabajamos en diferentes formatos y metodologías, según los objetivos de cada caso.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Triptico__container">
                <div className="Triptico__items__container">
                    <div className="Triptico__item__container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/presentacion.jpg?alt=media&token=caa46c50-7cef-4a75-8924-b9e333b24673" className="Triptico__img"></img>
                    </div>
                    <div className="Triptico__item__container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/triptico2.jpg?alt=media&token=a4ef8cef-93d9-4f40-8700-bdb99a1e6ce0" className="Triptico__img"></img>
                    </div>
                    <div className="Triptico__item__container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/triptico3.jpg?alt=media&token=aa3bb524-95c0-4515-9931-379a1861d546" className="Triptico__img"></img>
                    </div>
                </div>
            </div>
            <div id="seccion3" className="QuienesSomos__container">
                <div className="QuienesSomos__headerText__container">
                    <h2 className="QuienesSomos__headerText textTitulo">QUIENES<br></br>SOMOS</h2>
                    <p className="textDestacado QuienesDestacado">Somos un equipo interdisciplinario con<br></br>
                    experiencia en el campo de la cultura, la<br></br>
                    gestión ambiental, el empleo verde y la<br></br>
                    restauración ambiental.</p>
                </div>
                <div className="QuienesSomos__cv__container">
                    <div className="QuienesSomos__cv__item item2">
                        <div className="QuienesSomos__fotoCv__container">
                            <div className="QuienesSomos__fotoCv__imgContainer">
                                <img className="QuienesSomos__fotoCv foto1" src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/persona3.jpg?alt=media&token=46547fb2-e1f4-4b74-ac78-57de729a2cd7"></img>
                            </div>
                        </div>
                        <h3 className="QuienesSomos__nombreCv textDestacado">Lic.Nicolás Wainszelbaum</h3>
                        <p className="QuienesSomos__parrafoCv textNormal">Lic. en Sociología (UBA), gestor cultural y docente e investigador universitario en la UNTREF. Candidato a Magíster en Ambiente y desarrollo sustentable (UNQUI). Trabajó por más de 20 años en políticas para el desarrollo del sector cultural, en diversos cargos y posiciones. Desarrolló Festivales de Música y Cultura (Festival del Bosque, FINDE, BAFIM,Ciclo Nuevo!), programas de promoción de la industria cultural (BAFILM, Código Provincia), entre otras acciones.</p>
                        <p className="QuienesSomos__parrafoCv textNormal">Desde 2022, dirige el Programa de Investigación e Interacción entre Cultura y Ambiente (IIAC-UNTREF), desde el cual desarrolla diversos programas de investigación (MUTUA), formación o gestión, que buscan fortalecer la conversación entre el ambiente y la gestión cultural. Desde 2023 co-dirige la diplomatura en perspectiva ambiental en las industrias culturales.</p>
                    </div>
                    <div className="QuienesSomos__cv__item item2">
                        <div className="QuienesSomos__fotoCv__container">
                            <div className="QuienesSomos__fotoCv__imgContainer">
                                <img className="QuienesSomos__fotoCv foto2" src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/persona1.jpg?alt=media&token=40926506-957a-4688-8df7-18bc25194319"></img>
                            </div>
                        </div>
                        <h3 className="QuienesSomos__nombreCv textDestacado">Mg.Juan Martin Sánchez</h3>
                        <p className="QuienesSomos__parrafoCv textNormal">Magíster en Política y Gestión de Ciencia y Tecnología de
la Universidad de Buenos Aires (UBA) Licenciado en
Relaciones Internacionales (USAL). Especialización en
Gestión de la Energía (ITBA). Punto focal en Trabajo y
Desarrollo Sustentable para América Latina y el Caribe.
Es asesor de la Secretaría de Política Ambiental en
Recursos Naturales, en el Ministerio de Ambiente y
Desarrollo Sostenible de la Nación.</p>
                        <p className="QuienesSomos__parrafoCv textNormal">En UNTREF es coordinador general del Proyecto IKI de
Promoción de estructuras sostenibles a las cámaras y
sindicatos de los sectores de procesamiento de metales
y construcción para fomentar la eficiencia del uso de los
recursos en las empresas.</p>
                        <p className="QuienesSomos__parrafoCv textNormal">Coordina la “Diplomatura en Transición Justa y Empleo
Verde”, y la “Diplomatura en Ciudades Sostenibles, Resilientes
e Inclusivas”.</p>
                        <p className="QuienesSomos__parrafoCv textNormal">Desde 2023 co-dirige la diplomatura en perspectiva ambiental
en las industrias culturales.</p>
                    </div>
                    <div className="QuienesSomos__cv__item item2">
                        <div className="QuienesSomos__fotoCv__container">
                            <div className="QuienesSomos__fotoCv__imgContainer">
                                <img className="QuienesSomos__fotoCv foto3" src="https://firebasestorage.googleapis.com/v0/b/geagestionsostenible-test.appspot.com/o/persona2.jpg?alt=media&token=b62b0a6f-6e71-4fa9-a9a5-b13c7f6b92d8"></img>
                            </div>
                        </div>
                        <h3 className="QuienesSomos__nombreCv textDestacado">Lic.Guillermo Priotto</h3>
                        <p className="QuienesSomos__parrafoCv textNormal">Licenciado en Ciencias Biológicas, Especialista en Educación
Ambiental. Fue Director de Biodiversidad y de
Educación Ambiental de la Secretaría de Ambiente y
Desarrollo Sustentable de la Nación, de la cual es asesor
desde hace más de 15 años. Consultor de la Organización
Internacional para las Migraciones (OIM). Director
de Proyectos del IMT -UNTREF. Docente de la Diplomatura
en Empleo Verde y Transición Justas desde el
Diálogo Social (IMT-UNTREF). Entre sus publicaciones se
encuentran “Educación Ambiental: ideas y propuestas
para docentes”, entre muchas otras.</p>
                        <p className="QuienesSomos__parrafoCv textNormal">
Es el Coordinador académico de la diplomatura en perspectiva
ambiental en las industrias culturales.</p>
                    </div>
                </div>
            </div>
            {showFlecha1 && <div className={`Flecha__contenedor ${showFlecha1 ? 'visible' : ''}`} onClick={() => scrollToSection('seccion0')}>
                <FlechaVerde></FlechaVerde>
            </div>}
            {showFlecha2 && <div className={`Flecha__contenedor ${showFlecha2 ? 'visible' : ''}`} onClick={() => scrollToSection('seccion2')}>
                <FlechaCeleste></FlechaCeleste>
            </div>}
        </>
    )
}