import React from "react";
import { useNavigate } from "react-router-dom";

const NoProductFound = () => {

  const navigate=useNavigate();

  const handleHomePage = () =>{
    navigate('/');
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        textAlign: "center",
        height: "500px",
      }}
    >
      <div
        style={{
          fontSize: "65px",
          lineHeight: "72px",
          fontWeight: "700",
        }}
      >
        OOPS!!
      </div>
      <div
        style={{
          fontSize: "18px",
          lineHeight: "26px",
          fontWeight: "700",
        }}
      >
        No Products found
      </div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: "400",
          textTransform: "uppercase",
          backgroundColor: "#902735",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleHomePage}
      >
        Continue shopping
      </div>
    </div>
  );
};

export default NoProductFound;
