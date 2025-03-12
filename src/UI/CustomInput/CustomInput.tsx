import "./CustomInput.css";
import { Container, Form } from "react-bootstrap";
import "./Custominput.css";

interface Props {
  label?: string;
  placeholder: string;
  type: string;
  message?: string;
  fileType?: string;
  functionality?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean,
}

function CustomInput({
  label,
  placeholder,
  type,
  message,
  functionality,
  onChange,
  error
}: Props) {
  
  return (
    <>
      <Form.Group>
        {functionality === "uploadFile" ? (
          <>
            <Form.Group controlId="formFileMultiple" className="mb-3" >
              <Form.Control type={type} onChange={onChange}  />
              { error && <Container style={{color:'red'}}>{'Please Upload File !!'}</Container>}
              
              <div style={{ textAlign: "center" }}>{message}</div>
            </Form.Group>
          </>
        ) : (
          <>
            <Form.Label className="label">{label}</Form.Label>
            <Form.Control
              type={type}
              placeholder={placeholder}
              className="w-100"
              accept="pdf"
              onChange={onChange}
            />
           { error && <Container style={{color:'red'}}>{`${label} required !!`}</Container>}
            <Container style={{ textAlign: "center", color: 'red' }}>{message}</Container>
          </>
        )}
      </Form.Group>
    </>
  );
}

export default CustomInput;
