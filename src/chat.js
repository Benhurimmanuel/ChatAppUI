import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Chat(props) {
  return (
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src={props.property.profileImg}
              className="rounded-circle user_img"
            />
            {props.property.status ? (
              <span className="online_icon"></span>
            ) : (
              <span className="offline_icon"></span>
            )}
          </div>
          <div className="user_info">
            <span>{props.property.name}</span>
          </div>
        </div>
      </div>
      <div className="card-body msg_card_body">
        {props.property.items.map((item, index) => {
          return item.position ? (
            <div className="d-flex justify-content-start mb-4" key={index}>
              <div className="img_cont_msg">
                <img
                  src={props.property.profileImg}
                  className="rounded-circle user_img_msg"
                />
              </div>
              <div className="RecievdMsg">{item.message}</div>
            </div>
          ) : (
            <div className="d-flex justify-content-end mb-4" key={index}>
              <div className="sentMsg">{item.message}</div>
              <div className="img_cont_msg">
                <img
                  src={props.property.myImg}
                  className="rounded-circle user_img_msg"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="card-footer">
        <div className="input-group">
          <textarea
            name=""
            id={props.property.messageIndex}
            className="form-control type"
            placeholder="Type your message..."
          ></textarea>
          <div className="input-group-append">
            <span
              className="input-group-text send_btn"
              onClick={() => props.handleClick(props.property.messageIndex)}
            >
              <FontAwesomeIcon icon="location-arrow" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
