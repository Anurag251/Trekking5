/* eslint-disable react/prop-types */

import { Fragment, useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { apis } from "../utils/apis";
import { Link } from "react-router-dom";
import PageBannerComponent from "./PageBanner.component";
import ReCAPTCHA from "react-google-recaptcha";
import contactBannerIamge from "../assets/images/Khijee-toledamba.jpg";

export const ContactComponent = ({ subTitle, title }) => {
  const { setMessage, contactDatas, contactPopup, setContactPopup } =
    useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (isCaptchaVerified) {
      if (
        formValues.name !== "" ||
        formValues.email !== "" ||
        formValues.subject !== "" ||
        formValues.message !== ""
      ) {
        apis
          .post("/send/message", {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            subject: formValues.subject,
            message: formValues.message,
          })
          .then((res) => {
            if (res.status === 200) {
              setButtonLoading(false);

              setMessage({
                message: true,
                title: "Thank you",
                type: "success",
                desc: "Your message is sent",
              });

              setFormValues({
                ...formValues,
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            } else {
              setButtonLoading(false);
              setMessage({
                message: true,
                title: "Failed",
                type: "error",
                desc: "Something went wrong",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            setButtonLoading(false);
          });
      } else {
        setMessage({
          message: true,
          title: "Failed",
          type: "error",
          desc: "All fields are required",
        });
        setButtonLoading(false);
      }
    } else {
      setButtonLoading(false);
      setMessage({
        message: true,
        title: "Failed",
        type: "error",
        desc: "Verify ReCaptcha",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleRecaptchaVerify = (value) => {
    // console.log("Captcha value:", value);
    setIsCaptchaVerified(true);
  };

  return (
    <div className="contact-page">
      <PageBannerComponent image={contactBannerIamge}>
        {location.pathname.split("/")[1].replace(/-/g, " ")}
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="contact-page-area">
            <div className="contact-form">
              <div className="contact-title">
                <div className="title-area">
                  <h2>{title}</h2>
                </div>

                <p>{subTitle}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                  <div className="input-group">
                    <CustomInputComponent
                      type="text"
                      name="name"
                      label="Full Name"
                      handleChange={handleChange}
                      value={formValues.name}
                    />

                    <CustomInputComponent
                      type="email"
                      name="email"
                      label="Email"
                      handleChange={handleChange}
                      value={formValues.email}
                    />
                  </div>

                  <CustomInputComponent
                    type="number"
                    name="phone"
                    label="Phone"
                    handleChange={handleChange}
                    value={formValues.phone}
                  />

                  <div className="input-group">
                    <CustomInputComponent
                      type="text"
                      name="subject"
                      label="Subject"
                      handleChange={handleChange}
                      value={formValues.subject}
                    />
                  </div>

                  <CustomInputComponent
                    name="message"
                    label="Your message"
                    handleChange={handleChange}
                    value={formValues.message}
                    textarea
                  />
                </div>

                <div className="recaptcha">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={handleRecaptchaVerify}
                  />
                </div>

                <button
                  className={`submit-btn ${buttonLoading ? "active" : ""}`}
                  disabled={isCaptchaVerified ? false : true}
                >
                  Submit
                </button>
              </form>
            </div>

            <div>
              <div className="contact-details">
                <div className="contact-title">
                  <h2>Contact Us</h2>
                </div>

                <div className="list">
                  <div className="item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4ZM12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19C12 19 18 12.4 18 8C18 4.7 15.3 2 12 2ZM12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8C14 6.9 13.1 6 12 6ZM20 19C20 21.2 16.4 23 12 23C7.6 23 4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21C15.3 21 18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    <div className="text-area">
                      <h4>Address</h4>
                      <h6>{contactDatas && contactDatas.branding.address}</h6>
                    </div>
                  </div>

                  <div className="item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.57062 7.88625C5.28487 6.00225 6.61537 4.30575 8.64787 3.68325C9.00874 3.57279 9.39817 3.60418 9.7367 3.77101C10.0752 3.93783 10.3374 4.22753 10.4696 4.581L11.1214 6.321C11.2262 6.60089 11.2449 6.9057 11.1753 7.19635C11.1057 7.48699 10.9508 7.75021 10.7306 7.95225L8.79187 9.7305C8.69625 9.81834 8.625 9.92944 8.58505 10.053C8.54509 10.1765 8.5378 10.3083 8.56387 10.4355L8.58112 10.5135L8.62912 10.7092C8.67187 10.8742 8.73637 11.1067 8.82712 11.3842C9.00712 11.9355 9.29437 12.6765 9.72187 13.4167C10.1494 14.157 10.6474 14.7765 11.0344 15.2077C11.2359 15.4323 11.4466 15.6485 11.6659 15.8557L11.7259 15.9112C11.8228 15.9971 11.9404 16.0564 12.0671 16.0834C12.1938 16.1103 12.3253 16.104 12.4489 16.065L14.9584 15.2752C15.2435 15.1856 15.5489 15.1832 15.8354 15.2683C16.1219 15.3535 16.3764 15.5222 16.5664 15.753L17.7536 17.1945C18.2486 17.7945 18.1901 18.6765 17.6209 19.2067C16.0654 20.6565 13.9264 20.9542 12.4384 19.7572C10.6145 18.2862 9.07687 16.4921 7.90237 14.4645C6.71816 12.4383 5.92706 10.2067 5.57062 7.887V7.88625ZM10.1351 10.5337L11.7446 9.05775C12.1851 8.65367 12.4948 8.12723 12.634 7.54595C12.7733 6.96466 12.7357 6.35503 12.5261 5.79525L11.8736 4.05525C11.6074 3.34434 11.0801 2.76172 10.3992 2.42614C9.71831 2.09057 8.93505 2.0273 8.20912 2.24925C5.68537 3.02175 3.65887 5.2845 4.08787 8.11125C4.47261 10.6178 5.3268 13.0292 6.60562 15.219C7.87242 17.4055 9.53079 19.3402 11.4979 20.9265C13.7291 22.719 16.7096 22.1077 18.6439 20.304C19.1973 19.7882 19.5332 19.0806 19.5829 18.3257C19.6327 17.5707 19.3926 16.8253 18.9116 16.2412L17.7244 14.7997C17.3444 14.3381 16.8352 14.0004 16.2621 13.8302C15.6889 13.6599 15.078 13.6648 14.5076 13.8442L12.4249 14.4997C12.3316 14.4039 12.2404 14.3061 12.1511 14.2065C11.7231 13.7329 11.3444 13.217 11.0209 12.6667C10.7059 12.1113 10.4484 11.5253 10.2521 10.9177C10.2105 10.7906 10.1715 10.6625 10.1351 10.5337V10.5337Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    <div className="text-area">
                      <h4>Contact Number</h4>
                      <Link
                        to={`tel:${
                          contactDatas && contactDatas.branding.phone
                        }`}
                      >
                        <h6>{contactDatas && contactDatas.branding.phone}</h6>
                      </Link>
                    </div>
                  </div>

                  <div className="item">
                    <div className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5V4.5ZM19.35 6L12 11.085L4.65 6H19.35ZM3 18V6.6825L11.5725 12.615C11.698 12.7021 11.8472 12.7488 12 12.7488C12.1528 12.7488 12.302 12.7021 12.4275 12.615L21 6.6825V18H3Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    <div className="text-area">
                      <h4>Email Address</h4>

                      <Link
                        to={`mailto:${
                          contactDatas && contactDatas.branding.email
                        }`}
                      >
                        <h6>{contactDatas && contactDatas.branding.email}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CustomInputComponent = ({
  type,
  name,
  label,
  handleChange,
  select,
  textarea,
  password,
  children,
  icon,
  error,
  image,
  active,
  ...otherProps
}) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div
      className={`group ${error ? "error" : ""} ${textarea ? "textarea" : ""} ${
        type === "file" ? `fileType ${image !== null ? "active" : ""}` : ""
      } `}
    >
      {select ? (
        <Fragment>
          <select
            className={`custom-input ${
              otherProps.value.length ? "active" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
            {...otherProps}
          >
            {children}
          </select>
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </Fragment>
      ) : textarea ? (
        <Fragment>
          <textarea
            className={`custom-input ${
              otherProps.value.length ? "active" : active ? "autoActive" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
          >
            {children}
          </textarea>
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : active ? "autoActive" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </Fragment>
      ) : (
        <div className={`inner-input`}>
          <input
            type={password ? (togglePassword ? "text" : "password") : type}
            className={`custom-input ${
              otherProps.value.length ? "active" : active ? "autoActive" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
            {...otherProps}
          />

          {icon ? (
            password ? (
              <div
                className={`input-icon eye-icon ${
                  togglePassword ? "active" : ""
                }`}
                onClick={() => {
                  setTogglePassword(!togglePassword);
                }}
              >
                {icon}
              </div>
            ) : (
              <div className="input-icon">{icon}</div>
            )
          ) : null}
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : active ? "autoActive" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </div>
      )}
      {error ? <p className="input-error">{error}</p> : null}
    </div>
  );
};
