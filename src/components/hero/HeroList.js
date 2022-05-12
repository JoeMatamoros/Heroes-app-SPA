import { getHeroesByPublisher } from "../../selectors/getHeroeByPublisher"
import { HeroCard } from "./HeroCard";

// ({publisher}) desestructurar la data y tener acceso al publisher
export const HeroList = ({publisher}) => {
 const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(hero=>(
                    <HeroCard 
                    key={hero.id}
                    {...hero}
                    />    
                ))
            }
    </div>
  )
}
