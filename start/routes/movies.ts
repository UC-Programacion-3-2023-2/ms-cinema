import Route from '@ioc:Adonis/Core/Route'
//Con protección
Route.group(() => {
    Route.get("/movies", "MoviesController.index");
    Route.get("/movies/:id", "MoviesController.show");
    Route.post("/movies", "MoviesController.store");
    Route.put("/movies/:id", "MoviesController.update");
    Route.delete("/movies/:id", "MoviesController.destroy");
}
).middleware(['security'])
//Sin protección