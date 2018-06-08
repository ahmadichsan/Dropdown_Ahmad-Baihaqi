import React, { Component } from 'react';
import './App.css';

class App extends Component 
{
  state = 
  {
    statement:'Pilih Jenjang Dulu!',
    satu:'',
    dua:'',
    tiga:'',
    empat:'',
    terpilihtingkat:'Pilih tingkat',
    terpilihjenjang:'Pilih jenjang'
    };
  
  jenjangawal =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Pra Sekolah' ,
      statement:'Jenjang Pendidikan Pra Sekolah',
      satu:'PAUD (Pendidikan Anak Usia Dini)',
      dua:'TK (Taman Kanak-kanak)',
      tiga:'RA (Raudhatul Athfal)',
    });   
  }

  jenjangdasar =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Dasar' ,
      statement:'Jenjang Pendidikan Dasar',
      satu:'SD (Sekolah Dasar)',
      dua:'MI (Madrasah Ibtidaiyah)',
      tiga:'SMP (Sekolah Menegah jenjangawal)',
      empat:'MTs (Madrasah Tsanawiyah)',
    });   
  }

  jenjangmenengah =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Menengah' ,
      statement:'Jenjang Pendidikan Menengah',
      satu:'SMA (Sekolah Menegah Atas)',
      dua:'MA (Madrasah Aliyah)',
      tiga:'SMK (Sekolah Menengah Kejuruan)',
    });   
  }

  jenjangtinggi =() =>{     
    this.setState({
      terpilihtingkat:'Pendidikan Tinggi' ,
      statement:'Jenjang Pendidikan Tinggi',
      satu:'D3 Diploma',
      dua:'S1/D4 Sarjana',
      tiga:'S2 Magister',
      empat:'S3 Doktoral',
    });   
  }

  render() {

    return (
    <div>
        <center>
        <h1>Jenjang Pendidikan</h1>
        <div className="container">
        <div class="btn-group">
            <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown"
            style={{width: "250px"}}>{this.state.terpilihtingkat}</button>
            <div class="dropdown-menu">
            <ul>
                <li><a className="dropdown-item" onClick= {this.jenjangawal}>Pendidikan Pra Sekolah</a></li>
                <li><a className="dropdown-item" onClick= {this.jenjangdasar} >Pendidikan Dasar</a></li>
                <li><a className="dropdown-item" onClick= {this.jenjangmenengah} >Pendidikan Menengah</a></li>
                <li><a className="dropdown-item" onClick= {this.jenjangtinggi} >Pendidikan Tinggi</a></li>
            </ul>
            </div>
        </div>
        </div>
            <br/><br/><br/><br/><br/><br/>
            { this.state.satu === '' ? 
                <h5>{this.state.statement}</h5> :
                <div>
                    <u><h5>{this.state.statement}</h5></u>
                    <p>{this.state.satu}</p>
                    <p>{this.state.dua}</p>
                    <p>{this.state.tiga}</p>
                    <p>{this.state.empat}</p> 
                </div>
                }
            </center>
        </div>
    );
  }
}
export default App;
