import React, { Component } from 'react';
import Popup from "reactjs-popup";

class ControlledPopup extends Component {
    constructor(props) {
      super(props);
      this.state = { open: false };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
      this.setState({ open: true });
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = "10px";
      document.getElementById("nav").style.paddingRight = "10px";
    }
    closeModal() {
      this.setState({ open: false });
      document.body.style.overflowY = "auto";
      document.body.style.paddingRight = "0px";
      document.getElementById("nav").style.paddingRight = "0px";
    }
    render() {
      return (
        <div>
            <div className="overlay" onClick={this.openModal}>
                <div className="portfolio-item-meta">
                <h5>{this.props.title}</h5>
                    <p>{this.props.category}</p>
                </div>
            </div>
            <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>
                <div className="modal-wrapper">
                    <div id="closemodal">
                        <button className="close" onClick={this.closeModal}>
                        &times;
                        </button>
                    </div>
                    <div className="modal">
                    {this.props.content}
                    </div>
                </div>

            </Popup>
        </div>
      );
    }
  }

  export default ControlledPopup;