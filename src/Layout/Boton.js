import Icon02 from "../svg/Icon02"
import "./Boton.css"
export default function Boton({textHtml, pressed, selected, onClick}) {
    console.log(pressed)
    return(
        <div className={`Boton__iconYText__container ${selected ? "" : "off"}`} onClick={onClick}>
            <div className="Boton__container">
                <div className="Boton__icon__container">
                    <Icon02 pressed={pressed}></Icon02>
                </div>
            </div>
            <h3 className="Boton__text__container" dangerouslySetInnerHTML={{ __html: textHtml }}></h3>
        </div>
    )
}