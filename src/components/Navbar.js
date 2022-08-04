

import "../css/micss.css"
import logo from "../asset/imagen/logo.png"
import CartWidget from "./CartWidget"
import WhatsApp from "./WhatsApp";

function Navbar() {
    return (
    <>
   <header>
            <div class="headerGrid">
                <div class="logo">
                    <picture>
                        <img class="img" src={logo} />
                    </picture>
                </div>
                <div class="texto">
                    <div style={{alignContent:"center", textAlign:"center",paddingTop:20}}>
                        <p>Contacto: +57-3204541181</p>
                        <p>Envio: 3 a 5 dias habiles.</p>
                    </div>
                </div>
                <div class="whatsApp">
                    <a href="https://example.url.com">
                        <picture>
                            <CartWidget />
                        </picture>
                    </a>
                </div>
                <div class="carrito">
                    <a href="https://example.url.com">
                        <picture>
                            <WhatsApp />
                        </picture>
                    </a>
                </div>
            </div>
            <div class="subtitulo">
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Quienes somos</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Ofertas</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div style={{height: 50, margintop: 70}}> 
                <h1 style={{color: "#000"}}>34710 Curso React</h1>
            </div>
            
            </> 

    ); 
}

export  default Navbar;