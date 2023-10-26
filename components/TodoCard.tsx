'use client'
import { DraggableProvidedDragHandleProps,
 DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
// import { type } from 'os'
import React from 'react'
import { XCircleIcon } from '@heroicons/react/20/solid';
type Props ={
    todo:Todos;
    index:number;
    id: TypedColumn;
    innerRef:(element:HTMLElement|null)=> void;
    draggableProps : DraggableProvidedDraggableProps;
    dragHandleProps :DraggableProvidedDragHandleProps
    
    
}
function TodoCard( {
        todo,
        index,
        id,
        innerRef,
        draggableProps,
        dragHandleProps
}:Props) {
    
  return (
    <div 
    className='bg-white rounded-md space-y-2 drop-shadow-md'
    {...draggableProps} {...dragHandleProps} ref={innerRef}
    >
    <div className='flex justify-between items-center p-5' >
        <p>
            {todo.title}
        </p>
        <button className='text-red-500 hover:text-red-600'>
            <XCircleIcon className='ml-5 h-8 w-8'/>
        </button>
    </div>
    
    </div>
  )
}

export default TodoCard;