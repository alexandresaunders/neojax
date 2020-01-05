import NeoCajaxHeaders from './headers';

type NeoCajaxResponse = {
	status: number;
	headers: NeoCajaxHeaders;
	url: string;
	data: object | string | number | boolean;
};

type NeoCajaxConvolutedResponse = NeoCajaxResponse & {
	success: boolean;
	message: string;
};

export { NeoCajaxConvolutedResponse, NeoCajaxResponse };

export default NeoCajaxResponse;