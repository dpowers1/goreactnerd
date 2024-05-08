package models

import "gorm.io/gorm"

type Image struct {
	gorm.Model
	ProductID uint `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Url       string
}
