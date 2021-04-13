import React, { useState ,useEffect} from "react";
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v4 as uuid} from "uuid"; 
import { Layout, Row, Col,Divider,Button } from "antd";
import "./component-css/Project.css";
import ModalAddmembers from './components-child/ModalAddmembers'
/* import Column from "antd/lib/table/Column"; */
import ModalCreateTask from './components-child/ModalCreateTask'
import { useParams } from "react-router-dom";
import axios from "axios";

//drop and Drag

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};
  const columnsFromBackend = {
    [uuid()]: {
      name: "Assigned",
      name:'assigned',
      items:[]
    },
    [uuid()]: {
      name: "In Progress",
      id:'working',
      items:[]

    },
    [uuid()]: {
      name: "Pending",
      id:'pending',
      items:[]

    },
    [uuid()]: {
      name: "Done",
      id:'done',
      items:[]

    }
  };

 
export default function Project() {
  const [tasks,setTasks]= useState([]);
  const {id} = useParams();
  const [columns, setColumns] = useState(columnsFromBackend);

  useEffect(() => {
    const url = "http://127.0.0.1:9696/api/project/" + id;
    axios.get(url).then(res =>{
      setTasks(res.data.data.projectTasks)
    })
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        <ModalCreateTask style={{
          display:"flex",
          justifyContent:"center"
        }} />
       
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily:"sans-serif",
                fontSize:"16px"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "#9FF781"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {tasks.map((item, index) => {
                          if(item.status==column.id)
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            > 
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                 {/*    css trng div */}

                                    {item.content}
                                    <Divider plain>Content</Divider>
                                      <p>
                                        Lorem ipsum dolor sit amet
                                      </p>
                                   <ModalAddmembers/>
                             

                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

