import React from 'react';
import {hot} from 'react-hot-loader';

import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import LandingPage from './Landing';
import ContactsPage from './ContactsPage';
import CatalogPage from './Catalog';
import DataItemPage from './DataItem';
import HeaderMenu from './HeaderMenu';

import {fetchContacts, fetchItemPropertiesNames} from '../actions/MainActions';

import styles from '../styles/app.less';
import Footer from './Footer';
import MagnifyingPopup from '../components/MagnifyingPopup';
import SubcatalogPage from './SubcatalogPage';

@withRouter
@connect(store => ({
    // contacts: store.contacts
}), {
    fetchContacts,
    fetchItemPropertiesNames
})
class App extends React.Component {

    componentDidMount() {
        // this.props.fetchContacts();
        // this.props.fetchItemPropertiesNames();

        window.location.replace('http://budmark.com.ua/metalTail.html');
    }

    render() {
        // return [
        //     <div className={styles.container}>
        //         <div className={styles.info}>
        //             ⚠️ Мы являемся <b>заводом изготовителем</b> профнастила, металлочерепицы (матовое и глянцовое покрытие),
        //             блок-хаус и делаем изгибочные изделия (уголки, коньки, планки и тд..)
        //
        //             У нас вы можете купить профнастил и металлочерепицу а также все доборные элементы с украинского, европейского металла.
        //
        //             Длина листа, тип покрытия, цвет профнастила и металлочерепицы - любая по требованию клиента.
        //
        //             За более детальной информацией звоните по телефону указанному на сайте !
        //         </div>
        //         <div className={styles.header}><HeaderMenu/></div>
        //         <div className={styles.body}>
        //                 <Switch>
        //                     <Route exact path='/'
        //                              component={LandingPage}/>
        //                     <Route exact path='/contacts'
        //                            component={ContactsPage}/>
        //                     <Route path='/items' exact={true}>
        //                         <CatalogPage/>
        //                     </Route>
        //                     <Route path='/items/parent/:item'>
        //                         <SubcatalogPage/>
        //                     </Route>
        //                     <Route path='/items/:item'
        //                            component={DataItemPage}/>
        //                 </Switch>
        //         </div>
        //         <Footer/>
        //     </div>,
        //     <MagnifyingPopup/>
        // ];
        return null;
    }
}

export default hot(module)(App);
