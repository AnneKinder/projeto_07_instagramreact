import SugestaoItem from "./SugestaoItem"

export default function Sugestoes(){
  return(
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      <SugestaoItem imguser="assets/img/bad.vibes.memes.svg" user="bad.vibes.memes" reason="Segue você" />
      <SugestaoItem imguser="assets/img/chibirdart.svg" user="chibirdart" reason="Segue você" />
      <SugestaoItem imguser="aassets/img/razoesparaacreditar.svg" user="razoesparaacreditar" reason="Novo no Instagram" />
      <SugestaoItem imguser="assets/img/adorable_animals.svg" user="adorable_animals" reason="Segue você" />
      <SugestaoItem imguser="assets/img/smallcutecats.svg" user="smallcutecats" reason="Segue você" />
      
    </div>
    )
}