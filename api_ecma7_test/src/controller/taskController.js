export const getAllTasks = ( req, res ) => { 
  res.json( { 
    tasks: [{
      id: 1,
      title: "Título de tarea",
      description: "Descripción de la tarea"
    }] 
  });
}

export const getTaskById = ( req, res ) => { 
  res.json( { 
    id: req.params.id, 
    title: "Titulo de tarea",
    desciption: "Descripcion de la tarea"
  });
}