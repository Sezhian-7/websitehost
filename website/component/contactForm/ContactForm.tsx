import { useFormik } from "formik";
import * as Yup from "yup";
import File from "../../asset/image/svg/File";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { SelectDropdown } from "../Select/SelectDropdown";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";
import Thankyou from "../../asset/image/svg/Thankyou";

export const ContactForm = () => {
  // interface RecaptchaRef {
  //   current: any;
  // }
  // const recaptchaRef: RecaptchaRef = React.createRef();
  const API_KEY: any = process.env.REACT_APP_SITE_KEY;
  const optionsData = [
    { label: "General enquiry", value: "General enquiry" },
    { label: "Applying for a position", value: "Applying for a position" },
  ];
  const [isLoading, setLoading] = useState<any>(false);
  const buffer = new ArrayBuffer(8);

  // const [fileBase64, setFileBase64] = useState<any>("");
  // const [error, setError] = useState<any>("");
  const [file, setFlie] = useState<any>({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: "",
    subject: "",
  });
  

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <form
          className="form-block"
          // onSubmit={formik.handleSubmit}
          action="https://getform.io/f/adbe772a-4c63-4d6c-9763-c214736d7f45"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="form-inner-container">
            <div className="input-container">
              <label htmlFor="nameInput">Name*</label>
              <input
                type="text"
                name="name"
                id="nameInput"
                value={file.name}
                onChange={(e) => {
                  setFlie({ ...file, name: e.target.value });
                }}
                required
                placeholder="Enter your name"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.name}
              />
              {/* {formik.touched.name && formik.errors.name && (
                <div className="errors">{formi <script src="https://www.google.com/recaptcha/api.js"></script>k.errors.name}</div>
              )} */}
            </div>
            <div className="input-container">
              <label htmlFor="emailInput">Email address*</label>
              <input
                type="email"
                name="email"
                id="emailInput"
                value={file.email}
                onChange={(e) => {
                  setFlie({ ...file, email: e.target.value });
                }}
                placeholder="Enter your email address"
                required
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
              {/* {formik.touched.email && formik.errors.email && (
                <div className="errors">{formik.errors.email}</div>
              )} */}
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="nameInput">Phone number*</label>
            <input
              type="number"
              name="phone"
              id="phoneInput"
              value={file.phone}
              onChange={(e) => {
                setFlie({ ...file, phone: e.target.value });
              }}
              placeholder="Enter your contact number "
              required
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.phone}
            />
            {/* {formik.touched.phone && formik.errors.phone && (
              <div className="errors">{formik.errors.phone}</div>
            )} */}
          </div>
          <div className="input-container">
            <label htmlFor="subInput">Subject</label>
            <SelectDropdown
              name="subject"
              id="subInput"
              options={optionsData}
              value={file.subject}
              onChange={(e) => {
                setFlie({ ...file, subject: e.value });
              }}
              // onChange={(e: any) => {
              //   setDropDown(e.value);
              // }}
              // value={dropDown}

              // onChange={(e: any) => formik.setFieldValue('subject', e.value)}
              // value={formik.values.subject}
            />
          </div>

          <div className="input-container">
            <label htmlFor="msgInput">Message*</label>
            <textarea
              name="message"
              id="msgInput"
              placeholder="Enter your Message"
              value={file.message}
              onChange={(e) => {
                setFlie({ ...file, message: e.target.value });
              }}
              required
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.message}
            />
            {/* {formik.touched.message && formik.errors.message && (
              <div className="errors">{formik.errors.message}</div>
            )} */}
          </div>
          <div>
            <div className="fileUpload">
              <label htmlFor="fileUpload">
                <File />
                <span className="browse_font cursor-pointer">
                  Browse to attach a file
                </span>
                <span className={file.resume ? "file_uploaded" : "hidden"}>
                  <Thankyou />
                </span>
              </label>
              <input
                name="resume"
                type="file"
                id="fileUpload"
                accept=".pdf"
                value={file.resume}
                onChange={(e) => {
                  setFlie({ ...file, resume: e.target.value });
                }}
              />
              {/* <p
                className={`${
                  error === "Upload only pdf" ? "error-msg" : "hidden"
                }`}
              >
                {error}
              </p> */}
            </div>
            <div className="mt-12 mb-14">
              {/* <ReCAPTCHA ref={recaptchaRef} sitekey={API_KEY} /> */}
              <div className="g-recaptcha" data-sitekey={API_KEY}></div>
              {/* <p
                className={`${
                  recaptchaError === "Please confirm that you are not a robot."
                    ? "error-msg"
                    : "hidden"
                }`}
              >
                {recaptchaError}
              </p> */}
            </div>
          </div>
          <div className="form-btn cursor-pointer">
            {/* {error && error ? (
              <button className="btn primary-btn" disabled>
                SEND
              </button>
            ) : ( */}
            <button className="btn primary-btn" type="submit">
              SEND
            </button>
            {/* )} */}
          </div>
        </form>
      )}
      {isLoading ? <Loader /> : ""}
    </>
  );
};
