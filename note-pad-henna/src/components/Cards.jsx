import React, { useState } from "react";
import { usePostCardsMutation } from "../services/cardQuerySlice";
import "./Cards.css"; 

const Cards = () => {
  const [newCard, setNewCard] = useState({ notetitle: "", writetitle: "", color: "pink" });
  const [postCards] = usePostCardsMutation();
  const [searchText, setSearchText] = useState("");

  const handleColorChange = (color) => {
    setNewCard({ ...newCard, color });
  };

  return (
    <div className="container">
      <form className="form"
        onSubmit={async(e) => {
          e.preventDefault();
          console.log("new card: ", newCard);
          await postCards(newCard);
          setNewCard({ notetitle: "", writetitle: "", color: "pink" });
        }}
      >
        <div className="input-group">
          <input
            value={newCard.notetitle}
            onChange={(e) =>
              setNewCard({ ...newCard, notetitle: e.target.value })
            }
            type="text"
            placeholder="note title"
          />
        </div>
        <div className="input-group">
          <input
            value={newCard.writetitle}
            onChange={(e) =>
              setNewCard({ ...newCard, writetitle: e.target.value })
            }
            type="text"
            placeholder="Write Note"
          />
        </div>
        <div className="radio-group">
        <label>
            <input
              type="radio"
              name="color"
              value="pink"
              checked={newCard.color === "pink"}
              onChange={() => handleColorChange("pink")}
            />
            Pink
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="blue"
              checked={newCard.color === "blue"}
              onChange={() => handleColorChange("blue")}
            />
            Blue
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="yellow"
              checked={newCard.color === "yellow"}
              onChange={() => handleColorChange("yellow")}
            />
            Yellow
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="green"
              checked={newCard.color === "green"}
              onChange={() => handleColorChange("green")}
            />
            Green
          </label>
          <label>
            <input
              type="radio"
              name="color"
              value="purple"
              checked={newCard.color === "purple"}
              onChange={() => handleColorChange("purple")}
            />
            Purple
          </label>

        </div>
        <input
          className="search-input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by Write Note"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Cards;
