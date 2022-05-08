import PostItem from "./PostItem"

export default function Posts(){
  
const posts =[
  {
    icon:"assets/img/meowed.svg",
    user:"meowed",
    imgpost:"assets/img/gato-telefone.svg",
    imguser2:"assets/img/respondeai.svg",
    user2:"respondeai",
    qtpessoas:"101.523"
  },
  {
    icon:"assets/img/barked.svg",
    user:"meobarked",
    imgpost:"assets/img/dog.svg",
    imguser2:"assets/img/adorable_animals.svg",
    user2:"adorable_animals",
    qtpessoas:"99.159"
  }
]

const postsJSX = posts.map(item=> <PostItem icon={item.icon} user={item.user} imgpost={item.imgpost} imguser2={item.imguser2} user2={item.user2} qtpessoas={item.qtpessoas} />)

  return (
    <div class="posts">
      {postsJSX}
      {postsJSX}
    </div>
  )
}