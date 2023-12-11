import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

// eslint-disable-next-line react/prop-types
const SuccessMessageComponent = () => {
  const { message, setMessage } = useContext(AllDataContext);
  return (
    <div className={`popup-message ${message.message ? "active" : ""}`}>
      <div
        className={`message-bg`}
        onClick={() => {
          setMessage({
            message: false,
            title: "",
            type: "",
            desc: "",
          });
        }}
      ></div>
      <div className={`box ${message.type === "error" ? "error" : ""}`}>
        <div className="message-icon">
          {message.type === "success" ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </div>
        <div className="message-title">{message.title}</div>
        <p>{message.desc}</p>
        <button
          className="message-button"
          onClick={() => {
            setMessage({
              message: false,
              title: "",
              type: "",
              desc: "",
            });
          }}
        >
          {message.type === "success" ? "Continue" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default SuccessMessageComponent;
