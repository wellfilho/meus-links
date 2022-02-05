import { useState } from "react";
import { FiLink } from "react-icons/fi";
import Logo from "../../assets/logo.png";
import LinkItem from "../../components/linkItem";
import Menu from "../../components/menu";
import api from "../../services/api";
import { saveLink } from "../../services/storeLinks";
import "./style.css";

function Home() {
  const [link, setLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);

      setShowModal(true);

      saveLink("@encurtaLink", response.data);

      setLink("");
    } catch {
      alert("Algo deu errado!");

      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src={Logo} alt="Meus Links logo" />
        <h1>Meus Links</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            type="text"
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />
      {showModal && (
        <LinkItem
          closeModal={() => {
            setShowModal(false);
          }}
          content={data}
        />
      )}
    </div>
  );
}

export default Home;
