import React, {useEffect} from 'react';
import {fetchCatalog} from '../actions/MainActions';
import {Link} from 'react-router-dom';
import style from '../styles/catalog.less';
import {NO_IMG} from '../constants/appConstants';
import {useDispatch, useSelector} from 'react-redux';

const CatalogPage = React.memo(({}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);

    const items = useSelector(store => {
        let data = {};
        store.items.forEach(item => {
            const dataObj = {
                link: item.parent ? `/items/parent/${item.parent}` : `/items/${item.id}`,
                name: item.parent ? item.parent_name : item.name,
                photo: (item.parent ? item.parentPhoto : item.photo) || NO_IMG,
            }
            if (item.parent) {
                data[item.parent] = dataObj;
            } else {
                data[item] = dataObj;
            }
        });
        return Object.values(data);
    });

    const renderCatalogItem = (item) => {
        return <Link to={item.link}>
            <div className={style.item}>
                <img src={item.photo}/>
                <div className={style.itemHeader}>{item.name}</div>
            </div>
        </Link>;
    };

    return <div className={style.catalog}>
        <div className={style.header}>Каталог стройматериалов</div>
        <div className={style.items}>
            {items.map(renderCatalogItem)}
        </div>
    </div>;

});

export default CatalogPage;