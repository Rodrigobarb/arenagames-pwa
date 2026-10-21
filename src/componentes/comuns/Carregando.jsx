import Spinner from 'react-bootstrap/Spinner';

export default function Carregando(props) {
    return (
        <>
            {
                !props.carregando ? props.children :
                    <div className="d-flex align-items-center gap-2 m-5">
                        <Spinner animation="border" variant="info" />
                        <strong role="status">Carregando...</strong>
                    </div>
            }
        </>
    )
}
