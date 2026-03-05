const bizSdk = require('facebook-nodejs-business-sdk');
const Content = bizSdk.Content;
const CustomData = bizSdk.CustomData;
const DeliveryCategory = bizSdk.DeliveryCategory;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const ServerEvent = bizSdk.ServerEvent;

const access_token =  process.env.FB_ACCESS_TOKEN;
const pixel_id =  process.env.FB_PIXEL_ID;


module.exports = {
	construct: function(self, options) {
		self.on('apostrophe-pages:beforeSend', 'fbPageView', function(req) {

			if(access_token === undefined || pixel_id === undefined)
				return;
			//Register a pageview
			let current_timestamp = Math.floor(new Date() / 1000);

			const userData = (new UserData())
				.setClientIpAddress(req.headers['x-forwarded-for'] || req.connection.remoteAddress)
				.setClientUserAgent(req.headers['user-agent'])


			const serverEvent = (new ServerEvent())
				.setEventName('PageView')
				.setEventId(self.apos.settings.options.pageViewId)
				.setEventTime(current_timestamp)
				.setUserData(userData)
				.setEventSourceUrl(req.get('X-Forwarded-Protocol'))
				.setActionSource('website');

			let eventsData = [serverEvent];


			if(req.path.includes('locations')){
				const locationEvent = (new ServerEvent())
					.setEventName('FindLocation')
					.setEventTime(current_timestamp)
					.setUserData(userData)
					.setEventSourceUrl(req.get('X-Forwarded-Protocol'))
					.setActionSource('website');
				eventsData.push(locationEvent);
			}


			const eventRequest = (new EventRequest(access_token, pixel_id))
				.setEvents(eventsData);

			eventRequest.execute().catch(
				err => {
					console.error('Error: ', err);
				}
			);

		});
	},
	filters: {
		ancestors: {
			children: {
				depth: 4,
				areas: [ 'icon' ]
			}
		},
		children: true
	},
	deleteFromTrash: true,
	park: [
		{
			title: 'Search',
			slug: '/search',
			type: 'apostrophe-search',
			label: 'Search',
			published: true
		},
		{
			title: 'Privacy Policy',
			slug: '/privacy-policy',
			type: 'default',
			label: 'Privacy Policy',
			published: true
		},
		{
			title: 'Terms & Conditions',
			slug: '/terms-conditions',
			type: 'default',
			label: 'Terms & Conditions',
			published: true
		},
		{
			title: 'News & Announcements',
			slug: '/news',
			type: 'news-pages',
			label: 'News & Announcements',
			published: true
		}
	],
	types: [
		{
			name: 'default',
			label: 'Default'
		},
		{
			name: 'no-index',
			label: 'No Index'
		},
		{
			name: 'home',
			label: 'Home'
		},
		{
			name: 'redirect',
			label: 'Redirect'
		},
		{
			name: 'news-pages',
			label: 'News & Announcements'
		},
		{
			name: 'service',
			label: 'Single Service'
		}

		// Add more page types here, but make sure you create a corresponding
		// template in lib/modules/apostrophe-pages/views/pages!
	]
}
