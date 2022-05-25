import { pool } from "../database";

export const getUsuario = async (req, res) => {
  try {
    const response = await pool.query("select *from fc_listar_usuario()");
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json("Error al listar Post");
  }
};

export const getUsuarioId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await pool.query(
      "select * from fc_listar_usuario_id($1)",
      [id]
    );
    return res.status(200).json(response.rows);
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { username, password, idpersona, idrol } = req.body;
    await pool.query("select fc_create_usuario($1,$2,$3,$4)", [
      username,
      password,
      idpersona,
      idrol,
    ]);
    return res
      .status(200)
      .json({ message: "Usuario registrado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const updateUsuario = async (req, res) => {
  try {
    const { idusuario, username, password, idpersona, idrol } = req.body;
    await pool.query(
      "update usuarios set username = $1, password = $2, idpersona = $3, idrol=$4  where idusuario = $5 ",
      [username, password, idpersona, idrol, idusuario]
    );
    return res
      .status(200)
      .json({ message: "Usuario modificado correctamente" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query("delete from usuarios where idusuario = $1", [id]);
    return res.status(200).json({ message: "Eliminado" });
  } catch (e) {
    return res.status(500).json("Error al listar Post");
  }
};
