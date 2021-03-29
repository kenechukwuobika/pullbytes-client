import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SubscriptionList from './subscription-list/index';
import AddSubscription from './add-subscription';
import EditSubscription from './edit-subscription';
// import AddLicense from './add-license';


const Licenses = (props) => {
    const { match } = props;
    return (
		<Switch>
			{/* <Redirect exact from={`${match.url}`} to={`${match.url}`} /> */}
			<Route exact path={`${match.url}`} component={SubscriptionList} />	
			<Route exact path={`${match.url}/add`} component={AddSubscription} />
			<Route path={`${match.url}/edit/:id`} component={EditSubscription} />
			{/* <Route path={`${match.url}/orders`} component={Orders} /> */}
		</Switch>
	)
} 

export default Licenses;