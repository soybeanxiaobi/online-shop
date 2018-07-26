import React from 'react'

import { connect } from 'react-redux'

import '../../common/Product.css'
import iceboxImg from '../../../images/tv.jpg'




class productLists extends React.Component{
    constructor(){
        super();

        this.state = {
            My_pro_arr:'',
        }
    }
    //生命周期:挂载成功后给state赋值
    componentDidMount(){
        let Add_pro_arr = this.props.Add_pro_arr ? this.props.Add_pro_arr : ''
        // console.log(Add_pro_arr)
        this.setState({
            My_pro_arr:Add_pro_arr
        })
    }


    //删除产品函数
    deleteAddPro(e){
        let idx = e.target.getAttribute('data-idx');
        // console.log(idx);
        // 删除点击的产品 并重新渲染DOM
        this.state.My_pro_arr.splice(idx,1);
        console.log(this.state.My_pro_arr);
        //更新状态
            //疑问,因为setState属于异步操作,所以DOM更新的时候My_pro_arr还未更新,导致jugleContent的判断失误
        this.setState({
            My_pro_arr:this.state.My_pro_arr
        },function(){
            console.log('setState更新成功')
            this.jugleContent()
        })
    }


    jugleContent(){
        console.log('更新DOM')
        //如果内容不为空,则循环数据
        if( this.state.My_pro_arr ){
            return(
                 <ul>
                    {/*循环接收到的数据:this.props*/}
                    {
                        this.state.My_pro_arr.map((item,i) => 
                            <li key={i} className="productLi right_li">
                                <img alt="" src={iceboxImg} className="productImg" /> 
                                <div className="productCont">
                                    <div className="contLeft">
                                        <p className="pro_name">{item.pro_name}</p>
                                        <span className="add_pro_delete" data-idx={i} onClick={this.deleteAddPro.bind(this)}>删除</span>
                                    </div>

                                    <div className="contRight">
                                        <button className="btn btn-info btn-margin">￥{item.pro_price}</button>                    
                                        <button className="btn btn-info btn-margin">数量:{item.pro_count}</button>
                                    </div>
                                    <div style={{clear:'both'}}></div>
                                </div>
                            </li>)
                    }
                </ul>       
            )
        }
        else{
            return <div className="no_pro_arr">(T＿T) 暂无添加产品</div>
        }
    }


    render(){
        // console.log(this.jugleContent())
        return(
           this.jugleContent()
        )
    }
}

//connect参数之一,获取参数 , state为接受的参数
const mapStateToProps = (state) => {
    console.log(state);
    return {
        Add_pro_arr:state.pro_Info
    }
}

productLists = connect(mapStateToProps)(productLists)

export default productLists;