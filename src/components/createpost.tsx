import React from 'react';

function Createpost(props: any) {
    return (
        <div>
            <div className='bg-red-100'>Create Post</div>
            <div>
                <div>
                    <input type="text" placeholder="Title" />
                </div>
                <div>
                    <textarea name="description" id="description" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <input type="file" />
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
}

export default Createpost;