export default function SidebarCard() {
  return (
    <div
      style={{
        width: "420px",
        backgroundColor: "black",
        borderRadius: "28px",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Acme Inc
      </h1>

      <p style={menuStyle}>playground</p>
      <p style={menuStyle}>moduls</p>
      <p style={menuStyle}>documentation</p>
      <p style={menuStyle}>settings</p>
    </div>
  );
}

const menuStyle = {
  color: "#7d8fb3",
  fontSize: "20px",
  marginBottom: "32px",
};
