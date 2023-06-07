import mixpanel from 'mixpanel-browser';

mixpanel.init('7deed21eec18df016893b1acba304ea5', {debug:true});

mixpanel.identify(/* \"<USER_ID\"> */)

mixpanel.track('Button Clicked');