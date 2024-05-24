/* eslint-disable */
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HOCForm = (props) => {
  const {
    endpoint,
    selector,
    cleanFormErrors,
    validate,
    Component,
    errorSelector,
  } = props;

  return () => {
    const dispatch = useDispatch();
    // console.log("empoint ", endpoint);
    // console.log("selector", selector);
    const obj = useSelector(selector);
    const errors = useSelector(errorSelector);
    const [formData, setFormData] = useState({});
    const [statusResponse, setStatusResponse] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const isMountedRef = useRef(null);

    useEffect(() => {
      isMountedRef.current = true;
      return () => (
        dispatch(cleanFormErrors({})), (isMountedRef.current = false)
      );
    }, []);

    useEffect(() => {
      if (statusResponse) {
        setFormData({});
        setFormSubmitted(false);
      }
    }, [statusResponse]);

    const handleChange = (e) => {
      setStatusResponse(false);
      setFormSubmitted(false);
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      validate(e, null, dispatch, errors);
    };
    const cancelButton = () => {
      return null;
    };
    const handleSubmit = async (e) => {
      e.preventDefault();

      const hasErrors = Object.values(errors).some((error) => error !== "");
      if (hasErrors) {
        console.log("Form has errors. Please fix them before submitting.");
        return;
      }
      try {
        setFormSubmitted(true);
        const formDataBody = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataBody.append(key, value);
        });
        formDataBody.append("id", obj.id);
        const response = await fetch(endpoint, {
          method: "POST",
          body: formDataBody,
        });
        if (isMountedRef.current) {
          if (response.ok) {
            const { status } = await response.json();
            if (status) {
              setStatusResponse(status);
            }
          }
        }
      } catch (error) {
        if (isMountedRef.current) {
          console.error("Error de red:", error);
        }
      }
    };
    return (
      <Component
        {...props}
        formData={formData}
        setFormData={setFormData}
        statusResponse={statusResponse}
        formSubmitted={formSubmitted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelButton={cancelButton}
        errors={errors}
      />
    );
  };
};

HOCForm.propTypes = {
  endpoint: PropTypes.string,
  obj: PropTypes.object,
  errors: PropTypes.object,
};

export default HOCForm;
