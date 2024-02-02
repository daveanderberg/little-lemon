import FormField from "../FormField";
import SelectFormField from "../SelectFormField";
import TextAreaFormField from "../TextAreaFormField";

function BookingInfo({availableTimes, dateChanged, occasions, tableTypes}) {
    const timesOptionsList = availableTimes.map((t) => {
        return <option key={t.toString()}>{t}</option>;
    });

    const occasionsList = occasions.map((occasion) => {
        return <option key={occasion}>{occasion}</option>
    });

    const tableTypesList = tableTypes.map((tableType) => {
        return <option key={tableType}>{tableType}</option>
    })

    return (
        <>
            <FormField name="date" type="date" label="Date" onValueChange={dateChanged} />
            <SelectFormField name="time" label="Time">
                {timesOptionsList}
            </SelectFormField>
            <FormField name="partySize" type="number" min='1' max='10' label="Size of Party" />
            <SelectFormField name="occasion" label="Occasion">
                {occasionsList}
            </SelectFormField>
            <SelectFormField name="tableType" label="Table Type">
                {tableTypesList}
            </SelectFormField>
            <TextAreaFormField name="comments" label="Additional Comments" rows="4" />
        </>
    );
}

export default BookingInfo;