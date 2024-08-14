interface IVerificationProps {
  worker: Array<string> | object;
}

export function Verification({ worker }: IVerificationProps) {
  const { names, status, last_names,identity_card } = worker as {
    names: string;
    last_names: string;
    position: string;
    department: string;
    status: boolean;
    identity_card: string;
  };
  const date = new Date().toLocaleDateString();

  return (
    <div className="rounded-lg border text-card-foreground shadow-sm mb-4 mt-4">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-center mt-10 text-4xl">Verificado</h1>
        <img src="../../public/verificado.webp" className="w-14 h-14"></img>
      </div>
      <main className="flex w-full justify-center items-cente">
        <div
          className="w-[800px] "
          data-v0-t="card"
        >
          <div className="flex flex-col space-y-1.0 p-6 justify-center items-center">
            <div className="border-2 rounded-lg w-3/4 md:w-2/4 p-4 bg-gray-200">
              <h3 className=" text-base md:text-2xl font-semibold leading-none tracking-tight ">
                Información del Trabajador
              </h3>
              <h6>Fecha: {date}</h6>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-2 rounded-lg p-2 bg-gray-200">
                <p className="text-gray-500 font-medium">Cédula:</p>
                <p className="">{identity_card}</p>
              </div>
              <div className="border-2 rounded-lg p-2 bg-gray-200">
                <p className="text-gray-500 font-medium">Nombre:</p>
                <p className="">{`${names} ${last_names}`}</p>
              </div>
              {/* <div>
                <p className="text-gray-500 font-medium">Departamento:</p>
                <p className="">{department}</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Cargo:</p>
                <p className="">{position}</p>
              </div> */}
              <div className="border-2 rounded-lg p-2 bg-gray-200">
                <p className="text-gray-500 font-medium">Estatus:</p>
                <p className="">{status === true ? "Activo" : "Inactivo"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
