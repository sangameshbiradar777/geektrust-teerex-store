import { Stack } from "@mui/system";

function ErrorIcon({ icon }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 150,
        width: 150,
        borderRadius: 6,
        backgroundColor: "#E8E8E8",
      }}
    >
      <ion-icon
        style={{ height: 100, width: 100, color: "#777" }}
        name={`${icon}-outline`}
      ></ion-icon>
    </Stack>
  );
}

export default ErrorIcon;
