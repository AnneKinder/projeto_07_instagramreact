export default function StoryItem(props){
    return(
      <div class="story">
      <div class="imagem">
        <img src={props.url} />
      </div>
      <div class="usuario">{props.user}</div>
    </div>
    )
  }