
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center mt-5">
                        Listado Pacientes
                    </h2>
                    <p className="text-xl text-center mt-5">
                        Administra tus
                        <span className="text-indigo-600 font-bold">
                            {" "}
                            Pacientes y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center mt-5">
                        No hay Pacientes
                    </h2>
                    <p className="text-xl text-center mt-5">
                        Comienza agregando
                        <span className="text-indigo-600 font-bold">
                            {" "}
                            Pacientes y Citas
                        </span>
                    </p>
                </>
            )}
        </div>
    );
};

export default ListadoPacientes;
