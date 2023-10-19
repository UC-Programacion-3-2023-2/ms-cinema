import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
Route.post("/projectors","ProjectorsController.store");
Route.get("/projectors","ProjectorsController.index");
Route.get("/projectors/:id","ProjectorsController.show");
//Route.put("/projectors/:id","TheatersController.update");
//Route.delete("/projectors/:id","TheatersController.destroy");
})