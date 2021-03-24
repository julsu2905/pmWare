import React, { Component } from 'react'
import $ from 'jquery'


export default class Loading extends Component {
    Loader() {
        setTimeout(function () {
            $('#loader').css({ 'opacity': 0, 'visibility': 'hidden' });
        }, 1000);
    };
    //sau khi render xong
    async componentDidMount() {
        await this.Loader()
    }
    render() {
        return (
            <div id="loader">
                <div className="circle">
                    <div className="circle1" />
                    <div className="circle2" /><br />
                </div>
                <div className="loading">
                    <div>
                        <img src="/img/093f1861fc92b3a0ba497ece177b27e6.gif" />
                    </div>
                    <div>
                        <p /><h3 style={{ textAlign: 'center' }}>Vui lòng chờ nhé...</h3><p />
                    </div>
                </div>
            </div>
        )
    }
}
