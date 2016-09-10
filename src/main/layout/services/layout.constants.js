export const layoutConstants = {
    MAX_LENGTH: 14,
    MAX_DECIMALS: 5,
};

export default angular.module('LayoutConstants', [])
	.constant('layoutConstants', layoutConstants)
	.name;


