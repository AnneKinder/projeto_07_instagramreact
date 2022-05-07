export default function SugestaoItem(props){
    return(
      <div class="sugestao">
            <div class="usuario">
              <img src={props.imguser} />
              <div class="texto">
                <div class="nome">{props.user}</div>
                <div class="razao">{props.reason}</div>
              </div>
            </div>
  
            <div class="seguir">Seguir</div>
          </div>
    )
  }