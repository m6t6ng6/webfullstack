import tasksRoutes from './routes/taskRoutes';

const router = ( app ) => {
  app.use( '/tasks', tasksRoutes );
  app.use( '/users', ( req, res ) => {
    res.json( { users: [] } );
  })
}

export default router;