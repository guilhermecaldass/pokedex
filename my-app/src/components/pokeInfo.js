import { useState } from "react";

const PokeInfo=({hp,type})=> {
  const [info, setInfo] = useState(false);

  const handleClick = () => {
    setInfo(!info);
    console.log(info);
  };

  return (
    <>
    <br />
      <button onClick={handleClick}>info</button>
      {
        info && (
          <>  
            <p>Type: {type}</p>
            <p style={{ color:'rgb(8, 220, 8)'}}>Hp: {hp}</p>
          </>
      )}
    </>
  );
}

export default PokeInfo;
