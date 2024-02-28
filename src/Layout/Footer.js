import "./Footer.css"
import Icon04 from "../svg/Icon04"
import RrssFacebook from "../svg/RrssFacebook"
import RrssInstagram from "../svg/RrssInstagram"
import RrssTwitter from "../svg/RrssTwitter"
import RrssYoutube from "../svg/RrssYoutube"
export default function Footer({ scrollToSection }) {
    return(
        <div className="Footer__cnt">
            <div className="Footer__cntIzq">
                <div className="Footer__logo__cnt">
                    <Icon04></Icon04>
                </div>
                <div className="Footer__redes__cnt">
                    <div className="Footer__redesItem__cnt">
                        <RrssFacebook></RrssFacebook>
                    </div>
                    <div className="Footer__redesItem__cnt">
                        <RrssTwitter></RrssTwitter>
                    </div>
                    <div className="Footer__redesItem__cnt">
                        <RrssInstagram></RrssInstagram>
                    </div>
                    <div className="Footer__redesItem__cnt">
                        <RrssYoutube></RrssYoutube>
                    </div>
                </div>
                <p className="Footer__mail__p textDestacado">correoelectronico@gea.com.ar</p>
                <p className="Footer__anio__p textDestacado">2024</p>
            </div>
            <div className="Footer__cntDer">
                <div className="Footer__navItems__cnt">
                    <div className="Footer__navItem__cnt"  onClick={() => scrollToSection('seccion1')}>
                        <h3 className="textDestacado Footer__textMenu">Presentacion</h3>
                    </div>
                    <div className="Footer__navItem__cnt"  onClick={() => scrollToSection('seccion2')}>
                        <h3 className="textDestacado Footer__textMenu">Qué proponemos</h3>
                    </div>
                    <div className="Footer__navItem__cnt"  onClick={() => scrollToSection('seccion3')}>
                        <h3 className="textDestacado Footer__textMenu">Quiénes somos</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}