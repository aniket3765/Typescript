import {Router} from 'express';
import {Todo} from '../models/todo';

let todos: Todo[] = [];

const router = Router();


router.get('/',(req,res,next)=>{
res.status(200).json({todos:todos})
})

router.post('/todo',(req, res, next)=>{
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text    }

        todos.push(newTodo);
        res.status(201).json({message:"Todo added", newTod:newTodo, todos:todos})
})

router.put('/todo/:todoId',(req, res, next)=>{
    const tid = req.params.todoId;
    const todoIndex =  todos.findIndex(todoItems => todoItems.id === tid);
    if(todoIndex >=0 ){
        todos[todoIndex] = { id: todos[todoIndex].id, text:req.body.text}
        return res.status(200).json({message:"Updated todo", todos:todos})
    }
    res.status(404).json('Not able to find this Id')
})

router.delete('/todo/:todoId',(req, res, next)=> {
todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
res.status(200).json({message:"Todo deleted", todos:todos});
})

export default router;