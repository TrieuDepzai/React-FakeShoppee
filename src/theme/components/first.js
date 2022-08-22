import React from 'react';

class First extends React.Component {
  render(){
  return (
    <div class="container" style={{maxWidth: "1190px"}}> 
            <div class="row">
                <div class="col-12 col-sm-12 col-md-8" style={{padding: "0px"}}>
                        <div class="mg-10 mg-r-10">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" alt='some value' src="https://cf.shopee.vn/file/5c81014079017a91017c073aa7936824_xxhdpi" alt="First slide"></img>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" alt='some value' src="https://cf.shopee.vn/file/dbb621d3f89d6f13b487b20273f1092f_xxhdpi" alt="Second slide"></img>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" alt='some value' src="https://cf.shopee.vn/file/b4df61d42b89b22f65c17a003257c631_xxhdpi" alt="Third slide"></img>
                            </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-md-4 hid" style={{paddingLeft: "0px",paddingRight: "0px"}}>
                    <div class="mg-10">
                    <img width="100%"  src="https://cf.shopee.vn/file/782be136b93bb83d81cd7305a9266608_xhdpi"></img>
                    </div>
                    <div class="mg-10" style={{marginTop: "0px"}}>
                    <img width="100%" src="https://cf.shopee.vn/file/e0abae6e7bf761d5b2b235584e696c57_xhdpi"></img>
                    </div>
                </div>
            </div>
        </div>
  );
  }
}


export default First;