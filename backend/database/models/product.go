package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Title              string
	Description        string
	Price              float32
	DiscountPercentage float32
	Rating             float32
	Stock              int
	Brand              string
	Category           string
	Thumbnail          string
	Images             []Image
}

type CreateProductSchema struct {
	Title              string  `json:"title" binding:"required"`
	Description        string  `json:"description" binding:"required"`
	Price              float32 `json:"price" binding:"required"`
	DiscountPercentage float32 `json:"discountPercentage" binding:"required"`
	Rating             float32 `json:"rating" binding:"required"`
	Stock              int     `json:"stock" binding:"required"`
	Brand              string  `json:"brand" binding:"required"`
	Category           string  `json:"category" binding:"required"`
	Thumbnail          string  `json:"thumbnail" binding:"required"`
	Images             []Image `json:"images" binding:"required"`
}

type UpdateProductSchema struct {
	Title              string  `json:"title"`
	Description        string  `json:"description"`
	Price              float32 `json:"price"`
	DiscountPercentage float32 `json:"discountPercentage"`
	Rating             float32 `json:"rating"`
	Stock              int     `json:"stock"`
	Brand              string  `json:"brand"`
	Category           string  `json:"category"`
	Thumbnail          string  `json:"thumbnail"`
	Images             []Image `json:"images" binding:"required"`
}
