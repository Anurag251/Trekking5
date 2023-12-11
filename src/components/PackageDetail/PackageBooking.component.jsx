/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { apis } from "../../utils/apis";
import ReCAPTCHA from "react-google-recaptcha";
import { CustomInputComponent } from "../Contact.component";

const PackageBookingComponent = ({
  selectedData,
  choosenPrice,
  setChoosenPrice,
  popup,
}) => {
  const { setMessage, bookingPopupForm, setBookingPopupForm } =
    useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dateOfTravel: "",
    noOfDays: "",
    noOfPerson: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (isCaptchaVerified) {
      if (
        formValues.name !== "" ||
        formValues.email !== "" ||
        formValues.destination !== "" ||
        formValues.dateOfTravel !== "" ||
        formValues.noOfDays !== "" ||
        formValues.noOfPerson !== ""
      ) {
        apis
          .post("/booking", {
            name: formValues.name,
            email: formValues.email,
            phone: formValues.phone,
            destination: formValues.destination,
            dateoftravel: formValues.dateOfTravel,
            noofdays: formValues.noOfDays,
            noofperson: formValues.noOfPerson,
            comment: formValues.comment,
            trip_id: selectedData.id,
          })
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              setButtonLoading(false);
              setMessage({
                message: true,
                title: "Thank you",
                type: "success",
                desc: `Your Package is booked`,
              });
              setFormValues({
                ...formValues,
                name: "",
                email: "",
                phone: "",
                destination: "",
                dateOfTravel: "",
                noOfDays: "",
                noOfPerson: "",
                comment: "",
              });
            } else {
              setMessage({
                message: true,
                title: "Please Try Again",
                type: "error",
                desc: `Something went wrong`,
              });
            }
          })
          .catch((err) => {
            console.log(err);
            setButtonLoading(false);
          });
      } else {
        setButtonLoading(false);
        setMessage({
          message: true,
          title: "Failed",
          type: "error",
          desc: "All fields are required",
        });
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

  useEffect(() => {
    if (selectedData !== null) {
      setChoosenPrice(selectedData.price[0].value);
    }
  }, [selectedData]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleRecaptchaVerify = (value) => {
    setIsCaptchaVerified(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div
      className={`${
        popup
          ? `bookingPopupForm ${
              bookingPopupForm.isBookingPopupForm ? "active" : ""
            }`
          : ""
      }`}
    >
      <div
        className={`${popup ? `bookingPopupFormBg` : ""}`}
        onClick={() =>
          setBookingPopupForm({
            ...bookingPopupForm,
            isBookingPopupForm: false,
            date: "",
            price: "",
          })
        }
      ></div>

      <div className="start-booking">
        <div
          className={`${popup ? `bookingPopupFormClose` : ""}`}
          onClick={() =>
            setBookingPopupForm({
              ...bookingPopupForm,
              isBookingPopupForm: false,
              date: "",
              price: "",
            })
          }
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="title-sec">
          <div className="form-title">
            Start Booking
            <br />
            <small>Date: {bookingPopupForm.date}</small>
          </div>

          <div className="price">
            <span>per person</span> {bookingPopupForm.price}
          </div>
        </div>

        <div className="booking-form">
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
                  type="number"
                  name="phone"
                  label="Phone (optional)"
                  handleChange={handleChange}
                  value={formValues.phone}
                />
              </div>

              <div className="input-group">
                <CustomInputComponent
                  type="email"
                  name="email"
                  label="Email"
                  handleChange={handleChange}
                  value={formValues.email}
                />

                <CustomInputComponent
                  type="text"
                  name="destination"
                  label="Destination"
                  handleChange={handleChange}
                  value={formValues.destination}
                />
              </div>

              <CustomInputComponent
                type="date"
                name="dateOfTravel"
                label="Date of Travel"
                handleChange={handleChange}
                value={formValues.dateOfTravel}
                active
              />

              <CustomInputComponent
                type="text"
                name="noOfDays"
                label="No of Days eg: 14 Days"
                handleChange={handleChange}
                value={formValues.noOfDays}
              />

              <CustomInputComponent
                type="number"
                name="noOfPerson"
                label="No of Person"
                handleChange={handleChange}
                value={formValues.noOfPerson}
              />

              <CustomInputComponent
                name="comment"
                label="Comment/Remarks (optional)"
                handleChange={handleChange}
                value={formValues.comment}
                textarea
              />

              {/* <CustomInputComponent
                name="comment"
                label="Comment/Remarks (optional)"
                handleChange={(e) => setChoosenPrice(e.target.value)}
                value={choosenPrice !== null ? choosenPrice : ""}
                select
              >
                {selectedData.price.map((price, idx) => (
                  <option value={price.value} key={idx}>
                    {price.label} Rs {price.value}/-
                  </option>
                ))}
              </CustomInputComponent> */}
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
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PackageBookingComponent;
