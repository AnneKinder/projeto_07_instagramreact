import StoryItem from "./StoryItem"

export default function Stories() {

  return (
    <div class ="stories">
      <StoryItem url="assets/img/9gag.svg" user="9gag" />
      <StoryItem url="assets/img/meowed.svg" user="meowed" />
      <StoryItem url="assets/img/barked.svg"user="barked" />
      <StoryItem url="assets/img/nathanwpylestrangeplanet.svg" user="nathanwpylestrangeplanet" />
      <StoryItem url="assets/img/wawawicomics.svg" user="wawawicomics" />
      <StoryItem url="assets/img/respondeai.svg" user="respondeai" />
      <StoryItem url="assets/img/filomoderna.svg" user="filomoderna" />
      <StoryItem url="assets/img/memeriagourmet.svg" user="memeriagourmet" />

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
    </div>
  );
}
