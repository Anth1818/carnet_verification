import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NotVerification } from "../components/NotVerification";
import { Verification } from "../components/Verification";
import { useParams } from "react-router-dom";

export function PageVerification() {
  const { id } = useParams();
  const API = `http://172.30.40.23:3000/license/${id}`;

  type Worker = {
    id: string;
    name: string;
    cargo: string;
    department: string;
    status: string;
    identity_card: string; // Add the 'identity_card' property
  };

  const [workerVerified, setWorkerVerified] = useState<Worker | null>(null); // Update the state type to Worker | null
  const [loading, setLoading] = useState<Boolean>((true));

  

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: " + response.status);
        }
      })
      .then((data) => {
        setWorkerVerified(data.data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      }).finally(() => {setLoading(false)});
  }, []);
  return (
    <>
      <Header />
      {loading && <div><h2 className="text-2xl">Verificando...</h2></div>}
      {workerVerified && !loading && (
        <Verification  worker={workerVerified} />
      )}
      {!workerVerified && !loading && <NotVerification id={id} />}
    </>
  );
}
