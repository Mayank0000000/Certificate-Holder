import CustomInput from "../../UI/CustomInput/CustomInput";
import { Container, Button } from "react-bootstrap";
import "./AddDetails.css";
import { InputType } from "../../utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsActions } from "../../store/detailsSlice";

interface FormValues {
  certification: string;
  issuer: string;
  file: File | string;
}

const AddDetails = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    certification: "",
    issuer: "",
    file: "",
  });
  const [errors, setErrors] = useState<{
    certification: boolean;
    issuer: boolean;
    file: boolean;
  }>({
    certification: false,
    issuer: false,
    file: false,
  });

  const dispatch = useDispatch();

  const totalCertificateCount = useSelector(
    (state) => state.details.totalFileUploaded
  );

  const onChangeHandler: (e: any) => void = (e) => {
    const { placeholder, value, type, files } = e.target;
    setFormValues((prev) => ({
      ...prev,
      file: type === "file" && files ? files[0] : prev.file,
      certification:
        placeholder === "Enter certification name" ? value : prev.certification,
      issuer: placeholder === "Enter issuer" ? value : prev.issuer,
    }));

    setErrors((prev) => ({
      ...prev,
      certification:
        placeholder === "Enter certification name" ? false : prev.certification,
      issuer: placeholder === "Enter issuer" ? false : prev.issuer,
      file: type === "file" ? false : prev.file,
    }));
  };

  const submitDetailsHandler: () => void = () => {
    const validFileTypes: string[] = ["application/pdf", "image/jpeg"];

    const newErrors = {
      certification: !formValues.certification,
      issuer: !formValues.issuer,
      file: !formValues.file,
    };
    setErrors(newErrors);
    
    if (totalCertificateCount >= 5) {
      alert("5 Certificates added. Cannot add more!!");
      return
    }

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    if (!validFileTypes.includes(formValues.file.type)) {
      alert("File format should be PDF or JPG only");
      return;
    }

    dispatch(
      detailsActions.fetchDetails({
        certification: formValues.certification,
        issuer: formValues.issuer,
        file: formValues.file,
      })
    );
  };

  return (
    <Container className="add-details-container">
      <Container className="add-details-grid">
        {InputType.map((curr) => (
          <CustomInput
            message={curr.message}
            type={curr.type}
            placeholder={curr.placeholder}
            label={curr.label}
            key={curr.id}
            functionality={curr.functionality}
            onChange={onChangeHandler}
            error={
              errors[
                curr.functionality === "uploadFile"
                  ? "file"
                  : curr.placeholder === "Enter certification name"
                  ? "certification"
                  : "issuer"
              ]
            }
          />
        ))}
      </Container>

      <Container className="d-flex justify-content-end">
        <Button onClick={submitDetailsHandler} className="add-details-button">
          Save Certification
        </Button>
      </Container>
    </Container>
  );
};

export default AddDetails;
