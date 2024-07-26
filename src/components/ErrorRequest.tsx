

export const ErrorRequest = ({ error }: { error: string }) => {
    return (
        <div className="rounded-lg border text-card-foreground shadow-sm mb-4 mt-4">
            <div className="flex flex-col justify-center items-center gap-2">
                <h1 className="text-center mt-10 text-4xl">Error en conexión con el servidor</h1>
                <img src="../../public/down_server.png" className="w-16 bg-white"></img>
            </div>
            <main className="flex w-full justify-center items-cente">
                <div
                    className="w-[800px] shadow-sm mb-4 mt-4 "
                    data-v0-t="card"
                >
                    <div className="flex flex-col space-y-1.0 p-6 justify-center items-center">
                        <h6>{error}</h6>
                    </div>
                </div>
            </main>
        </div>
    );
}