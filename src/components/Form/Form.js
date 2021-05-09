import React from "react";
function Form(props) {
  const formInputs = props.inputs.map((input) => {
    return (
      <div className="form__fieldset">
        <label className="form__label" for={input.for}>
          {input.label}
        </label>
        <input className="form__input" type="text" name={input.name}></input>
      </div>
    );
  });

  return (
    <form action="#" id="form_reset" className="form" name noValidate>
      <div className="form__img"></div>
      <h2 className="form__title">{props.title}</h2>
      <div className="form__container">
        {formInputs}
        <span className="form__error">Текст ошибки</span>
      </div>
      <div className="form__button-container">
        <button className="form__button">{props.button}</button>
        <div className="form__footer">
          {props.footer} <a className="form__link">{props.link}</a>
        </div>
      </div>
    </form>
  );
}
export default Form;
