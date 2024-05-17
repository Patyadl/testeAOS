// consulta.js

import { Router } from "express";
import { v4 as uuidv4, validate } from 'uuid';
const router = Router();

router.get("/", async (req, res) => {
  const consultas = await req.context.models.Consulta.findAll();
  return res.send(consultas);
});

router.get("/:consultaId", async (req, res) => {
  const consulta = await req.context.models.Consulta.findByPk(
    req.params.consultaId
  );

  if (consulta === null) {
    return res.status(404).send({ error: "Consulta not found" });
  }

  return res.send(consulta);
});

router.post("/", async (req, res) => {
  const consulta = await req.context.models.Consulta.create(req.body);

  return res.send(consulta);
  
  const c = await req.context.models.Line.create({
    id: uuidv4(),
    medico_id,
    hospital_id,
paciente_id,
data,
status
  });

  res.send(c)
});

router.put("/:consultaId", async (req, res) => {
  const [updated] = await req.context.models.Consulta.update(req.body, {
    where: { id: req.params.consultaId }
  });

  if (updated) {
    const updatedConsulta = await req.context.models.Consulta.findByPk(
      req.params.consultaId
    );
    return res.send(updatedConsulta);
  }

  return res.status(404).send({ error: "Consulta not found" });
});

router.delete("/:consultaId", async (req, res) => {
  const result = await req.context.models.Consulta.destroy({
    where: { id: req.params.consultaId }
  });

  return res.send(result !== 0);
});

export default router;
