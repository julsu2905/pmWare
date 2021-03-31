import React, { useState } from "react";
import Board, { moveCard } from "@lourenci/react-kanban";
import "../component-css/ProjectChild.css";
import ProjectAddmember from './ProjectAddmember';

const board = {
    columns: [
      {
        id: 1,
        title: "Planing",
        
        cards: [
          {
            id: 1,
            title: "Card title 1",
            description:"card content"
          },
         
        
          {
            id: 2,
            title: "Card title 2",
            description: "Card content"
          
          },
          {
            id: 3,
            title: "Card title 3",
            description: "Card content"
           
          }
        ]
       
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 9,
            title: "Card title 9",
            description: "Card content"
           
          }
        ]
      },
      {
        id: 3,
        title: "Q&A",
        cards: [
          {
            id: 10,
            title: "Card title 10",
            description: "Card content"
           
          },
          {
            id: 11,
            title: "Card title 11",
            description: "Card content"
        
          }
        ]
      },
      {
        id: 4,
        title: "Production",
        cards: [
          {
            id: 12,
            title: "Card title 12",
            description: "Card content",
           
          },
          {
            id: 13,
            title: "Card title 13",
            description: "Card content",
          }
        ]
      }
    ]
    
  };
  
  function UncontrolledBoard() {
    return (
        
      <Board
 
        allowRemoveLane
        allowRenameColumn
        allowRemoveCard
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
        allowAddCard={{ on: "top" }}
        
        onNewCardConfirm={draftCard => ({
          id: new Date().getTime(),
          ...draftCard
         
        })}
        onCardNew={console.log}
        
      />
  
         
    );
    
  }
  /* function ControlledBoard() {
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);
  
    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }
  
    return (
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
     
    );
  } */
  
  
  function ProjectChild() {
    return (
      <>
    {/*     <ControlledBoard /> */}
        <UncontrolledBoard />
        
      </>
    );
  }

export default ProjectChild;

