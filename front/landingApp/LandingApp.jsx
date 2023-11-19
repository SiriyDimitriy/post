import React from 'react';
import Plants from './Plants';
import NewProduction from './NewProduction';
import AdditionalProduction from './AdditionalProduction';
import NewServices from './NewServices';
import NewHeader from './NewHeader';
import Footer from './Footer';
import { getConfig } from './config';
import { getPriceConfig } from './prices';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import Alert from 'react-s-alert';

const LandingApp = React.memo(({ landingMode }) => {
    const config = getConfig(landingMode);
    const priceConfig = window && window.priceConfig && window.priceConfig[landingMode];

    return <div>
        <NewHeader config={config}/>

        {/*<NewProduction config={config} landingMode={landingMode} priceConfig={priceConfig}/>*/}

        <NewServices/>

        {/*<AdditionalProduction landingMode={landingMode}/>*/}
        <Plants/>
        {/*<Footer config={config}/>*/}
        <Alert stack={{ limit: 6 }}
               key='alert'
               effect='scale'
               timeout={10000}
               position='top-right'
        />
    </div>;
});

export default LandingApp;
