import * as React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Mapas = ({ text }: any) => {

    let datos = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (

        <div style={{ height: '400px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAOWEC98Y22sae5omQcsPYkLSheHbdurFI' }}
                defaultCenter={datos.center}
                defaultZoom={datos.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Aqui esta Yesid'}
                />
            </GoogleMapReact>
        </div>


    );
};

export default Mapas;

/*export default class Mapas extends React.Component<{ datos: any }> {


    constructor(public datos: any) {
        super(datos);
        this.
    };



    render() {

        return (
            
        );
    }
}*/