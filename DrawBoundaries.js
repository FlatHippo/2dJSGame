let boundaryStart = null;
let boundary = null;
let tempBoundary = null;
    canvas.addEventListener('mousedown', ev => 
    {
        boundaryStart = {x: ev.clientX, y: ev.clientY};
    })
    canvas.addEventListener('mousemove', (ev) => 
    {
        if(boundaryStart){
            boundary = new Boundary({
                position: {x: Math.min(boundaryStart.x, ev.clientX), y: Math.min(boundaryStart.y, ev.clientY)},
                width: Math.abs(ev.clientX - boundaryStart.x),
                height: Math.abs(ev.clientY - boundaryStart.y)
            });
            
        }
    })
    canvas.addEventListener('mouseup', (ev) => 
    {
        if(boundaryStart)
        {
            boundaryStart = false;
            console.log(boundary);
            boundaries.push(boundary);
        }
    });