import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Mapas from './Componentes/mapas/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="offset-md-2 col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <input type='text' className="form-control" placeholder='latitud' />
                  </div>
                  <div className="col-md-4">
                    <input type='text' className="form-control" placeholder='longitud' />
                  </div>
                  <div className="col-md-4">
                    <input type='button' className="btn btn-primary col-md-12" value='buscar' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className=" offset-md-2  col-md-8">
            <div className="card">
              <div className="card-body">
                <Mapas datos={null} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
