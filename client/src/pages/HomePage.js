import React, { Component } from 'react'
import '../css/homepage.css';
import '../css/loading.css';

export default class HomePage extends Component {
    render() {
        return (
            
                <div className="body-content">
                    <div className="menu-left">
                        <div><button type="button" className="btn btn-light" id="button-left">Boards</button></div>
                        <div><button type="submit" className="btn btn-light" id="button-left1">Template</button></div>
                        <div className="gifClock"><img src="/img/gifdongho.gif" alt /></div>
                    </div>
                    <div className="mid-content">
                        <h2 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', textShadow: '7px 4px 6px grey' }}>Project
                            Infomation</h2>
                        &lt;% if(projects !== null) {'{'}
                        projects.forEach( (project) =&gt;{'{'} %&gt;
                        &lt;% if(project.admin.id == user.id) {'{'} %&gt;
                        &lt;% {'}'}{'}'}) %&gt;
                        <table border={0} style={{ width: '100%', fontWeight: 'bold', textAlign: 'center', color: 'black' }}>
                            <thead>
                                <tr><th>Name Of Project</th>
                                    <th>Members</th>
                                    <th>Admin</th>
                                    <th>Description</th>
                                </tr></thead>
                            <tbody><tr>
                                <td> <a style={{ color: 'blue', textAlign: 'center' }} href="project/<%= project.projectName %>">&lt;%= project.projectName %&gt;</a></td>
                                <td>&lt;%= project.members.length %&gt;/&lt;%= project.memberQuantity %&gt;</td>
                                <td>&lt;%= project.admin.email %&gt;</td>
                                <td>&lt;%= project.description %&gt;</td><td>
                                    <form action="/project/delete/<%= project.id %>" method="POST"><button type="submit" className="alert-danger"><i className="fas fa-trash" /></button>
                                    </form>
                                </td>
                            </tr></tbody>
                        </table>
                        &lt;%- include('../includes/pagination'); %&gt;
                        &lt;% {'}'} else {'{'} %&gt;
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header1"><img src="img/work.png" style={{ width: '100%', height: 300 }} /></div>
                                <div className="modal-body">
                                    <p style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>Stay on track and up to date</p>
                                    <p style={{ textAlign: 'center' }}>Invite people to boards and cards, leave comments, add due dates, and
                                        we'll
                                        show the most important activity here.</p>
                                </div>
                            </div>
                        </div>
                        &lt;% {'}'} %&gt;
                    </div>
                    <div className="menu-right">
                        <div>
                            <p> <i style={{ fontSize: 20 }} className="far"></i><b> Recently Viewed</b></p>
                            &lt;% projects.forEach( (project) =&gt;{'{'} %&gt;
                            <a style={{ color: 'black' }} href="project/<%= project.projectName %>">&lt;%= project.projectName %&gt;</a>
                            &lt;% {'}'}) %&gt;
                        </div>
                        <hr />
                        <div className="create-team"><b>Create a board</b><button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#createProjectModal"><i style={{ fontSize: 16 }} className="fas"></i></button>
                            <div className="modal fade" id="createProjectModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form className="createProject">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Create new Project</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <input type="text" name="projectName" className="form-control" placeholder="Name of project" aria-describedby="basic-addon1" />
                                                <input type="text" name="description" className="form-control" placeholder="Description (Optional)" aria-describedby="basic-addon1" />
                                                <input type="text" name="memberQuantity" className="form-control" placeholder="Amount of members" aria-describedby="basic-addon1" />
                                                <div className="wrapper" />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" data-dismiss="modal" className="btn btn-danger">Close</button>
                                                <a><button type="submit" className="btn btn-primary">Add +</button></a>
                                            </div>
                                        </form></div>
                                </div>
                            </div>
                        </div>
                        <div className="homepageGif"><img src="/img/QDyD.gif" alt /></div>
                    </div>
                </div>

           
        )
    }
}
