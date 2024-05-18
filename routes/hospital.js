// hospital.js

import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const hospitais = await req.context.models.Hospital.findAll();
  return res.send(hospitais);
});

router.get("/:hospitalId", async (req, res) => {
  const hospital = await req.context.models.Hospital.findByPk(
    req.params.hospitalId
  );

  if (hospital === null) {
    return res.status(404).send({ error: "Hospital not found" });
  }

  return res.send(hospital);
});

router.post("/", async (req, res) => {
  const hospital = await req.context.models.Hospital.create(req.body);

  return res.send(hospital);
});

router.put("/:hospitalId", async (req, res) => {
  const [updated] = await req.context.models.Hospital.update(req.body, {
    where: { id: req.params.hospitalId }
  });

  if (updated) {
    const updatedHospital = await req.context.models.Hospital.findByPk(
      req.params.hospitalId
    );
    return res.send(updatedHospital);
  }

  return res.status(404).send({ error: "Hospital not found" });
});

router.delete("/:hospitalId", async (req, res) => {
  const result = await req.context.models.Hospital.destroy({
    where: { id: req.params.hospitalId }
  });

  return res.send(result !== 0);
});

export default router;
