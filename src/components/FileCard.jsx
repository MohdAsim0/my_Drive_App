import React from 'react'
import '../styles/FileCard.css'

import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard--top">
                <InsertDriveFileIcon className='fileIcon'  />
            </div>

            <div className="fileCard--bottom">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default FileCard