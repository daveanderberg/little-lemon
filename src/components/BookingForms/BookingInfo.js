import { standardTime } from "../../utils/utils";
import FormField from "./FormField";
import SelectFormField from "./SelectFormField";
import TextAreaFormField from "./TextAreaFormField";

function BookingInfo({availableTimes, dateChanged, occasions, tableTypes, isCurrent=true}) {
    const timesOptionsList = availableTimes.map((t) => {
        return <option key={t.toString()} value={t}>{standardTime(t)}</option>;
    });

    const occasionsList = occasions.map((occasion) => {
        return <option key={occasion} value={occasion}>{occasion}</option>
    });

    const tableTypesList = tableTypes.map((tableType) => {
        return <option key={tableType} value={tableType}>{tableType}</option>
    })

    return (
        <>
            <FormField name="date" type="date" label="Date" onValueChange={dateChanged} disabled={!isCurrent} />
            <SelectFormField name="time" label="Time" disabled={!isCurrent}>
                {timesOptionsList}
            </SelectFormField>
            <FormField name="partySize" type="number" min='1' max='10' label="Size of Party" disabled={!isCurrent} />
            <SelectFormField name="occasion" label="Occasion" disabled={!isCurrent}>
                {occasionsList}
            </SelectFormField>
            <SelectFormField name="tableType" label="Table Type" disabled={!isCurrent}>
                {tableTypesList}
            </SelectFormField>
            <TextAreaFormField name="comments" label="Additional Comments" rows="4" disabled={!isCurrent} />
        </>
    );
}

export default BookingInfo;