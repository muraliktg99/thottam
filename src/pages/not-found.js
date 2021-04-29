import { useEffect } from "react";

export default function NotFound() {
    useEffect(() => {
        document.title = 'Not Found';
    }, [])
    return (
        <h1>Not Found !</h1>
    );
}