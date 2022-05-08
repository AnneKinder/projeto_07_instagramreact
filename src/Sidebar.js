import Sugestoes from "./Sugestoes"
import Links from "./Links"
import Usuario from "./Usuario"

export default function Sidebar() {
  return (
    <div class="sidebar">
      <Usuario />
      <Sugestoes />
      <Links />        
    </div>
  );
}
