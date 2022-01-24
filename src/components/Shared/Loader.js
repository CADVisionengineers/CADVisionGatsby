import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={`preloader-area ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                <div className="spinner">
                    <div className="inner">
                        <div className="disc"></div>
                        <div className="disc"></div>
                        <div className="disc"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader;