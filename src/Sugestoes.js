import SugestaoItem from "./SugestaoItem"

export default function Sugestoes(){

  const sugestoes =[
    {
      imguser:"assets/img/bad.vibes.memes.svg",
      user:"bad.vibes.memes",
      reason: "Segue você"
    },
    {
      imguser:"assets/img/chibirdart.svg",
      user:"chibirdart",
      reason: "Segue você"
    },
    {
      imguser:"aassets/img/razoesparaacreditar.svg" ,
      user:"razoesparaacreditar",
      reason: "Novo no Instagram"
    },
    {
      imguser:"assets/img/adorable_animals.svg" ,
      user:"adorable_animals",
      reason: "Segue você"
    },
    {
      imguser:"assets/img/smallcutecats.svg" ,
      user:"smallcutecats",
      reason: "Segue você"
    }
  ]
 
  const sugestoesJSX = sugestoes.map(item=> <SugestaoItem imguser={item.imguser} user={item.user} reason={item.reason} />)

  return(
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoesJSX}
      
    </div>
    )
}