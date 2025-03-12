import { Container } from "react-bootstrap";
import "./Results.css";
import { useSelector } from "react-redux";

const Results = () => {
  const data = useSelector((state) => state.details);
  const result = data.certificates.map((curr: any) => curr);

  const viewCertificate: (i: number) => void = (i) => {
    const blobFile = data.certificates[i].file
    const fileURL = URL.createObjectURL(blobFile)
    window.open(fileURL, "_blank")
  };

  return (
    <>
      {data.totalFileUploaded > 0 &&
        result.map((curr, i: number) => {
          return (
            <Container className="results">
              <Container className="result">
                <span className="total__count">{i + 1}</span>
                <span className="certification">{curr.certification}</span>
                <span className="issuer">{curr.issuer}</span>
              </Container>
              <Container onClick={() => viewCertificate(i)} className="link">
                View Certification
              </Container>
            </Container>
          );
        })}
    </>
  );
};

export default Results;
