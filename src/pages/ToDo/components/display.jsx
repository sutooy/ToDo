import React, { useState } from 'react'
import Card from '../../../components/cardContainer'

function Display({ list, deleteItem, editItem, completeItem, searchName }) {

    const handleSearch = (e) => {
        searchName(e.target.value)
    }

    return (
        <div className='flex flex-col'>
            <h1 className='mb-5'>My Activity</h1>
            <input
                className=' rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  '
                type='text' placeholder='Search'
                onChange={(e) => handleSearch(e)}
            />
            <div className='flex gap-10 justify-between'>
                <div className='min-w-40  '>
                    <p className='font-bold mb-4'>
                        to-do :
                    </p>
                    <div className='flex flex-col gap-4'>
                        {list.slice().filter(el => !el.complete)?.map((el, index) =>
                            <Card key={el.id} className={"flex flex-col text-left max-w-40 ease-linear delay-150 duration-400 transition "}>
                                <div className='font-bold text-xl truncate max-h-7'>
                                    {el?.title}
                                </div>
                                <div className='my-2'>
                                    {el?.description}
                                </div>
                                <div className='flex justify-between'>
                                    <img
                                        className='cursor-pointer'
                                        src='assets/delete.svg'
                                        alt='delete'
                                        onClick={() => deleteItem(el.id)}
                                        data-testid={`delete-${index}`}
                                    />
                                    <div className='flex gap-2'>
                                        <img
                                            className='cursor-pointer     '
                                            src='assets/edit.svg'
                                            alt='edit'
                                            onClick={() => editItem(el.id)}
                                            data-testid={`edit-${index}`}
                                        />
                                        <img
                                            className='cursor-pointer     '
                                            src='assets/checkList.svg'
                                            alt='complete'
                                            onClick={() => completeItem(el.id)}
                                            data-testid={`complete-${index}`}
                                        />
                                    </div>

                                </div>
                            </Card>
                        )}
                    </div>
                </div>
                <div className="border dark:border-white border-zinc-600">

                </div>
                <div className='min-w-40'>
                    <p className='font-bold mb-4'>
                        Complete :
                    </p>
                    <div className='flex flex-col gap-4'>
                        {list.slice().filter(el => el.complete)?.map((el,) =>
                            <Card key={el.id} className={"flex flex-col max-w-40 bg-slate-300"}>
                                <div className='font-bold text-2xl truncate'>
                                    {el?.title}
                                </div>
                                <p className='text-xs'>complete</p>

                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display