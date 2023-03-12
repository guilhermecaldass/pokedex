import { useState } from "react";
import style from "./pokeinfo.module.css";

const PokeInfo = ({ hp, type }) => {
  const [info, setInfo] = useState(false);

  const handleClick = () => {
    setInfo(!info);

    console.log(info);
  };

  return (
    <>
      <br />
      <button className={style.pokeButton} onClick={handleClick}>
        info {info ? "⏫" : "🔽"}
      </button>

      {info && (
        <>
          <p>Type: {type}</p>
          <p className={style.pokeHp}>Hp: {hp}</p>
        </>
      )}
    </>
  );
};

export default PokeInfo;
