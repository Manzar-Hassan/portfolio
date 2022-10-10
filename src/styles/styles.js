import { Button, Fab, Paper, styled, Typography } from "@mui/material";

// ---------------------------------Navbar---------------------

// page logo
export const StyledLogo = styled("h3")({
  fontFamily: "'Satisfy', cursive",
  fontWeight: "bold",
});

// switch button
// export const StyledSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase": {
//     color: theme.orange,

//     "& + .MuiSwitch-track": {
//       opacity: 1,
//       backgroundColor: theme.yellow,
//     },
//   },
// }));

// contact me button
export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.orange,
  lineHeight: 1,
  borderRadius: "34px",
  fontSize: "1rem",
  color: "#fff",
  border: "none",
  padding: "10px",
  background: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
  boxShadow: "0px 20px 24px 3px rgba(251,161,40,0.42)",
  textTransform: "none",
  "&:hover": {
    background: "#fff",
    color: theme.orange,
    border: `1px solid ${theme.orange}`,
    boxShadow: "0px 20px 24px 3px rgba(251,161,40,0.42)",
  },
}));

// nav links
export const StyledNavLinks = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "16px",
  color: theme.grey,
  "&:hover": {
    color: theme.orange,
    background: "none",
  },
}));

//-----------------------------------------main dashboard page------------------------

// left-side
export const StyledHello = styled(Typography)(({ theme }) => ({
  color: theme.black,
  fontSize: "3rem",
  fontWeight: 700,
}));

export const StyledName = styled(Typography)(({ theme }) => ({
  color: theme.orange,
  fontSize: "3rem",
  fontWeight: 800,
}));

export const StyledDesc = styled(Typography)(({ theme }) => ({
  color: theme.grey,
  fontSize: "1.2rem",
}));

export const StyledSocialLinks = styled("img")({
  height: "3rem",
  width: "3rem",
  "&:hover": {
    cursor: "pointer",
  },
});

// --------------------------------------page blur effect---------------------------

export const StyledBlueEffect = styled("div")({
  position: "absolute",
  width: "22rem",
  height: "14rem",
  borderRadius: "50%",
  filter: "blur(72px)",
  zIndex: -9,
});

// --------------------------------------skills page----------------------------------

// --------------------------------------skill text-------------------

export const StyledSkillText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontWeight: 400,
  color: theme.black,
  fontSize: "2rem",
}));

// ------------------------------------------skills cards------------------------------

export const StyledSkillCard = styled(Paper)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  fontFamily: "'Nunito', sans-serif",
  fontSize: 16,
  borderRadius: "15px",
  border: "rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.2)",
  minWidth: "10rem",
});

// ------------------------------------------About page styled card---------------------------

export const StyledAboutCard = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem",
  border: "3px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.2)",
  backdropFilter: "blur(5px)",
  borderRadius: "15px",
  boxShadow: "0px 20px 24px 3px rgba(251,161,40,0.42)",
  position: "relative",
  flexDirection: "column",
  gap: "2rem",
});

export const StyledDownloadButton = styled(Fab)(({ theme }) => ({
  backgroundColor: theme.orange,
  lineHeight: 1,
  borderRadius: "34px",
  fontSize: "1rem",
  color: "#fff",
  border: "none",
  padding: "10px",
  background: "linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)",
  boxShadow: "0px 20px 24px 3px rgba(251,161,40,0.42)",
  textTransform: "none",
  "&:hover": {
    background: "#fff",
    color: theme.orange,
    border: `1px solid ${theme.orange}`,
    boxShadow: "0px 20px 24px 3px rgba(251,161,40,0.42)",
  },
}));

// ---------------------------------------Contact page input-------------------------

export const StyledTextField = styled("input")(({ theme }) => ({
  width: "25rem",
  padding: "0.5rem 1rem",
  fontFamily: "'Nunito', sans-serif",
  fontSize: "1.1rem",
  fontWeight: 600,
  border: `3px solid ${theme.orange}`,
  borderRadius: "20px",
  outline: "none",
  color: theme.black,
}));

export const StyledTextArea = styled("textarea")(({ theme }) => ({
  width: "25rem",
  padding: "0.5rem 1rem",
  fontFamily: "'Nunito', sans-serif",
  fontSize: "1.1rem",
  fontWeight: 600,
  border: `3px solid ${theme.orange}`,
  borderRadius: "20px",
  outline: "none",
  color: theme.black,
}));
