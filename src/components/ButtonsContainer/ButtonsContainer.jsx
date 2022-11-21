import { Containerbuttons } from "./Styles"
import { Button } from "../Button/Button"
import { Slogan } from "../Slogan/Slogan"
import { CoverImage } from "../CoverImage/CoverImage"


import {RiFacebookFill, RiInstagramFill, RiWhatsappFill,
    RiMailSendFill, RiPhoneFill
} from "react-icons/ri"
import { TbWorld } from "react-icons/tb"

export function ButtonsContainer () {
    return (

        <Containerbuttons>
            <CoverImage> </CoverImage>
            <Slogan label="Advogada on-line">
            </Slogan>
        <Button label="Facebook" className="button" aref={"https://https://www.facebook.com/barbara.lima.71868964/"}>
            <RiFacebookFill/>
        </Button>

        <Button label="Instagram" aref={"https://www.instagram.com/barbaragoniadisadvocacia/"}>
            <RiInstagramFill/>
        </Button>

        <Button label="WhatsApp" aref={"https://api.whatsapp.com/send?phone=5521986917487&text=Poderia%20me%20ajudar%20com%20minha%20causa%3F"}>
            <RiWhatsappFill/>
        </Button>

        <Button label="Site">
            <TbWorld/>
        </Button>

        <Button label="E-mail" aref={"mailto:barbara.g.lima@live.com@gmail.com"}>
            <RiMailSendFill/>
        </Button>

        <Button label="Telefone" aref={"https://api.whatsapp.com/send?phone=5521986917487&text=Poderia%20me%20ajudar%20com%20minha%20causa%3F"}>
            <RiPhoneFill/>
        </Button>

        </Containerbuttons>

    )
  }

