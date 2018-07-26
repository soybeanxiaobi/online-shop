import React from 'react'

//导入react-redux
import { connect } from 'react-redux'
//导入action
import { addProductAction } from '../../../action'

//导入子组件 
import ProductLists from './allProductLists'


class AllProducts extends React.Component{
    constructor(){
        super();

        this.state={

        }
    }

    addProduct(e){
        //获得子组件传递的数据
        // console.log(e)
        //数据传入函数
        this.props.onSubmitData(e);
    }

    


    render(){
        // console.log(AllProductsJson);
        return(
            <div className="allProducts">
                 <ProductLists onSubmitData={this.addProduct.bind(this)} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //传值
        onSubmitData({pro_name,pro_price,pro_count})
        {
            dispatch(addProductAction({pro_name,pro_price,pro_count}))
        }
    }
}

AllProducts = connect(
    null,
    mapDispatchToProps
)(AllProducts)


export default AllProducts;