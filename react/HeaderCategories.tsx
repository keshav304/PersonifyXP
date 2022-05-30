import React from 'react'
import styles from './styles.css'
import { SearchBar } from 'vtex.store-components'

const HeaderCategories = () => {
    const [isProductPage, setIsProductPage] = React.useState(false)
    React.useEffect(() => {
        if(window.location) {
            if(window.location.pathname.slice(-1)==="p"){
                setIsProductPage(true)
            }
        }
    })
    return (
        <div className={styles.headerContainer}>
            <ul className={isProductPage ? styles.headerCateogriesContainer:styles.categoryContainer}>
                <li className={styles.bannerCategory}>Room</li>
                <li className={styles.bannerCategory}>Appreal</li>
                <li className={styles.bannerCategory}>sporting</li>
                <li className={styles.bannerCategory}>Food and beverages</li>
            </ul>
            <div className={styles.searchBar}>
                <SearchBar 
                containerMode='container'
                inputType='text'
                placeholder='Search Products'
                />
            </div>
            
        </div>
    )
}

export default HeaderCategories