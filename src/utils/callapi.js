export const createContactMe = async (data) => {
  try {
    const apiURL = import.meta.env.VITE_API_URL;
    console.log(apiURL);
    const response = await fetch(apiURL + "/contact-me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Handle successful response
    console.log("Form submitted successfully");
    // You can perform additional actions here, such as updating state or showing a success message
  } catch (error) {
    // Handle error
    console.error("There was a problem with the fetch operation:", error);
    // You can also update state to display an error message to the user
  }
};
