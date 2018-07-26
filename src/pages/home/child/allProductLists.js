import React from 'react'

import AllProductsJson from './allProductJson'
import '../../common/Product.css'
import tvImg from '../../../images/tv.jpg'



import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap'
import './modal.css'

export default class ProductLists extends React.Component{
    constructor(...args){
        super(...args)

        this.state = {
            clickIdx:0,
            pro_count:1,            
            idx_pro_info:[],
            warning_text:'',
            pro_price:0,
        }    
    }
    //给模态框添加相应的产品信息
    addProInModal(e){
        let idx = e.target.getAttribute('data-idx');
        // console.log(this.state.clickIdx)
        let idx_pro_info = AllProductsJson.products[idx]
        // console.log(idx_pro_info)
        this.setState({
            idx_pro_info,
            pro_price:idx_pro_info.price,
            pro_count:1,//每次打开模拟框初始化数量
        })
    }
    componentDidMount(){
        
    }
    //增加数量
    pro_add(){
        // const that = this;
        let count = this.state.pro_count;
        console.log(count)
        //如果超过5个 出现提示
        if(count < 5){
            this.setState({
                pro_count:++count,
                warning_text:'',
            },function(){
                this.pro_price(this.state.pro_count,this.state.idx_pro_info.price) //计算价格
            })
        }
        else{
            this.setState({
                pro_count:5,
                warning_text:'不能超过五个哦'
            })
        }
    }

    //减少数量
    pro_minus(){
        const that = this;        
        // console.log('减少 ');
        let count = this.state.pro_count;
        
        //如果低于1个 出现提示
        if(count > 1){
            that.setState({
                pro_count:--count,
                warning_text:'',
            },function(){
                this.pro_price(this.state.pro_count,this.state.idx_pro_info.price) //计算价格                
            })
        }
        else{
            this.setState({
                pro_count:1,
                warning_text:'不能低于一个哦'
            })
        }
    }

    //计算价格
    pro_price(count,price){
        console.log(count)
        console.log(price)
        let pro_price = count * price;
        console.log(pro_price)
        this.setState({
            pro_price:pro_price
        })
    }

    //数据传回父级
    onSubmitChild(e){
        let idx = e.target.getAttribute('data-idx');
        let idx_pro_name = this.state.idx_pro_info.name;
        let idx_pro_price = this.state.pro_price;
        let idx_pro_count = this.state.pro_count;
        
        this.props.onSubmitData({
            pro_name:idx_pro_name,
            pro_price:idx_pro_price,
            pro_count:idx_pro_count,
        })
        //隐藏
        $('#myModal').modal('hide')
    }

    render(){
        let Products = AllProductsJson.products;
        return(
            <ul >
                {
                    Products.map((item,i) =>
                        <li key={i} className="productLi right_li">
                            <img alt="" src={tvImg} className="productImg" /> 
                            <div className="productCont">
                                <div className="contLeft">
                                    <p className="pro_name">{item.name}</p>
                                    <span className="pro_desc">{item.description}</span>
                                </div>

                                <div className="contRight">
                                    <p className="price">￥{item.price}</p>
                                    <button className="btn btn-danger" data-idx={i} data-toggle="modal" data-target="#myModal" onClick={this.addProInModal.bind(this)}>立即购买</button>
                                </div>
                                <div style={{clear:'both'}}></div>
                            </div>
                        </li>
                    )
                }

                {/*bootstrap弹框样式*/}
                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <form id="saveChangeForm">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title" id="myModalLabel">添加产品</h6>
                                </div>
                                <div className="modal-body">
                                    <img alt="" src={tvImg} className="productImg" /> 
                                    <div className="productCont">
                                        <div className="contLeft">
                                            <p className="pro_name">{this.state.idx_pro_info.name}</p>
                                            <span className="pro_desc">{this.state.idx_pro_info.description}</span>
                                        </div>

                                        <div className="contRight">
                                            <p className="price">￥{this.state.pro_price}</p>
                                            <p className="countBtn">
                                                <span className="count_warning">{this.state.warning_text}</span>
                                                <span className="minus" onClick={this.pro_minus.bind(this)}>-</span>
                                                <span className="count">{this.state.pro_count}</span>
                                                <span className="add" onClick={this.pro_add.bind(this)}>+</span>
                                            </p>
                                        </div>
                                        <div style={{clear:'both'}}></div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">关闭</button>
                                    <button type="button" className="btn btn-primary"  onClick={this.onSubmitChild.bind(this)} >添加</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </ul>
        )

    }

}