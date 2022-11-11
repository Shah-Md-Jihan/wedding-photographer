import React, { useEffect } from 'react';


const useSetTitle = title => {
    useEffect(() => {
        document.title = `${title} -Adam Milne`;
    }, [title])
}


export default useSetTitle;