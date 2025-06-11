import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;