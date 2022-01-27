import React from 'react'

function Testing() {
    return (
        <div>
           <form action="http://localhost:3000/filesave" encType="multipart/form-data" method="post">
                Username: <input type="text" name="username" /><br />
                File upload: <input type="file" name="uploadfile" /><br />
                <input type="submit" defaultValue="Send" />
            </form>
        </div>
    )
}

export default Testing
