import React from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Todos = (props) => {
  const onChangeTextInTodoEnter = (event, id) => {
    if (event.code === "Enter") {
      event.preventDefault()
      let textContent = event.target.textContent
      if (event.target.textContent === "") {return}
      props.ChangeTextInTodo(id, textContent)
      props.ChangeIsContentEditable(id);
    }
  }
  const onChangeTextInTodo = (event, id) => {
    let textContent = event.target.textContent
    if (event.target.textContent === "") {return}
    props.ChangeTextInTodo(id, textContent)
    props.ChangeIsContentEditable(id);
  }
  const onChangeIsContentEditable = (event, id) => {
    props.ChangeIsContentEditable(id);
    let div = event.target.closest("div").querySelector("span")
    setTimeout(() => {
      div.focus()
      div.selectionStart = div.textContent.length;
    }, 0)
  }
  const onDeleteTodo = (id) => {
    props.DeleteTodo(id);
  };
  const onChangeCompleted = (event, id) => {
    props.ChangeCompleted(event.target.checked, id);
  };
  function handleOnDragEnd(result) {
    if (!result.destination) {return}
    props.ChangePlaceTodo(result.source, result.destination)
  }
  return ( 
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">{
        (provided) => (
          <div className="todos" {...provided.droppableProps} ref={provided.innerRef}>{
            props.todosArray.map(({id, completed, text, isContentEditable}, index) => (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
                <div className="todo-box"
                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <div
                    onKeyDown={(event) => onChangeTextInTodoEnter(event, id)}
                    onBlur={(event) => onChangeTextInTodo(event, id)}
                    key={id}
                    className="todo"
                    style={
                      completed
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    <input
                      onChange={(event) => onChangeCompleted(event, id)}
                      type="checkbox"
                      className="todo-checkbox"
                      checked={completed}
                    />
                    <span 
                      contentEditable={isContentEditable ? "true":"false"}
                      suppressContentEditableWarning='true'>
                      {text}
                    </span>
                    <button className="todo-change-btn" onClick={(event)=>{onChangeIsContentEditable(event, id)}}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4055 5100 c-54 -27 -3386 -3361 -3408 -3410 -116 -257 -633 -1477
-640 -1511 -9 -40 -7 -52 12 -92 28 -57 91 -93 148 -84 20 4 376 151 792 329
l756 323 1692 1690 c1836 1835 1726 1718 1709 1812 -7 34 -58 89 -454 485
-245 246 -461 455 -478 463 -43 20 -81 19 -129 -5z m385 -665 l315 -315 -105
-105 -105 -105 -317 317 -318 318 102 102 c57 57 105 103 108 103 3 0 147
-142 320 -315z m-420 -420 l315 -315 -108 -107 -107 -108 -317 317 -318 318
105 105 c58 58 107 105 110 105 3 0 147 -142 320 -315z m-1172 -1803 l-1063
-1062 -5 52 c-8 71 -32 114 -80 138 -34 17 -59 20 -190 20 l-150 0 0 150 c0
131 -3 156 -20 190 -25 50 -81 80 -147 80 l-48 0 1065 1065 1065 1065 317
-317 318 -318 -1062 -1063z m-1788 -882 c0 -131 3 -156 20 -190 35 -68 73 -80
250 -80 l150 0 0 -88 0 -89 -214 -91 c-118 -51 -219 -92 -223 -92 -5 0 -31 34
-58 76 -57 87 -137 166 -225 220 -33 20 -60 41 -60 46 0 5 41 106 92 224 l91
214 89 0 88 0 0 -150z m-390 -646 c30 -29 63 -65 72 -81 l17 -29 -157 -67
c-85 -37 -157 -65 -159 -64 -1 2 27 74 64 159 77 179 67 174 163 82z"/>
</g>
</svg>
                    </button>
                  </div>
                  <button onClick={() => onDeleteTodo(id)} className="todo-btn">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25.000000pt"
                      height="17.000000pt"
                      viewBox="0 0 512.000000 512.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#fff"
                        stroke="none"
                      >
                        <path
                          d="M2061 5104 c-110 -30 -212 -106 -269 -203 -15 -25 -52 -120 -83 -211
            l-56 -165 -494 -5 c-314 -4 -505 -10 -524 -17 -123 -44 -231 -134 -277 -233
            -41 -87 -50 -155 -46 -372 l3 -197 28 -29 c17 -17 48 -35 72 -41 31 -8 661
            -11 2160 -11 2101 0 2116 0 2155 20 71 36 80 69 80 284 0 102 -5 209 -11 238
            -33 152 -140 276 -287 332 -55 20 -77 21 -551 26 l-494 5 -53 157 c-63 190
            -90 242 -164 312 -64 61 -114 90 -197 111 -82 22 -911 21 -992 -1z m943 -298
            c48 -20 71 -55 107 -164 17 -53 34 -103 37 -109 3 -10 -119 -13 -588 -13 -469
            0 -591 3 -588 13 3 6 20 56 37 109 36 107 59 144 105 164 46 20 842 20 890 0z"
                        />
                        <path
                          d="M650 3280 c0 -12 54 -673 120 -1471 131 -1584 122 -1508 197 -1617
            61 -90 147 -148 260 -177 49 -13 233 -15 1330 -15 904 0 1287 3 1325 11 150
            32 271 139 325 286 21 59 34 191 143 1513 66 797 120 1458 120 1470 l0 20
            -1910 0 -1910 0 0 -20z m1080 -302 c86 -44 80 50 80 -1178 0 -1228 6 -1134
            -80 -1178 -56 -28 -84 -28 -140 1 -86 43 -80 -51 -80 1177 0 1013 1 1087 18
            1120 19 38 88 80 132 80 14 0 46 -10 70 -22z m900 0 c86 -44 80 50 80 -1178 0
            -1228 6 -1134 -80 -1178 -56 -28 -84 -28 -140 1 -86 43 -80 -51 -80 1177 0
            1013 1 1087 18 1120 19 38 88 80 132 80 14 0 46 -10 70 -22z m900 2 c26 -13
            47 -34 60 -60 20 -39 20 -57 20 -1122 0 -1225 6 -1132 -80 -1176 -56 -28 -84
            -28 -140 0 -86 44 -80 -49 -80 1176 0 1065 0 1083 20 1122 37 73 124 99 200
            60z"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              )}
            </Draggable>
            ))
            }
            {provided.placeholder}
          </div>
        )
      }
      </Droppable>
    </DragDropContext>
  )
};

export default Todos;