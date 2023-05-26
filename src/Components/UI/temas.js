import { 
    fundoClaro, 
    conteudoClaro, 
    textoFundoCLaro, 
    fundoEscuro, 
    conteudoEscuro, 
    textoFundoEscuro 
} from "./variaveis"

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoCLaro,
    filter: ""
}; 

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)"
};