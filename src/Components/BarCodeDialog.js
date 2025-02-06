import React, { useRef, useState } from "react";
import BarCodeScanner from "./BarCodeScanner";
import { ReactComponent as BarcodeLogo } from "../assets/barcode.svg";

const BarCodeDialog = ({ setBarcode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dialogRef = useRef();

  const openDialog = () => {
    dialogRef.current.showModal();
    setIsDialogOpen(dialogRef.current.open);
  };
  const closeDialog = () => {
    dialogRef.current.close();
    setIsDialogOpen(dialogRef.current.open);
  };
  return (
    <div>
      <dialog className="barcode_scanner_modal" ref={dialogRef}>
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
      <BarcodeLogo
        onClick={() => {
          openDialog();
        }}
        className="barcode_image"
      />
    </div>
  );
};

export default BarCodeDialog;
