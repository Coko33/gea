import "./Nav.css"
import Icon01 from "../svg/Icon01"
import {useEffect, useState} from "react"

export default function Nav({ scrollToSection }) {

    return(
        <>
            <div id="seccion0" className="nav__cnt">
                <div className="nav__caja">
                    <div className="navLogo__cnt">
                        <Icon01></Icon01>
                        <p className="textNormal textLogo">GEA</p>
                    </div>
                    <div className="navItems__cnt">
                        <div className="navItem__cnt"  onClick={() => scrollToSection('seccion1')}>
                            <h3 className="textDestacado textMenu">Presentacion</h3>
                        </div>
                        <div className="navItem__cnt"  onClick={() => scrollToSection('seccion2')}>
                            <h3 className="textDestacado textMenu">Qué proponemos</h3>
                        </div>
                        <div className="navItem__cnt"  onClick={() => scrollToSection('seccion3')}>
                            <h3 className="textDestacado textMenu">Quiénes somos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}