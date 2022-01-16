import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ clients, setClients, client, setClient }) => {
    const [name, setName] = useState("");
    const [service, setService] = useState("");
    const [telephone, setTelephone] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(client).length > 0) {
            setName(client.name)
            setService(client.service)
            setTelephone(client.telephone)
            setDate(client.date)
            setHour(client.hour)
        }
    }, [client]);

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random + date;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        /* Form Validation*/
        if ([name, service, telephone, date, hour].includes("")) {
            console.log("Hay un campo vacio");
            setError(true);
            return;
        }
        setError(false);

        const objetClient = {
            name,
            service,
            telephone,
            date,
            hour
        };

        if (client.id) {
            /* Register Edit */
            objetClient.id = client.id
            const clientsUpdated = clients.map(clientState => clientState.id === client.id ? objetClient : clientState)

            setClients(clientsUpdated)
            setClient({})

        } else {
            /* Nuevo Registro */
            objetClient.id = generarId();
            setClients([...clients, objetClient]);
        }


        /* Reiniciar el form */
        setName("");
        setService("");
        setTelephone("");
        setDate("");
        setHour("");
    };

    return (
        <div className="md:w-1/2 lg:2/5 mt-5 mx-5 my-10">
            <h2 className="fontview flex flex-wrap justify-center font-black text-6xl text-center text-yellow-500 mb-10">Turnos Blackhat</h2>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5"
            >
                {error && (
                    <Error>
                        <p>Todos los Campos son Obligatorios</p>
                    </Error>
                )}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre del Cliente
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="nombre del cliente"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="service"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Servicio
                    </label>
                    <input
                        id="service"
                        type="text"
                        placeholder="Tipo de servicio"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="telephone"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        telefono
                    </label>
                    <input
                        id="telephone"
                        type="tel"
                        placeholder="Numero de telephone"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha Turno
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Hora
                    </label>
                    <input
                        id="sintaomas"
                        className="border-2 w-full p-2 placeholder-gray-400 rounded-md"
                        type="text"
                        placeholder="Hora del turno"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-600 cursor-pointer transition-all"
                    value={client.id ? 'Editar cliente' : 'Agendar cliente'}
                />
            </form>
        </div>
    );
};

export default Form;
