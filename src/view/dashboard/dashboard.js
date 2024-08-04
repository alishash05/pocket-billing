import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Header from '../../component/header/header';
import { fetchAutocomplete, getSuggetionsList } from "../../service/loginSlice";
import { useDispatch, useSelector } from 'react-redux';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import DetailBox from "../../component/skeloton/DetailBox";

import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
const useStyles = createUseStyles({
    body: {
        background: "#76b852", /* fallback for old browsers */
       background: "rgb(141,194,111)",
        background: "linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%)",
        fontFamily: "sans-serif",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
    }
});

function DashBoard() {
    const classes = useStyles();
    const [suggetions, setSuggetions] = useState('');
    const suggestionslist = useSelector(getSuggetionsList);
    const [index, setIndex] = React.useState(0);
    return (
        <div className={classes.body}>
            <Header />

            <AccordionGroup
            variant="soft"
                sx={{
                    [`& .${accordionSummaryClasses.indicator}`]: {
                        transition: '0.6s',
                    },
                    [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                        transform: 'rotate(45deg)',
                    },
                }}
            >
                {suggestionslist?.length && suggestionslist.map((item, num) => {
                    return (
                        <Accordion fullWidth={true}

                        expanded={index === num}
                            onChange={(event, expanded) => {
                            setIndex(expanded ? num : null);
                            }}
                                            >
                            <AccordionSummary indicator={<AddIcon />}>{item.value}</AccordionSummary>
                            <AccordionDetails>
                                <DetailBox />
                                { /*{item.name}*/}
                            </AccordionDetails>
                        </Accordion>
                    );
                })} 
               
            </AccordionGroup>
        </div>

    );
}

export default DashBoard;
