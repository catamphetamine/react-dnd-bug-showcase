import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loading } from 'react-website'

import 'react-website/components/Loading.css'
import 'react-website/components/LoadingIndicator.css'

import { DragAndDrop } from './DragAndDrop'

import '../components/Loading.css'
import './Application.css'

@DragAndDrop()
export default class App extends Component
{
	render()
	{
		return (
			<React.Fragment>
				Text
			</React.Fragment>
		)
	}
}