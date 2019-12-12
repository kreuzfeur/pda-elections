//react
import React, { Component } from 'react'
//styles
import './elections.scss'
//redux
import { connect } from 'react-redux'

class Elections extends Component {
	render() {
		console.log(this.props)
		const { candidates, selectedCandidate } = this.props;

		return (
			<section className="elections container-fluid">
				<div className="row justify-content-center">
					<article className="candidate col-3">
						<img src="http://lurkmore.so/images/thumb/0/0e/SR3R9yRM.jpg/250px-SR3R9yRM.jpg" alt="" className="candidate-photo" />
						<p className="description">
							asd
						</p>
					</article>
					<article className="candidate col-3">
						<img src="http://lurkmore.so/images/thumb/0/0e/SR3R9yRM.jpg/250px-SR3R9yRM.jpg" alt="" className="candidate-photo" />
						<p className="description">
							asd
						</p>
					</article><article className="candidate col-3">
						<img src="http://lurkmore.so/images/thumb/0/0e/SR3R9yRM.jpg/250px-SR3R9yRM.jpg" alt="" className="candidate-photo" />
						<p className="description">
							asd
						</p>
					</article>
				</div>

			</section>
		)
	}
}
const mapStateToProps = ({ candidates, selectedCandidate }) => {
	return {
		candidates,
		selectedCandidate
	}
}
export default connect(mapStateToProps)(Elections)