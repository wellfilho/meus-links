import { Link } from "react-router-dom";
import NotFound from "../../assets/notfound.png";
import "./style.css";

function Error() {
  return (
    <div className="container-error">
      <img src={NotFound} alt="Página não encontrada" />
      <h1>Página não encontrada!</h1>

      <Link to="/">Voltar para Home</Link>
    </div>
  );
}

export default Error;
