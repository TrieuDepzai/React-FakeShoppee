import React from 'react';

class Header extends React.Component {
    
  render(){
  Header.Props = { img: 'https://cf.shopee.vn/file/a52cd54957d62bf3f4bb902bbcdfb4ae' }
  function Noti (){
        var rand = Math.floor(Math.random() * 2);
        if (rand === 0){
            Header.Props.img = 'https://cf.shopee.vn/file/a52cd54957d62bf3f4bb902bbcdfb4ae';
        }
        if (rand === 1){
            Header.Props.img = 'https://cf.shopee.vn/file/80e22794ac362097491e99182b5b2888';
        }
        return (<div class="fixed-b" style={{margin: "30px",marginBottom: "90px"}}>
                    <img alt='some value' width="90px" src={Header.Props.img}></img>
                </div>)
  }
  return (
      <header>
        <Noti />
        <div className="fixed-top menu br-main">
            <div class="container">
              <div className="menu1">
                <div class="cont f2_2">
                  <div class="top-right d-flex">
                    <div class="okne" style={{paddingBottom: "5px"}}>
                    <a href="hello" class="white">
                    <i class="far fa-bell"></i> Thông Báo</a>
                    <div class="container cont">
                      <div style={{zIndex: "2000", top:"5%",left:"48%",width:"420px"}} class="fixed-top">
                            <div class="tb cont">
                                <div class="centered" style={{color: "black",textAlign:"center"}}>
                                    <div>
                                    <img width="100px" alt='some value' src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5a83ec8ec1bc1ea687fdf9c6e68eee0b.png">
                                    </img>
                                    </div>
                                    Chưa có sản phẩm nào
                                </div>
                                <div class="more d-flex cont bottom-left" style={{textAlign: "left",left:"0px",bottom:"0px"}}>
                                    <div class="tb-item">
                                      Đăng Nhập
                                    </div>
                                    <div class="tb-item">
                                      Đăng Ký
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                    </div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <a href="hello" class="white">
                    <i class="far fa-question-circle"></i> Trợ Giúp
                    </a>
                    <div class="space"></div>
                    <div class="space"></div>
                    <a href="hello" class="white line">Đăng Ký</a>
                    <div class="space"></div>
                    <a href="hello" class="white">Đăng Nhập</a>
                  </div>
                  <div class="top-left d-flex">
                    <a href="hello" class="white line">Kênh Người Bán</a>
                    <div class="space"></div>
                    <a href="hello" class="white line">Tải ứng Dụng</a>
                    <div class="space"></div>
                    <a href="hello" class="white">Kết nối</a>
                    <div class="space"></div>
                    <a><i class="fab fa-facebook"></i></a>
                    <div class="space"></div>
                    <a><i class="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div className="menu2 d-flex">
                <a href="#">
                <div>
                <img width="152px" alt='some value' src="https://cdn.shopify.com/s/files/1/0025/9991/1460/files/shopee-logo.png?11645"></img>
                </div>
                </a>
                <div class="search">
                  <form>
                    <input class="form-control w-100" placeholder="Hoàn Xu nè 8 khung giờ"></input>
                  </form>
                  <div class="wrapper" style={{paddingBottom: "0px"}}>
                    <input class="input form-control" placeholder="Hoàn xu 8 khung giờ"></input>
                    <btn class="btnn">
                    <div class="centered">
                    <i class="fas fa-search"></i>
                    </div>
                    </btn>
                  </div>
                  <div class="d-flex">
                  <a href="hello" class="white">đầm nữ</a>
                  <div class="space"></div>
                  <a>sandal nữ</a>
                  <div class="space"></div>
                  <a>giày nữ</a>
                  <div class="space"></div>
                  <a>dép nam</a>
                  <div class="space"></div>
                  <a>áo nữ</a>
                  <div class="space"></div>
                  <a>váy trắng</a>
                  <div class="space"></div>
                  <a>áo khoác nam</a>
                  <div class="space"></div>
                  <a>balo nữ</a>
                  <div class="space"></div>
                  </div>
                </div>
                <div class="cart">
                <i class="fas fa-shopping-cart fa-2x"></i>
                </div>
              </div>
            </div>
        </div>
      </header>
  );
  }
}


export default Header;