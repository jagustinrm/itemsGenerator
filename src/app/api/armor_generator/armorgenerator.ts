// pages/api/generar-armaduras.ts
import type { NextApiRequest, NextApiResponse } from 'next'
// import CreateCustomArmor from '../../lib/createCustomArmor';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Lógica para generar armaduras (por ahora solo un console.log)
  console.log("Generando armaduras...");
  // Enviar una respuesta al frontend
  res.status(200).json({ message: "Armaduras generadas correctamente" });
}
