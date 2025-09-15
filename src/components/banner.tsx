"use client";

import { Bubble, Popup } from "pixel-retroui";
import React, { useState } from "react";

export default function Banner() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      <Bubble direction="right" className="h-min! w-full" onClick={openPopup}>
        <h2>SNIP IT!</h2>
      </Bubble>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        Thank you for checking me out! <br />
        Im <strong>SNIP IT!</strong>
      </Popup>
    </>
  );
}
