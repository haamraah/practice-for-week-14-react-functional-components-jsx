import img from "./images/bulbasaur.jpg";
import "./showcase.css";
function Showcase() {
  const styles = {
    width: "50%",
    backgroundColor: "#F0F0F0",
    color: "red",
    padding: "10px",
    borderRadius: "5px",
  };
  const favAnimal = "Kutu";
  return (
    <div>
      <h1 style={styles}>my favorit animal is {favAnimal}</h1>
      <img src={img} alt={favAnimal} />
    </div>
  );
}

export default Showcase;
