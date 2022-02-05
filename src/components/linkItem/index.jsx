import "./style.css";

import { FiCopy, FiX } from "react-icons/fi";

function LinkItem({ closeModal, content }) {
  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
    alert("Link Copiado!");
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Link encurtado</h2>

        <button onClick={closeModal}>
          <FiX size={28} />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiCopy size={20} />
      </button>
    </div>
  );
}

export default LinkItem;
