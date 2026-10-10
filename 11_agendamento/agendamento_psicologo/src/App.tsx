import { useState } from 'react';
import { EventCalendar } from '@mui/x-scheduler/event-calendar';
import './App.css';

export default function App() {
  const [events, setEvents] = useState<any[]>([
    {
      id: 1,
      title: 'Consulta Ana',
      start: '2026-08-25T10:00:00',
      end: '2026-08-25T11:00:00',
    },
  ]);

  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  function agendar(e: any) {
    e.preventDefault();

    const inicio = `${data}T${hora}:00`;
    const horaNum = Number(hora.split(':')[0]);
    const minuto = hora.split(':')[1];
    const horaFim = String(horaNum + 1).padStart(2, '0');
    const fim = `${data}T${horaFim}:${minuto}:00`;

    const novo = {
      id: Date.now(),
      title: `Consulta: ${nome}`,
      start: inicio,
      end: fim,
    };

    setEvents([...events, novo]);
    setNome('');
    setData('');
    setHora('');
  }

  return (
    <div className="container">
      <h1>Sistema de Agendamento Psicologia</h1>

      <form onSubmit={agendar} className="meu-formulario">
        <input
          type="text"
          placeholder="Nome do Paciente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          required
        />
        <button type="submit">Salvar Agendamento</button>
      </form>

      <div className="area-calendario">
        <EventCalendar events={events} />
      </div>
    </div>
  );
}