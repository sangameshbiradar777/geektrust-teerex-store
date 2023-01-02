import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  TextField,
  InputAdornment
} from "@mui/material";

const FilterAccordion = ({ filter, filterCategory, handleOnFilterChange, render, isRangeSlider }) => {
  
  const getFilterItems = () => {
    const filterItems = Object.entries(filter).map((filterItem, index) => {
      return (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              checked={filterItem[1]}
              inputProps={{ "data-category": filterCategory }}
              onChange={handleOnFilterChange}
              name={filterItem[0]}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 21 } }}
            />
          }
          label={`${filterItem[0].charAt(0).toUpperCase()}${filterItem[0]
            .split("")
            .slice(1)
            .join("")}`}
        />
      );
    });
    return filterItems;
  }
  

  return (
    <Accordion
      defaultExpanded={true}
      elevation={0}
      sx={{
        margin: "0 !important",
        borderRadius: "16px !important",
        border: "1px solid #ddd",
        py: 1,
      }}
    >
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
      <AccordionDetails>
        <FormGroup>{isRangeSlider ? render() : getFilterItems()}</FormGroup>
      </AccordionDetails>
      {isRangeSlider && (
        <AccordionActions sx={{justifyContent: 'center'}}>
          <Stack direction="row" spacing={2} px={1}>
            <TextField
              value={filter[0] || 0}
              onChange={(e) =>
                handleOnFilterChange('', [parseInt(e.target.value), filter[1]])
              }
              label="Min"
              size="small"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
            />
            <TextField
              value={filter[1] || 0}
              onChange={(e) =>
                handleOnFilterChange('', [filter[0], parseInt(e.target.value)])
              }
              label="Max"
              size="small"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">₹</InputAdornment>
                ),
              }}
            />
          </Stack>
        </AccordionActions>
      )}
    </Accordion>
  );
};

export default FilterAccordion;
