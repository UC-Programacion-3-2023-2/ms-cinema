import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.post("/screenings", "ScreeningsController.store");
    Route.get("/screenings", "ScreeningsController.index");
    Route.get("/screenings/:id", "ScreeningsController.show");
    //Route.put("/seats/:id","TheatersController.update");
    //Route.delete("/seats/:id","TheatersController.destroy");
})