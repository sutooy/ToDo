import React, { useState } from 'react'
import Display from './components/display'
import Input from './components/input'

function Index() {

    const initialState = {
        title: "",
        description: "",
        complete: false
    }
    const [newItem, setNewItem] = useState(initialState)
    const [edit, setEdit] = useState(false)
    const [toDoList, setToDoList] = useState([])
    const [search, setSearch] = useState("")


    const handleAdd = () => {
        if (newItem.title.trim() !== "" && newItem.description.trim() !== "") {
            edit ?
                setToDoList((toDoList.map((el) => el.id === newItem.id ? newItem : el)))
                :
                setToDoList(([...toDoList, { ...newItem, id: idGenerator() }]))
            setEdit(false)
            setNewItem(initialState)
        }
    }
    const handleComplete = (id) => {
        setToDoList((toDoList.map((el) => el.id === id ? { ...el, complete: true } : el)))
    }

    const handleEdit = (id) => {
        console.log(id)
        setNewItem(toDoList.find(el => el.id === id))
        setEdit(true)
    }

    const handleDelete = (id) => {
        console.log("ini delete", id)
        setToDoList((toDoList.filter((el) => el.id !== id)))
    }


    let displayList = toDoList.slice().filter(item => item.title.includes(search))


    console.log("ini list", toDoList)

    return (
        <div className='flex gap-20'>
            <Input
                edit={edit}
                list={toDoList}
                setList={setToDoList}
                item={newItem}
                newItem={setNewItem}
                initial={initialState}
                addList={(idx) => handleAdd(idx)} />

            <Display
                list={displayList}
                searchName={setSearch}
                deleteItem={(id) => handleDelete(id)}
                editItem={(id) => handleEdit(id)}
                completeItem={(id) => handleComplete(id)}
            />
        </div>
    )
}

export default Index

const idGenerator = () => Math.floor(Math.random() * 100)
