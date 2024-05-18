// paciente.js

import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const pacientes = await req.context.models.Paciente.findAll();
  return res.send(pacientes);
});

router.get("/:pacienteId", async (req, res) => {
  const paciente = await req.context.models.Paciente.findByPk(
    req.params.pacienteId
  );

  if (paciente === null) {
    return res.status(404).send({ error: "Paciente not found" });
  }

  return res.send(paciente);
});

router.post("/", async (req, res) => {
  const paciente = await req.context.models.Paciente.create(req.body);

  return res.send(paciente);
});

router.put("/:pacienteId", async (req, res) => {
  const [updated] = await req.context.models.Paciente.update(req.body, {
    where: { id: req.params.pacienteId }
  });

  if (updated) {
    const updatedPaciente = await req.context.models.Paciente.findByPk(
      req.params.pacienteId
    );
    return res.send(updatedPaciente);
  }

  return res.status(404).send({ error: "Paciente not found" });
});

router.delete("/:pacienteId", async (req, res) => {
  const result = await req.context.models.Paciente.destroy({
    where: { id: req.params.pacienteId }
  });

  return res.send(result !== 0);
});

export default router;
