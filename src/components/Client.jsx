

const Client = ({ client, setClient, deleteClient }) => {

    const { name, service, telephone, date, hour, id } = client;

    const handleDelete = () => {
        const res = confirm('Deseas delete este cliente?')

        if (res) {
            deleteClient(id)
        }
    }

    return (
        <div className=" bg-white px-5 py-10 rounded-xl m-5">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                nombre:
                <span className="font-normal normal-case"> {name}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Servicio:
                <span className="font-normal normal-case"> {service}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                telefono:
                <span className="font-normal normal-case"> {telephone}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Turno:
                <span className="font-normal normal-case"> {date}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                hora:
                <span className="font-normal normal-case"> {hour}</span>
            </p>
            <div className="flex justify-evenly mt-5">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-700 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
                    onClick={() => {
                        setClient(client);
                    }}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-700 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
                    onClick={handleDelete}
                >
                    Borrar
                </button>
            </div>
        </div>
    );
};

export default Client;
