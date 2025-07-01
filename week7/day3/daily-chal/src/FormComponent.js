import React from "react";

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <br />
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>
      <br />

      <label>
        Destination:
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
        >
          <option value="">-- Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
          <option value="Norway">Norway</option>
        </select>
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={data.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free
      </label>
      <br />

      <button type="submit">Submit</button>

      <hr />
      <h3>Entered Information:</h3>
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Destination: {data.destination}</p>
      <p>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</p>
    </form>
  );
}

export default FormComponent;
