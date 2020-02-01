import axios from "axios";

export const getPersonData = (input: number) => axios.get(`/person/${encodeURIComponent(input)}`);
export const getFacilityData = (person: string) => axios.get(`/facility/${encodeURIComponent(person)}`);
export const getExposureData = (facility: number) => axios.get(`/exposure/${encodeURIComponent(facility)}`);