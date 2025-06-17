import React from "react";
import "./style.css";

export const TaskDetailCard = () => {
  return (
    <div className="task-detail-card">
      <div className="task-info">
        <div className="div-2">
          <div className="div-3">
            <div className="status">
              <img
                className="img-2"
                alt="Check circle"
                src="https://c.animaapp.com/iiqMPZz3/img/check-circle.svg"
              />

              <div className="text-wrapper-4">Completada</div>
            </div>

            <p className="text-wrapper-5">
              Completada el 15 de marzo, 2024 a las 14:30
            </p>
          </div>

          <p className="text-wrapper-6">
            Implementar sistema de autenticación OAuth 2.0
          </p>
        </div>

        <div className="task-details">
          <div className="description-section">
            <div className="text-wrapper-7">Descripción</div>

            <p className="text-wrapper-8">
              Desarrollar e implementar un sistema completo de autenticación
              OAuth 2.0 que permita a los usuarios iniciar sesión utilizando
              proveedores externos como Google, GitHub y Microsoft. El sistema
              debe incluir manejo seguro de tokens, validación de permisos y
              integración con la base de datos existente.
            </p>
          </div>

          <div className="details-grid">
            <div className="div-4">
              <div className="div-5">
                <div className="text-wrapper-9">Proyecto</div>

                <div className="project-tag">
                  <img
                    className="img-2"
                    alt="Folder"
                    src="https://c.animaapp.com/iiqMPZz3/img/folder.svg"
                  />

                  <div className="text-wrapper-10">Rediseño Web</div>
                </div>
              </div>

              <div className="div-5">
                <div className="text-wrapper-9">Asignado a</div>

                <div className="div-6">
                  <div className="avatar">
                    <div className="text-wrapper-11">JM</div>
                  </div>

                  <div className="user-info">
                    <div className="text-wrapper-12">Juan Martínez</div>

                    <div className="text-wrapper-13">
                      Desarrollador Frontend
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-4">
              <div className="div-5">
                <div className="text-wrapper-9">Fecha de entrega</div>

                <div className="div-7">
                  <img
                    className="img-2"
                    alt="Calendar"
                    src="https://c.animaapp.com/iiqMPZz3/img/calendar.svg"
                  />

                  <div className="text-wrapper-14">20 de marzo, 2024</div>
                </div>
              </div>

              <div className="div-5">
                <div className="text-wrapper-9">Fecha de finalización</div>

                <div className="div-7">
                  <img
                    className="img-2"
                    alt="Check circle"
                    src="https://c.animaapp.com/iiqMPZz3/img/check-circle-1.svg"
                  />

                  <p className="text-wrapper-15">15 de marzo, 2024 - 14:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-2">
        <div className="div-3">
          <div className="status-info">
            <div className="text-wrapper-16">Estado de la tarea</div>

            <p className="text-wrapper-15">
              Esta tarea ha sido marcada como completada
            </p>
          </div>

          <div className="div-6">
            <div className="revert-button">
              <img
                className="img-3"
                alt="Undo"
                src="https://c.animaapp.com/iiqMPZz3/img/undo-2.svg"
              />

              <div className="text-wrapper-17">Revertir estado</div>
            </div>

            <div className="complete-button">
              <img
                className="img-3"
                alt="Check"
                src="https://c.animaapp.com/iiqMPZz3/img/check.svg"
              />

              <div className="text-wrapper-18">Marcar como completada</div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="info-header">
            <img
              className="img-2"
              alt="Info"
              src="https://c.animaapp.com/iiqMPZz3/img/info.svg"
            />

            <div className="text-wrapper-10">Información adicional</div>
          </div>

          <p className="text-wrapper-19">
            Como jefe de proyecto, puedes revertir el estado de esta tarea si es
            necesario realizar cambios adicionales.
          </p>
        </div>
      </div>
    </div>
  );
};
