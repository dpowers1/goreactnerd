package controllers

import (
	"goreactnerd/backend/database/models"
	db "goreactnerd/backend/database/src"

	"net/http"

	"github.com/gin-gonic/gin"
)

func FindProduct(c *gin.Context) {
	var product models.Product
	if err := db.Database.Where("id = ?", c.Param("id")).Preload("Image").First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": product})
}

func ListProduct(c *gin.Context) {
	var products []models.Product
	db.Database.Preload("Images").Find(&products)

	c.JSON(http.StatusOK, gin.H{"data": products})
}

func CreateProduct(c *gin.Context) {
	var input models.CreateProductSchema
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	product := models.Product{
		Title:              input.Title,
		Description:        input.Description,
		Price:              input.Price,
		DiscountPercentage: input.DiscountPercentage,
		Rating:             input.Rating,
		Stock:              input.Stock,
		Brand:              input.Brand,
		Category:           input.Category,
		Thumbnail:          input.Thumbnail,
		Images:             input.Images,
	}

	db.Database.Create(&product)
	c.JSON(http.StatusOK, gin.H{"data": product})
}

func UpdateProduct(c *gin.Context) {
	var product models.Product
	if err := db.Database.Where("id = ?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	var input models.UpdateProductSchema
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	db.Database.Model(&product).Updates(input)

	c.JSON(http.StatusOK, gin.H{"data": product})
}

func DeleteProduct(c *gin.Context) {
	var product models.Product
	if err := db.Database.Where("id = ?", c.Param("id")).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Record not found!"})
		return
	}

	db.Database.Delete(product)
}
