export const makeToDoList = function(arr: any, id: any) {
    return arr ? arr.map( function( item:any ) {
        return {
            id: item.id ? item.id : Math.random(),
            name: item.name ? item.name : item,
            isCompleted: 
                id ? 
                    item.isCompleted && item.id === id ?
                        false 
                    : item.id === id ?
                        true 
                    : item.isCompleted
                : false
        }
    }) : []
}
export const closeContainer = function(idContainer: string, position: string, isFast: boolean):void {
    const containerPopup :  HTMLElement | null = document.getElementById(idContainer);
    const openPopup : HTMLElement | null = document.getElementById(`open-popup-${idContainer}`)
    let percent : number = 0;
    if(containerPopup) 
        if(position === 'left' || position === 'right') 
            setInterval(function() {
                if (percent >= 100) {
                    function clearInterval() {}
                } else {
                    percent = isFast ? 100 : percent  + 1            
                    containerPopup.style[position] = '-' + percent + '%'; 
                }            
            }, 10);
    if(openPopup) 
        if(position === 'left' || position === 'right')   
            openPopup.style[position] = '-' + (openPopup.offsetWidth / 2 - 29) + 'px';
}
export const openContainer = function(idContainer: string, position: string, isFast: boolean):void {
    const containerPopup :  HTMLElement | null = document.getElementById(idContainer);
    const openPopup : HTMLElement | null = document.getElementById(`open-popup-${idContainer}`)
    let percent : number = 100;
    if(containerPopup) 
        if(position === 'left' || position === 'right') 
            setInterval(function() {
                if (percent <= 0) {
                    function clearInterval() {}
                } else {
                    percent = isFast ? 0 : percent - 1          
                    containerPopup.style[position] = '-' + percent + '%'; 
                }            
            }, 10); 
    if(openPopup)
        if(position === 'left' || position === 'right') 
            openPopup.style[position] = '-100%';
}
export const titleCount = function(arr: any, firstText: string) {
    let count = 0;
    arr.map( function( item:any ) {
        if(item.isCompleted) 
            count++        
    })     
    return firstText + '[' + count + '/' + arr.length + ']'
}