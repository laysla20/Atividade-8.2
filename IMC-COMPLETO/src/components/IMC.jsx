import { useState } from "react";

const IMC = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    if (!alturaEmMetros || !pesoEmKg) {
      setMensagem("Por favor, insira valores válidos.");
      return;
    }

    const IMCcalculado = (pesoEmKg / (alturaEmMetros * alturaEmMetros)).toFixed(2);

   
    if (IMCcalculado < 16) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Muito abaixo do peso.`);
    } else if (IMCcalculado >= 16 && IMCcalculado < 17) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Muito abaixo do peso.`);
    } else if (IMCcalculado >= 17 && IMCcalculado < 18.5) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está Abaixo do peso.`);
    } else if (IMCcalculado >= 18.5 && IMCcalculado < 25) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Peso normal.`);
    } else if (IMCcalculado >= 25 && IMCcalculado < 30) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está Acima do peso.`);
    } else if (IMCcalculado >= 30 && IMCcalculado < 35) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Obesidade grau 1.`);
    } else if (IMCcalculado >= 35 && IMCcalculado < 40) {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Obesidade grau 2.`);
    } else {
      setMensagem(`Seu IMC é ${IMCcalculado}. Você está com Obesidade grau 3.`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Calcule seu IMC</h1>
        <div>
          <input
            type="number"
            placeholder="Altura (m)"
            required
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Peso (kg)"
            required
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <button type="submit">Calcular IMC</button>
      </form>

      {mensagem && (
        <div className="resultado">
          <p>{mensagem}</p>
        </div>
      )}
      
    </div>
  );
};

export default IMC;
