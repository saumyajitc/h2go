export const serviceConstants = {
	SERVICE_API: "/AlphaCaptureApp/api/",
	SERVICE_NEW_IDEA: "/AlphaCaptureApp/api/baseIdea/draft/",
	SERVICE_BASE_IDEA: "/AlphaCaptureApp/api/baseIdea/",
	SERVICE_PORTFOLIO: "/AlphaCaptureApp/api/portfolio/",
	SERVICE_PORTFOLIO_DRAFT: "/AlphaCaptureApp/api/portfolio/draft/",
	SERVICE_USER: "/AlphaCaptureApp/api/user/",
	SERVICE_USERFEED: "/AlphaCaptureApp/api/userDimension/",
	SERVICE_EQUITY: "/AlphaCaptureApp/api/equityProduct/"
};

export default angular.module('ServiceConstants', [])
	.constant('serviceConstants', serviceConstants)
	.name;


