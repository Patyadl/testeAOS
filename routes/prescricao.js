import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const prescricoes = await req.context.models.Prescricao.findAll();
  return res.send(prescricoes);
});

router.get("/:prescricaoId", async (req, res) => {
  const prescricao = await req.context.models.Prescricao.findByPk(
    req.params.prescricaoId
  );

  if (prescricao === null) {
    return res.status(404).send({ error: "Prescricao not found" });
  }

  return res.send(prescricao);
});

router.post("/", async (req, res) => {
  const prescricao = await req.context.models.Prescricao.create(req.body);

  return res.send(prescricao);
});

router.put("/:prescricaoId", async (req, res) => {
  const [updated] = await req.context.models.Prescricao.update(req.body, {
    where: { id: req.params.prescricaoId }
  });

  if (updated) {
    const updatedPrescricao = await req.context.models.Prescricao.findByPk(
      req.params.prescricaoId
    );
    return res.send(updatedPrescricao);
  }

  return res.status(404).send({ error: "Prescricao not found" });
});

router.delete("/:prescricaoId", async (req, res) => {
  const result = await req.context.models.Prescricao.destroy({
    where: { id: req.params.prescricaoId }
  });

  return res.send(result !== 0);
});

export default router;