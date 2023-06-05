import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemsProvider";
import { metricChartArray } from "../../Utils/Constants";
import AddQuantityRow from "./AddQuantityRow";
import { useState } from "react";

export default function AddItemForm(props) {
  const { items, setItems } = useContext(ItemContext);
  const [quantityArray, setQuantityArray] = useState([1]);

  const onSubmit = (e) => {
    e.preventDefault();
    let item;
    if (e.target[0].value) {
      const target = e.target;
      console.log("target length");
      console.log(target.length);

      const data = getObject(e.target);
      console.log(data);
      item = {
        id: items.length + 1,
        quantity: 0,
        createdOn: new Date(),
        updateOn: new Date(),
        ...data,
      };
      e.target[0].value = "";
      e.target[1].value = "";
      if (props.item.id) {
        item = { ...props.item, ...data, updateOn: new Date() };
        setItems((prevState) => {
          const newArray = Array.of(...prevState);
          const index = newArray.findIndex((item) => item.id === props.item.id);
          newArray[index] = item;
          return newArray;
        });
        props.setShow(false);
      } else {
        setItems((prevState) => [...prevState, item]);
      }
      console.log({ items });
    }
  };

  const getObject = (target) => {
    const element = [];
    const rates = [];
    let quantity = "";
    for (let index = 0; index < target.length - 1; index++) {
      if (target[index].name === "quantity") {
        quantity = [target[index].value];
      } else if (target[index].name === "price") {
        if (target[index].value) {
          rates.push({ quantity, [target[index].name]: target[index].value });
        }
      } else {
        element.push({ [target[index].name]: target[index].value });
      }
    }
    element.push({ rates });
    element.forEach((item) => {
      console.log(item);
    });
    return Object.assign(...element);
  };

  return (
    <div className="add__item_container">
      <div className="add__Item">
        <form onSubmit={onSubmit}>
          <div className="form_items">
            <div className="form_row">
              <div>
                <label>Brand:</label>
              </div>
              <input
                type="text"
                name="brand"
                defaultValue={props.item.brand}
              ></input>
            </div>
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
              <div>
                <label>Weight:</label>
              </div>
              <input
                type="number"
                name="weight"
                defaultValue={props.item.weight}
              ></input>

              <select id="units" name="units">
                {metricChartArray.map((key) => {
                  const unit = Object.keys(key);
                  return (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  );
                })}
              </select>
            </div>
            {quantityArray.map((value) => {
              console.log(value);
              return <AddQuantityRow key={value} />;
            })}
            <button
              type="button"
              onClick={() => {
                setQuantityArray((prevState) => {
                  return [...prevState, prevState.length + 1];
                });
              }}
            >
              +
            </button>
            <button className="form_row saveButton">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
