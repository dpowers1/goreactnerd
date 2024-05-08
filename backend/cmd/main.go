package main

import (
	"fmt"

	"goreactnerd/backend/controllers"
	db "goreactnerd/backend/database/src"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello, World!")
	router := gin.Default()

	db.ConnectDB()

	router.GET("/products", controllers.ListProduct)
	router.GET("/products/:id", controllers.FindProduct)
	router.POST("/products", controllers.CreateProduct)
	router.PATCH("/products/:id", controllers.UpdateProduct)
	router.DELETE("/products/:id", controllers.DeleteProduct)

	router.Run()
}
