Para instalar o pacote styled components basta digitar no terminal na pasta do projeto:
npm install --save styled-components
depois digite npm start, o projeto também pode ser iniciado com o yarn

No caso de acontecer esse erro erro: Error: error:0308010C:digital envelope routines::unsupported
Achei algumas formas de resolver nesse tópico do stackoverflow:
https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported

Nesse projeto o createGlobalStyle foi usado para colocar o reset do css
Basta fazer a importação:
 import { createGlobalStyle } from "styled-components";
 e criar o componente GlobalStyle.js
 depois deve ser chamada em App.js

        PERGUNTA: Em praticamente toda aplicação que vamos criar é necessário sobrescrever as configurações de estilos do navegador. Dessa forma garantimos uma experiência padronizada em todos os navegadores onde as pessoas podem acessar nossa aplicação.
        Dentro do Styled Componenets utilizamos o método createGlobalStyle para conseguirmos aplicar esse reset CSS. O que essa função nos retorna quando chamamos ela?

        RESPOSTA: Recebemos como retorno um novo componente estilizado que não possui as restrições de escopo para o CSS que aplicamos nele.
        Isso mesmo! Normalmente quando criamos um componente estilizado as regras de CSS que aplicamos nele estão guardadas dentro do escopo daquele componente, dessa forma sabemos que elas não irão interferir com CSS de outros componentes. No caso do createGlobalStyle essa proteção é retirada e assim o CSS dele tem acesso global.

As fontes externas  devem ser importadas dentro da pasta public dentro do arquivo index.html em uma tag link como geralmente é feito.

Para adicionar variáveis foi criado dentro da pasta Components, uma pasta chamada UI e dentro dessa pasta o arquivo variáveis.js.Dentro do arquivo variáveis.js é só fazer um export das variáveis como no exemplo abaixo:

            export const corPrimaria = "#41d3be"

Agora, dentro do componente faça o import:
            
             import { corPrimaria } from "../UI/variaveis";

Depois, crie o estilo com styled usando template strings:

            const Logo = styled.img`
                height: 50px;
                width: 50px;
            `

Agora, basta "chamar" dentro do componente:

            const Cabecalho = () => {
            return (
                <StyledHeader >
                <Logo src={bank_logo} alt="Logo Smart Bank" /> //Desta forma!
                <div>
                    <a className="btn-secundario" href="https://google.com">
                    Ajuda
                    </a>
                    <a className="btn-primario" href="https://google.com">
                    Sair
                    </a>
                </div>
                </StyledHeader >
            );
            };

            export default Cabecalho;

Criando props para os componentes:

        No cabecalho foi usada dessa forma: 
        background: ${(props) => (props.primary ? "white" : corPrimaria)};
        color: ${(props) => (props.primary ? corPrimaria : "white")}
        por se tratar de dois botões com as aparências diferentes, um é o contrário do outro, usando operador ternário foi possível fazer essa estilização.
        Sendo que no primeiro botão foi passado o atributo de primary:
        ex.:        <BtnCabecalho primary href="https://google.com"> Ajuda </BtnCabecalho>
                    <BtnCabecalho href="https://google.com"> Sair </BtnCabecalho>
        
No caso de nomes parecidos para os componentes é possivel fazer o export default direto de uma função anonima:
ex.:        export default () => {
            return (
            <div className="container">
            <Titulo>Olá Fulano!</Titulo>
            <section className="conteudo">
                <Conta />
            </section>
            </div>
        );
        }
ou criar um nome diferente para a estulização como por exemplo ContainerWraper

Para utilizar os icones:
  Primeiro crie um aquivo index.js na pasta UI, dentro do arquivo index.js: 
 
    import styled from "styled-components"

    export const Icone = styled.img`
    height: 25px;
    width: 25px;
    `
  com ctrl+shift+f localize aonde o className icone está sendo usado e substitua pelo componente Icone. Não esqueça de fazer o import do componente no arquivo dessa forma>>> import { Icone } from "../../Components/UI";

  No caso de adicionar mais estilizações(herança de estilos) é possivel usar o styled dessa forma:

  import styled from 'styled-components' 
 
  ...
  const IconeMargin = styled(Icone)` // Nesse caso, o styled herda os atributos do pai Icone e adiciona os atributos do IconeMargin
  margin-top: 2px;
  `
  ...
  <IconeMargin
    src={toggleState ? privado : olho_icone}
    alt="Privacidade do Saldo"
  />

  faça o mesmo com os components icone, box, botão, detalhe e saldo.

As media querys podem ser adicionadas direto no styled do componente dessa forma:
    ex.:    const Conteudo = styled.section`
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                @media (max-width: 800px) {
                flex-direction: column;
                }
            `
Sempre que possível devemos evitar colocarmos a declaração de componentes dentro do método render dentro de componente baseados em classes e no caso de componentes funcionais não devemos declarar um componente dentro do outro.

Isso porque, caso um componente seja declarado dentro do método render ou dentro de um outro componente funcional ele será re-declarado a cada nova renderização e o React não conseguirá fazer cache desse componente, o que pode atrasar e muito a renderização da página.

Por isso, lembre-se de declarar seus componentes e styled components fora dos métodos de renderização do React.

Para saber mais leia esse pedaço da documentação do Styled components

No componente Extrato criamos o componente do zero:
Primeiro, os imports do react, Box, Botao e extratoLista que está no arquivo info.js(referente a lista de informações que vamos buscar)
Depois, como padrão criamos uma const com o nome Extrato que recebe uma arrow function e dentro desse bloco um return com o component Box, dentro do Box, fazemos um map de extratLista, para pegar as informações de { id, type, from, value, date }, dentro do map há outra arrow function com outro return com as divs que renderizam id, type e etc... Ainda dentro do Box, há também o component Botao, com o texto Ver Mais.

Quando fizemos o component Itens percebemos que poderiamos fazer mais um componente para usar dentro dele. Então, criamos o componente Item. dentro dele fizemos o mesmo dos anteriores. 
    imports do react e styled;
    const Item que recebe o styled.div``
    export default arrow function(função anonima neste caso), return, Item(chamamos o componente abraçando as tags span para cada elemento)
a diferença nesse componente que para dar uma estilização a mais no primeiro span de item usamos um className .text e font-weight bold

Para mostrar os icones de acordo com o tipo criamos o arquivo ImageFilter.js
Dentro dele fizemos os imports do React e dos icones que estão em "../assets/images/nomeDoAquivo.svg"
Depois o import de import { Icone } from "../Components/UI";
 e então criamos o export default com o argumento type na arrow function e dentro variavel criamos uma lista, dentro de cada item da lista usamos o componente Icone com o src de cada icone e um alt., depois um default e para essa logica funcionar return Images[type] || Images.default;

  







