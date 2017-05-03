import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssues } from '../actions/index';
import { Link } from 'react-router';
//import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';

class IssuesIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {issues: [], activeKey: null };
		this.onChange = this.onChange.bind(this);
	}
	//a lifecycle method - only called when the element is about to be mounted on the DOM
	componentWillMount() {
		console.log('this.props2', this.props.fetchIssues())
		const issues = this.props.fetchIssues();
		console.log('ISSUES', issues)
		this.setState({ issues: issues.payload, activeKey: '1' });
	}

	onChange(activeKey) {
		this.setState({activeKey});
	}

	renderIssues() {
		console.log('this.props', this.props)
		return this.state.issues.map((issue) => {
			return (
				<Panel header={issue.title} key={issue.id}>
					<p>{issue.description}</p>
				</Panel>
			);
		})
	}

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-3">Postcards for Change</h1>
					<p>Pick an issue, we'll send your postcard</p>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<p><strong>What's important to you?</strong></p>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
						<Collapse
							accordion={true}
						>
						{this.renderIssues()}
						</Collapse>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('state', state)
	return {
		issues: state.issues.all
	}
}

export default connect(mapStateToProps, { fetchIssues })(IssuesIndex);