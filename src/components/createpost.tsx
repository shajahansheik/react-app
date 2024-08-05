import React, { useState } from 'react';


function Createpost(props: any) {
    const [fileName, setFileName] = useState('No file chosen');
    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        
        setFileName(file ? file.name : 'No file chosen');
    };
    return (
        <div className='space-y-2'>
            <div className='bg-green-50 py-4 px-2 text-3xl  text-green-400 text-center'>Create Post</div>
            <div className=' space-y-4 w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <input type="text" placeholder="Title" className='border hover:border-black px-2 py-2 active:outline-none w-1/3' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <textarea placeholder='Description..' name="description" id="description" cols={30} rows={10} className='border hover:border-black px-2 py-2 active:outline-none w-1/3'></textarea>
                </div>
                <div className='flex flex-col items-center justify-center'>
                     <div className='w-1/3'>
                    <div className="flex items-center  gap-3">
                        <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                        <label htmlFor="file" className="px-4 py-2 bg-blue-200 hover:bg-blue-400 text-white cursor-pointer rounded-lg text-lg border-none">Choose File</label>
                        <span className="file-name" >{fileName}</span>
                    </div>
                    </div>
                </div>
                
                <div className='flex flex-col items-center justify-center'>
                    <div className=' w-1/3 flex items-center justify-end'>
                        <button className='px-4 py-2 bg-green-300 hover:bg-green-500 text-white rounded-md'>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Createpost;