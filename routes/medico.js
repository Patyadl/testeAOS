// medico.js

import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const medicos = await req.context.models.Medico.findAll();
  return res.send(medicos);
});

router.get("/:medicoId", async (req, res) => {
  const medico = await req.context.models.Medico.findByPk(
    req.params.medicoId
  );

  if (medico === null) {
    return res.status(404).send({ error: "Medico not found" });
  }

  return res.send(medico);
});

router.post("/", async (req, res) => {
  const medico = await req.context.models.Medico.create(req.body);

  return res.send(medico);
});

router.put("/:medicoId", async (req, res) => {
  const [updated] = await req.context.models.Medico.update(req.body, {
    where: { id: req.params.medicoId }
  });

  if (updated) {
    const updatedMedico = await req.context.models.Medico.findByPk(
      req.params.medicoId
    );
    return res.send(updatedMedico);
  }

  return res.status(404).send({ error: "Medico not found" });
});

router.delete("/:medicoId", async (req, res) => {
  const result = await req.context.models.Medico.destroy({
    where: { id: req.params.medicoId }
  });

  return res.send(result !== 0);
});

export default router;
