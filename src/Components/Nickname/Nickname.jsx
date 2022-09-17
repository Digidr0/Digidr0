import "./Nickname.css";
import { useEffect, useState } from "react";

function Nickname(props) {
  const [classname, setClassName] = useState("big");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.querySelector(".nickname--text").getBoundingClientRect().y >= 50){setClassName("big")} else {setClassName("small")};

    });
  }, []);
  return (
    <div className="Nickname">
      <h2 className={`gradient-text nickname--text ${classname}`}>@digidro</h2>
    </div>
  );
}
export default Nickname;
