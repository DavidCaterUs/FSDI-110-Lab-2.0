using System;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using CarRental.Models;

namespace CarRental.Controllers
{

    public class CatalogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        // Endpoint to get the list of cars to show on catalog page
        public IActionResult GetCatalog()
        {
            List<Car> cars = new List<Car>();

            Car c1 = new Car();
            c1.Color = "Red";
            c1.Make = "BMW";
            c1.Model = "745i";
            c1.Cyls = 8;
            c1.DailyPrice = 57.98m;
            c1.Description = "Fast and Elegant";
            c1.Doors = 2;
            c1.HP = 500;
            c1.ImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHk--lDmrb1mya__gKom-qOsW689raXNkj5NzOmuEDbcYyZrd";
            c1.Seats = 5;
            c1.Year = 2020;
            cars.Add(c1);

            return Json(cars);
        }

    }

}
