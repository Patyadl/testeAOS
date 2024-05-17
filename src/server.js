import express from "express";
import cors from "cors"; // Importe o middleware cors
import { routes } from "./routes"; // Importe as rotas corretamente
import models, { sequelize } from "./models";
import dotenv from "dotenv"; // Importe o dotenv
dotenv.config(); // Execute o dotenv para carregar as variáveis de ambiente

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(async (req, res, next) => {
  req.context = {
    models,
  
  };
  next();
});

app.use("/consulta", routes.consulta);
app.use("/hospital", routes.hospital);
app.use("/medico", routes.medico);
app.use("/paciente", routes.paciente);
app.use("/prescricao", routes.prescricao);

app.get("/", (req, res) => {  
  return res.send("Hello Express!");
});

const eraseDatabaseOnSync = process.env.ERASE_DATABASE_ON_SYNC === "true";

const port = process.env.PORT || 3000;
sequelize.sync({ force: eraseDatabaseOnSync }).then(() => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});


