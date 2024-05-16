const express = require('express');
const consultaRoutes = require('./src/routes/consultaRoutes');
const hospitalRoutes = require('./src/routes/hospitalRoutes');
const medicoRoutes = require('./src/routes/medicoRoutes');
const pacienteRoutes = require('./src/routes/pacienteRoutes')
//const prescricaoRoutes = require('./src/routes/prescricaoRoutes');

const app = express();

// Middleware para lidar com dados em JSON
app.use(express.json());

// Rotas para cada entidade
app.use('/consulta', consultaRoutes);
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRoutes);
app.use('/paciente', pacienteRoutes);
//app.use('/prescricao', prescricaoRoutes);

// Porta para o servidor ou porta padrão 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
