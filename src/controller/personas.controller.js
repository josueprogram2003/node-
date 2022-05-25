import { pool } from "../database";

export const getPersona = async (req, res) => {
  try {
    const response = await pool.query("select *from personas");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Error al listar Post");
  }
};

export const getPersonaId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await pool.query(
      "select * from personas where idpersona = $1",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const crearPersona = async (req, res) => {
  try {
    const { apellidos, nombres, direccion, telefono } = req.body;
    await pool.query("select fc_create_persona($1,$2,$3,$4)", [
      apellidos,
      nombres,
      direccion,
      telefono,
    ]);
    return res
      .status(200)
      .json({ message: "persona registrado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al crear persona " + e);
  }
};

export const updatePersona = async (req, res) => {
  try {
    const { idpersona, apellidos, nombres, direccion, telefono } = req.body;
    await pool.query(
      "update personas set apellidos = $1, nombres = $2, direccion = $3, telefono=$4  where idpersona = $5 ",
      [apellidos, nombres, direccion, telefono, idpersona]
    );
    return res
      .status(200)
      .json({ message: "Persona modificado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const deletePersona = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query("delete from personas where idpersona = $1", [id]);
    return res.status(200).json({ message: "Eliminado Persona" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};
