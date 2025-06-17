import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="breadcrumb">
        <div className="text-wrapper">Proyectos</div>

        <img
          className="img"
          alt="Chevron right"
          src="https://c.animaapp.com/iiqMPZz3/img/chevron-right-1.svg"
        />

        <div className="text-wrapper">Rediseño Web</div>

        <img
          className="img"
          alt="Chevron right"
          src="https://c.animaapp.com/iiqMPZz3/img/chevron-right-1.svg"
        />

        <div className="div">Implementar sistema de autenticación</div>
      </div>

      <div className="page-header">
        <div className="title-section">
          <div className="text-wrapper-2">Detalle de Tarea</div>

          <p className="p">
            Gestiona y actualiza el estado de la tarea asignada
          </p>
        </div>

        <div className="actions">
          <div className="edit-button">
            <img
              className="img"
              alt="Edit"
              src="https://c.animaapp.com/iiqMPZz3/img/edit-3.svg"
            />

            <div className="text-wrapper-3">Editar</div>
          </div>

          <div className="more-button">
            <img
              className="img"
              alt="More horizontal"
              src="https://c.animaapp.com/iiqMPZz3/img/more-horizontal.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
