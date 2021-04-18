import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends PureComponent {

    componentWillMount() {
        this.props.fetchFeature();
        // this.props.fetchTasks();
    }

    renderFeature() {        
            return <h4> Weclome {this.props.features.name}</h4>;
    }

    render() {
        if (!this.props.features) {
            return <div>Loading...</div>;
        }

        return (
            <div className="mb-4">
                {this.renderFeature()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { features: state.features.homePageFeatures }
}

export default connect(mapStateToProps, actions)(Feature);
