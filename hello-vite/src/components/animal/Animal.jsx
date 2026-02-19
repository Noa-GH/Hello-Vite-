import { dataAnimals } from "../../assets/utils/constants.js";
import "./Animal.css";
function Animal({ selectedAnimal }) {
  const animal = dataAnimals.find((animal) => animal.name === selectedAnimal);
  return (
    <div className="animal">
      <img src={animal.image} alt={animal.name} className="animal-image" />
    </div>
  );
}
export default Animal;
