import StoryItem from "./StoryItem"

export default function Stories() {

const stories =[
  {
    url:"assets/img/9gag.svg",
    user: "9gag"
  },
  {
    url:"assets/img/meowed.svg",
    user:"meowed"
  },
  {
    url:"assets/img/barked.svg",
    user:"barked"
  },
  {
    url:"assets/img/nathanwpylestrangeplanet.svg",
    user:"nathanwpylestrangeplanet"
  },
  {
    url:"assets/img/wawawicomics.svg",
    user:"wawawicomics"
  },
  {
    url:"assets/img/respondeai.svg",
    user:"respondeai"
  },
  {
    url:"assets/img/filomoderna.svg",
    user:"filomoderna"
  },
  {
    url:"assets/img/memeriagourmet.svg",
    user:"memeriagourmet"
  }
]

const storiesJSX = stories.map(item => <StoryItem url={item.url} user={item.user} />)

  return (
    <div class ="stories">
      {storiesJSX}
      {storiesJSX}     
      {storiesJSX}
      {storiesJSX}
      {storiesJSX}
      {storiesJSX}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
  );
}
