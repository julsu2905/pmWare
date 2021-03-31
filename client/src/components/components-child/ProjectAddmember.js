import {Layout} from "antd";
import React from 'react';
const {Sider,Content} = Layout;

function ProjectAddmember() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
    );
  }

export default ProjectAddmember;