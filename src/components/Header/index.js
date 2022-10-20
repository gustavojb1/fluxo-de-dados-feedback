import {TitleHeader} from './styled'
import {Foto} from './styled'
import {Nome} from './styled'
import {Insta} from './styled'

export const Header = (props) => {
    console.log(props.object)
    return(
        
        <TitleHeader>
            
            {props.objetoHeader.imagem ? <Foto src={props.objetoHeader.imagem}/> : ''}
            <Nome>{props.objetoHeader.name}</Nome>
            <Insta>Insta4</Insta>
        </TitleHeader>
        
    )
}

//