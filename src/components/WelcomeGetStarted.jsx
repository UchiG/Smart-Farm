export const WelcomeGetStarted = ({  handleNext,setFarmFormData }) => {
   
  return (
    <div className="welcomeGetStartedParent">
      <div className="welcomeGetStaredChild getStartedFormParent">
        <form action="" className="getStartedForm">
          <div className="welcomeGetStartedInputField">
            <label htmlFor="farmName" className="welcomeGetStartedInputLabe">
              Farm Name
            </label>
            <input type="text" className="welcomeGetStartedInput" />
          </div>
          <div className="welcomeGetStartedInputField">
            <label htmlFor="address" className="welcomeGetStartedInputLabe">
              Address
            </label>
            <input type="text" className="welcomeGetStartedInput" />
          </div>
          <div className="welcomeGetStartedInputField">
            <label htmlFor="country" className="welcomeGetStartedInputLabel">
              Country
            </label>
            <select
              name="country" // Set the name attribute to identify the field
              id="country" // Set the id attribute if needed
              className="welcomeGetStartedInput"
            //   value={formData.country} // Match the selected value with formData
            //   onChange={handleChange}
            >
              <option value="">Select a country</option>
              <option value="botswana">BOTSWANA</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              {/* Add more country options as needed */}
            </select>
          </div>

          <div className="welcomeGetStartedInputField">
            <label htmlFor="district" className="welcomeGetStartedInputLabe">
              District
            </label>
            <input type="text" className="welcomeGetStartedInput" />
          </div>
          <div className="welcomeGetStartedInputField">
            <label htmlFor="city" className="welcomeGetStartedInputLabe">
              City
            </label>
            <input type="text" className="welcomeGetStartedInput" />
          </div>
          <button
            type="submit"
            className="welcomeGetStartedPageButton welcomeGetStartedPageButton-2"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </form>
      </div>
      <div className="welcomeGetStaredChild getStartedImage"></div>
    </div>
  );
};
