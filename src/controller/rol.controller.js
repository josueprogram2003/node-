import { pool } from "../database";

export const getRol = async (req, res) => {
  try {
    const response = await pool.query("select *from roles");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Error al listar Post");
  }
};

export const getRolId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await pool.query("select *from roles where idrol = $1", [
      id,
    ]);
    return res.status(200).json(response.rows);
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const crearRol = async (req, res) => {
  try {
    const { nombre } = req.body;
    await pool.query("select *from fc_create_rol($1)", [nombre]);
    return res.status(200).json({ message: "Rol registrado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const updateRol = async (req, res) => {
  try {
    const { nombre, estado, idrol } = req.body;
    await pool.query("select fc_update_rol($1,$2,$3) ", [
      nombre,
      estado,
      idrol,
    ]);
    return res.status(200).json({ message: "Rol modificado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const deleteRol = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query("delete from roles where idrol = $1", [id]);
    return res.status(200).json({ message: "Eliminado" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};
