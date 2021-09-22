const ActiveZoom = ()=>{

    const d = document

    d.querySelector('.gallery').addEventListener('click',(e)=>{

        if(e.target && e.target.tagName === 'BUTTON'&& e.target.classList.contains('btnZoom')){

            const $card = d.querySelector(`[data-name = '${e.target.dataset.id}']`)
            
            $card.classList.add('zoom')

            const $btnReduce = d.getElementById(`${e.target.dataset.off}`)
            $btnReduce.classList.remove('none')
            $btnReduce.style.setProperty('top','revert')
            $btnReduce.style.setProperty('bottom','25%')
            e.target.classList.add('none')
                  
        }
        
        if(e.target && e.target.tagName === 'BUTTON' && e.target.classList.contains('btnReduce')){

            const $card = d.querySelector(`[data-name = '${e.target.dataset.id}']`)
            $card.classList.remove('zoom')

            const $btnZoom = d.getElementById(`${e.target.dataset.on}`)
            $btnZoom.classList.remove('none')
            e.target.classList.add('none')
            
        }
    })
}

export { ActiveZoom }