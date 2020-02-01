import {Dispatch} from "redux";
import {getExposureData, getFacilityData, getPersonData} from "../../../rest/api";
import modalActions from "../../../layout/modal/redux/actions";

export default {
    onSubmit: (formValues: any, dispatch: Dispatch) => async () => {

        const {data: {person1}} = await getPersonData(formValues.value);
        const {data: {facility2}} = await getFacilityData(person1);
        const {data: {exposure}} = await getExposureData(facility2);

        dispatch(modalActions.onOpen({
            title: 'Result of api',
            content: `${facility2} * ${exposure} = ${facility2 * exposure}`
        }));
    }
}