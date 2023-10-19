import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.post("/seats", "SeatsController.store");
    Route.get("/seats", "SeatsController.index");
    Route.get("/seats/:id", "SeatsController.show");
    //Route.put("/seats/:id","TheatersController.update");
    //Route.delete("/seats/:id","TheatersController.destroy");
})