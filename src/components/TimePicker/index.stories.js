import DateTimePickerComp from ".";

export default {
    component: DateTimePickerComp,
    title: 'DateTimePicker',
    args: {
        label: 'Pick a date',
        defaultValue: '2022-04-17T15:30',
        variant: 'responsive'
    }
}

const Template = (args) => (
    <DateTimePickerComp {...args} />
)

export const Default = Template.bind({})

Default.args = {}