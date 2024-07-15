import { Header } from "../components/Header";
import { NotVerification } from "../components/NotVerification";
import { Verification } from "../components/Verification";
import { useParams } from "react-router-dom";

const data_worker = [
  {
    id: "27451286",
    name: "Juan Perez",
    cargo: "Director",
    department: "Sistemas",
    status: "Activo",
  },
  {
    id: "27451287",
    name: "Maria Rodriguez",
    cargo: "Gerente",
    department: "Ventas",
    status: "Activo",
  },
  {
    id: "27451288",
    name: "Pedro Martinez",
    cargo: "Analista",
    department: "Sistemas",
    status: "Activo",
  }, 
];

export function PageVerification() {
  const { id } = useParams();
    const worker = data_worker.find((worker) => worker.id === id);

  return (
    <>
      <Header />
      {worker && <Verification id={worker.id} worker={worker} />}
      {!worker && <NotVerification id={id} />}
    </>
  );
}
