import { ArrowForwardIosSharp } from "@mui/icons-material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  width: "100%",
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export const AccordianFAQ = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>
            What should I do on the day of my appointment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please arrive with clean and bare nails. Remember, the remaining
            balance for your service must be paid in cash. Also, please do not
            bring any extra guests to your appointment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How do you handle appointment confirmations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You will receive a confirmation text the day before your
            appointment. Please make sure to reply by the end of that day to
            confirm. If no reply is received, your appointment will be canceled.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            Is there a deposit required when booking an appointment?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, a $10 non-refundable deposit is required. You can send it via
            Cash App ($Bryannahuioc), Zelle (224-392-6234), or Venmo
            (@Bryannahuioc)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What is your policy for late arrivals?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A 15-minute grace period is allowed. If you are more than 15 minutes
            late, your appointment will be canceled.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            What should I do if I need to cancel or reschedule?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you need to cancel or reschedule, please try to inform us at
            least 2 days in advance.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
