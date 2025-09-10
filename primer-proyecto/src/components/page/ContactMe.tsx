import { useState } from "react";
import './contactme.css';


const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`Formulario enviado, {nombre, mensaje}`);
    setMensajeEnviado(true);
    setMensaje('');
    setNombre('');
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 2000);
  };

  const handleNombreChange = (e: any) => {
    setNombre(e.target.value);
    console.log(`Nombre actualizado: ${e.target.value}`);
  };

  const handleMensajeChange = (e: any) => {
    setMensaje(e.target.value);
    console.log(`Mensaje actualizado: ${e.target.value}`);
  };

  return (

      <section className="contact-section" id="contact">
        <div className="heading">
          <h2 className="heading"><span>Contact</span> Me</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={nombre}
              onChange={handleNombreChange}
            />
          </div>


          <div className="input-box">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              required
              value={mensaje}
              onChange={handleMensajeChange}
            ></textarea>
          </div>

          <button type="submit" className="btn">Send</button>
        </form>

        {mensajeEnviado && (
          <div id="message-sent" style={{ color: 'green', marginTop: '10px' }}>
            <h3>Message sent successfully!</h3>
          </div>
        )}
      </section>

  );
};

export default Contacto;