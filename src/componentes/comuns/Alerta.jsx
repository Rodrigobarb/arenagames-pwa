import { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert';

const Alerta = ({ alerta }) => {

    const [exibir, setExibir] = useState(false);

    useEffect(() => {
        setExibir(true);
        const timer = setTimeout(() => {
            setExibir(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [alerta]);

    return (
        <div>
            {(alerta.message && alerta.message.length > 0 && exibir) &&
                <Alert variant={alerta.status === 'error' ? 'danger' : 'success'}>
                    <i className={alerta.status === 'error' ? 'bi bi-exclamation-triangle' : 'bi bi-check-circle'}></i>{' '}
                    {alerta.message}
                </Alert>
            }
        </div>
    )
}

export default Alerta;
