import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  paper: {
    padding: "20px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "160px",
    boxShadow: "10px 10px 40px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  },
  mapPaper: {
    borderRadius: "20px",
  },
  mapContainer: {
    height: "90vh",
    width: "100%",
    marginTop: "10px",
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    alignSelf: "center",
    width: "120px",
    maxHeight: "100px",
    cursor: "pointer",
    boxShadow: "10px 10px 40px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
}));
