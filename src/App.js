import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const accordionArray = [
  {
    id: 1,
    header: "Collapsible Group Item #1",
    panel: "panel1",
    hint: "This is a new hint for item #1, offering an overview of this particular group.",
  },
  {
    id: 2,
    header: "Collapsible Group Item #1",
    panel: "panel1",
    hint: "Hint for item #1 explaining key features that make it unique and how to use it effectively.",
  },
  {
    id: 3,
    header: "Collapsible Group Item #1",
    panel: "panel1",
    hint: "A detailed description for item #1, highlighting specific aspects to be aware of when interacting with this group.",
  },
  {
    id: 4,
    header: "Collapsible Group Item #1",
    panel: "panel1",
    hint: "Item #1's hint gives context and examples to better understand the functionality of this group.",
  },
  {
    id: 5,
    header: "Collapsible Group Item #1",
    panel: "panel1",
    hint: "Here’s a helpful hint for item #1 that outlines its use cases and optimal scenarios.",
  },
  {
    id: 6,
    header: "Collapsible Group Item #2",
    panel: "panel2",
    hint: "This is a unique hint for item #2, guiding users through different ways to engage with this group.",
  },
  {
    id: 7,
    header: "Collapsible Group Item #2",
    panel: "panel2",
    hint: "Item #2’s hint focuses on common issues users may face and how to resolve them efficiently.",
  },
  {
    id: 8,
    header: "Collapsible Group Item #2",
    panel: "panel2",
    hint: "A helpful hint for item #2 that provides a step-by-step guide for making the most of this group item.",
  },
  {
    id: 9,
    header: "Collapsible Group Item #2",
    panel: "panel2",
    hint: "Item #2’s hint offers insights on best practices and tips for enhancing your experience with this group.",
  },
  {
    id: 10,
    header: "Collapsible Group Item #2",
    panel: "panel2",
    hint: "An essential hint for item #2 that covers advanced features and how they can improve functionality.",
  },
  {
    id: 11,
    header: "Collapsible Group Item #3",
    panel: "panel3",
    hint: "This hint for item #3 explains the core functions and what users should focus on for optimal use.",
  },
  {
    id: 12,
    header: "Collapsible Group Item #3",
    panel: "panel3",
    hint: "Item #3's hint provides further context about how this group integrates with other items and systems.",
  },
  {
    id: 13,
    header: "Collapsible Group Item #3",
    panel: "panel3",
    hint: "A useful hint for item #3 that highlights its most valuable features and explains how to navigate its content.",
  },
  {
    id: 14,
    header: "Collapsible Group Item #3",
    panel: "panel3",
    hint: "This hint for item #3 focuses on troubleshooting and offers solutions to common problems that may arise.",
  },
  {
    id: 15,
    header: "Collapsible Group Item #3",
    panel: "panel3",
    hint: "Item #3’s hint describes advanced settings and how to personalize this group according to user needs.",
  },
];
const groupedAccordions = accordionArray.reduce((acc, record) => {
  // If the header is not already in the accumulator, initialize it with an array for hints
  if (!acc[record.header]) {
    acc[record.header] = {
      header: record.header,
      panel: record.panel, // you can also group panel, if necessary
      hint: [],
    };
  }
  // Push the hint to the corresponding header group
  acc[record.header].hint.push(record.hint);

  return acc;
}, {});

// Convert the accumulator object to an array of values (one item per header)
const result = Object.values(groupedAccordions);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {result.map((accord) => (
        <Accordion
          expanded={expanded === accord.panel}
          onChange={handleChange(accord.panel)}
        >
          <AccordionSummary
            aria-controls={`${accord.panel}d-content`}
            id={`${accord.panel}d-header`}
          >
            <Typography component="span">{accord.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
                gap: 2,
              }}
            >
              {accord.hint.map((card, index) => (
                <Card key={index}>
                  <CardActionArea>
                    <CardContent sx={{ height: "100%" }}>
                      <Typography>{card}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
