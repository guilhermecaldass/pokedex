import { useState } from "react";

function PokemonInfo(props) {
  const [info, setInfo] = useState(false);

  const handleClick = () => {
    setInfo(!info);
    console.log(info);

  };

  return (
 <>
 <button onClick={handleClick}>info</button>
 {
    info&&(
        <div>

        <p>type:{props.type}</p>
        <p>hp:{props.hp}</p>

        </div>
    )
 }
 </>
  );
}

export default PokemonInfo;