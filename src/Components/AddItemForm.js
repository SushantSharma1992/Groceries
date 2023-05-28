import React, { useContext } from "react";
import { ItemContext } from "../Context/ItemsProvider";

export default function AddItemForm(props) {
  const { items, setItems } = useContext(ItemContext);
  const onSubmit = (e) => {
    e.preventDefault();
    let item;
    if (e.target[0].value) {
      const data = {
        [e.target[0].name]: e.target[0].value,
        [e.target[1].name]: e.target[1].value,
      };
      item = {
        id: items.length + 1,
        quantity: 0,
        createdOn: new Date(),
        updateOn: new Date(),
        ...data,
      };
      e.target[0].value = "";
      e.target[1].value = '';
      if (props.item.id) {
        item = { ...props.item, ...data, updateOn: new Date() };
        setItems((prevState) => {
          const newArray = Array.of(...prevState)
          const index = newArray.findIndex((item)=> item.id===props.item.id);
          newArray[index]=item;
          return newArray});
          props.setShow(false);
      }else{
        setItems(prevState=>([...prevState,item]))
      }
      console.log({ items });
    }
  };

  return (
    <div className="add__item_container">
      <div className="add__Item">
        <form onSubmit={onSubmit}>
          <div className="form_items">
            <div className="form_row">
              <div>
                <label>Name:</label>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={props.item.name}
              ></input>
            </div>
            <div className="form_row">
              <label>Price:</label>
              <div>
                <input
                  type="number"
                  name="price"
                  defaultValue={props.item.price}
                ></input>
              </div>
            </div>
            <button className="form_row saveButton">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
