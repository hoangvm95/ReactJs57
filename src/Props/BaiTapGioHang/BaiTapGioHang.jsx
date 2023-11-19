import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import GioHang from './GioHang'

let data = [
    {
        "id": 1,
        "name": "Adidas Prophere",
        "alias": "adidas-prophere",
        "price": 350,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 995,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    {
        "id": 2,
        "name": "Adidas Prophere Black White",
        "alias": "adidas-prophere-black-white",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 990,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
    },
    {
        "id": 3,
        "name": "Adidas Prophere Customize",
        "alias": "adidas-prophere-customize",
        "price": 375,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 415,
        "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
    },
    {
        "id": 4,
        "name": "Adidas Super Star Red",
        "alias": "adidas-super-star-red",
        "price": 465,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 542,
        "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
    },
    {
        "id": 5,
        "name": "Adidas Swift Run",
        "alias": "adidas-swift-run",
        "price": 550,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 674,
        "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
    },
    {
        "id": 6,
        "name": "Adidas Tenisky Super Star",
        "alias": "adidas-tenisky-super-star",
        "price": 250,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 456,
        "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
    },
    {
        "id": 7,
        "name": "Adidas Ultraboost 4",
        "alias": "adidas-ultraboost-4",
        "price": 450,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 854,
        "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
    },
    {
        "id": 8,
        "name": "Adidas Yeezy 350",
        "alias": "adidas-yeezy-350",
        "price": 750,
        "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "hangtonkho": 524,
        "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
    },
    {
        "id": 9,
        "name": "Nike Adapt BB",
        "alias": "nike-adapt-bb",
        "price": 630,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "hangtonkho": 599,
        "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
    },
    {
        "id": 10,
        "name": "Nike Air Max 97",
        "alias": "nike-air-max-97",
        "price": 650,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "hangtonkho": 984,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
    },
    {
        "id": 11,
        "name": "Nike Air Max 97 Blue",
        "alias": "nike-air-max-97-blue",
        "price": 450,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "hangtonkho": 875,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
    },
    {
        "id": 12,
        "name": "Nike Air Max 270 React",
        "alias": "nike-air-max-270-react",
        "price": 750,
        "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
        "shortDescription": "Paul George is the rare high-percentage shooter",
        "hangtonkho": 445,
        "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
    }
]


export default class BaiTapGioHang extends Component {
    state = {
        arrGioHang: [

        ]
    }

    themGioHang = (sanPhamClick) => {
        let spGioHangClick = { ...sanPhamClick, soLuong: 1 }
        let gioHangCapNhat = this.state.arrGioHang;

        /* Xử lý khi thêm 1 sản phẩm vào giỏ hàng */
        //Kiểm tra sản phẩm đã có trong giỏ hàng chưa? //
        let spCheck = gioHangCapNhat.find(sp => sp.id === sanPhamClick.id)

        if (spCheck) {
            spCheck.soLuong += 1;
        } else {
            gioHangCapNhat.push(spGioHangClick)
            //Nếu chưa có thì lấy sản phẩm có thuộc tính số lượng push vào giỏ hàng
        }
        this.setState({
            arrGioHang: gioHangCapNhat
        })
    }
    xoaGioHang = (idSpham) => {
        /**Cách 1 */
        //Dựa vào IdSpham để tìm ra index sp trong giỏ hàng và xoá
        // let gioHangCapNhat = this.state.arrGioHang;
        // let index = gioHangCapNhat.findIndex(sp => sp.id === idSpham)
        // if (index !== -1) {
        //     gioHangCapNhat.splice(index, 1)
        // }
        // this.setState({
        //     arrGioHang: gioHangCapNhat
        // })
        /**Cách 2 */
        let gioHangCapNhat = this.state.arrGioHang.filter(sp=>sp.id !== idSpham);
        this.setState({
            arrGioHang:gioHangCapNhat
        })
    }

    capNhatGioHang = (idClick,tangGiam) => { 
        let gioHangCapNhat = this.state.arrGioHang;
        //Tìm ra sản phẩm dựa vào idSanPham clieck đc
        let spClick = gioHangCapNhat.find(sp=>sp.id === idClick);
        if (spClick) {
            spClick.soLuong += tangGiam;
            //Xử lý số lượng giảm đến 0
            if (spClick.soLuong < 1) {
                if (window.confirm ('Bạn có muốn xoá sản phẩm này không')) {
                    this.xoaGioHang(idClick)
                    
                    return;
                } else {
                    spClick.soLuong +=1
                }
            }
        }
        this.setState({
            arrGioHang: gioHangCapNhat
        })
     }

    render() {
        return (
            <div className='container'>
                <DanhSachSanPham dataProduct={data} themGioHang={this.themGioHang} />
                <GioHang arrGioHang={this.state.arrGioHang} xoaGioHang={this.xoaGioHang}
                capNhatGioHang ={this.capNhatGioHang} />
            </div>
        )
    }
}
