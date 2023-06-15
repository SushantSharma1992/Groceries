import React, { useContext, useRef, useState } from "react";
import { ItemContext } from "../../Context/ItemsProvider";
import { metricChartArray } from "../../Utils/Constants";
import BarCodeScanner from "../BarCodeScanner";
import AddQuantityRow from "./AddQuantityRow";
import { ReactComponent as BarcodeLogo } from "../../assets/barcode.svg";
import FormRow from "./FormRow";

export default function AddItemFormPage(props) {
  const { item, setShow } = props;
  const { items, setItems } = useContext(ItemContext);
  const ratesList = item.rates.map((value, index) => {
    return <AddQuantityRow key={index} value={value} />;
  });
  const [quantityArray, setQuantityArray] = useState(ratesList);
  const [barcode, setBarcode] = useState(item.barcode);
  const dialogRef = useRef();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    let newItem;
    if (e.target[0].value) {
      const target = e.target;
      const data = getObject(e.target);
      resetValues(target);
      if (item.id) {
        newItem = { ...item, ...data, updateOn: new Date() };
        setItems((prevState) => {
          const newArray = Array.of(...prevState);
          const index = newArray.findIndex((value) => value.id === newItem.id);
          if (index > 0) {
            newArray[index] = newItem;
          }
          return newArray;
        });
        setShow(false);
      } else {
        newItem = {
          id: items.length + 1,
          purchaseQuantity: 0,
          createdOn: new Date(),
          updateOn: new Date(),
          ...data,
        };
        setItems((prevState) => [...prevState, newItem]);
      }
    }
  };

  const onChangeBarcode = (e) => {
    setBarcode(e.target.value);
  };

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsDialogOpen(dialogRef.current.open);
  };
  const closeDialog = () => {
    dialogRef.current.close();
    setIsDialogOpen(dialogRef.current.open);
  };

  const getObject = (target) => {
    const element = [];
    const rates = [];
    let quantity = "";
    for (let index = 0; index < target.length; index++) {
      if (target[index].type !== "button") {
        console.log(target[index].type);
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
    }
    element.push({ rates });
    return Object.assign(...element);
  };

  const resetValues = (target) => {
    for (let i = 0; i < target.length; i++) {
      if (target[i].type !== "button") {
        target[i].value = "";
      }
    }
  };

  return (
    <div className="add__item_container">
      <div
        className="closeButton"
        onClick={() => {
          setShow(false);
        }}
      >
        X
      </div>
      <div className="add__Item">
        <form onSubmit={onSubmit}>
          <div className="form_items">
            <FormRow
              label={"Brand:"}
              input={
                <input
                  className="form_input"
                  type="text"
                  name="brand"
                  defaultValue={item.brand}
                ></input>
              }
            />
            <FormRow
              label={"Barcode"}
              input={
                <>
                  <input
                    className="form_input"
                    type="text"
                    name="barcode"
                    onChange={onChangeBarcode}
                    value={barcode}
                  ></input>
                  <BarcodeLogo
                    onClick={() => {
                      openDialog();
                    }}
                    className="barcode_image"
                  />
                </>
              }
            />
            <FormRow
              label={"Name:"}
              input={
                <input
                  className="form_input"
                  type="text"
                  name="name"
                  defaultValue={item.name}
                ></input>
              }
            />
            <FormRow
              label={"Weight:"}
              input={
                <>
                  <input
                    className="form_input"
                    type="number"
                    name="weight"
                    defaultValue={item.weight}
                  ></input>

                  <select id="unit" name="unit" defaultValue={item.unit}>
                    {metricChartArray.map((key) => {
                      const unit = key[0];
                      return (
                        <option key={unit} value={unit}>
                          {unit}
                        </option>
                      );
                    })}
                  </select>
                </>
              }
            />

            {quantityArray}
            <button
              className="form_row button_margin_top"
              type="button"
              onClick={() => {
                setQuantityArray((prevState) => {
                  return [
                    ...prevState,
                    <AddQuantityRow
                      key={quantityArray.length + 1}
                      value={{ quantity: "", price: "" }}
                    />,
                  ];
                });
              }}
            >
              +
            </button>
            <button className="form_row button_margin_top">Save</button>
          </div>
        </form>
        <dialog className="" ref={dialogRef}>
          {isDialogOpen && (
            <BarCodeScanner
              updateBarcode={setBarcode}
              closeDialog={closeDialog}
            />
          )}
          <button
            className="secondary form_row button_margin_top"
            value="cancel"
            formMethod="dialog"
            onClick={closeDialog}
          >
            Cancel
          </button>
        </dialog>
      </div>
    </div>
  );
}
