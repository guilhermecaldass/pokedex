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
 </>
  );
}

export default PokemonInfo;