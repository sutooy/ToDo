import PropTypes from 'prop-types';
import Card from '../../../components/cardContainer';

function Input({ ...props }) {
    const { edit, newItem, item, addList } = props

    const disabled = item.description.trim() === "" || item.title.trim() === ""
    Input.propTypes = {
        newItem: PropTypes.any.isRequired, // Adjust the PropTypes to match the type of newItem
        item: PropTypes.any.isRequired, // Adjust the PropTypes to match the type of newItem
    };

    const handleChange = (e, type) => {
        switch (type) {
            case "title": return newItem({ ...item, title: e.target.value })
            case "desc": return newItem({ ...item, description: e.target.value })
        }
    }

    return (
        <div className='flex justify-center'>
            <Card className='flex gap-4 justify-center w-80 h-fit'>
                <div className='flex flex-col gap-3 w-full text-slate-800 dark:text-white'>
                    <input
                        className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  '
                        type='text' placeholder='Title' onChange={(e) => handleChange(e, 'title')} value={item?.title} />
                    <textarea
                        className='block w-full rounded-md border-0 py-1.5 px-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  '
                        placeholder='Description' onChange={(e) => handleChange(e, 'desc')} value={item?.description} />
                </div>
                <button
                    disabled={disabled}
                    className={` ${disabled ? "bg-slate-500" : " bg-rose-500"}  text-white`} onClick={() => { addList() }} >
                    {edit ? "Edit" : "Add"}
                </button>
            </Card>
        </div>

    )
}

export default Input