import {
  BarcodeFormat,
  BrowserMultiFormatReader,
  DecodeHintType,
} from "@zxing/library";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as FlashOffIcon } from "../assets/flashOff.svg";
import { ReactComponent as FlashOnIcon } from "../assets/flashOn.svg";
import CameraNotAvailable from "./CameraNotAvailable";

export default function BarCodeScanner({ updateBarcode, closeDialog }) {
  const [scanError, setScanError] = useState();
  const [cameraError, setCameraError] = useState();
  const [frameCount, setFrameCount] = useState(0);
  const [flashOn, setFlashOn] = useState(false);
  const videoRef = useRef();

  const hints = new Map();
  const formats = [BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13];
  hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

  const reader = useRef(new BrowserMultiFormatReader(null, 30000));

  useEffect(() => {
    if (!videoRef.current) return;
    reader.current
      .decodeFromConstraints(
        {
          audio: false,
          video: {
            facingMode: "environment",
            advanced: [{ torch: flashOn }],
          },
        },
        videoRef.current,
        (result, error) => {
          if (result) {
            updateBarcode(result);
            closeDialog();
          }
          if (error) {
            setFrameCount((prevProps) => {
              return prevProps + 1;
            });
            setScanError(error);
            console.error({ error });
          }
        }
      )
      .then((response) => {})
      .catch((error) => {
        setCameraError(error);
        console.error({ error });
      });
    return () => {
      reader.current.reset();
    };
  }, [videoRef]);

  useEffect(() => {
    flashOnFunc();
  }, [flashOn]);

  const flashOnFunc = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          facingMode: "environment",
        },
      })
      .then((stream) => {
        const track = stream.getVideoTracks()[0];

        if (!track.getCapabilities().torch) {
          alert("No torch available.");
        }
        track.applyConstraints({ advanced: [{ torch: flashOn }] });
      })
      .catch((error) => {
        setCameraError(error);
      });
  };

  return cameraError ? (
    <CameraNotAvailable error={scanError} />
  ) : (
    <div className="camera_container">
      <video className="videoFrame" ref={videoRef} />
      <div className="center space_between">
        {`Scanning Frames : ${frameCount}`}
        <div
          className="flash_image_container"
          onClick={() => {
            setFlashOn(!flashOn);
          }}
        >
          {flashOn ? (
            <FlashOnIcon className="option_image" />
          ) : (
            <FlashOffIcon className="option_image" />
          )}
        </div>
      </div>
    </div>
  );
}
