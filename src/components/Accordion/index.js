import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const AccordionComp = ({ data }) => {
    return (
        <div>
            {
                data && data.length && data.map(item => (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            {item.summary}
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.details}
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    )
}

AccordionComp.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            summary: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired
        }).isRequired
    )
};

export default AccordionComp;