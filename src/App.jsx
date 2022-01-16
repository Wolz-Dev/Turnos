import { useState, useEffect } from "react";
import "./index.css";
import Form from "./components/Form";
import ListClients from "./components/ListClients";

function App() {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const clientsLS = JSON.parse(localStorage.getItem('clients')) ?? []
      setClients(clientsLS)
    }
    getLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  const deleteClient = (id) => {
    const clientsUpdated = clients.filter(client => client.id !== id)
    setClients(clientsUpdated)
  }

  return (
    <div className="container mx-auto mt-10">
      <div className=" mt-14 md:flex">
        <Form
          /* var / modificatpr */
          clients={clients}
          setClients={setClients}
          client={client}
          setClient={setClient}
        />
        <ListClients
          clients={clients}
          setClient={setClient}
          deleteClient={deleteClient}
        />
      </div>
    </div>
  );
}

export default App;
