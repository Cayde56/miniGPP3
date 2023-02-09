import { useState } from "react";

export function Traductor() {
  const [texto, setTexto] = useState("");
  const [idiomas, setIdiomas] = useState("");

  const HandlerSubmit = (e) => {
    e.preventDefault();
    console.log(texto);
    console.log(idiomas);
  };

  const HandlerChangeTexto = (e) => {
    setTexto(e.target.value);
  };

  const HandlerChangeIdiomas = (e) => {
    setIdiomas(e.target.value);
  };

  return (
    <>
      <form onSubmit={HandlerSubmit}>
        <div className="caja">
          <label className="label-traductor">
            Escriba el texto y el idioma al que desea traducir
          </label>
        </div>
        <div className="caja">
          <textarea
            name="texto"
            rows="2"
            placeholder="Texto"
            onChange={HandlerChangeTexto}
            value={texto}
          ></textarea>
        </div>
        <div className="caja">
          <textarea
            name="idiomas"
            rows="2"
            placeholder="Idiomas"
            onChange={HandlerChangeIdiomas}
            value={idiomas}
          ></textarea>
        </div>
        <div className="caja">
          <input type="submit" value="Traducir" className="btn btn-primary" />
        </div>
      </form>

      <hr className="separator" />

      <div className="caja">
        <label htmlFor="traduccion" className="label-traductor">
          Traducción
        </label>
      </div>
      <div className="caja">
        <textarea
          name="traduccion"
          id="traduccion"
          rows="2"
          cols="70%"
          disabled
        ></textarea>
      </div>
    </>
  );
}
