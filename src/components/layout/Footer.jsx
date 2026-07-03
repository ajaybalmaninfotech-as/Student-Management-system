const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1f2937",
        color: "#ffffff",
        marginTop: "40px",
        padding: "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          StudentMS
        </h3>

        <p
          style={{
            margin: 0,
            fontSize: "15px",
            color: "#d1d5db",
          }}
        >
          © {currentYear} Student Management System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;