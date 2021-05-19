import React from "react";
import { Link } from "react-router-dom";
function Form(props) {

  const errorClassName =`${
    props.isValid ? "form__error" : "form__error form__error_visible"
  }`;

  const formInputs = props.inputs.map((input) => {
    return (
      <div className="form__fieldset">
        <label className="form__label" htmlFor={input.for}>
          {input.label}
        </label>
        <input className="form__input" onChange={input.change} type="text" name={input.name}></input>
      </div>
    );
  });
  
  return (
    <form action="#" id="form_reset" className="form" onSubmit={props.onSubmit} >
      <Link to="/" className="form__img"></Link>
      <h2 className="form__title">{props.title}</h2>
      <div className="form__container">
        {formInputs}
        <span className={errorClassName}>{props.message}</span>
      </div>
      <div className="form__button-container">
        <button type="submit" className="form__button">{props.button}</button>
        <div className="form__footer">
          {props.footer} {props.Link}
        </div>
      </div>
    </form>
  );
}
export default Form;
