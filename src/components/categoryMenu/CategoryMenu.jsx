import React from 'react'
import CategoryItem from '../categoryItem/CategoryItem'
import './categoryMenu.scss'

const CategoryMenu = ({ categories }) => {
    return (
        <div className='category-menu'>
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    )
}

export default CategoryMenu