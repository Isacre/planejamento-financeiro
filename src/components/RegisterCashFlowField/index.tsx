import React, { useState } from "react";
import { RecordTypes } from "../../types";

export default function RegisterCashFlowField() {
  const [type, setType] = useState<RecordTypes>("expense");
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value as RecordTypes)}>
        <option value="income">Entrada</option>
        <option value="expense">Saída</option>
      </select>
      <input type={"text"} value={description} onChange={(e) => setDescription(e.target.value)} placeholder={`Descreva a ${type} aqui`} />
      <input type={"number"} value={value} onChange={(e) => setValue(e.target.valueAsNumber)} />
      <button>Cadastrar</button>
    </div>
  );
}
