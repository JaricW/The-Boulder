const contactLayout = {
  display: "flex",
  justifyContent: "center",
  padding: "10px",
};

const contactFormLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  marginTop: "20px",
  marginBottom: "20px",
  border: "1px solid white",
  borderRadius: "10px",
  padding: "10px 10px 20px 10px",
};

const registrationStyle = {
  position: "absolute",
  marginLeft: "10%",
  width: "80%",
  background: "black",
  zIndex: "2",
};

const regFormLayout = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "10px",
  padding: "20px",
};

const headerStyle = { color: "orange" };

const listStyle = { textAlign: "left" };

const tickBoxStyle = { display: "flex", alignItems: "center", gap: "10px" };

const buttonHolderStyle = { position: "fixed", top: "10px", left: "10px" };

const confirmationStyle = {backgroundColor: "orange", position: "fixed", top: "50px", right: "10px"};

const allStyles = {
  contactLayout,
  contactFormLayout,
  registrationStyle,
  regFormLayout,
  headerStyle,
  listStyle,
  tickBoxStyle,
  buttonHolderStyle,
  confirmationStyle,
};

export default allStyles;
