
import Client from "./Client";

const ListClients = ({ clients, setClient, deleteClient }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-5">
            {clients && clients.length ? (
                <>
                    <h2 className="fontview flex flex-wrap justify-center font-black text-6xl text-center text-yellow-500 mb-10">Agendados</h2>

                    {clients.map((client) => (
                        <Client
                            key={client.id}
                            client={client}
                            setClient={setClient}
                            deleteClient={deleteClient}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="fontview flex flex-wrap justify-center font-black text-6xl text-center text-yellow-500 mb-10">No hay Turnos Agendados</h2>
                </>
            )}
        </div>
    );
};

export default ListClients;
