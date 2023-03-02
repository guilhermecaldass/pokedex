import { useState } from "react";

function PokeInfo({hp,type}) {
  const [info, setInfo] = useState(false);

  const handleClick = () => {
    setInfo(!info);
    console.log(info);
  };

  return (
    <>
      <button onClick={handleClick}>info</button>
      {
        info && (
          <div>
            <p>Type:{type}</p>
            <p>Hp:{hp}</p>
          </div>
      )}
    </>
  );
}

export default PokeInfo;
