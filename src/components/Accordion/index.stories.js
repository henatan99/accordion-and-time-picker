import AccordionComp from ".";

export default {
    component: AccordionComp,
    title: 'Accordion',
    args: {
        data: [
            { summary: "Accordion One", details: "This is details fo the first accordion. This is a simple example of accordion."},
            { summary: "Accordion Two", details: "This is details fo the second accordion. This is a simple example of accordion."},
            { summary: "Accordion Three", details: "This is details fo the three accordion. This is a simple example of accordion."}
        ]
    }
}

const Template = (args) => (
    <AccordionComp {...args} />
)

export const Default = Template.bind({})

Default.args = {}