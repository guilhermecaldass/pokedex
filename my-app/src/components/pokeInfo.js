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

        <p>type:</p>
        <p>hp:</p>

        </div>
    )
 }
 </>
  );
}

export default PokemonInfo;