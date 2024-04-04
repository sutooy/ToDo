import React, { useEffect, useState } from 'react'
import Display from './components/display'
import Input from './components/input'
import { dataApi } from '../../api'

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
    const [randomAPI, setRandomAPI] = useState()

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

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    let displayList = toDoList.slice().filter(item => item.title.includes(search))

    const fetchAPI = async () => {
        const DataApi = await dataApi()
        setRandomAPI(DataApi)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    return (
        <>
            <div className='mb-7'>
                <h3 className='font-bold'>
                    {randomAPI?.sentence}
                </h3>
                {randomAPI?.character?.name} - {`(${randomAPI?.character?.house?.name})`}
            </div>
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
                    searchName={(e) => handleSearch(e)}
                    deleteItem={(id) => handleDelete(id)}
                    editItem={(id) => handleEdit(id)}
                    completeItem={(id) => handleComplete(id)}
                />
            </div>
        </>
    )
}

export default Index

const idGenerator = () => Math.floor(Math.random() * 100)
