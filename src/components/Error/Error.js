import React from "react";

function Error({ status = 404, message = "Страница не найдена" }) {
  return (
    <div className="error">
      <div className="error__container">
        <p className="error__status">{status}</p>
        <p className="error__message">{message}</p>
      </div>
      <button className="error__back">Назад</button>
    </div>
  );
}

export default Error;
