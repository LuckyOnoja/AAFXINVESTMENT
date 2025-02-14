import React, { useState } from "react";

const PopupModal = ({ isOpen, onClose, id, name, balance }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Added $${amount} to your balance.`);
    setAmount(""); // Reset input after submission
    onClose(); // Close modal
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Add Funds</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} readOnly />
          <input type="text" value={`$${balance}`} readOnly />
          <input
            type="number"
            placeholder="Enter amount to add"
            min="1"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
