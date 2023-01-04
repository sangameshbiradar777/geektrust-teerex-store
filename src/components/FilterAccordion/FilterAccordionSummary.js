import { AccordionSummary, Typography } from "@mui/material";

const FilterAccordionSummary = ({filterCategory}) => {
  return (
    <AccordionSummary
      expandIcon={
        <ion-icon
          style={{ fontSize: "1.2rem" }}
          name="chevron-down-outline"
        ></ion-icon>
      }
      aria-controls={filterCategory}
      id={filterCategory}
      sx={{
        "& MuiAccordionSummary-content": {
          margin: 0,
        },
        minHeight: "0 !important",
      }}
    >
      <Typography sx={{ fontSize: 17, color: "#111" }}>
        {filterCategory}
      </Typography>
    </AccordionSummary>
  );
}

export default FilterAccordionSummary;