import React from "react";
import { Link as MaterialLink, Typography, Box } from "@material-ui/core";

const Copyright = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#014421",
    color: "white",
    padding: 20,
    width: "100%",
    height: "100%",
  };

  const typographyStyle = {
    color: "white",
    fontFamily: "Montserrat-Regular",
  };

  return (
    <Box style={containerStyle}>
      <Typography variant="h6" color="textSecondary" align="center" style={typographyStyle}>
        {"Copyright © "}
        <MaterialLink color="inherit" href="https://www.scorelab.org">
          www.SCoReLab.org
        </MaterialLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Copyright;
