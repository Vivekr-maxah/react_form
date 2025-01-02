import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    FullName: "",
    Email: "",
    MobileNo: "",
    Address: "",
    Nationality: "",
    DateOfBirth: "",
    Gender: "",
    HighestDegree: "",
    CPI: "",
    University: "",
    PassingYear: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="FullName"
              className="form-control"
              value={inputs.FullName}
              onChange={handleChange}
              placeholder="Full Name..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              name="Email"
              className="form-control"
              value={inputs.Email}
              onChange={handleChange}
              placeholder="Email..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Mobile No</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="MobileNo"
              className="form-control"
              value={inputs.MobileNo}
              onChange={handleChange}
              placeholder="Mobile No..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="Address"
              className="form-control"
              value={inputs.Address}
              onChange={handleChange}
              placeholder="Address..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Nationality</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="Nationality"
              className="form-control"
              value={inputs.Nationality}
              onChange={handleChange}
              placeholder="Nationality..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Date of Birth</label>
          <div className="col-sm-10">
            <input
              type="date"
              name="DateOfBirth"
              className="form-control"
              value={inputs.DateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Gender</label>
          <div className="col-sm-10 d-flex">
            <div className="form-check me-3">
              <input
                className="form-check-input"
                type="radio"
                name="Gender"
                value="Male"
                checked={inputs.Gender === "Male"}
                onChange={handleChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="Gender"
                value="Female"
                checked={inputs.Gender === "Female"}
                onChange={handleChange}
              />
              <label className="form-check-label">Female</label>
            </div>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Highest Degree</label>
          <div className="col-sm-10">
            <select
              name="HighestDegree"
              className="form-select"
              value={inputs.HighestDegree}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Highest Degree
              </option>
              <option value="MCA">MCA</option>
              <option value="B.TECH">B.TECH</option>
              <option value="BBA">BBA</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">CPI</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="CPI"
              className="form-control"
              value={inputs.CPI}
              onChange={handleChange}
              placeholder="CPI..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">University</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="University"
              className="form-control"
              value={inputs.University}
              onChange={handleChange}
              placeholder="University..."
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Passing Year</label>
          <div className="col-sm-10">
            <select
              name="PassingYear"
              className="form-select"
              value={inputs.PassingYear}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Passing Year
              </option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
        </div>

        <div className="col-sm-10 text-center">
          <button className="btn btn-outline-primary" type="submit">
            Submit
          </button>
          <button
            className="btn btn-outline-secondary ms-3"
            type="button"
            onClick={() => setInputs({})}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
