const TitleOfPages = (title)=>{

    const $title = document.createElement('h2')
    $title.setAttribute('class','h2 title')
    $title.textContent = title 
    return $title
}

export {TitleOfPages}