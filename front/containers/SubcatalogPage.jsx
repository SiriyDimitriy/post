import React, {useEffect} from 'react';
import style from '../styles/catalog.less';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {fetchCatalog} from '../actions/MainActions';
import {NO_IMG} from '../constants/appConstants';
import {Link} from 'react-router-dom';

const SubcatalogPage = React.memo(({}) => {
    const dispatch = useDispatch();
    const { item } = useParams();
    const childrenItems = useSelector(store => store.items.filter(child => child.parent === item));

    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);

    const renderCatalogItem = (item) => {
        const linkTo = `/items/${item.id}`;
        const src = item.photo || NO_IMG;
        return <Link to={linkTo}>
            <div className={style.item}>
                <img src={src}/>
                <div className={style.itemHeader}>{item.name}</div>
            </div>
        </Link>;
    }

    return <div className={style.catalog}>
        <div className={style.header}>{childrenItems.length && childrenItems[0].parent_name}</div>
        <div className={style.items}>
            {childrenItems.map(renderCatalogItem)}
        </div>
    </div>

});

export default SubcatalogPage;
