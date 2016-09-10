export const modalConstants = {
	EXCEPTIONS: 'exceptions',
	CONTRIBUTORS: 'contributors',
	GENERIC: 'generic'
};

export default angular.module('ModalConstants', [])
	.constant('modalConstants', modalConstants)
	.name;

