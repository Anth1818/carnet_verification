import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { NotVerification } from "../components/NotVerification";
import { Verification } from "../components/Verification";
import { useParams } from "react-router-dom";
import { ErrorRequest } from "../components/ErrorRequest";

export function PageVerification() {
  const { id } = useParams();
  const API = `http://172.30.60.24:3000/license/${id}`;

  type Worker = {
    id: string;
    name: string;
    cargo: string;
    department: string;
    status: string;
    identity_card: string; // Add the 'identity_card' property
  };

  const [workerVerified, setWorkerVerified] = useState<Worker | null>(null); // Update the state type to Worker | null
  const [loading, setLoading] = useState<Boolean>(true);
  const [errorRequest, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status.toString());
        }
      })
      .then((data) => {
        setWorkerVerified(data.data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error instanceof TypeError) {
          setError("La API no está en línea o hay un problema de red");
        } else {
          setError(`Error: ${error.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <>
      <Header />
      {loading && <div>Verificando...</div>}
      {errorRequest && <ErrorRequest error={errorRequest}/>}
      {workerVerified && !loading && <Verification worker={workerVerified} />}
      {!workerVerified && !loading && !errorRequest && <NotVerification id={id} />}
    </>
  );
}
